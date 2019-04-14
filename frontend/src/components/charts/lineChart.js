import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

let a = []
let b, c;
for (let i = 0; i < 24; i++) {

    b = Math.random() * 800
    c = Math.random() * 600

    a.push({ time: `${i}:00`, Puls: 8800 + b, "Poziom stresu": 6000 + b, 'Aktywność fizyczna': 8654 + c, "Reakcja na bodźce": 6100 + c, })

}
console.log(a)
const happyDay = [
    { time: "0:00", Puls: 1368.951383367597, "Poziom stresu": 3500.951383367598, "Aktywność fizyczna": 8000.03973292286, "Reakcja na bodźce": 6000.039732922859 }
    , { time: "1:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "2:00", Puls: 1334.92193560621, "Poziom stresu": 3500.9219356062085, "Aktywność fizyczna": 8000.054536471387, "Reakcja na bodźce": 6000.054536471386 }
    , { time: "3:00", Puls: 1343.386335248084, "Poziom stresu": 3500.386335248084, "Aktywność fizyczna": 8000.016940988602, "Reakcja na bodźce": 6000.016940988603 }
    , { time: "4:00", Puls: 1979.422831374683, "Poziom stresu": 3500.422831374683, "Aktywność fizyczna": 8000.679663649025, "Reakcja na bodźce": 6000.679663649026 }
    , { time: "5:00", Puls: 1807.281394524322, "Poziom stresu": 3500.281394524321, "Aktywność fizyczna": 8000.363447897249, "Reakcja na bodźce": 6000.36344789725 }
    , { time: "6:00", Puls: 1956.075944091575, "Poziom stresu": 4156.075944091576, "Aktywność fizyczna": 8954.104956625986, "Reakcja na bodźce": 6400.104956625986 }
    , { time: "7:00", Puls: 1125.489506804357, "Poziom stresu": 4325.489506804356, "Aktywność fizyczna": 8890.145297312332, "Reakcja na bodźce": 6336.145297312332 }
    , { time: "8:00", Puls: 1009.842902350774, "Poziom stresu": 4209.842902350774, "Aktywność fizyczna": 9192.923794615874, "Reakcja na bodźce": 6638.923794615874 }
    , { time: "9:00", Puls: 1558.566410995427, "Poziom stresu": 4758.566410995427, "Aktywność fizyczna": 8797.839442563376, "Reakcja na bodźce": 6243.839442563377 }
    , { time: "10:00", Puls: 1366.693637783772, "Poziom stresu": 4566.693637783771, "Aktywność fizyczna": 9197.539173866346, "Reakcja na bodźce": 6643.539173866346 }
    , { time: "11:00", Puls: 1970.606173632163, "Poziom stresu": 4170.606173632163, "Aktywność fizyczna": 9126.730762723566, "Reakcja na bodźce": 6572.730762723566 }
    , { time: "12:00", Puls: 1524.276170480945, "Poziom stresu": 4724.2761704809445, "Aktywność fizyczna": 8807.848679313582, "Reakcja na bodźce": 6253.848679313583 }
    , { time: "13:00", Puls: 1499.645945992195, "Poziom stresu": 4699.645945992195, "Aktywność fizyczna": 9017.878203843955, "Reakcja na bodźce": 6463.878203843955 }
    , { time: "14:00", Puls: 1203.984906485999, "Poziom stresu": 4403.984906485999, "Aktywność fizyczna": 8687.767586695216, "Reakcja na bodźce": 6133.767586695216 }
    , { time: "15:00", Puls: 1219.844058702825, "Poziom stresu": 4419.844058702825, "Aktywność fizyczna": 9068.599863672172, "Reakcja na bodźce": 6514.599863672173 }
    , { time: "16:00", Puls: 1160.786750096677, "Poziom stresu": 4360.786750096677, "Aktywność fizyczna": 8947.214207482011, "Reakcja na bodźce": 6393.21420748201 }
    , { time: "17:00", Puls: 1490.375787955392, "Poziom stresu": 4690.375787955392, "Aktywność fizyczna": 8992.088883932518, "Reakcja na bodźce": 6438.088883932519 }
    , { time: "18:00", Puls: 1424.879698219254, "Poziom stresu": 4624.879698219255, "Aktywność fizyczna": 9110.97070955566, "Reakcja na bodźce": 6556.970709555661 }
    , { time: "19:00", Puls: 1297.893581673576, "Poziom stresu": 4497.893581673576, "Aktywność fizyczna": 9029.097417168532, "Reakcja na bodźce": 6475.097417168532 }
    , { time: "20:00", Puls: 1258.96460321917, "Poziom stresu": 4458.9646032191695, "Aktywność fizyczna": 8957.377130154715, "Reakcja na bodźce": 6403.377130154714 }
    , { time: "21:00", Puls: 1914.22378686767, "Poziom stresu": 4114.223786867669, "Aktywność fizyczna": 8000.423445184206, "Reakcja na bodźce": 6372.423445184207 }
    , { time: "22:00", Puls: 1113.665505093399, "Poziom stresu": 4313.665505093399, "Aktywność fizyczna": 8000.06879781511, "Reakcja na bodźce": 6535.068797815112 }
    , { time: "23:00", Puls: 1361.643784597722, "Poziom stresu": 4161.643784597722, "Aktywność fizyczna": 8000.71343643198, "Reakcja na bodźce": 6268.713436431981 }
];

const badDay = [
    { time: "0:00", Puls: 1368.951383367597, "Poziom stresu": 3500.951383367598, "Aktywność fizyczna": 8000.03973292286, "Reakcja na bodźce": 6000.039732922859 }
    , { time: "1:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "2:00", Puls: 1334.92193560621, "Poziom stresu": 3500.9219356062085, "Aktywność fizyczna": 8000.054536471387, "Reakcja na bodźce": 6000.054536471386 }
    , { time: "3:00", Puls: 1343.386335248084, "Poziom stresu": 3500.386335248084, "Aktywność fizyczna": 8000.016940988602, "Reakcja na bodźce": 6000.016940988603 }
    , { time: "4:00", Puls: 1579.422831374683, "Poziom stresu": 3500.422831374683, "Aktywność fizyczna": 8000.679663649025, "Reakcja na bodźce": 6000.679663649026 }
    , { time: "5:00", Puls: 1707.281394524322, "Poziom stresu": 3500.281394524321, "Aktywność fizyczna": 8000.363447897249, "Reakcja na bodźce": 6000.36344789725 }
    , { time: "6:00", Puls: 1656.075944091575, "Poziom stresu": 4056.075944091576, "Aktywność fizyczna": 9354.104956625986, "Reakcja na bodźce": 6400.104956625986 }
    , { time: "7:00", Puls: 1125.489506804357, "Poziom stresu": 4225.489506804356, "Aktywność fizyczna": 9190.145297312332, "Reakcja na bodźce": 6436.145297312332 }
    , { time: "8:00", Puls: 1009.842902350774, "Poziom stresu": 4109.842902350774, "Aktywność fizyczna": 9492.923794615874, "Reakcja na bodźce": 6438.923794615874 }
    , { time: "9:00", Puls: 1558.566410995427, "Poziom stresu": 4158.566410995427, "Aktywność fizyczna": 8797.839442563376, "Reakcja na bodźce": 6443.839442563377 }
    , { time: "10:00", Puls: 1366.693637783772, "Poziom stresu": 4166.693637783771, "Aktywność fizyczna": 8097.539173866346, "Reakcja na bodźce": 6443.539173866346 }
    , { time: "11:00", Puls: 1970.606173632163, "Poziom stresu": 4170.606173632163, "Aktywność fizyczna": 8026.730762723566, "Reakcja na bodźce": 5672.730762723566 }
    , { time: "12:00", Puls: 2124.276170480945, "Poziom stresu": 5100.2761704809445, "Aktywność fizyczna": 8307.848679313582, "Reakcja na bodźce": 5653.848679313583 }
    , { time: "13:00", Puls: 1199.645945992195, "Poziom stresu": 4699.645945992195, "Aktywność fizyczna": 8017.878203843955, "Reakcja na bodźce": 5663.878203843955 }
    , { time: "14:00", Puls: 1203.984906485999, "Poziom stresu": 4403.984906485999, "Aktywność fizyczna": 8087.767586695216, "Reakcja na bodźce": 5633.767586695216 }
    , { time: "15:00", Puls: 1219.844058702825, "Poziom stresu": 4419.844058702825, "Aktywność fizyczna": 9068.599863672172, "Reakcja na bodźce": 6514.599863672173 }
    , { time: "16:00", Puls: 1160.786750096677, "Poziom stresu": 4360.786750096677, "Aktywność fizyczna": 8947.214207482011, "Reakcja na bodźce": 6393.21420748201 }
    , { time: "17:00", Puls: 1490.375787955392, "Poziom stresu": 4690.375787955392, "Aktywność fizyczna": 8992.088883932518, "Reakcja na bodźce": 6438.088883932519 }
    , { time: "18:00", Puls: 1424.879698219254, "Poziom stresu": 4624.879698219255, "Aktywność fizyczna": 9110.97070955566, "Reakcja na bodźce": 6556.970709555661 }
    , { time: "19:00", Puls: 1297.893581673576, "Poziom stresu": 4497.893581673576, "Aktywność fizyczna": 9029.097417168532, "Reakcja na bodźce": 6475.097417168532 }
    , { time: "20:00", Puls: 1258.96460321917, "Poziom stresu": 4458.9646032191695, "Aktywność fizyczna": 8957.377130154715, "Reakcja na bodźce": 6403.377130154714 }
    , { time: "21:00", Puls: 1914.22378686767, "Poziom stresu": 4114.223786867669, "Aktywność fizyczna": 8000.423445184206, "Reakcja na bodźce": 6372.423445184207 }
    , { time: "22:00", Puls: 1113.665505093399, "Poziom stresu": 4313.665505093399, "Aktywność fizyczna": 8000.06879781511, "Reakcja na bodźce": 6535.068797815112 }
    , { time: "23:00", Puls: 1361.643784597722, "Poziom stresu": 4161.643784597722, "Aktywność fizyczna": 8000.71343643198, "Reakcja na bodźce": 6268.713436431981 }
];

const data2 = [
    { time: "0:00", Puls: 1368.951383367597, "Poziom stresu": 3500.951383367598, "Aktywność fizyczna": 8000.03973292286, "Reakcja na bodźce": 6000.039732922859 }
    , { time: "1:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "2:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "3:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "4:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "5:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "6:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "7:00", Puls: 1322.004907784158, "Poziom stresu": 3500.004907784157, "Aktywność fizyczna": 8000.163361257784, "Reakcja na bodźce": 6000.163361257783 }
    , { time: "8:00", Puls: 1334.92193560621, "Poziom stresu": 3500.9219356062085, "Aktywność fizyczna": 8000.054536471387, "Reakcja na bodźce": 6000.054536471386 }
    , { time: "9:00", Puls: 1643.386335248084, "Poziom stresu": 3620.386335248084, "Aktywność fizyczna": 8000.016940988602, "Reakcja na bodźce": 6000.016940988603 }
    , { time: "10:00", Puls: 1979.422831374683, "Poziom stresu": 3480.422831374683, "Aktywność fizyczna": 8000.679663649025, "Reakcja na bodźce": 6000.679663649026 }
    , { time: "11:00", Puls: 1707.281394524322, "Poziom stresu": 2500.281394524321, "Aktywność fizyczna": 9350.363447897249, "Reakcja na bodźce": 6000.36344789725 }
    , { time: "12:00", Puls: 1656.075944091575, "Poziom stresu": 2656.075944091576, "Aktywność fizyczna": 9350.104956625986, "Reakcja na bodźce": 6400.104956625986 }
    , { time: "13:00", Puls: 1625.489506804357, "Poziom stresu": 2725.489506804356, "Aktywność fizyczna": 9190.145297312332, "Reakcja na bodźce": 6436.145297312332 }
    , { time: "14:00", Puls: 1709.842902350774, "Poziom stresu": 4109.842902350774, "Aktywność fizyczna": 9492.923794615874, "Reakcja na bodźce": 6438.923794615874 }
    , { time: "15:00", Puls: 1258.566410995427, "Poziom stresu": 4158.566410995427, "Aktywność fizyczna": 8797.839442563376, "Reakcja na bodźce": 6443.839442563377 }
    , { time: "16:00", Puls: 1166.693637783772, "Poziom stresu": 4166.693637783771, "Aktywność fizyczna": 8097.539173866346, "Reakcja na bodźce": 6443.539173866346 }
    , { time: "17:00", Puls: 1366.693637783772, "Poziom stresu": 4166.693637783771, "Aktywność fizyczna": 8097.539173866346, "Reakcja na bodźce": 6443.539173866346 }
    , { time: "18:00", Puls: 1366.693637783772, "Poziom stresu": 4166.693637783771, "Aktywność fizyczna": 8097.539173866346, "Reakcja na bodźce": 6443.539173866346 }
    , { time: "19:00", Puls: 1366.693637783772, "Poziom stresu": 4166.693637783771, "Aktywność fizyczna": 8097.539173866346, "Reakcja na bodźce": 6443.539173866346 }
    , { time: "20:00", Puls: 1970.606173632163, "Poziom stresu": 4170.606173632163, "Aktywność fizyczna": 8026.730762723566, "Reakcja na bodźce": 5672.730762723566 }
    , { time: "21:00", Puls: 2124.276170480945, "Poziom stresu": 5100.2761704809445, "Aktywność fizyczna": 8307.848679313582, "Reakcja na bodźce": 5653.848679313583 }
    , { time: "22:00", Puls: 1199.645945992195, "Poziom stresu": 4699.645945992195, "Aktywność fizyczna": 8017.878203843955, "Reakcja na bodźce": 5663.878203843955 }
    , { time: "23:00", Puls: 1203.984906485999, "Poziom stresu": 4403.984906485999, "Aktywność fizyczna": 8087.767586695216, "Reakcja na bodźce": 5633.767586695216 }
    , { time: "24:00", Puls: 1219.844058702825, "Poziom stresu": 4419.844058702825, "Aktywność fizyczna": 8068.599863672172, "Reakcja na bodźce": 5614.599863672173 }
];




export default class LineStats extends PureComponent {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
    };
    render() {
        return (
            <>
                <br /><br /><br /><br /><br /><br />
                <ResponsiveContainer height={500} width="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend verticalAlign="bottom" />
                        <Line type="monotone" dataKey="Aktywność fizyczna" stroke="#665219" />
                        <Line type="monotone" dataKey="Reakcja na bodźce" stroke="#ff6600" />
                        <Line type="monotone" dataKey="Poziom stresu" stroke="#F36ACD" />
                        <Line type="monotone" dataKey="Puls" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
                <br /><br /><br /><br /><br /><br />
            </>
        );
    }
}
