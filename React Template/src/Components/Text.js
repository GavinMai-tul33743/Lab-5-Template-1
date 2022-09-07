import { 
  select
} 
from "d3";

import {
  useEffect,
  useRef
} from "react"

export default function ScatterPlot(props) {

    console.log(props);

  const d3Container = useRef(null);

  useEffect(
    () => {
        if (props.data && d3Container.current) {
            const svg = select(d3Container.current);

            // Bind D3 data
            const chart = svg
                .append('g')
                .selectAll('text')
                .data(props.data);

            // Enter new D3 elements
            chart.enter()
                .append('text')
                .attr('x', 15)
                .attr('y', (d, i) => i * 25)
                .style('font-size', 24)
                .text((d) => d.model);

            // Update existing D3 elements
            chart
                .attr('x', (d, i) => i * 40)
                .text((d) => d);

            // Remove old D3 elements
            chart.exit()
                .remove();
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
      width={1000}
      height={1000}
      ref={d3Container}
    />
  );
}
