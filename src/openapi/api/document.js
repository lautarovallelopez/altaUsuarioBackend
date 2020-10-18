module.exports = {
    '/api/document' : {
        post : {
            security : [],
            summary : 'Probando subir archivo',
            parameters : [
                {
                    in : 'query',
                    name : 'name',
                    schema : {type : 'string'},
                    required : true
                }
            ],
            requestBody: {
                content: {
                    'multipart/form-data': {
                        schema: {
                            type: 'object',
                            properties: {
                                archivito: {
                                    type: 'string',
                                    format: 'binary'
                                }
                            }
                        }
                    }
                }
            },
            responses : {
                200 : {
                    description : 'ok',
                    content : {'application/json' : {schema : {type : 'object'}}}
                },
                default : {
                    description : 'error',
                    content : {'application/json' : {schema : {$ref : '#/components/schemas/Error'}}}
                }
            }
        }
    }
};
