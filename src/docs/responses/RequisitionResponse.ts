const requisitionResponse = {
    create: {
        201: {
            description: 'Requisition created',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    get: {
        200: {
            description: 'Requisition information',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Requisition not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    update: {
        200: {
            description: 'Requisition updated',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Requisition not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    delete: {
        200: {
            description: 'Requisition deleted',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Requisition not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    getAll: {
        200: {
            description: 'Requisitions information',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Requisitions not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
    getAllByStudent: {
        200: {
            description: 'Requisitions information',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/requisition',
                    },
                },
            },
        },
        400: {
            description: 'Incorrect parameters',
        },
        404: {
            description: 'Requisitions not found',
        },
        500: {
            description: 'Internal Server Error',
        },
    },
};

export default requisitionResponse;