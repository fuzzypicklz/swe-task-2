const db = require('../database/dbConfig');

/*
 * This function should look inside the users table and look for the rows
 * that has the parameter id. return the result row with this function.
 */
async function findUsers(id) {
    //TODO start your code right here
    const result = await db('users')
        .where('id', id)
        .select();
    console.log(result);
    return result
    

}

/*
 * This function should look inside the users table and the items table
 * make a join query that will return you the users json with the item
 * json for the JSON format look in the README direction
 */
async function findUsersWithItems(id) {
    //TODO start your code right here
    const result = await db('items')
        .where("user_id", id)
        .select();
    console.log(result);
    return result;
}

/*
 * This function should insert the user with a user parameter
 */
async function insertUser(user) {
    //TODO start your code right here
    const result = await db('users')
        .insert({ email: user.email, password: user.password });
    console.log(result)
    return result;
}

/*
 * This function should insert the parameter into the tables
 * this is trickier than you think the parameter is a JSON object
 * but the way it is build is this JSON also has an array of JSON
 * for items as one of its keys.
 */
async function insertUsersWithItems(userWithItems) { 
    //TODO start your code right here
    console.log(userWithItems)
    let reslist = [];
    const result = await db('users')
        .insert({ email: userWithItems.email, password: userWithItems.password });
    console.log(result)

    const user = await db('users')
        .where("email", userWithItems.email)
        .where("password", userWithItems.password)
        .select();
    console.log(user);
    if (typeof userWithItems.name == "string") {
        const result2 = await db('items')
            .insert({ name: userWithItems.name, quantity: userWithItems.quantity, user_id: user[0].id });
    }
    else {
        for (let x = 0; x < userWithItems.name.length; x++) {
            const result2 = await db('items')
                .insert({ name: userWithItems.name[x], quantity: userWithItems.quantity[x], user_id: user[0].id });
            reslist.push(result2);
        }
    }
    return [result, reslist];
}


module.exports = { findUsers, findUsersWithItems, insertUser, insertUsersWithItems };