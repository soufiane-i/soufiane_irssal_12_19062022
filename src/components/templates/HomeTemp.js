import './HomeTemp.css'
import Header from "../organisms/Header"
import SportNavigation from '../organisms/SportNavigation'
import Dashboard from '../organisms/Dashboard'
import DashboardHeader from '../organisms/DashboardHeader'
import PropTypes from 'prop-types';



/**
 * 
 * @param {object} user general informations - name - dayScore 
 * @param {object} activity weight and calories burn in last week
 * @param {object} averageSession session duration
 * @param {object} averagePerformance performence data in different domain
 * @returns Page Structure and Composition Building
 */
export default function HomeTemp({user, activity, averageSession, averagePerformance}) {

    let firstName = ''
    let nutrients = ''
    let performances = ''
    let score = ''

    if(user !== undefined && user.userInfos !== undefined ) {
        firstName = user.userInfos.firstName; 
    }

    if(user !== undefined && user.keyData !== undefined ) {
        nutrients = user.keyData
    }

    if(user !== undefined && user.todayScore !== undefined ) {
        score = user.todayScore
    }

    if(averagePerformance !== undefined && averagePerformance.data !== undefined ) {
        performances = averagePerformance
    }

    return(
        <>
        <Header/>
        <main>
            <SportNavigation/>
            <article className='dashboardContainer'>
                <DashboardHeader firstName={firstName}/>
                <Dashboard score={score} nutrients={nutrients} activity={activity} averageSession={averageSession} performances={performances} />
            </article>
        </main>
        </>
    )
} 

HomeTemp.propTypes = {
    user: PropTypes.object,
    activity: PropTypes.object,
    averageSession: PropTypes.object,
    averagePerformance: PropTypes.object,
} 