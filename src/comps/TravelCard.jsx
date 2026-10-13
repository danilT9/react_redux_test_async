import { useDispatch } from "react-redux"
import { updateTravelStatus } from "../redux/travelsSlice";

export const TravelCart = ({ travel }) => {
  const dispatch = useDispatch();
  
  return (
    <li>
      <h3>{travel.category}</h3>
      <h3>{travel.country}</h3>
      <p>{travel.city}</p>
      <p>{travel.rating}</p>
      <p>{travel.duration}</p>
      <p>{travel.price}</p>
      <select value={travel.status} onChange={e => dispatch(updateTravelStatus({id: travel.id, status: e.target.value}))}>
        <option value="wishlist">Wishlist</option>
        <option value="planned">Planned</option>
        <option value="visited">Visited</option>
      </select>
    </li>
  )
}