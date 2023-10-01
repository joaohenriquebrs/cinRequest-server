const requisitionSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
        },
        sector: {
            type: 'string',
        },
        requisition: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        response: {
            type: 'string',
        },
        createdAt: {
            type: 'dateTime',
        },
        authorEmail: {
            type: 'string',
        },
    },
};

export default requisitionSchema;