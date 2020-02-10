
exports.up = function(knex) {
    return (knex.schema
                .createTable('projects', tbl => {
                    tbl.increments();
                    tbl.string('project_name', 128).notNullable();
                    tbl.string('description', 128);
                    tbl.boolean('completed').notNullable().defaultTo(false);
                })
                .createTable('tasks', tbl => {
                    tbl.increments();
                    tbl.string('description', 128).notNullable();
                    tbl.string('project_id').unsigned().notNullable().references('projects.id').onDelete('CASCADE').onUpdate('CASCADE');
                    tbl.string('notes', 128)
                    tbl.boolean('completed').notNullable().defaultTo(false);
                })
                .createTable('resources', tbl => {
                    tbl.increments();
                    tbl.string('resource_name', 128).unique().notNullable();
                    tbl.string('description', 128);
                })
                .createTable('projects-resources', tbl => {
                    tbl.string('project_id').unsigned().notNullable().references('projects.id').onDelete('CASCADE').onUpdate('CASCADE');
                    tbl.string('resource_id').unsigned().notNullable().references('resources.id').onDelete('CASCADE').onUpdate('CASCADE');
                })
        )
};

exports.down = function(knex) {
    return (knex.schema
        .dropTableIfExists('projects-resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
)
};
