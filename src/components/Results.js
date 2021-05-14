import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "react-tabulator/lib/styles.css";

export default function Results(props) {
  const columns = [
    {
      title: "Name",
      field: "title",
      hozAlign: "left",
      width: 250,
      headerFilter: "input",
    },
    {
      title: "Release Date",
      field: "release_date",
      width: 150,
      hozAlign: "center",
    },
    {
      title: "Average Vote",
      field: "vote_average",
      width: 175,
      formatter: "star",
      formatterParams: { stars: 10 },
    },
    {
      title: "Popularity",
      field: "popularity",
      hozAlign: "left",
      formatter: "progress",
      width: 175,
    },
    {
      title: "Description",
      field: "overview",
      formatter: "textarea",
      width: 490,
    },
  ];

  const data = props.movieData;
  const options = {
    responsiveLayout: "collapse",
  };
  return (
    <div className="Results">
      {data.length > 0 && (
        <ReactTabulator
          className="table-bordered"
          data={data}
          columns={columns}
          tooltips={true}
          layout={"fitColumns"}
          height={420}
        />
      )}
    </div>
  );
}
