import { Router } from 'express';

import studentRouter from './StudentRoutes';
import requisitionRouter from './RequisitionRoutes';

const router = Router();

router.use('/student', studentRouter);
router.use('/requisition', requisitionRouter);
router.route('/').get((req, res) => {
  res.send('Made with 💚 and &lt; &#x0002F; &gt; by CITi');
});

export default router;
