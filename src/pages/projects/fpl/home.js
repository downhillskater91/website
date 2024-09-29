import React, { useState, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "gatsby";

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import NotFound from '../../404';

import * as fpl from '../../../api/fpl';

const initialState = {
  leagueId: ''
}

const reducer = (state, pairs) => {
  let newState = { ...state };
  pairs.forEach(({ field, value }) => {
    newState = { ...newState, [field]: value }
  });

  return newState;
}

const Home = () => {
  // define state vars and functions

  return (
    <Container fluid>
      <h1 className="text-center my-3">Fantasy Premier League</h1>
      <Link to="../bootstrap">Bootstrap</Link>
    </Container>
  );
}

const AppSoon = () => {
  return (
    <Layout>
      <SEO title="Fantasy Premier League" />
      <Home />
    </Layout>
  );
}

const App = () => (
  <NotFound />
);

export default AppSoon;
