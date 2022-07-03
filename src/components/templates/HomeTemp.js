import './HomeTemp.css'
import Header from "../organisms/Header"
import SportNavigation from '../organisms/SportNavigation'
import Dashboard from '../organisms/Dashboard'
import DashboardHeader from '../organisms/DashboardHeader'
import PropTypes from 'prop-types';




export default function HomeTemp({user, activity, averageSession, averagePerformance}) {

    let firstName = ''
    let keyData = ''
    let performances = ''
    let score = ''

    if(user !== undefined && user.userInfos !== undefined ) {
        firstName = user.userInfos.firstName; 
    }

    if(user !== undefined && user.keyData !== undefined ) {
        keyData = user.keyData
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
                <Dashboard score={score} keyData={keyData} activity={activity} averageSession={averageSession} performances={performances} />
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