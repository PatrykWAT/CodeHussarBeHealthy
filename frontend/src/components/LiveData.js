import React from 'react'
import styled from 'styled-components';

import { Row, Col } from 'reactstrap'

class LiveData extends React.Component {


    render() {
        return (
            <Row>

                <Col xs={12} md={3}>
                    <Dice>
                        Puls
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice>
                        Kroki dziś: 
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice>
                        Re
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice>
                        xD
                    </Dice>
                </Col>

            </Row>
        )
    }
}

export default LiveData

const Dice = ({
    path,
    children
}) => (
        <Border>
            {children}
            {/* <Paczka src={path} className="img-fluid " ></Paczka> */}
        </Border>
    )


const Paczka = styled.img`
min-width: 100%;
`

const Border = styled.div
    `
background-color: white;
border-radius: 20px;
padding: 10px;
margin: 10px auto 10px auto;
box-shadow: 0 0 5px 5px rgb(165, 163, 167);
text-align: center;
height:200px;
width:200px;
`