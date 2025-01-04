import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const StockChart = ({ data }) => {
  return (
    <div className="chart-card">
      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stock" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default StockChart;
