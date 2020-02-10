const express = require('express')

const Projects = require('./projects-model.js');
const Tasks = require('../tasks/task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to retrieve projects'})
        })
})

router.post('/', (req, res) => {
    const projData = req.body;

    Projects.add(projData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to create new project" })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve project"})
        })
})

//get and add tasks
router.get('/:id/tasks', (req, res) => {
    const {id} = req.params
    Projects.findTasks(id)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve tasks"})
        })

})

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body
    newTask.project_id = req.params.id
    Tasks.add(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({message: "Failed to add task"})
        })
})

module.exports = router;