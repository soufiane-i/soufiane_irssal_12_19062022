import NutrientIcon from "../atoms/NutrientIcon";
import './Nutrient.css'
import PropTypes from 'prop-types';

/**
 * Nutrient Card
 * @param {string} img icon 
 * @param {number} value nutrient value 
 * @param {string} unit nutrient unit 
 * @param {string} title nutrient 
 */
function Nutrient({img, value, unit, title}) {
    return(
        <div className="nutrient">
            <NutrientIcon img={img}/>
            <div className="nutrientValue">
            <p>{`${value}${unit}`}</p>
            <p>{title}</p>
        </div>
        </div>
    )
}

export default Nutrient

Nutrient.propTypes = {
    img: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string,
}