import { Router } from 'express';
import {
  getContactsController,
  getContactsByIdController,
  createContactsController,
  deleteContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getContactsByIdController));

contactsRouter.post(
  '/',
  validateBody(createContactSchema),
  upload.single('photo'),
  ctrlWrapper(createContactsController),
);

contactsRouter.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  upload.single('photo'),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactsController));

export default contactsRouter;
