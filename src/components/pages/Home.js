import HomeTemp from "../templates/HomeTemp"
import { useParams } from "react-router-dom";
import  GetAPI, {user, activity, averageSession, performance} from '../../data/GetAPI'
//import GetMockData, {user, activity, averageSession, performance} from "../../data/GetMockData";



/**
 * 
 * HomePage - Get datas and send them to the template HomeTemps
 */
function Home() {

    const params = useParams();


    const id = params.id

    GetAPI(id);
    //GetMockData();
    
    return(
        <>
        <HomeTemp  user={user} activity={activity} averageSession={averageSession} averagePerformance={performance } />
        </>
    )
} 

export default Home;


