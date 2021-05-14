import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "react-tabulator/lib/styles.css";

export default function Results(props) {
  const starOptions = {
    [""]: "All",
    5: " > 5 stars",
    10: "10 stars",
  };

  const columns = [
    {
      title: "Name",
      field: "title",
      width: 250,
      editor: "input",
      headerFilter: "input",
    },
    {
      title: "Release Date",
      field: "release_date",
      width: 150,
      hozAlign: "left",
    },
    {
      title: "Average Vote",
      field: "vote_average",
      width: 175,
      formatter: "star",
      formatterParams: { stars: 10 },
      editor: "autocomplete",
      editorParams: {
        allowEmpty: true,
        showListOnEmpty: true,
        values: starOptions,
      },
      headerFilter: "select",
      headerFilterParams: { values: starOptions },
    },
    // { title: "Image", field: "rating", hozAlign: "center", formatter: "star" },
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
