import Logo from "../atoms/Logo" 
import NavigationBar from "../molecules/NavigationBar"
import './Header.css'

/**
 * 
 * @returns Page Header Structure and composition 
 */
export default function Header() {
    return(
        <header>
            <Logo/>
            <NavigationBar/>
        </header>
    )
} 