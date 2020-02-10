//add tasks
//retrieve list of tasks

const db = require('../data/db-config');

function add(tsk) {
    return db('tasks').insert(tsk)
}

module.exports = {add};