import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export let user;
export let activity;
export let averageSession;
export let performance;

/**
 * GetApi - Get Data depending on the id
 * @param {string} id user Id
 */
function GetApi(id) {
    
    const [dataUser, setUser] = useState({});
    const [dataActivity, setActivity] = useState({});
    const [dataAverageSession, setAverageSession] = useState({});
    const [dataPerformance, setPerformance] = useState({});

     useEffect(() => {
        fetch(`http://localhost:3000/user/${id}`)
        .then((res) => res.json())
        .then( (result) => {
              setUser(result.data)
          })
        .catch(setUser(undefined))
          fetch(`http://localhost:3000/user/${id}/activity`)
          .then((res) => res.json())
          .then( (result) => {
                setActivity(result.data)
            })
        .catch(setActivity(undefined))
            fetch(`http://localhost:3000/user/${id}/average-sessions`)
            .then((res) => res.json())
            .then( (result) => {
                  setAverageSession(result.data)
              })
            .catch(setAverageSession(undefined))
              fetch(`http://localhost:3000/user/${id}/performance`)
              .then((res) => res.json())
              .then( (result) => {
                    setPerformance(result.data)
                })
            .catch(setPerformance(undefined))
     }, [])

     user = dataUser;
     activity = dataActivity;
     averageSession = dataAverageSession;
     performance = dataPerformance;
     console.log(performance);
}

export default GetApi

GetApi.propTypes = {
    id: PropTypes.number
}