const knex = require("./knex");

module.exports = {
    getAll(){
      return knex('sticker')  
    },
    getOne(id){
      return knex('sticker').where('id', id)
    },
    create(stickers){
      return knex('sticker').insert(stickers, '*')
    },
    update(id, sticker){
      return knex('sticker').where('id', id).update(sticker)
    },
    delete(id){
      return knex('sticker').where('id', id).del()
    }
}