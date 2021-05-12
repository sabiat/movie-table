import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "react-tabulator/lib/styles.css";

export default function Results(props) {
  const columns = [
    { title: "Name", field: "title", width: 150 },
    {
      title: "Release Date",
      field: "release_date",
      hozAlign: "left",
      width: 150,
    },
    {
      title: "Description",
      field: "overview",
      formatter: "textarea",
    },
    { title: "Image", field: "rating", hozAlign: "center", formatter: "star" },
    {
      title: "Popularity",
      field: "popularity",
      hozAlign: "left",
      formatter: "progress",
    },
  ];

  const data = props.movieData;
  const options = {
    responsiveLayout: "collapse",
  };
  return (
    <div className="Results">
      <ReactTabulator
        data={data}
        columns={columns}
        tooltips={true}
        layout={"fitColumns"}
        height={320}
      />
    </div>
  );
}
