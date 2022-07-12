import './Icon.css'
import PropTypes from 'prop-types';

/**
 * Icon - customization of the icon
 * @param {string} src name of the icon
 */
function Icon({src}) {
    return(
        <a className="icon" href="#"><img src={`/assets/icons/${src}.svg`} alt="icon"/></a>
    )
}

export default Icon

Icon.propTypes = {
    src: PropTypes.string
}
