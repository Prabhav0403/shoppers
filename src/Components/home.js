import React from 'react';
import styled from 'styled-components';
import Logout from './Auth/logout.js';
import ProductList from './Products/Productslist.js';

const home = ({ products }) => {
    return (
        <div>
            <h1>Welcome to Our Store!</h1>
            <ProductList products={products} />
        </div>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Your Dashboard!</Title>
      <Logout />
    </Container>
  );
};

export default Home;
