import { useDispatch, useSelector } from "react-redux";
import { selectSearch, selectCategory, selectStatus } from "../redux/travelsSelector";
import { clearFilter, setSearch, setCategory, setStatus } from "../redux/travelsSlice";

const statuses = [
  "All",
  "Visited",
  "Planned",
  "Wishlist"
];

const categories = [
  "all",
  "Europe",
  "Asia",
  "Africa",
  "North America",
  "South America",
  "Oceania"
];

export const Filter = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const category = useSelector(selectCategory);
  const status = useSelector(selectStatus);
  
  return (
    <div>
      <input placeholder="Search your travel" type="text" value={search} onChange={e => dispatch(setSearch(e.target.value))} />
      <select value={status} onChange={e => dispatch(setStatus(e.target.value))}>
        {statuses.map((g, i) => (
          <option key={i} value={g.toLowerCase()}>{g}</option>
        ))}
      </select>
      <select value={category} onChange={e => dispatch(setCategory(e.target.value))}>
        {categories.map((g, i) => (
          <option key={i} value={g}>{g}</option>
        ))}
      </select>
      <button onClick={() => dispatch(clearFilter())}>Clear filter</button>
    </div>
  )
}