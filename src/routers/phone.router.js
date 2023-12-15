import { Router } from 'express';
const router = Router();
import { validateFields } from '../utils/http.validation.util';
import { validators, requireValidators } from '../validations/phone.validations';
import controller from '../controllers/phone.controller';

router.get('/phones/', validateFields([], validators), controller.find);

router.get('/phones/:id', validateFields(['id'], validators), controller.findById);

router.post('/phones/', validateFields(requireValidators, validators), controller.save);

router.put('/phones/:id', validateFields(['id'], validators), controller.update);

router.delete('/phones/:id', validateFields(['id'], validators), controller.remove);

export default router;
