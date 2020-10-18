require('../../src/global');
const {User} = include('/models');
const users = require('./users.json');
exports.seed = async knex => {
    await knex(User.tableName).del();
    try{
        await User.startTransaction();
        await User.insertMany(users);
        return User.commitTransaction();
    }catch(error){
        console.log(error);
    }
};
