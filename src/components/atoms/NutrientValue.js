import './NutrientValue.css'

export default function NutrientValue({value, unit, title}) {
    return(
        <div className="nutrientValue">
            <p>{`${value}${unit}`}</p>
            <p>{title}</p>
        </div>
    )
}