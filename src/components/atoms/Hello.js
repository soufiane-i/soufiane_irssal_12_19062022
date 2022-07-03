import './Hello.css'
import PropTypes from 'prop-types';

export default function Hello({name}) {
    return(
        <h1>Bonjour <span className="name">{name}</span></h1>
    )
}

Hello.propTypes = {
    name: PropTypes.string
} 