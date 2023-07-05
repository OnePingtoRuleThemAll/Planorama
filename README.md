# Planorama 📝

Planorama is an event app designed to simplify event planning and finding fun and interesting things to do in your area. Whether you are organizing a small gathering or a large-scale event, Planorama provides you with all of the the tools you need to create, organize and execute successful events. Maybe even make new like-minded friends in the process. 

## Table of Contents

- [Preview](#preview)
- [Installation](#installation)
- [Features](#features)
- [Future Development](#future-development)
- [Technology Used](#technologies-used)

## Preview

View live demo hosted on [Heroku](https://desolate-hollows-36679-dc548d9b90e0.herokuapp.com/)

## Installation

To run Planorama locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Edit the `.env.DEMO` file in the root directory of the project and set the following environment variables with your MySQL database configuration
5. Rename `.env.DEMO` to `.env`
6. Create the specified database in your MySQL server.
7. Run `npm run seed` to create the tables and seed the initial data in the database.
8. Run `npm start` to start the server.
9. Navigate to localhost:3001 to view the website localy.

## Features
**Event Creation:** Easily create and set up events with all the nevessary details such as event name, date, time, location and description.

**Event Search:** The app provides a powerful search feature that allows users to search for events based on their location, event type, date and keywords. Users can easily find events that match their preferences and interests.

**Location-Based Results:** The app utilizes location services to provide users with events that are happening in their area.

**Event Details:** Each event listing includes essential information such as event title, date, time, location and description. Users can view detailed event descriptions to get all the necessary information about the event.


## Future Development
For future development we would like to be able to implement a few things:

1. Save Favorites: Having the user be able to save their favorite event to a personalized list for future reference. This feature would allow users to keep track of the events they are interested in and plan their schedule accordingly.
2. Reminders: The app being able to provide the option to set event reminders. Users can then choose to receive notifications or alerts before the start of their favorite events, ensuring they never miss out on an exciting experience.
3. Ticket Purchase/Events Requiring Payment: For events that require tickets, the app provides a seamless ticket purchasing experience. Users can view ticket prices, availability, and make secure online purchases within the app.
4. GPS: Users can allow the app to access their devices GPS to provide accurate event recommendations.


## Technologies Used
Planorama is built using the following technologies:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Third-Party APIs: Share API & Bing Maps

