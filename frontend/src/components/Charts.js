import React from 'react'

import styled from 'styled-components'

import BigChart from './charts/RadarChart'

class Charts extends React.Component {

    render() {
        return (
            <Streach>

                <BigChart />
            </Streach>
        )
    }
}

export default Charts


const Streach = styled.div`

`