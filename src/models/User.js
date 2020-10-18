const ModelCreate = include('helpers/modelCreate');
const name = 'User';
const tableName = 'users';
const selectableProps = [
    'id',
    'name',
    'surname',
    'email',
    'gender',
    'avatar',
    'birthdate',
    'deleted'
];

class UserModel extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}

module.exports = knex => new UserModel({knex});
