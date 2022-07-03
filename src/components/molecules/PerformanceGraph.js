import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './PerformanceGraph.css'

export default function PerformanceGraph(performances) {

    console.log(performances.performances.data);
    if (performances && performances.performances.data) {
        performances.performances.data.map(e => {
          if(e.kind === 1) e.kindName = 'cardio';
          if(e.kind === 2) e.kindName = 'energie'
          if(e.kind === 3) e.kindName = 'endurance'
          if(e.kind === 4) e.kindName = 'force'
          if(e.kind === 5) e.kindName ='vitesse'
          if(e.kind === 6) e.kindName ='intensité'
        }) 
      } 
    return(
        <div className='radiochart'>
                <ResponsiveContainer  width='100%' height='100%' >
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performances.performances.data}  >
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kindName" stroke='#FFFFFF' tickLine={false} dy={5} tickSize={15} fontSize={14}/>
                <PolarRadiusAxis axisLine={false} tick={false} />
                <Radar  dataKey="value" fill="#FF0101B2"  />
                </RadarChart>
                </ResponsiveContainer>
        </div>
    )
}

