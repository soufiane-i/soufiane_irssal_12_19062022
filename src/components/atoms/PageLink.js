import './PageLink.css'

export default function PageLink({link, text}) {
    return(
        <a href={`/${link}`}>{text}</a>
    )
}