import { useEffect, useState } from 'react'
import { fetchTrips } from './api/trips'
import './App.css'

function App() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const setInitialTrips = async () => {
    setLoading(true)
    setError(null)
    try {
      const trips = await fetchTrips()
      setTrips(trips)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setInitialTrips()
  }, [])

  return (
    <div className='trips-column'>
      <button onClick={setInitialTrips}>
        {loading ? "Loading..." : "Reload trips"}
      </button>
      {trips && !loading && !error && trips.map(trip => <p key={trip.id}>{trip.location}</p>)}
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default App
