
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {
              email:"test@email.com",
              password:"12fdsafas34567"
          },
          {
              email:"test2@email.com",
              password:"1234sadad567"
          },
          {
              email:"test2@email.com",
              password:"123asdf4567"
          },
      ]);
    });
};
