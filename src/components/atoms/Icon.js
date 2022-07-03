import './Icon.css'
import PropTypes from 'prop-types';

export default function Icon({src}) {
    return(
        <a className="icon" href="#"><img src={`/assets/icons/${src}.svg`} alt="icon"/></a>
    )
}

Icon.propTypes = {
    src: PropTypes.string
}