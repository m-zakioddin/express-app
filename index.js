// Import the Express module
const express = require('express');

// Create an Express application instance
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory array to store course objects
const courses = [
    {id: 1, name:"course 1"},
    {id: 2, name:"course 2"},
    {id: 3, name:"course 3"},
];

// GET endpoint to fetch all courses
app.get('/api/course', ( req, res ) => {
    res.send( courses );
})

// POST endpoint to add a new course
app.post('/api/course', (req, res) => {
    // Create a new course object from request body
    const course = { 
        id: courses.length + 1,
        name: req.body.name
    }

    // Add the new course to the array
    courses.push(course)
    // Send the newly created course as response
    res.send(course);
});

// GET endpoint to fetch a course by its ID
app.get('/api/course/:id', ( req, res ) => {
    // Find the course with the given ID
    let course = courses.find( (c) =>  {
        return c.id === parseInt( req.params.id )
    });

    // If not found, return 404 error
    if(!course) res.status(404).send('No course found');
    // If found, send the course object
    res.send( course );
})

// Set the port from environment variable or default to 3000
const port =  process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen( port, () => console.log(`application is running on port number ${port} `) );

