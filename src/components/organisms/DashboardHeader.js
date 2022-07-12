import Hello from "../atoms/Hello";
import Congratulation from "../atoms/Congratulation";
import './DashboardHeader.css';
import PropTypes from 'prop-types';

/**
 * @ DashboardHeader.js - Top of the dashBoard
 * @param {string} firstName name to display at the top of the page  
 */
function DashboardHeader({firstName}) {

    return(
        <div className="dashboardHeader">
            <Hello name={firstName}/>
            <Congratulation/>
        </div>
    )
}

export default DashboardHeader

DashboardHeader.propTypes = {
    firstName: PropTypes.string
}