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
function Areachart() {
  const data = [
    {
      name: "Jan",
      amount: 400037,
    },
    {
      name: "Feb",
      amount: 990032830,
    },
    {
      name: "March",
      amount: 79304657,
    },
    {
      name: "April",
      amount: 27384943,
    },
    {
      name: "May",
      amount: 480009204,
    },
    {
      name: "June",
      amount: 2737084943,
    },
    {
      name: "July",
      amount: 40009204,
    },
    {
      name: "Aug",
      amount: 724435492,
    },
    {
      name: "Sep",
      amount: 2050092040,
    },
    {
      name: "Oct",
      amount: 405009204,
    },
    {
      name: "Nov",
      amount: 3505009204,
    },
    {
      name: "Dec",
      amount: 4054009204,
    },
  ];
  const addK = (value, total) => {
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
            dataKey="amount"
            stroke="#0B3EA1"
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

export default Areachart;
