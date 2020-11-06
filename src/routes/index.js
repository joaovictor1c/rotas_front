import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import Roteiro from '../pages/Roteiro';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import PaginaNaoEncontrada from '../PaginaNaoEncontrada';

import HomeAdm from '../AdmPages/Home';
import CriarHome from '../AdmPages/CriarHome';
import CriarRoteiros from '../AdmPages/CriarRoteiros';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> <Home /></Route>
        <Route path="/roteiro" exact> <Roteiro /></Route>
        <Route path="/login" exact> <Login /></Route>
        <Route path="/cadastro" exact> <Cadastro /></Route>
        <Route path="/adm" exact> <HomeAdm /></Route>
        <Route path="/atualizarhome" exact> <CriarHome /></Route>
        <Route path="/criarroteiros" exact> <CriarRoteiros /></Route>
        <Route path="*" exact> <PaginaNaoEncontrada /></Route>
      </Switch>
    </BrowserRouter>
  );
}