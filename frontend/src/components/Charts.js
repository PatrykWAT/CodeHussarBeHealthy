import React from 'react'

import styled from 'styled-components'

import BigChart from './charts/RadarChart'

class Charts extends React.Component {

    render() {
        return (
            <Streach className="stats">

                <BigChart />
            </Streach>
        )
    }
}

export default Charts


const Streach = styled.div`

`