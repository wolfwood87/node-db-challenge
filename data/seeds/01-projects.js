exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'Sprint DB Challenge',
      description:
        'DB challenge for Relational Databases',
    },
  ]);
};