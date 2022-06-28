import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './WeightGraph.css'

export default function WeightGraph({activity}) {


    return(
        <>
        <div className='barchart'>
            <h2>Activité Quotidienne</h2>
        <ResponsiveContainer height="100%" width="100%" >
         <BarChart data={activity.sessions} >
            <CartesianGrid strokeDasharray="2 2" vertical={false}/>
            <XAxis  tickLine={false} dy={15}  />
            <YAxis yAxisId="right" orientation="right" dataKey={"kilogram"} domain={['dataMin - 1', 'dataMax + 1']}  axisLine={false} tickLine={false} tickCount={4}/>
            <YAxis yAxisId="left" orientation="left" dataKey={"calories"} domain={["dataMin -100", "dataMax + 100"]}width={0}/>
            <Tooltip contentStyle={{backgroundColor: 'red'}} itemStyle={{color: 'white'}} content={<CustomTooltip />} />
            <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{top:-60, right:30}} iconType={'circle'} iconSize={10} width={300}/>
            <Bar yAxisId="right" dataKey="kilogram" fill="#2B2D30" radius={[50, 50, 0, 0]} barSize={10}/>
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} barSize={10} />
        </BarChart>  
        </ResponsiveContainer>
        </div>
        </>
    )
}


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0].value}kg`}</p>
        <p className="label">{` ${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

