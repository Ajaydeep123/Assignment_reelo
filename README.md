# NASA Exoplanet Query App

The NASA Exoplanet Query app provides users with a simple and efficient way to query and explore data about exoplanets discovered outside our solar system. The app allows users to filter exoplanet data based on various criteria and view the results in a user-friendly tabular format. Here's a breakdown of the app's features and functionality:

## Features

1. **Efficient Data Loading**: The app has been designed to efficiently load the exoplanet data obtained from NASA. This ensures minimal delays when the application starts up.

2. **User-Friendly Query Interface**: Users are presented with a query input panel containing dropdowns that allow them to filter exoplanet data based on different criteria. The available query options include:
   - Year of discovery
   - Discovery method
   - Hostname
   - Discovery facility

3. **Query and Search**: Users can select one or more values from the query dropdowns to narrow down their search. Once the desired criteria are selected, users can click the 'Search' button to initiate the query and retrieve matching exoplanet data.

4. **Clear and Reset**: To start a new query or refine their search, users can click the 'Clear' button. This action resets the query selections and clears any displayed data in the results panel.

5. **Error Handling**: If the 'Search' button is clicked without selecting any query values, users are presented with an error message prompting them to select at least one query value.

6. **Results Display**: Matching exoplanet data is displayed in a results panel below the query input panel. Only the fields that can be queried are shown, providing users with relevant information.

7. **Clickable Hostnames**: The hostname of each exoplanet is presented as a hyperlink. Clicking on a hostname takes users to NASA's Confirmed Planet Overview Page for that specific planet, allowing them to access more detailed information.

8. **Sorting Functionality**: Users can sort the rows in the results panel in ascending or descending order based on the values in a specific column. Icons (such as up and down symbols) in the column headers indicate this functionality.

## Bonus Features

1. **External Links**: Clicking on a hostname opens the Confirmed Planet Overview Page in a new browser tab, providing users with a seamless way to access additional information.

2. **Enhanced Sorting**: Users can click on the up or down symbols in column headers to sort the rows in the results panel, enhancing their ability to explore and analyze the data.

## Getting Started

To get started with the NASA Exoplanet Query app, follow these steps:

1. Clone this repository to your local machine.
2. Install any necessary dependencies.
3. Launch the app and start exploring exoplanet data with the intuitive query interface.

Feel free to explore the codebase, customize the app's appearance, or add additional features to further enhance the user experience.

For more information about the data fields and the underlying functionality, refer to the [Exoplanet Archive documentation](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=PS).

Happy exoplanet querying and exploration! 🚀🌌
