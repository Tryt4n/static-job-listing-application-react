import data from "../../../server/data.json";
import ListItem from "../../components/ListItem/ListItem";

export default function ApplicationList() {
  return (
    <main className="main-content-container">
      <ol className="container job-items-container">
        {data.map((item) => (
          <ListItem
            key={item.id}
            data={item}
          />
        ))}
      </ol>
    </main>
  );
}
