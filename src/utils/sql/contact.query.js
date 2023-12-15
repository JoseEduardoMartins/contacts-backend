import { typeValidators } from '../type-utils';

export const contactParameters = {
    id: (value) => {
        if (!typeValidators(value, 'number')) throw new Error(`Filter { id:${value} } must be a number`);
        return `id = ${value}`;
    },
    name: (value) => {
        if (!typeValidators(value, 'string')) throw new Error(`Filter { name: '${value}' } must be a string`);
        return `name = '${value}'`;
    },
    age: (value) => {
        if (!typeValidators(value, 'number')) throw new Error(`Filter { age: ${value} } must be a number`);
        return `age = '${value}'`;
    },
};

export default { contactParameters };
