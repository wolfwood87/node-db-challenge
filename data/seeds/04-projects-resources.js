exports.seed = function(knex, Promise) {
  return knex('projects-resources').insert([
    {
      project_id: 1, resource_id: 1
    },
  ]);
};
