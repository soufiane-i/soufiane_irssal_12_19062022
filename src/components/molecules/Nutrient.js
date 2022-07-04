import NutrientIcon from "../atoms/NutrientIcon";
import NutrientValue from "../atoms/NutrientValue";
import './Nutrient.css'
import PropTypes from 'prop-types';

/**
 * @returns Nutrient card
 */
export default function Nutrient({img, value, unit, title}) {
    return(
        <div className="nutrient">
            <NutrientIcon img={img}/>
            <NutrientValue value={value} unit={unit} title={title}/>
        </div>
    )
}

NutrientValue.propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string,
    title: PropTypes.string,
}