import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "react-tabulator/lib/styles.css";

export default function Results(props) {
  const columns = [
    { title: "Name", field: "title" },
    {
      title: "Release Date",
      field: "release_date",
      hozAlign: "left",
    },
    {
      title: "Average Vote",
      field: "vote_average",
    },
    // {
    //   title: "Description",
    //   field: "overview",
    //   formatter: "textarea",
    //   height: 150,
    // },
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
          <h3>Search Results:</h3>
          <ReactTabulator
            data={data}
            columns={columns}
            tooltips={true}
            layout={"fitData"}
            height={420}
            selectable={true}
          />
        </>
      )}
    </div>
  );
}
