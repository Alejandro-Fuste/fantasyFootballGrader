# Database Setup Instructions

## Use the following instructions to get, transform, and enter the data into the database.

## Table of Contents

1. [API Data](#1-api-data)
2. [Cypress](#2-cypress)
3. [Combine Players](#3-combine-players)
4. [Transform to Map](#4-transform-to-map)
5. [Get Rosters](#5-get-rosters)
6. [Add Player Data](#6-add-player-data)
7. [Database](#7-database)

### 1. API Data

<p>Go to the index.js file and get the data from Sleeper and Sports Data APIs. Make sure urls are correct for each api call. The Sleeper API will get you data for leagues, owners, and rosters, and players. The Sports Data API will get the player headshots.</p>

### 2. Home Screen Data

<p>Run the homeScreenData.js file located data -> homeScreen folder. </p>

### 3. Cypress

<p>Inside the cypress folder, go to the e2e folder. Run the cypress files in the order of the folders. These files will get the data that will make production, opportunity, and offense categories.</p>

### 4. Combine Players

<p>Run the combinePlayers.js file located in the data -> combinedData. This file will combine the data for production, opportunity, and offense for each player.</p>

### 5. Transform to Map

<p>Run the transformToMap.js file from data -> sleeper -> transformedOwners folder.</p>

### 6. Get Rosters

<p>Run the getRosters.js file from the data -> sleeper -> ownersWithRoster folder.</p>

### 7. Add Player Data

<p>Run the addPlayerData.js file from the data -> sleeper -> completeData folder.</p>

### 8. Database

<p>Inside the database folder, run the database.js file</p>
