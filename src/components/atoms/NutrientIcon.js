import './NutrientIcon.css'
import PropTypes from 'prop-types';


/**
 * NutrientIcon - customization of the nutrient icon
 * @param {string} img name of the icon
 */
function NutrientIcon({img}) {
    return(
        <img className='nutrientIcon' src={`/assets/NutrientIcon/${img}.svg`}  alt='nutrient icon'/>
    )
}

export default NutrientIcon

NutrientIcon.propTypes = {
    img: PropTypes.string
}