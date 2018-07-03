import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index Page</title>
      <meta name="description" content="This is the description of Index page" />
    </Head>
    <Header />
    <p>Content on Index page</p>
  </div>
);

export default Index;
