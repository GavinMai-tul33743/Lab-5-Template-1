import "./App.css";
import { csv } from "d3"; // import the CSV reader from D3 
import { useEffect } from "react"; // import the useEffect React Lifecycle Hook
import ScatterPlot from "./Components/ScatterPlot"; //import your custom component
import React from "react";

function App() {

  //register your state variables with React 
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  //loading your data asynchronously 
  useEffect(() => {
    csv("./data/cars.csv").then((d) => {
      setData(d); //set data with the imported data from the CSV file 
      setLoading(false);
    });
    return () => undefined;
  }, []);

  //render your custom Component (you could render full pages here that have multiple components)
  return (
      <ScatterPlot data={data} width={750} height={750} /> 
  );
}

export default App; 
