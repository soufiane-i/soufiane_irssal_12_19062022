import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSessionDurationGraph.css';
import PropTypes from 'prop-types';

/**
 * AverageSessionDurationGraph - Graph of activity duration per day
 * @param {Object} averageSession activity duration per day
 */
function AverageSessionDurationGraph({averageSession}) {

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
      <div className='chartContainer'>
          <div className='lineChart'>
              <h2>Durée Moyenne des Sessions</h2>
              <div className='days'>
                <p>L</p>
                <p>M</p>
                <p>M</p>
                <p>J</p>
                <p>V</p>
                <p>S</p>
                <p>D</p>
              </div>
              <ResponsiveContainer  width='100%' height='100%' >
                <LineChart data={averageSession.sessions}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                    <XAxis dataKey="dayJ"  stroke='#d6d6d6' axisLine={false} tickLine={false} fontSize={0}  />
                    <YAxis dataKey="sessionLength" width={0} domain={['dataMin - 5', 'dataMax + 15']}/>
                    <Tooltip content={<CustomTooltip />} cursor={<CustomHover/>} wrapperStyle={{zIndex: 1100}}/>
                    <Line type="monotone" dataKey="sessionLength" stroke="#d6d6d6" dot={false} strokeWidth={2}/>
                </LineChart>
              </ResponsiveContainer>
          </div>
        </div>
    )
}

export default AverageSessionDurationGraph


const CustomTooltip = ({ active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  };

  AverageSessionDurationGraph.propTypes = {
    averageSession: PropTypes.object
}



const CustomHover = ({ points }) => {
  return (
    <rect
      className='customHover'
      x={points[0].x}
      height="100%"
      width="100%"
      fill="#E60000"
      radius={100}
    />
  );
}