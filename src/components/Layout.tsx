import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  border: 1px solid blueviolet;
  overflow: auto;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

export default Layout;