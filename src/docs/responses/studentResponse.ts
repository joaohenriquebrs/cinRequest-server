const studentResponse = {
  create: {
    201: {
      description: 'Student created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/student',
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
      description: 'Student information',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/student',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'Student not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  update: {
    200: {
      description: 'Student updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/student',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'Student not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  delete: {
    200: {
      description: 'Student deleted',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/student',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'Student not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
};

export default studentResponse;
