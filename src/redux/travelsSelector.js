import { createSelector } from "reselect";

export const selectTravels = state => state.travels.items;
export const selectSearch = state => state.travels.filters.search;
export const selectCategory = state => state.travels.filters.category;
export const selectStatus = state => state.travels.filters.status;
export const selectSort = state => state.travels.sort;

export const selectFiltredTravels = createSelector(
  [selectTravels, selectSearch, selectCategory, selectStatus], (travels, search, category, status) => {
    const normalaise = search.trim().toLowerCase()
    return (
      travels.filter(travel => {
        const matchSearch = normalaise === "" ||
          travel.country.toLowerCase().includes(normalaise) ||
          travel.city.toLowerCase().includes(normalaise);
        const matchesCategorie = category === "all" || travel.category === category
        const matchesStatus = status === "all" || travel.status === status
        return matchSearch && matchesCategorie && matchesStatus
      })
    )
  }
);

export const relectFiltredTrip = createSelector(
  [selectFiltredTravels, selectSort], (filtredTravels, sort) => {
    const travels = [...filtredTravels];
    if (sort === "By price (from lowest to highest)") {
      return travels.sort((a,b) => a.price - b.price)
    } else if (sort === "By price (from highest to lowest)") {
      return travels.sort((a,b) => b.price - a.price)
    } else if (sort === "By rating (from lowest to highest)") {
      return travels.sort((a,b) => a.rating - b.rating)
    } else if (sort === "By rating (from highest to lowest)") {
      return travels.sort((a,b) => b.rating - a.rating)
    }
    return travels;
  }
)