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
                        <SmileChart />
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
                        To raczej nie najlepszy dzień,
                         ale nie martw się - to tylko tymczasowe.
                         Trzymaj się, jutro będzie lepiej... obiecuję!
                    </i>
                </White>
            </Col>
            <Col>
                <Face>
                    <svg x={200} y={500} width={150} height={150} fill="#033a79" viewBox="0 0 1024 1024">
                        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
                    </svg>
                </Face>
            </Col>

        </Row>
    )

}

const White = styled.div`
text-align:center;
margin-top: 35%
`


const Face = styled.div`
margin-let:10%
margin-top:20%

`