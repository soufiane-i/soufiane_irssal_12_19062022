import './Hello.css'
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} name name of the user 
 * @returns Welcome sentance which allow to confirm that current user is in their space
 */
export default function Hello({name}) {
    return(
        <h1>Bonjour <span className="name">{name}</span></h1>
    )
}

Hello.propTypes = {
    name: PropTypes.string
} 