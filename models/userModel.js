const db = require('../database/dbConfig');

/*
 * This function should look inside the users table and look for the rows
 * that has the parameter id. return the result row with this function.
 */
async function findUsers(id) {
    //TODO start your code right here
}

/*
 * This function should look inside the users table and the items table
 * make a join query that will return you the users json with the item
 * json for the JSON format look in the README direction
 */
async function findUsersWithItems(id) {
    //TODO start your code right here
}

/*
 * This function should insert the user with a user parameter
 */
async function insertUser(user) {
    //TODO start your code right here
}

/*
 * This function should insert the parameter into the tables
 * this is trickier than you think the parameter is a JSON object
 * but the way it is build is this JSON also has an array of JSON
 * for items as one of its keys.
 */
async function insertUsersWithItems(userWithItems) {
    //TODO start your code right here
}


module.exports = { findUsers, findUsersWithItems, insertUser, insertUsersWithItems};