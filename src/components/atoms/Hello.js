import './Hello.css'

export default function Hello({name}) {
    return(
        <h1>Bonjour <span className="name">{name}</span></h1>
    )
}