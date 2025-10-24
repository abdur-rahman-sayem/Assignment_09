import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const Chart = ({ data }) => {
const colors = ["Red", "Green", "Yellow", "#FF8811", "Indigo"];

    return (
        <div className="w-full h-64 bg-white rounded-xl p-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data.ratings}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barCategoryGap="13%" 
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" >
            {data.ratings.map((a,b ) => (
              <Cell key={`cell-${b}`}  fill={colors[b % colors.length]}/>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
};

export default Chart;