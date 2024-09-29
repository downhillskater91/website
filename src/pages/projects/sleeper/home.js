import React, { useState, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import NotFound from '../../404';

import * as fpl from '../../../api/fpl';

const Home = () => {
  return (
    <Container fluid>
      <h1 className="text-center my-3">Sleeper Dynasty</h1>
      <p>
        
      </p>
    </Container>
  );
}

const AppSoon = () => {
  return (
    <Layout>
      <SEO title="Sleeper Dynasty" />
      <Home />
    </Layout>
  );
}

const App = () => (
  <NotFound />
);

export default AppSoon;
