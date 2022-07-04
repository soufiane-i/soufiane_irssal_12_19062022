import './NutrientIcon.css'
import PropTypes from 'prop-types';


/**
 * 
 * @param {string} img name of the icon
 * @returns customization of the nutrient icon
 */
export default function NutrientIcon({img}) {
    return(
        <img className='nutrientIcon' src={`/assets/NutrientIcon/${img}.svg`}  alt='nutrient icon'/>
    )
}

NutrientIcon.propTypes = {
    img: PropTypes.string
}