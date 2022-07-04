import Hello from "../atoms/Hello";
import Congratulation from "../atoms/Congratulation";
import './DashboardHeader.css'

/**
 * 
 * @param {string} firstName name to display at the top of the page 
 * @returns 
 */
export default function DashboardHeader({firstName}) {
    return(
        <div className="dashboardHeader">
            <Hello name={firstName}/>
            <Congratulation/>
        </div>
    )
}