import { requisitionResponse } from '../responses';

// Define os caminhos da API para as operações relacionadas a requisições
const requisitionPath = {
  '/requisition': {
    post: {
      tags: ['Requisition'],
      summary: 'Create a requisition',
      description: 'Create a requisition',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/requisition',
            },
            example: {
              sector: 'Secretaria',
              requisition: 'Matricula',
              description: 'Matricula',
              status: 'Em andamento',
              response: '',
              authorEmail: '',
            },
          },
        },
      },
      responses: requisitionResponse.create,
    },
    get: {
      tags: ['Requisition'],
      summary: 'Get all requisitions',
      description: 'Get all requisitions',
      responses: requisitionResponse.getAll,
    },
  },
  '/requisition/{requisitionId}/{status}': {
    put: {
      tags: ['Requisition'],
      summary: 'Avaliation a requisition',
      description: 'Avaliation a requisition',
      parameters: [
        {
          in: 'path',
          name: 'requisitionId',
          description: 'Requisition id',
          required: true,
          schema: {
            type: 'string',
          },
        },
        {
          in: 'path',
          name: 'status',
          description: 'Requisition status',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: requisitionResponse.update,
    },
  },
  '/requisition/{requisitionId}': {
    delete: {
      tags: ['Requisition'],
      summary: 'Delete a requisition',
      description: 'Delete a requisition',
      parameters: [
        {
          in: 'path',
          name: 'requisitionId',
          description: 'Requisition id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: requisitionResponse.delete,
    },
  },
  '/requisition/student/{studentId}': {
    get: {
      tags: ['Requisition'],
      summary: 'Get all requisitions from a student',
      description: 'Get all requisitions from a student',
      parameters: [
        {
          in: 'path',
          name: 'studentId',
          description: 'Student id',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: requisitionResponse.getAllByStudent,
    },
  },
};

export default requisitionPath;
