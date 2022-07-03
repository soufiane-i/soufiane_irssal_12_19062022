import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSessionDurationGraph.css'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function AverageSessionDurationGraph({averageSession}) {
  
  if (averageSession && averageSession.sessions) {
    averageSession.sessions.map(e => {
      if(e.day === 1) e.dayJ = "L"
      if(e.day === 2) e.dayJ = "M"
      if(e.day === 3) e.dayJ = "M"
      if(e.day === 4) e.dayJ = "J"
      if(e.day === 5) e.dayJ = "V"
      if(e.day === 6) e.dayJ = "S"
      if(e.day === 7) e.dayJ = "D"
    }) 
  } 


   
    return (
        <div className='lineChart'>
            <h2>Durée Moyenne des Sessions</h2>
            <ResponsiveContainer  width='100%' height='100%' >
              <LineChart data={averageSession.sessions}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                  <XAxis dataKey="dayJ" stroke='#d6d6d6' axisLine={false} tickLine={false} fontSize={12}/>
                  <YAxis dataKey="sessionLength" width={0} domain={['dataMin - 5', 'dataMax + 15']}/>
                  <Tooltip content={<CustomTooltip />}/>
                  <Line type="monotone" dataKey="sessionLength" stroke="#d6d6d6" dot={false} strokeWidth={2}/>
              </LineChart>
            </ResponsiveContainer>
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





