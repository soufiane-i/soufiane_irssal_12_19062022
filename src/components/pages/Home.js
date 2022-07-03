import HomeTemp from "../templates/HomeTemp"
import { useParams } from "react-router-dom";
import  GetAPI, {user, activity, averageSession, performance} from '../../data/GetAPI'
//import GetMockData, {user, activity, averageSession, performance} from "../../data/GetMockData";

export default function Home() {
    const params = useParams();
    GetAPI(params.id);
    //GetMockData(params.id);
    return(
        <>
        <HomeTemp  user={user} activity={activity} averageSession={averageSession} averagePerformance={performance } />
        </>
    )
} 


