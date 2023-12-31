'use strict';

let ctx = document.getElementById('chart')

//* - Instantiate a new AppState
let state = new AppState();
state.loadItems();

/* TODO:
 * - Use a method on that AppState to load vote data from localStorage.
 */


//Create a data object for chart.js using your AppState's allProducts array.
function renderChart() {

  let chartData = {
    type: 'bar',
    data: {
    //map over all products fish out the name
    labels: state.allProducts.map(function(obj) {
      return obj.name;
    }),
    datasets: [{
      label: 'Number of Views',
      //map over all products fish out the times shown
      data: state.allProducts.map(function(obj) {
        return obj.timesShown;
      }),
      borderWidth: 5,
      backgroundColor: 'pink',
      borderColor: 'magenta',
    },
    {
      // * - Combine the data object with configuration information for chart.js type, colors, etc
      //map over all products fish out times clicked
      label: 'Number Of Votes',
      data: state.allProducts.map(function(obj) {
        return obj.timesClicked;
      }),
      borderWidth: 5,
      backgroundColor: 'green',
      borderColor: 'light green',
    },
  ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
  }


  new Chart(ctx, chartData);
}

// Call chart.js with the configuration and the canvasElem
renderChart();


/*citations
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage

https://stackoverflow.com/questions/68899846/what-would-be-the-best-solution-to-store-and-work-with-data-in-javascript-withou

used chatgpt to add colors to chart

*/