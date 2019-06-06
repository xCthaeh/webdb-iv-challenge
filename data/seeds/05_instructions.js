exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step: 3, recipeId: 1, stepDescription: "Add Cheese" },
        {
          step: 2,
          recipeId: 1,
          stepDescription: "Spread sauce across dough"
        },
        {
          step: 1,
          recipeId: 1,
          stepDescription: "Roll out dough into a circle"
        },
        {
          step: 1,
          recipeId: 2,
          stepDescription: "Brown meat in a saucepan"
        },
        {
          step: 1,
          recipeId: 3,
          stepDescription: "Combine Cornmeal, flour, sugar and baking powder"
        },
        { step: 2, recipeId: 3, stepDescription: "In a seperate bowl whisk eggs milk and butter" }
      ]);
    });
};
