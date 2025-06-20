import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { useSelector, useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);
  const debouncedFilterValue = useDebouncedCallback((value) => {
    dispatch(changeFilter(value));
  }, 300);
  
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchInput">Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id="searchInput"
        defaultValue={filterValue}
        onChange={(evt) => debouncedFilterValue(evt.target.value)}
      />
    </div>
  );
}
