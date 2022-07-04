import HomeTemp from "../templates/HomeTemp"
import { useParams } from "react-router-dom";
import  GetAPI, {user, activity, averageSession, performance} from '../../data/GetAPI'
//import GetMockData, {user, activity, averageSession, performance} from "../../data/GetMockData";

/**
 * 
 * @returns HomePage - Get datas and send them to the template HomeTemps
 */
export default function Home() {
    /**
     * Get parameter in the URL
     */
    const params = useParams();

    /**
     * Id in the URL
     * @type {string}
     */
    const id = params.id

    GetAPI(id);
    //GetMockData(params.id);
    
    return(
        <>
        <HomeTemp  user={user} activity={activity} averageSession={averageSession} averagePerformance={performance } />
        </>
    )
} 


