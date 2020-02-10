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

module.exports = {find, add, findTasks};