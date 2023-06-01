import { useContext } from "react";
import DataContext from "../../context/DataContext";

export default function JobRequirementsButton({ jobText, searchParams }) {
  const { setSearchingParams } = useContext(DataContext);

  function handleButtonClick() {
    setSearchingParams((prevState) => {
      const existingIndex = prevState.findIndex((item) => item === jobText);

      if (existingIndex !== -1) {
        const updatedSearchingParams = prevState.filter((_, index) => index !== existingIndex);
        return updatedSearchingParams;
      } else {
        const updatedSearchingParams = [...prevState, jobText];
        return updatedSearchingParams;
      }
    });
  }

  return !searchParams ? (
    <button
      className="job-requirements-btn"
      onClick={handleButtonClick}
    >
      {jobText}
    </button>
  ) : (
    <button
      className="job-requirements-search-btn__container"
      onClick={handleButtonClick}
    >
      <span className="job-requirements-btn job-requirements-search-btn">{jobText}</span>
      <div className="job-requirements-search-btn__x-btn">
        <img
          src="./images/icon-remove.svg"
          alt="Remove Icon"
        />
      </div>
    </button>
  );
}
