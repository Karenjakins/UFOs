// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");
// Dynamic Tables
function buildTable(data) {
    // Clear any existing data
    tbody.html("");
    // Look through each object in the data and append 
    data.forEach((dataRow) => {
    // Append row to the table    
    let row = tbody.append("tr");

    //Loop through each field in the dataRow and add value to table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
    );
});
// Creating filter
funtion handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("datetime").property("value");
    let filteredData = tableData;

    // Checking for date filter
    if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data (If no date display original tableData)
    buildTable(filteredData);

    // Response to a click
    d3.selectAll("filter-btn").on("click", handleClick);
};

// Build the table when the page loads
buildTable(tableData);
