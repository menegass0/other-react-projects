import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  
  //instead of using async and await, the correct usage of a function that returns something parallalel to the main program is to use useEffect
  const fetchTours = async() =>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch (error){
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, []);

  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
