import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './PerformanceGraph.css';

/**
 *  PerformanceGraph - Performences graph
 * @param {Object} performances performances data
 */
function PerformanceGraph(performances) {
 
    if (performances && performances.performances.data) {
        performances.performances.data.map(e => {
          if(e.kind === 1) e.kindName = 'Intensité';
          if(e.kind === 2) e.kindName = 'Vitesse'
          if(e.kind === 3) e.kindName = 'Force'
          if(e.kind === 4) e.kindName = 'Endurance'
          if(e.kind === 5) e.kindName ='Energie'
          if(e.kind === 6) e.kindName ='Cardio'
        }) 
      } 
    return(
        <div className='radiochart'>
          <ResponsiveContainer  width='100%' height='100%' >
            <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performances.performances.data}  >
              <PolarGrid radialLines={false}/>
              <PolarAngleAxis dataKey="kindName" stroke='#FFFFFF' tickLine={false} dy={5} tickSize={13} fontSize={14}/>
              <PolarRadiusAxis axisLine={false} tick={false} />
              <Radar  dataKey="value" fill="#FF0101B2"  />
            </RadarChart>
          </ResponsiveContainer>
        </div>
    )
}

export default PerformanceGraph

