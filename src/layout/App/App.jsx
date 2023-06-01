import { useContext } from "react";
import ApplicationList from "../ApplicationList/ApplicationList";
import Header from "../Header/Header";
import SearchItems from "../SearchItems/SearchItems";
import DataContext from "../../context/DataContext";

export default function App() {
  const { searchingParams } = useContext(DataContext);

  return (
    <>
      <Header />
      {searchingParams.length > 0 ? <SearchItems /> : null}
      <ApplicationList />
    </>
  );
}
