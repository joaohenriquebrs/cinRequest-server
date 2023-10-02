import { Router } from 'express';
import userRouter from './userRoutes';
import requestRouter from './requestRoutes';



const router = Router();

router.use('/user', userRouter);
router.use('/request', requestRouter);

router.route('/health').get((req, res) => {
  res.send('Made with 💚 and &lt; &#x0002F; &gt; by eu');
});

export default router;
