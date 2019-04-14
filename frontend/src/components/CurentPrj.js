import React from 'react'
import styled from 'styled-components'

import { Element } from 'react-scroll'

import { Row } from 'reactstrap'

const Shadow = styled.div`
cursor: pointer;
box-shadow: 0px 5px 20px #d7d8d8;
margin-top: 50px;
`

const Curretn = styled.img`
width:100%;
`

const GetHelp = () =>
    (
        <Row>
            <Element name="gethelp" className="gethelp">
            </Element>
            <Shadow>
                <Curretn src="assets/baner.png" alt="" />
            </Shadow>
        </Row>
    );

export default GetHelp
