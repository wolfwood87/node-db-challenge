//add resource
//retrieve list of resources

const db = require('../data/db-config');

function find() {
    return db('resources')
}

function add(rs) {
    return db('resources').insert(rs)
}

module.exports = {find, add};