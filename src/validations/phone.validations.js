import { check } from 'express-validator';
import { select } from '../repositories/contact.repository';

const id = () =>
    check('id')
        .isInt()
        .withMessage('ID must be number.')
        .exists()
        .withMessage("ID can't be undefined.")
        .notEmpty()
        .withMessage("ID can't be null.")
        .toInt();

export const number = (field) =>
    check(field)
        .isString()
        .withMessage('NUMBER must be string.')
        .exists()
        .withMessage("NUMBER can't be undefined.")
        .notEmpty()
        .withMessage("NUMBER can't be null.")
        .bail()
        .isLength({ max: 16 })
        .withMessage("NUMBER can't be too large.")
        .trim();

export const contactId = () =>
    check('contactId')
        .isInt()
        .withMessage('CONTACT ID must be number.')
        .exists()
        .withMessage("CONTACT ID can't be undefined.")
        .notEmpty()
        .withMessage("CONTACT ID can't be null.")
        .bail()
        .toInt()
        .if((value, { req }) => req.method === 'POST' || req.method === 'PUT')
        .custom(async (id) => {
            try {
                const filters = { id };
                const response = await select({ filters });

                return response.length ? Promise.reject('CONTACT ID already exists.') : Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        });

const GET = {
    id,
    number: () => number('number'),
    contactId,
};

const POST = {
    number: () => number('number'),
    contactId,
};

const PUT = {
    id,
    number: () => number('number'),
    contactId,
};

const DELETE = {
    id,
};

export const validators = { GET, POST, PUT, DELETE };

export const requireValidators = ['name', 'login', 'password'];

export default { validators, requireValidators };
