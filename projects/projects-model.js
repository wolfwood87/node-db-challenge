//retrieve list of projects
//add projects

const db = require('../data/db-config');

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
}


function findTasks(projectId) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.project_name', 'p.description', 't.description', 't.notes', 't.completed')
        .where('project_id', projectId)
}

function findById(id) {
    return db('projects-resources as pr')
        .join('projects as p', 'p.id', 'pr.project_id')
        .join('tasks as t', 't.project_id', 'pr.project_id')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .select('p.*', 't.*', 'r.*')
        .where('project_id', id)
}

module.exports = {find, add, findById, findTasks};