import Logo from "../atoms/Logo" 
import NavigationBar from "../molecules/NavigationBar"
import './Header.css'

export default function Header() {
    return(
        <header>
            <Logo/>
            <NavigationBar/>
        </header>
    )
} 