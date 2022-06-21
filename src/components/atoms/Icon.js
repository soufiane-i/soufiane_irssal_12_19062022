import './Icon.css'

export default function Icon({link, src}) {
    return(
        <a className="icon" href={link}><img src={`/assets/icons/${src}.svg`} alt="icon"/></a>
    )
}