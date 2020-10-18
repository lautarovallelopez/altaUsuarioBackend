const ModelCreate = include('/helpers/modelCreate');
const name = 'Name';
const tableName = 'name';
const selectableProps = [
    'id',
    'first_name'
];

class Name extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new Name({knex});
