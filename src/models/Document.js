const ModelCreate = include('/helpers/modelCreate');
const name = 'Document';
const tableName = 'document';
const selectableProps = [
    'id',
    'user-id',
    'name',
    'deleted',
    'createdAt'
];
class Document extends ModelCreate{
    constructor(props){
        super({
            ...props,
            name,
            tableName,
            selectableProps
        });
    }
}
module.exports = knex => new Document(knex);
