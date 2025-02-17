import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5005/trips")
      .then(res => setTrips(res.data))
  }, [])

  return (
    <>
      {trips.map(trip => <p key={trip.id}>{trip.location}</p>)}
    </>
  )
}

export default App
