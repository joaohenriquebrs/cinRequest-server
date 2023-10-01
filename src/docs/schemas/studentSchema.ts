const studentSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    registration: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      format: 'password',
    },
  },
  required: ['name', 'registration', 'email', 'password'],
};

export default studentSchema;
