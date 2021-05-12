import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "react-tabulator/lib/styles.css";

export default function Results(props) {
  const columns = [
    {
      title: "Name",
      field: "title",
      width: 200,
      editor: "input",
      headerFilter: "input",
    },
    {
      title: "Release Date",
      field: "release_date",
      hozAlign: "left",
    },
    {
      title: "Average Vote",
      field: "vote_average",
      formatter: "star",
      formatterParams: { stars: 10 },
    },
    // { title: "Image", field: "rating", hozAlign: "center", formatter: "star" },
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
      {data.length > 0 && (
        <>
          <ReactTabulator
            className="table-bordered"
            data={data}
            columns={columns}
            tooltips={true}
            layout={"fitColumns"}
            height={420}
          />
        </>
      )}
    </div>
  );
}
