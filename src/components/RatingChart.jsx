"use client";

import {
  Bar,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const VerticalComposedChart = ({ ratings }) => {
  const sortedRating = [...ratings].sort((a, b) => b.count - a.count);

  return (
    <div style={{ width: "80%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          layout="vertical"
          data={sortedRating}
          margin={{
            top: 20,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            width="auto"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalComposedChart;
