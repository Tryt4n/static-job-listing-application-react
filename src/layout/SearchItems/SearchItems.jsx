import { useContext } from "react";
import JobRequirementsButton from "../../components/JobRequirementsButton/JobRequirementsButton";
import DataContext from "../../context/DataContext";

export default function SearchItems() {
  const { searchingParams, setSearchingParams } = useContext(DataContext);

  return (
    <aside
      className="container search-params__main-container"
      aria-label="Searching Parameters"
    >
      <div className=" search-params__container">
        <div className="search-params__params">
          {searchingParams?.map((item) => (
            <JobRequirementsButton
              key={item}
              jobText={item}
              searchParams
            />
          ))}
        </div>
        <button
          className="search-params__clear-btn"
          aria-label="Clear All Parameters"
          onClick={() => setSearchingParams([])}
        >
          Clear
        </button>
      </div>
    </aside>
  );
}
