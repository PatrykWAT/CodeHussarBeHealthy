import React from 'react'
import styled from 'styled-components';

import { Row, Col } from 'reactstrap'

class LiveData extends React.Component {


    render() {
        return (
            <Row className="live">

                <Col xs={12} md={3}>
                    <Dice path="" add={0}  >
                        Puls
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice path="" add={1700} down={true}>
                        Ilość kroków
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice path="" add={80} >
                        Humor
                    </Dice>
                </Col>
                <Col xs={12} md={3}>
                    <Dice path="" add={320}>
                        GSR
                    </Dice>
                </Col>

            </Row>
        )
    }
}

export default LiveData

const Dice = ({
    path,
    children,
    add,
    down
}) => (
        <Border>
            <h5>
                {children}
                <Counter sum={add} adup={down} />
            </h5>
            {/* <Paczka src={path} className="img-fluid " ></Paczka> */}
        </Border>
    )


class Counter extends React.Component {
    state = {
        num: 90 + this.props.sum
    }

    timout() {
        setTimeout(function () {

            let a = Math.floor(Math.random() * 5);
            if (!(this.props.adup)) {
                this.setState({ num: 90 + this.props.sum })
            }
            this.setState({ num: this.state.num + a })

            this.timout();
        }.bind(this), 1000);
    }
    componentDidMount() {
        this.timout()
    }


    render() {

        return (
            <div style={{ marginTop: "20%" }}>
                <h2>
                    {this.state.num}
                </h2>
            </div>)
    }
}

const Paczka = styled.img`
min-width: 100%;
`

const Border = styled.div
    `
background-color: white;
padding: 10px;
margin: 10px auto 10px auto;
border-radius: 20px;
box-shadow: 0 0 5px 5px rgb(165, 163, 167);
text-align: center;
height:200px;
width:200px;
`