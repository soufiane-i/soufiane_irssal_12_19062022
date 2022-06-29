import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './PerformanceGraph.css'

export default function PerformanceGraph(performances) {


    return(
        <div className='radiochart'>
                <ResponsiveContainer  width='100%' height='100%' >
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances.performances.data}  >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis data={performances.performances.kind} stroke='#FFFFFF' tickLine={false}   />
                <PolarRadiusAxis axisLine={false} tick={false}/>
                <Radar  dataKey="value" fill="#FF0101B2"  />
                </RadarChart>
                </ResponsiveContainer>
        </div>
    )
}

