import WeightGraph from '../molecules/WeightGraph'
import Nutrient from '../molecules/Nutrient'
import './Dashboard.css'
import AverageSessionDurationGraph from '../molecules/AverageSessionDurationGraph'
import PerformanceGraph from '../molecules/PerformanceGraph'
import ScoreGraph from '../molecules/ScoreGraph'
import PropTypes from 'prop-types';

/**
 * Dashbord - containing all graphs
 * @param {string} score score of the day
 * @param {Object} nutrients nutrients data (fat, protein, etc)
 * @param {Object} activity weight and calories burn in last week
 * @param {Object} averageSession activity duration per day
 * @param {Object} performances performence data in different domain (endruance, strenght, etc)
 */
function Dashboard({score, nutrients, activity, averageSession, performances}) {

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
                <Nutrient value={nutrients.calorieCount} unit="kCal" title="Calories" img="calories-icon"/>
                <Nutrient value={nutrients.proteinCount} unit="g" title="Proteines" img="protein-icon"/>
                <Nutrient value={nutrients.carbohydrateCount} unit="g" title="Glucides" img="carbs-icon"/>
                <Nutrient value={nutrients.lipidCount} unit="g" title="Lipides" img="fat-icon"/>
            </div>
        </article>
    )
} 

export default Dashboard
