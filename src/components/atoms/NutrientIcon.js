import './NutrientIcon.css'

export default function NutrientIcon({img}) {
    return(
        <img className='nutrientIcon' src={`/assets/NutrientIcon/${img}.svg`}  alt='nutrient icon'/>
    )
}