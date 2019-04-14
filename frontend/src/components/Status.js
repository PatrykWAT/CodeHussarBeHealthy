import React from 'react'
import styled from 'styled-components'

import { Row, Col } from 'reactstrap'

import SmileChart from './charts/SmileChart'

class Status extends React.Component {

    render() {
        return (
            <Row className="Current">
                <Col xs={12} md={6}>
                    <Xdont>
                        <Smilie />
                    </Xdont>
                    <Block />
                </Col>
                <Col xs={12} md={6}>
                    <Xdont>
                        <SmileChart/>
                    </Xdont>
                </Col>
            </Row>
        )
    }
}


export default Status

const Block = styled.div`
display:block;
margin:15px;
`

const Xdont = styled.div`
background-color: #FFF;
padding: 10px;
border-radius: 20px;
box-shadow: 0 0 5px 5px rgb(165, 163, 167);
height:300px;
`


const Smilie = ({ }) => {

    return (
        <Row>
            <Col>
                <White>
                    <i>
                        You're in a bad spot now, but it's only temporary!
                        Keep going, it will get better soon... i promise!
                    </i>
                </White>
            </Col>
            <Col>
                <Face />
            </Col>

        </Row>
    )

}

const White = styled.div`
text-align:center;
margin-top: 45%
`


const Face = styled.div`
background-color: #033a79

margin-top:20%


border-radius: 50%;
position: absolute;
width: 150px;
height:150px;
`