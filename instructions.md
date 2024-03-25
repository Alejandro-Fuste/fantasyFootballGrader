# Database Setup Instructions

## Use the following instructions to get, transform, and enter the data into the database.

## Table of Contents

1. [API Data](#1-api-data)
2. [Home Screen Data](#2-home-screen-data)
3. [Cypress](#3-cypress)
4. [Combine Players](#4-combine-players)
5. [Transform to Map](#5-transform-to-map)
6. [Get Rosters](#6-get-rosters)
7. [Add Player Data](#7-add-player-data)
8. [Database](#8-database)

### 1. API Data

<p>Go to the index.js file and get the data from Sleeper and Sports Data APIs. Make sure urls are correct for each api call. The Sleeper API will get you data for leagues, owners, and rosters, and players. The Sports Data API will get the player headshots.</p>

### 2. Home Screen Data

<p>Run the homeScreenData.js file located data -> homeScreen folder. This will put the data gather from the index.js file into a json file.</p>

### 3. Cypress

<p>Inside the cypress folder, go to the e2e folder. Run the cypress files in the order of the folders. These files will get the data that will make production, opportunity, and offense categories.</p>

### 4. Combine Players

<p>Run the combinePlayers.js file located in the data -> combinedData. This file will combine the data for production, opportunity, and offense for each player.</p>

### 5. Transform to Map

<p>Run the transformToMap.js file from data -> sleeper -> transformedOwners folder.</p>

### 6. Get Rosters

<p>Run the getRosters.js file from the data -> sleeper -> ownersWithRoster folder.</p>

### 7. Add Player Data

<p>Run the addPlayerData.js file from the data -> sleeper -> completeData folder. This is the data that has the rosters for league owners. Rosters will have the players and their data.</p>

### 8. Database

<p>Inside the database folder, run the database.js file. This is the data that will be needed for the home screen, league screen, team screen, player modal, and players screen.</p>

## Unit Tests with Jest

<p>Run units tests with jest as ECMAScript Modules, files are imported with "import" and exported with "export defaut", instead of common js files for that uses the "require" keyword.</p>

```
"type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
  }
```
