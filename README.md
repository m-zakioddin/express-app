# Express App Example

A simple Node.js REST API using [Express](https://expressjs.com/) to manage a list of courses.

## Features

- List all courses (`GET /api/course`)
- Get a course by ID (`GET /api/course/:id`)
- Add a new course (`POST /api/course`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install express
   ```

### Running the App

```bash
node index.js
```

The server will start on port 3000 (or the port set in the `PORT` environment variable).

## API Endpoints

### Get All Courses

- **URL:** `/api/course`
- **Method:** `GET`
- **Response:** Array of course objects

### Get Course by ID

- **URL:** `/api/course/:id`
- **Method:** `GET`
- **Response:** Course object if found, 404 if not

### Add a New Course

- **URL:** `/api/course`
- **Method:** `POST`
- **Body:** JSON `{ "name": "course name" }`
- **Response:** Newly created course object

## Notes

- Data is stored in-memory and will reset when the server restarts.
- This project is for learning and demonstration