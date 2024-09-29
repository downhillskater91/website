import React, { useState, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "gatsby";

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import Spinner from 'react-bootstrap/Spinner';
import NotFound from '../../404';

import * as fpl from '../../../api/fpl';

const getBootstrap = async ( setBootstrap, setIsLoading ) => {
    console.log("Getting Bootstrap...");
    const response = await fpl.getBootstrapStatic();
    setBootstrap(response.result);
    setIsLoading(false);
}

const Bootstrap = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [bootstrap, setBootstrap] = useState({});

    useEffect(() => {
        getBootstrap();
        console.log(bootstrap);
        console.log(isLoading);
    
        // eslint-disable-next-line
    }, [isLoading]);

    return (
        <Container fluid>
            {isLoading ? (
                <Container className="d-flex justify-content-center mt-2" fluid>
                    <Spinner animation="border" />
                </Container>
            ) : (
                <Container fluid>
                    {bootstrap}
                </Container>
            )}
        </Container>
    );
}

const App = () => {
    return (
        <Layout>
          <SEO title="Fantasy Premier League" />
          <Bootstrap />
        </Layout>
    );
}
  
export default App;