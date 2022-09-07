import { 
  select,
  scaleLinear,
  axisBottom,
  axisLeft,
  max,
  extent
} 
from "d3";

import {
  useEffect,
  useRef
} from "react"

export default function ScatterPlot(props) {

  const d3Container = useRef(null);

  var margin = {top: 100, right: 30, bottom: 30, left: 100},
  width = props.width - margin.left - margin.right,
  height = props.height - margin.top - margin.bottom;

  console.log(props.data)

  useEffect(
    () => {
        if (props.data && d3Container.current) {
            
            const svg = select(d3Container.current);

            const chart = svg.append("g")
              .attr("transform", `translate(${margin.left}, ${margin.top})`);

            console.log(max(props.data, (d) => { return +d.hwy}))
            console.log(max(props.data, (d) => { return +d.cty}))


            var x = scaleLinear()
              .domain([0, max(props.data, (d) => { return +d.hwy})])
              .range([ 0, width ]);
            var y = scaleLinear()
              .domain([0, max(props.data, (d) => { return +d.cty})])
              .range([height, 0]);

            chart.append("g")
              .attr("transform", "translate(0," + (height) + ")")
              .call(axisBottom(x));
            chart.append("g")
              .call(axisLeft(y));

            // Add dots
            chart.append('g')
              .selectAll("dot")
              .data(props.data)
              .enter()
              .append("circle")
                .attr("cx", function (d) { return x(+d.hwy); } )
                .attr("cy", function (d) { return y(+d.cty); } )
                .attr("r", 4)
                .style("opacity", 0.25)
                .style("fill", "#69b3a2")            
        }
    },

    /*
        useEffect has a dependency array (below). It's a list of dependency
        variables for this useEffect block. The block will run after mount
        and whenever any of these variables change. We still have to check
        if the variables are valid, but we do not have to compare old props
        to next props to decide whether to rerender.
    */
    [props.data])

  return (
    <svg
      className="d3-component"
      width={props.width}
      height={props.height}
      ref={d3Container}
    />
  );
}
