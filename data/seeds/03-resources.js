exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: 'Computer',
      description:
        'Computers are always useful',
    },
  ]);
};