import { studentResponse } from '../responses';

// Define os caminhos da API para operações relacionadas aos estudantes
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
              name: 'Daniel Brandão',
              registration: '123456789',
              email: 'danielbrandao@gmail.com',
              password: 'senha123',
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
              name: 'Daniel Brandão',
              registration: '123456789',
              email: 'Daniel Brandão',
              password: 'senha123',
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
