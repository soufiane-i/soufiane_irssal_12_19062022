import HomeTemp from "../templates/HomeTemp"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



export default function Home() {
    const params = useParams();
 

    const [dataUser, setUser] = useState([]);
    const [dataActivity, setActivity] = useState([]);
    const [dataAverageSession, setAverageSession] = useState([]);
    const [dataPerformance, setPerformance] = useState([]);
 
     useEffect(() => {
        fetch(`http://localhost:3000/user/${params.id}`)
        .then((res) => res.json())
        .then( (result) => {
              setUser(result.data)
          })
          fetch(`http://localhost:3000/user/${params.id}/activity`)
          .then((res) => res.json())
          .then( (result) => {
                setActivity(result.data)
            })
            fetch(`http://localhost:3000/user/${params.id}/average-sessions`)
            .then((res) => res.json())
            .then( (result) => {
                  setAverageSession(result.data)
              })
              fetch(`http://localhost:3000/user/${params.id}/performance`)
              .then((res) => res.json())
              .then( (result) => {
                    setPerformance(result.data)
                })
     }, [])


    

  

  

    return(
        <>
        <HomeTemp  user={dataUser} activity={dataActivity} averageSession={dataAverageSession} averagePerformance={dataPerformance } />

        </>
    )
} 


