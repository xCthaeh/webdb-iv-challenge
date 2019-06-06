exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Beef" },
        { name: "Yeast" },
        { name: "Cornmeal" },
        { name: "Basil" },
        { name: "Tomatos" },
        { name: "Cheese" },
        { name: "Hot Sauce" }
      ]);
    });
};
