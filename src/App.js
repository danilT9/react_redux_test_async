import { TravelsList } from "./comps/TravelsList";
import { Filter } from "./comps/Filter";
import { Sort } from "./comps/Sort";

function App() {
  return (
    <div>
      <Filter />
      <Sort />
      <TravelsList />
    </div>
  );
}

export default App;
