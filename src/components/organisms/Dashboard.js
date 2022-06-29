import WeightGraph from '../molecules/WeightGraph'
import Nutrient from '../molecules/Nutrient'
import './Dashboard.css'
import AverageSessionDurationGraph from '../molecules/AverageSessionDurationGraph'
import PerformanceGraph from '../molecules/PerformanceGraph'
import ScoreGraph from '../molecules/ScoreGraph'

export default function Dashboard({score, keyData, activity, averageSession, performances}) {

    return(
        <article className="dashboard">
            <div className='dashboard_graphs'>
                <WeightGraph activity={activity}/>
                <div className='dashboard_graphs_bottom'>
                    <AverageSessionDurationGraph averageSession={averageSession}/>
                    <PerformanceGraph performances={performances}/>
                    <ScoreGraph score={score}/>
                </div>
            </div>
            <div className='dashboard_nutrients'>
                <Nutrient value={keyData.calorieCount} unit="kCal" title="Calories" img="calories-icon"/>
                <Nutrient value={keyData.proteinCount} unit="g" title="Proteines" img="protein-icon"/>
                <Nutrient value={keyData.carbohydrateCount} unit="g" title="Glucides" img="carbs-icon"/>
                <Nutrient value={keyData.lipidCount} unit="g" title="Lipides" img="fat-icon"/>
            </div>
        </article>
    )
} 