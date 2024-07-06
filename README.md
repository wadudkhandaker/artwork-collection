# Artwork Collection

An Angular application to display and manage a collection of artworks with filtering, sorting, and pagination features. This project uses NgRx for state management and Angular Material for the UI components.

## Table of Contents

- [Artwork Collection](#artwork-collection)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)

## Project Description

The Artwork Collection application allows users to browse a collection of artworks. Users can filter artworks by style, sort them by various criteria, and paginate through the results. The application fetches artwork data from an external API.

## Features

- Display artworks in a grid layout.
- Filter artworks by style.
- Sort artworks by title, artist, or date.
- Paginate through the artwork collection.
- Responsive design for different screen sizes.

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/download/) (v19.x or later)
- [Angular CLI](https://cli.angular.io/) (v18.x or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/wadudkhandaker/artwork-collection.git
    cd artwork-collection
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200`.

## Running Tests

To run the tests using Jest, execute the following command:

```bash
npm run test