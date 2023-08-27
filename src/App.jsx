import "./App.css";
import MainBox from "./components/MainBox";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import * as csvtojson from "csvtojson";
function csvToJson(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  const jsonArray = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');
    const jsonObject = {};

    for (let j = 0; j < headers.length; j++) {
      jsonObject[headers[j]] = currentLine[j];
    }

    jsonArray.push(jsonObject);
  }

  return jsonArray;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.csv");
        const csvData = await response.text();
        const jsonData = csvToJson(csvData);

        setData(jsonData);
      } catch (error) {
        console.log("Their is Error in Fetching" + error);
      }
    };
    fetchData();
  }, []);

  const requiredData = data.map((element) => {
    return {
      id: Math.random(),
      ...element,
    };
  });

  return (
    <>
      <div className="app">
        <h1 className="text-4xl text-white text-center font-bold ">
          NASA Exoplanet Query
          <MainBox data={requiredData} />
        </h1>
        <ToastContainer
          toastStyle={{ backgroundColor: "crimson", color: "white" }}
        />
      </div>
    </>
  );
}

export default App;