import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const OrderStatusChart = ({ data }) => {
  const COLORS = ["#8884d8", "#82ca9d"];

  return (
    <div className="chart-card">
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default OrderStatusChart;
