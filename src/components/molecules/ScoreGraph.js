import { RadialBarChart, PolarAngleAxis, RadialBar, ResponsiveContainer } from 'recharts';
import './ScoreGraph.css'


export default function ScoreGraph(score) {
    /**
     * day score of the user to evaluate his global performance. 
     * multiply by 10 to convert it in a pourcentage
     * @type {number}
     */
    let todayScore = score.score *10;

    /**
    * x axis label customization
    */
    const data = [
        { name: 'todayScore', x: todayScore, fill: '#E60000' },
      ];
    return(
        <div className='radialchart'>
            <h2>Score</h2>
            <div className='circleContainer'>
              <div className='innercircle'>
              <p>
                <span>{todayScore * 10}%</span>
                de votre objectif
                </p>
              </div>
            </div>
      <ResponsiveContainer width='100%' height='100%'>
      <RadialBarChart data={data}
      innerRadius='100%'
      barSize={10}
      startAngle={90}
      endAngle={450}
      className='recharts-radial'
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
    </ResponsiveContainer>
        </div>
    )
}