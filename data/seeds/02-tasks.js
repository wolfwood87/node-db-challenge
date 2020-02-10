exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      description: 'Finish MVP for assignment',
      project_id: 1,
      completed: true
    },
  ]);
};
