exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      // Inserts seed entries
      return knex('sticker').insert([
    {
        title : "Javascript Logo",
        desc : "Terserah dah 1",
        ratings :"10"
    },
    {
        title : "Typescript Logo",
        desc : "Terserah dah 2",
        ratings :"8"
    },
    {
        title : "Phyton Logo",
        desc : "Terserah dah 3",
        ratings :"4"
    }
]);
    });
};
