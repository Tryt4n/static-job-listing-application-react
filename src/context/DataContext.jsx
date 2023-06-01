import { createContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [searchingParams, setSearchingParams] = useState([]);

  return (
    <DataContext.Provider
      value={{
        searchingParams: searchingParams,
        setSearchingParams: setSearchingParams,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
