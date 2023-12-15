import { typeValidators } from '../type-utils';

export const phoneParameters = {
    id: (value) => {
        if (!typeValidators(value, 'number')) throw new Error(`Filter { id:${value} } must be a number`);
        return `id = ${value}`;
    },
    number: (value) => {
        if (!typeValidators(value, 'string')) throw new Error(`Filter { number: '${value}' } must be a string`);
        return `number = '${value}'`;
    },
    contactId: (value) => {
        if (!typeValidators(value, 'number')) throw new Error(`Filter { contactId: ${value} } must be a number`);
        return `contact_id = '${value}'`;
    },
};

export default { phoneParameters };
