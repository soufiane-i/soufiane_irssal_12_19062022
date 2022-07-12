import Logo from "../atoms/Logo" 
import NavigationBar from "../molecules/NavigationBar"
import './Header.css'

/**
 *  Header - Page Header Structure and composition 
 */
function Header() {
    return(
        <header>
            <Logo/>
            <NavigationBar/>
        </header>
    )
} 

export default Header