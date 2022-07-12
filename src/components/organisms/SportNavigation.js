import './SportNavigation.css'

import Copyright from '../atoms/Copyright'
import IconNav from '../molecules/IconNav'

/**
 * SportNavigation - Vertical nav containing links to each sport
 */
function SportNavigation() {
    return(
        <article className="sportNav">
            <IconNav/>
            <Copyright/>
        </article>
        
    )
} 

export default SportNavigation