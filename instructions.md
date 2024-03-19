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

### 1. Get data from the APIs

<p>Go to the index.js file and get the data from Sleeper and Sports Data APIs. Make sure urls are correct for each api call.</p>

### 2. Cypress

<p>Inside the cypress folder, go to the e2e folder. Run the cypress files in the order of the folders.</p>

### 3. Combine Players

<p>Run the combinePlayers.js file inside the combine folder that's inside utils folder. This file will combine the data for production, opportunity, and offense for each player.</p>

### 4. Transform to Map

<p>From the sleeper folder that's inside the utils folder, run the transformToMap.js file</p>

### 5. Get Rosters

<p>From the sleeper folder that's inside the utils folder, run the getRosters.js file</p>

### 6. Add Player Data

<p>From the sleeper folder that's inside the utils folder, run the addPlayerData.js file</p>

### 7. Database

<p>Inside the database folder, run the database.js file</p>
