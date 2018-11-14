
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('sticker', (table) => {
        table.increments()
        table.text('title')
        table.text('desc')
        table.float('ratings')
    })
  
};

exports.down = function(knex, Promise) {
    
    return knex.schema.dropTable('sticker')
  
};
