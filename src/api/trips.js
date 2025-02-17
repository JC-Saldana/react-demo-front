import axios from "axios"
import { BACK_API } from "."

export const fetchTrips = async () => {
    const trips = await axios.get(`${BACK_API}/trips`)
    return trips.data
}