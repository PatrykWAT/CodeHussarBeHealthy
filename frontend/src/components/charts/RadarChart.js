import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label
} from 'recharts';

const data = [
    {
        subject: 'Aktywność fizyczna  ', A: 120, B: 110, fullMark: 150,
    },
    {
        subject: 'Kroki', A: 98, B: 130, fullMark: 150,
    },
    {
        subject: 'Garwoliczność', A: 86, B: 130, fullMark: 150,
    },
    {
        subject: 'Humor', A: 99, B: 100, fullMark: 150,
    },
    {
        subject: 'Stres', A: 85, B: 90, fullMark: 150,
    },
];

export default class BigChart extends PureComponent {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';


    labelsCustom = (e) => {
        console.log(e)
        return e
    }

    render() {
        return (
            <ResponsiveContainer height={800} width="100%">
                <RadarChart outerRadius="80%" data={data}  >
                    <PolarGrid />
                    <PolarAngleAxis orientation="outer" dataKey="subject" tickFormatter={this.labelsCustom} />
                    {/* <PolarRadiusAxis angle={90} orientation="right"  /> */}
                    {/* <Label value="Pages of my website" offset={0} position="insideBottom" /> */}
                    <Radar dataKey="A" stroke="#FF00c7" fill="#FF00c7" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
