
(function () {
    //iife - this wraps the code in a function so it isn't accidentally exposed 
    //to other javascript in other files. It is not required.

    var width = 800, height = 600

    //read in our csv file 
    d3.csv("./cars.csv").then((data) => {

        // var data = d3.rollup(data, v =>
        //     Math.round(d3.mean(v, d => d.cty)), d => d.manufacturer);
        // var data = Array.from(data, ([name, value]) => ({ name, value }));

        // const distinctValues = [...new Set(data.map((d) => d.name))]


        // var x = d3.scaleBand()
        //     .domain(distinctValues) //use manufacturer as input
        //     .range([0, width])
        //     .padding(0.1);

        // var y = d3.scaleLinear()
        //     .domain([0, d3.max(data, (d) => { return (+d.value) })])
        //     .range([height, 0]);

        // //Creating an color scale for nominal (categorical data)
        // var ordinal = d3.scaleOrdinal().domain(distinctValues) //use unique values as input domain
        //     .range(d3.schemeSet3); //use d3 Color Scheme #3 as possible output colors

        // var svg = d3.select("#barchart")
        // //create an svg g element and add 50px of padding
        // const chart = svg.append("g")
        //     .attr("transform", `translate(50, 50)`);

        // //add axes
        // chart.append("g")
        //     //put our axis on the bottom
        //     .attr("transform", "translate(0," + (height) + ")")
        //     //ticks + tickSize adds grids 
        //     .call(d3.axisBottom(x).ticks(10).tickSize(-height - 10))
        //     //Optional: remove the axis endpoints 
        //     .call((g) => g.select(".domain").remove());

        // //add y-axis
        // chart.append("g")
        //     .call(d3.axisLeft(y).ticks(10).tickSize(-width - 10))
        //     //Optional: remove the axis endpoints
        //     .call((g) => g.select(".domain").remove());

        // chart.append('text') //x-axis
        //     .attr('class', 'axis-title') //Optional: change font size and font weight
        //     .attr('y', height + 30) //add to the bottom of graph (-25 to add it above axis)
        //     .attr('x', width) //add to the end of X-axis (-60 offsets the width                     of text)  
        //     .text('Manufacturer'); //actual text to display


        // chart.append('text') //y-axis
        //     .attr('class', 'axis-title') //Optional: change font size and font weight
        //     .attr('x', 10) //add some x padding to clear the y axis
        //     .attr('y', 25) //add some y padding to align the end of the axis with the text
        //     .text('Average CTY'); //actual text to display


        // bars = chart.append('g')
        //     .selectAll(".bar")
        //     .data(data)
        //     .join("rect")
        //     .attr("x", function (d) { return x(d.name); })
        //     .attr("y", function (d) { return y(d.value); })
        //     .attr("fill", function (d) { return ordinal(d.name) })
        //     .attr("width", x.bandwidth()) //use the bandwidth returned from our X scale
        //     .attr("height", function (d) { return height - y(+d.value); }) //full height - scaled y length
        //     .style("opacity", 0.75)



        // bars //let’s attach an event listener to points (all svg circles)
        //     .on('mouseover', (event, d) => { //when mouse is over point
        //         d3.select(event.currentTarget) //add a stroke to highlighted point 
        //             .style("stroke", "black");


        //         d3.select('#tooltip2') // add text inside the tooltip div
        //             .style('display', 'block') //make it visible
        //             .html(`<h1 class="tooltip-title">${d.name}</h1>          
        //                   City (CTY) MPG: ${d.value}`);
        //     })
        //     .on('mouseleave', (event) => {  //when mouse isn’t over point
        //         d3.select('#tooltip2').style('display', 'none'); // hide tooltip
        //         d3.select(event.currentTarget) //remove the stroke from point
        //             .style("stroke", "none");


        //     });

        

        const distinctValues = [...new Set(data.map((d) => d.cyl))]
        var data = d3.rollup(data, v =>
            Math.round(d3.mean(v, d => d.hwy)), d => d.cyl);

        var data = Array.from(data, ([name, value]) => ({ name, value }));

        var x = d3.scaleBand()
            .domain(distinctValues) //use manufacturer as input
            .range([0, width])
            .padding(0.1);

        var y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => { return (+d.value) })])
            .range([height, 0]);

        //Creating an color scale for nominal (categorical data)
        var ordinal = d3.scaleOrdinal().domain(distinctValues) //use unique values as input domain
            .range(d3.schemeSet3); //use d3 Color Scheme #3 as possible output colors

        var svg = d3.select("#barchart")
        //create an svg g element and add 50px of padding
        const chart = svg.append("g")
            .attr("transform", `translate(50, 50)`);

        //add axes
        chart.append("g")
            //put our axis on the bottom
            .attr("transform", "translate(0," + (height) + ")")
            //ticks + tickSize adds grids 
            .call(d3.axisBottom(x).ticks(10).tickSize(-height - 10))
            //Optional: remove the axis endpoints 
            .call((g) => g.select(".domain").remove());

        //add y-axis
        chart.append("g")
            .call(d3.axisLeft(y).ticks(10).tickSize(-width - 10))
            //Optional: remove the axis endpoints
            .call((g) => g.select(".domain").remove());

        chart.append('text') //x-axis
            .attr('class', 'axis-title') //Optional: change font size and font weight
            .attr('y', height + 30) //add to the bottom of graph (-25 to add it above axis)
            .attr('x', width) //add to the end of X-axis (-60 offsets the width                     of text)  
            .text('CYL'); //actual text to display


        chart.append('text') //y-axis
            .attr('class', 'axis-title') //Optional: change font size and font weight
            .attr('x', 10) //add some x padding to clear the y axis
            .attr('y', 25) //add some y padding to align the end of the axis with the text
            .text('HWY'); //actual text to display
        

        bars = chart.append('g')
            .selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("x", function (d) { return x(d.name); })
            .attr("y", function (d) { return y(d.value); })
            .attr("fill", function (d) { return ordinal(d.value) })
            .attr("width", x.bandwidth()) //use the bandwidth returned from our X scale
            .attr("height", function (d) { return height - y(+d.value); }) //full height - scaled y length
            .style("opacity", 0.75)



    });

})();
