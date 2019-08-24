## weather-app
weather-app Pelmorex Technical Round

### Front End Application

Please build a simple weather and photo web application.  Your UI/UX design skills are NOT a factor here.  If it isn’t a slick UI, we won’t judge.  We’re more interested in the code, structure, and what you create on that side of things!

## Guidelines:

  We recommend using React and Redux
  Unit tests are also required
  Bonus points if your application has a working docker container configuration


# Set up a front-end application with the following routes:

Route: /weather/toronto

Purpose: Weather information for Toronto

Route: /weather/montreal

Purpose: Weather information for Montreal

Route: /gallery

Purpose: A simple photo gallery

Route: /api/photo

Purpose: A list of photos to be used for the photo gallery

Route: /contact

Purpose: Allows an end-user to submit a Contact query Weather Pages

Please create two weather pages (/weather/toronto and /weather/montreal).  Each page should show:

City Name
Data last updated time
Condition
Temperature
Feels like
Temperature unit
Weather icon (optional - use https://erikflowers.github.io/weather-icons/ as an example)

The data for each weather page should be dynamically retrieved from the following URLs:
Toronto: https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt
Montreal: https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt


## Photo Gallery

In your photo gallery, please show 10 photos of your choosing.

Each photo should be clickable for a larger view of the image
The list of photos should be retrieved from /api/photo
At the very least, this endpoint should return a file URL for each photo so that you can dynamically retrieve the photos based on the API


## Contact Section

The contact section should show a form that allows a user to:

Enter their name
Enter their email
Enter their contact phone number
The form should be able to submit the information, and send it to an email address (actual smtp and emails not required -- just a simulation at this point).

## Setup Env

   Copy .env-example to .env

## Install Dependencies

`npm install` or `yarn install`

## Build Project 

`npm build` or `yarn build`


In the project directory, you can run:

We will need to run the front end and back end server to access the User Interface and Api calls. So we are using concurrent features to call both server in one command.

### `npm run startserver` or `yarn run startserver`


I have choose unique port 3002 and 4002 just because to make sure the application runs fine for testing.

Node sever will be calling on [http://localhost:4002](http://localhost:4002)

React sever will be calling on [http://localhost:3002](http://localhost:3002)

### Docker

steps:
  - Clone the repo - https://github.com/abdulnizam/weather-app.git
  - cd weather-app
  - docker-compose up --build

from docker hub
  - docker pull abdulnizam/weatherapp:latest
  - docker run -p 3002:3002 -p 4002:4002  abdulnizam/weatherapp:latest

  To access: http://localhost:3002
  To access api: http://localhost:4002/api/photo

# List of tech

    React
      - Routes /, /weather/toronto, /weather/montreal, /gallery, /contact
      - UI - React.semantic-ui
      - Responsive
      - PropTypes
      - Home
        - List of cities: Toronto, Montreal
        - Info, Navigate to /weather/{city}
      - /weather/{city}
        - City Name, last update, Condition,
        - Temperature, Feels like, Temperature unit,
        - Weather icon, Description
      - gallery
          - 10 random images from google
          - Lightbox view
      - contact
          - Field: Name, Email, Phone, Message
          - just simulate to success message
          - Email Simulator
    Tests
      - Test Suites: 7 passed, 7 total
        Tests:       15 passed, 15 total
        Snapshots:   0 total
        Time:        6.988s
        Ran all test suites.
    Redux
      - Saga
    Routes
    Node
      - Routes /api/photo, /api/cities, /api/cities/:code
    ES6
    Weather icon ( - used https://erikflowers.github.io/weather-icons/ )
    Docker
    External API
      - Toronto: https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt
      - Montreal: https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt

# Structure
    - S.O.L.I.D Principles
    - Component based
    - TDD Approach
