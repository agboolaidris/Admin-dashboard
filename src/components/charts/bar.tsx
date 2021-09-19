import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import styled from "styled-components";

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 473px;
  padding: 30px;
  .footer {
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 35px;
      color: #333333;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: #9c9c9c;
    }
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: #4aaf05;
    }
  }
`;
function Barchart() {
  const data = [
    {
      name: "Jan",
      amount: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const addK = (value, total) => {
    const ratio = total > 0 ? value / total : 0;
    if (value < 1000) return value;

    return `${value / 1000}k`;
  };

  return (
    <Wrapper>
      <p className="title">Revenue</p>
      <ResponsiveContainer height="80%">
        <AreaChart data={data} margin={{ top: 40, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor=" #0B3EA1" stopOpacity={0.8} />
              <stop offset="95%" stopColor=" #0B3EA1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor=" #0B3EA1" stopOpacity={0.8} />
              <stop offset="95%" stopColor=" #0B3EA1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis
            axisLine={false}
            tickCount={4}
            fontSize={10}
            tickFormatter={addK}
            tickLine={false}
            width={40}
          />
          <CartesianGrid horizontal={false} width={1} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={10}
          />

          <Tooltip />
          <Area
            height={10}
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="footer">
        <p>Total Revenue</p>
        <h4>N234,378,938,092</h4>
        <span>+7%</span>
      </div>
    </Wrapper>
  );
}

export default Barchart;
