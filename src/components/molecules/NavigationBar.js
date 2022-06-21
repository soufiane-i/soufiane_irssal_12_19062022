import './NavigationBar.css'
import PageLink from '../atoms/PageLink'

export default function NavigationBar() {
    return(
        <nav>
            <PageLink text="Acceuil"/>
            <PageLink text="Profil" link="profil"/>
            <PageLink text="Réglage" link="reglage"/>
            <PageLink text="Communauté" link="communaute"/>
        </nav>
    )
}