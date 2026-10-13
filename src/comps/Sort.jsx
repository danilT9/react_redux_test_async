import { useDispatch, useSelector } from "react-redux"
import { selectSort } from "../redux/travelsSelector";
import { setSort } from "../redux/travelsSlice";

const sorts = [
  "By price (from lowest to highest)",
  "By price (from highest to lowest)",
  "By rating (from lowest to highest)",
  "By rating (from highest to lowest)"
]

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  
  return (
    <div>
      <select value={sort} onChange={e => dispatch(setSort(e.target.value))}>
        {sorts.map((s, i) => (
          <option key={i} value={s}>{s}</option>
        ))}
      </select>
    </div>
  )
}