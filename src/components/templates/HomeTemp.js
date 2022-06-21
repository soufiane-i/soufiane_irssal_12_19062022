import './HomeTemp.css'
import Header from "../organisms/Header"
import SportNavigation from '../organisms/SportNavigation'
import OverView from '../organisms/Overview'


export default function HomeTemp() {
    return(
        <>
        <Header/>
        <main>
            <SportNavigation/>
            <OverView/>
        </main>
        </>
    )
} 