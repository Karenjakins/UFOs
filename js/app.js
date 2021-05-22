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