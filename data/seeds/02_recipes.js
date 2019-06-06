exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Chicago-Style Pizza", dishId: 1 },
        { name: "Pizza Dough", dishId: 1 },
        { name: "Tex-Mex Style Tacos", dishId: 2 },
        { name: "Vegan Tacos", dishId: 2 },
        { name: "Chives and Cheese Cornbread", dishId: 3 },
        { name: "Hushpuppies", dishId: 3 }
      ]);
    });
};
