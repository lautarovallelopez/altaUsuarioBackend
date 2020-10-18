require('../../src/global');
const names = require('./names.json');
const {Name} = include('/models');

exports.seed = async knex => {
    await knex(Name.tableName).del();
    try{
        await Name.startTransaction();
        await Name.insertMany(names);
        return Name.commitTransaction();
    }catch(error){
        console.log(error);
    }
};
