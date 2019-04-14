import React, { Component } from 'react';

import styled from 'styled-components'

import MyNavbar from './components/Mynvabar'
import CurentPrj from './components/CurentPrj'
import LiveData from './components/LiveData'
import Loging from './components/Loging'
import Charts from './components/Charts'
import Status from './components/Status'


import { Container, Row } from 'reactstrap'



// #033a79 granat
// #FF00c7 różowy


class App extends Component {

  state = {
    login: false
  }

  toggleLoging = () => {
    this.setState({ login: true })
  }

  render() {
    return (
      <Background >
        {!!(this.state.login) ? <Loging togle={this.toggleLoging} /> : <>
          <MyNavbar />
          <Container>
          <CurentPrj/>
            <Row style={{ fontSize: "1.8em" }}> &nbsp;</Row>
            <LiveData />
            <Charts />
            <Status/>
          </Container>
        </>
        }

      // </Background >
    );
  }
}

export default App;



const Background = styled.div`
background: linear-gradient(70deg, #033a79, #ff00c7) ;
position:absolute;
z-index: -20;
width:100%;
height:100%;
overflow: auto; 


`