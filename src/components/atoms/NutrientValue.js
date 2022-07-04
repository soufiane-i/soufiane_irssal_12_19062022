import './NutrientValue.css'
import PropTypes from 'prop-types';

/** 
 * @returns Nutrient indications
 */
export default function NutrientValue({value, unit, title}) {
    
    return(
        <div className="nutrientValue">
            <p>{`${value}${unit}`}</p>
            <p>{title}</p>
        </div>
    )
}

NutrientValue.propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string,
}