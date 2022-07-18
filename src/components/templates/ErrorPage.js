import './HomeTemp.css'
import './ErrorPage.css'
import Header from "../organisms/Header"
import SportNavigation from '../organisms/SportNavigation'



/**
 * Error page when data are wrong

 */
function ErrorPage() {

    return(
        <>
        <Header/>
        <main>
            <SportNavigation/>
            <article className='dashboardContainer'>
                <div className='error'>
                <h1>Data Error</h1>
                <a href='https://github.com/soufiane-i/soufiane_irssal_12_19062022'>Front End Github Link</a>
                <a href='https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard'>Back End Github Link</a>
                </div>
            </article>
        </main>
        </>
    )
} 






export default ErrorPage;