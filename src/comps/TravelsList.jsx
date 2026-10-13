import { useSelector } from "react-redux";
import { TravelCart } from "./TravelCard";
import { relectFiltredTrip } from "../redux/travelsSelector";

export const TravelsList = () => {
  const travels = useSelector(relectFiltredTrip);
  return (
    <>
      {travels.map(travel => (
        <TravelCart key={travel.id} travel={travel} />
      ))}
    </>
  );
}