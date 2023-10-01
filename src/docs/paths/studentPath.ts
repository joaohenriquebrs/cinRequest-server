import { studentResponse } from '../responses';

const studentPath = {
  '/student': {
    post: {
      tags: ['Student'],
      summary: 'Create a student',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/student',
            },
            example: {
              name: 'Ednaldo Pereira',
              registration: '123456789',
              email: 'ednaldopereira@gmail.com',
              password: 'senha',
            },
          },
        },
      },

      responses: studentResponse.create,
    },
  },
  '/student/{id}': {
    get: {
      tags: ['Student'],
      summary: 'Get student information',
      description: "Get student information from it's id",
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Student id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: studentResponse.get,
    },
    update: {
      tags: ['Student'],
      summary: 'Update a student',
      description: "Update a student's information",
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Student id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/student',
            },
            example: {
              name: 'Ednaldo Pereira',
              registration: '123456789',
              email: 'ednaldo Pereira',
              password: 'senha',
            },
          },
        },
      },
      responses: studentResponse.update,
    },
    delete: {
      tags: ['Student'],
      summary: 'Delete a student',
      description: "Delete a student's information",
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'Student id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: studentResponse.delete,
    },
  },
};

export default studentPath;
