import { Router } from 'express';
import {
  createFertilizationArea,
  createSoilSample,
  getFertilizationAreas,
  getSoilSamples,
} from '../controllers/activitiyController.js';

const router = Router();

router.get('/activity/soil', getSoilSamples)
router.post('/activity/soil', createSoilSample)
router.put('/activity/soil/:id')
router.delete('/activity/soil/:id')
router.get('/activity/soil/:id')

router.get('/activity/fertilization', getFertilizationAreas)
router.post('/activity/fertilization', createFertilizationArea)
router.put('/activity/fertilization/:id')
router.delete('/activity/fertilization/:id')
router.get('/activity/fertilization/:id')

export default router;