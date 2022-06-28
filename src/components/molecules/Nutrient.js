import NutrientIcon from "../atoms/NutrientIcon";
import NutrientValue from "../atoms/NutrientValue";
import './Nutrient.css'

export default function Nutrient({img, value, unit, title}) {
    return(
        <div className="nutrient">
            <NutrientIcon img={img}/>
            <NutrientValue value={value} unit={unit} title={title}/>
        </div>
    )
}