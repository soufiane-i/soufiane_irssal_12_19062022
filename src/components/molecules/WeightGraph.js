import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './WeightGraph.css'
import PropTypes from 'prop-types';

export default function WeightGraph({activity}) {

  let day = 1;

  if (activity && activity.sessions) {
    activity.sessions.map(e => {
      e.dayN = day.toString();
      day++;
    }) 
  } 

    return(
        <>
        <div className='barchart'>
            <h2>Activité Quotidienne</h2>
            <ResponsiveContainer width="100%" height="100%">
         <BarChart data={activity.sessions}  >
            <CartesianGrid strokeDasharray="2 2" vertical={false}/>
            <XAxis  tickLine={false} dy={15} dataKey="dayN"  />
            <YAxis yAxisId="right" orientation="right" dataKey={"kilogram"} domain={['dataMin - 1', 'dataMax + 1']}  axisLine={false} tickLine={false} tickCount={4}/>
            <YAxis yAxisId="left" orientation="left" dataKey={"calories"} domain={["dataMin -100", "dataMax + 100"]}width={0}/>
            <Tooltip contentStyle={{backgroundColor: 'red'}} itemStyle={{color: 'white'}} content={<CustomTooltip />} />
            <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{top:-30, right:30}} iconType={'circle'} iconSize={10} width={300}/>
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
      <div className="barChart-custom-tooltip">
        <p className="label">{` ${payload[0].value}kg`}</p>
        <p className="label">{` ${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};


WeightGraph.propTypes = {
  activity: PropTypes.object
} 