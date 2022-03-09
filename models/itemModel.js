const db = require('../database/dbConfig');

/*
 * This function should look inside the users table and look for the rows
 * that has the parameter id. return the result row with this function.
 */
async function findItems(id) {
    //TODO start your code right here
    const result = await db('items')
        .where('id', id);
    return result
    
}

/*
 * This function should look inside the users table and the items table
 * make a join query that will return you the users json with the item
 * json for the JSON format look in the README direction
 */
async function insertItems(item) {
    //TODO start your code right here
    const result = await db('items')
        .insert({ name: item });
    return result

}


module.exports = { findUsers, findUsersWithItems};