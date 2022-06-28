import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AverageSessionDurationGraph.css'

export default function AverageSessionDurationGraph({averageSession}) {

    
    return (
        <div className='lineChart'>
            <h2>Durée Moyenne des Sessions</h2>
            <LineChart width={280} height={250} data={averageSession.sessions}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                <XAxis dataKey="day" stroke='#d6d6d6' axisLine={false} tickLine={false} fontSize={12}/>
                <YAxis dataKey="sessionLength" width={0} domain={['dataMin - 5', 'dataMax + 15']}/>
                <Tooltip content={<CustomTooltip />}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#d6d6d6" dot={false} strokeWidth={2}/>
            </LineChart>
        </div>
    )
}


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

