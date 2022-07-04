import './Icon.css'
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} src name of the icon
 * @returns customization of the icon
 */
export default function Icon({src}) {
    return(
        <a className="icon" href="#"><img src={`/assets/icons/${src}.svg`} alt="icon"/></a>
    )
}

Icon.propTypes = {
    src: PropTypes.string
}
