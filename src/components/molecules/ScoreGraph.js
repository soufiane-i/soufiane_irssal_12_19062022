import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';
import './ScoreGraph.css'


export default function ScoreGraph(score) {
    let todayScore = score.score *10;
    console.log(todayScore);
    const data = [
        { name: 'todayScore', x: todayScore, fill: '#E60000' },
      ];
    return(
        <div className='radialchart'>
            <h2>Score</h2>
            <div className='innercircle'>
            <p>
              <span>{todayScore * 10}%</span>
              de votre objectif final
              </p>
            </div>
     <RadialBarChart width={250} height={280} data={data}
    innerRadius='100%'
    barSize={11}
    startAngle={90}
    endAngle={450}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        dataKey="x"
        cornerRadius={15}
      />
      <text
        x={30 / 2}
        y={33 / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
      >
      </text>
    </RadialBarChart>
        </div>
    )
}