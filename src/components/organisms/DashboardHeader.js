import Hello from "../atoms/Hello";
import Congratulation from "../atoms/Congratulation";
import './DashboardHeader.css'

export default function DashboardHeader({firstName}) {
    return(
        <div className="dashboardHeader">
            <Hello name={firstName}/>
            <Congratulation/>
        </div>
    )
}