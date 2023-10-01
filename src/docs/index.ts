import { studentPath, requisitionPath } from './paths';
import { studentSchema, requisitionSchema } from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Sistema de requisicao API',
    description: 'API para as aplicações de requisicao de dispensa de cadeiras',
    version: '0.0.1',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Local Server',
    },
  ],
  paths: {
    ...studentPath,
    ...requisitionPath,
  },
  components: {
    schemas: {
      student: studentSchema,
      requisition: requisitionSchema,
    },
  },
};
