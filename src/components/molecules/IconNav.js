import './IconNav.css'
import Icon from '../atoms/Icon'

/**
 * IconNav - Icons in navigation
 */
function IconNav() {
    return(
        <nav className='iconNav'>
            <Icon src="icon1"/>
            <Icon src="icon2"/>
            <Icon src="icon3"/>
            <Icon src="icon4"/>
        </nav>
    )
}

export default IconNav