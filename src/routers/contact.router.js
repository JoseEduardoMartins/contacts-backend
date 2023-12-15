import { Router } from 'express';
const router = Router();
import { validateFields } from '../utils/http.validation.util';
import { validators, requireValidators } from '../validations/contact.validations';
import controller from '../controllers/contact.controller';

router.get('/contacts/', validateFields([], validators), controller.find);

router.get('/contacts/:id', validateFields(['id'], validators), controller.findById);

router.post('/contacts/', validateFields(requireValidators, validators), controller.save);

router.put('/contacts/:id', validateFields(['id'], validators), controller.update);

router.delete('/contacts/:id', validateFields(['id'], validators), controller.remove);

export default router;
