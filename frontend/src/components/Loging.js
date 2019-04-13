import React from 'react'
import styled from 'styled-components'

import { Button, Input } from 'reactstrap';



const Loging = ({
    togle
}) => {


    return (
        <Back>

            <Modal loginTogle={togle} ></Modal>

        </Back>
    )

}

export default Loging;


const Modal = ({ loginTogle }) => {

    let state = {
        login: "5568548525",
        password: "5568548525"
    }

    return (
        <Porazka>
            
            <Sppn>
                Log in to you account 
            </Sppn>
            <Block>
                <Input type="login" name="login" id="login" placeholder="login" value={state.login} />

            </Block>
            <Block>
                <Input type="password" name="password" id="Password" placeholder="Password" value={state.password} />

            </Block>
            <Button style={{backgroundColor: "#FF00c7", width:"200px"}} onClick={loginTogle} >Log in</Button>{' '}
            {/* <Button variant="contained" onClick={loginTogle}>
                Log in
      </Button> */}

        </Porazka>
    )

}

const Block = styled.div`
margin-bottom: 5px;

`


const Porazka = styled.div`
width:200px;
// display: inline;
margin: auto

`


const Back = styled.div`
// background-color: #ff5522;

background: linear-gradient(70deg,#033a79, #FF00c7);


// background: url(./assets/background-small.jpg) no-repeat  ;
// @media (min-width: 700px)
// {
//     background: url(./assets/background.jpg) no-repeat  ;
//     background-size:  100vw 100vh
// }


background-size: cover
width: 100vw;
height:100vh;
position:absolute;
z-index: 20;

text-align:center;
padding-top: 30vh

`

const Sppn = styled.h5`
color:white


`