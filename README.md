# drone-flight-planner

Web app enabling to create drone flight plans using coordinates on a map

# Installation

*You can build for production using npm run build and then deploy the resulting files of the dist folder to the host of your choice.
*You can also build in development mode using npm run start.
\*The app is available hosted using Firebase [here](https://drone-flight-planner-284008.web.app/)

# UI

The idea was to simulate a UI like in the Apple notes application with a menu on the left where a folder is automatically created when clicking on 'Add folder', here 'Add new flight plan'.

# Improvements

*Add unit tests...
*Use the hooks useReducer instead of multiple useState in FlightPlanner.js.
*Don't center the map with the first position added to a map.
*Restructure the components folder to add a FlightPlan folder when the app evolves with more pages.
*Use local storage to avoid losing the local data.
*Use a server.
\*...
