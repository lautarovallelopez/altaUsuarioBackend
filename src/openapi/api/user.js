module.exports = {
    '/api/user':{
        get:{
            security:[],
            summary:'List of users',
            parameters:[
                {
                    in: 'query',
                    name: 'name',
                    schema:{type:'string'}
                },
                {
                    in:'query',
                    name:'deleted',
                    schema:{type:'number'}
                }
            ],
            responses:{
                200:{
                    description: 'LIst of users',
                    content:{'application/json':{schema:{type:'array'}}}
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        post:{
            security: [],
            summary:'Create a new user',
            requestBody:{content: {'application/json': {schema: {type:'object'}}}},
            responses:{
                200:{
                    description: 'ok',
                    content:{'application/json':{schema:{type:'object'}}}
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/user/{id}':{
        put:{
            security:[],
            summary: 'Update an user',
            parameters:[
                {
                    in:'path',
                    name: 'id',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true
                }
            ],
            requestBody: {
                content:{'application/json':{schema:{type:'object'}}},
                required: true
            },
            responses:{
                200:{
                    description: 'OK',
                    content:{'application/json':{schema:{type:'object'}}}
                },
                default:{
                    description:'Error',
                    content:{'application/json':{schema:{$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        get:{
            security: [],
            summary: 'Fetch an user',
            parameters:[
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema:{type:'string'}
                }
            ],
            responses:{
                200:{
                    description: 'OK',
                    content:{'application/json':{schema:{type:'object'}}}
                },
                default:{
                    description: 'Error',
                    content:{'application/json':{schema:{$ref:'#/components/schemas/Error'}}}
                }
            }
        },
        delete:{
            security: [],
            summary: 'Delete an user',
            parameters:[
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema:{
                        type: 'string',
                        format: 'uuid'
                    }
                }
            ],
            responses:{
                200:{
                    description: 'Borrar un usuario',
                    content: {'application/json':{schema:{type:'object'}}}
                },
                default:{
                    description: 'Error',
                    content:{'application/json':{schema:{$ref:'#/components/schemas/Error'}}}
                }
            }
        },
        post:{
            security:[],
            summary: 'Undo',
            parameters:[
                {
                    in:'path',
                    name:'id',
                    required:true,
                    schema:{type:'string'}
                }
            ],
            responses:{
                200:{
                    description:'OK',
                    content:{'application/json':{schema:{type:'object'}}}
                },
                default:{
                    description: 'Error',
                    content:{'application/json':{schema:{$ref:'#/components/schemas/Error'}}}
                }
            }
        }
    }
};
