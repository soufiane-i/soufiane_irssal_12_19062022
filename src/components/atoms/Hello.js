import './Hello.css'
import PropTypes from 'prop-types';

/**
 * Hello - Welcome sentance which allow to confirm that current user is in their space
 * @param {string} name property of the component which contain the name of the user 
 */
function Hello({name}) {
    return(
        <h1>Bonjour <span className="name">{name}</span></h1>
    )
}

export default Hello

Hello.propTypes = {
    name: PropTypes.string
} 