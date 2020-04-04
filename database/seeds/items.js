exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('items').del()
        .then(function () {
            // Inserts seed entries
            return knex('items').insert([
                {
                    name:"Coke",
                    quantity:2,
                    user_id:1
                },
                {
                    name:"Rice",
                    quantity:3,
                    user_id:1
                },
                {
                    name:"Bag",
                    quantity:5,
                    user_id:2
                },
            ]);
        });
};