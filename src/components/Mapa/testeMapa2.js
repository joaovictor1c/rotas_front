import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import am4geodata_lang_PT from "@amcharts/amcharts4-geodata/lang/PT";
import { Col, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


var imageSeriesTemplate;

const teste = function () {
    var numeroDeDias = document.getElementById("formBasicRange").value;
    document.getElementById("numeroDiasH5").innerHTML = "NÚMERO DE DIAS: " + numeroDeDias;
}

var handleShow =() => {};

function Example() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Preferências</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row className="justify-content-center">
                            <Col md xs>
                                <Form.Group>
                                    <Col>
                                        <Col>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Primeira vez na cidade?" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Label>Velocidade da Viagem</Form.Label>
                                            <Form.Control as="select">
                                                <option>Relax</option>
                                                <option>Pé no acelerador</option>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>Preferências</Form.Label>
                                            <Form.Control as="select">
                                                <option>Sem preferências</option>
                                                <option>Baladas</option>
                                                <option>Múseus</option>
                                                <option>Parques/Ar Livre</option>
                                                <option>Compras</option>
                                                <option>Comer e beber</option>
                                            </Form.Control>
                                        </Col>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row className="text-center justify-content-center pt-2">
                            <Col md={6}>
                                <Form.Group controlId="formBasicRange">
                                    <h5 id="numeroDiasH5" className="p-1">NÚMERO DE DIAS: 3 </h5>
                                    <Form.Control onChange={teste} className="custom-range" type="range" min="1" max="5" step="2" />
                                </Form.Group>
                            </Col>

                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/roteiro" > <Button size="lg" variant="primary" type="submit"> Gerar</Button></Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}


class MapContainer2 extends Component {

    componentDidMount() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        /**
         * Define SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.geodataNames = am4geodata_lang_PT;
        chart.geodata = am4geodata_worldHigh;
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.exclude = ["AQ"];
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.fill = am4core.color("#74B266");

        // create capital markers
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.id = "markers";

        // define template
        imageSeriesTemplate = imageSeries.mapImages.template;

        var circle = imageSeriesTemplate.createChild(am4core.Sprite);
        circle.scale = 1;
        circle.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        circle.path = targetSVG;

        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";
        imageSeriesTemplate.nonScaling = true;
        imageSeriesTemplate.horizontalCenter = "middle";
        imageSeriesTemplate.verticalCenter = "middle";
        imageSeriesTemplate.width = 8;
        imageSeriesTemplate.height = 8;
        imageSeriesTemplate.tooltipText = "{title}";
        imageSeriesTemplate.fill = am4core.color("#000");

        // set zoom events
        imageSeries.events.on("datavalidated", updateImageVisibility);
        chart.events.on("zoomlevelchanged", updateImageVisibility);
        chart.events.on("dragged", updateImageVisibility);


        function updateImageVisibility(ev) {
            var chart = ev.target.baseSprite;
            var series = chart.map.getKey("markers");
            var count = 0;
            var imagesWithinBounds = [];
            series.mapImages.each(function (image) {
                var point = chart.geoPointToSVG({ longitude: image.longitude, latitude: image.latitude })
                image.disabled = true;
                if (chart.fitsToBounds(point)) {
                    count++;
                    imagesWithinBounds.push(image);
                }
            });
            // 20 is max number of images to be seen
            if (count < 20) {
                for (var i = 0; i < imagesWithinBounds.length; i++) {
                    imagesWithinBounds[i].disabled = false;
                }
            }
        }

        // Add zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        imageSeries.data = [{
            "svgPath": targetSVG,
            "title": "Bueno Aires",
            "latitude": -34.6083,
            "longitude": -58.3712
        }, {
            "svgPath": targetSVG,
            "title": "Teste",
            "latitude": -55.6083,
            "longitude": -58.3712
        }];

        imageSeriesTemplate.events.on("hit", function (ev) {
            console.log(ev.target.dataItem.dataContext.title);
            //console.log(ev.target.data[0]);
            ev.target.series.chart.zoomToMapObject(ev.target)
            handleShow();
        });

        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
                <div id="chartdiv" style={{ width: "100%", height: "50vh" }}></div>
                <Example></Example>
            </div>
        );
    }
}

export default MapContainer2;