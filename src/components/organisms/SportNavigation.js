import './SportNavigation.css'

import Copyright from '../atoms/Copyright'
import IconNav from '../molecules/IconNav'

/**
 * 
 * @returns Vertical nav containing links to each sport
 */
export default function SportNavigation() {
    return(
        <article className="sportNav">
            <IconNav/>
            <Copyright/>
        </article>
        
    )
} 