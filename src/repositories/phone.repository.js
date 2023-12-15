import { PhoneDataBase, PhoneApi } from '../models/phone.model';
import { runQuery } from '../config/database';
import { typeValidators } from '../utils/type-utils';
import { getQueryFilters } from '../utils/sql/queries';
import { phoneParameters } from '../utils/sql/phone.query';

export const select = async ({ filters = {} }) => {
    try {
        const query = `
            SELECT *
            FROM phone
            ${getQueryFilters(filters, phoneParameters)}
        `;

        const response = await runQuery(query);

        const phones = response.map((phone) => new PhoneApi(phone));
        return phones;
    } catch (error) {
        throw error;
    }
};

export const selectById = async (id) => {
    if (!typeValidators(id, 'number')) throw new Error('Param {id} is invalid');

    try {
        const query = `SELECT * FROM phone WHERE id = ${id}`;

        const response = await runQuery(query);
        if (response?.length === 0) return {};

        const phone = new PhoneApi(response[0]);
        return phone;
    } catch (error) {
        throw error;
    }
};

export const insert = async (phone) => {
    try {
        const newPhone = new PhoneDataBase(phone);

        const query = `INSERT INTO phone SET ?`;

        const response = await runQuery(query, newPhone.getNonNullFields());

        return { id: response.insertId };
    } catch (error) {
        throw error;
    }
};

export const update = async (id, phone) => {
    if (!typeValidators(id, 'number')) throw new Error('Param {id} is invalid');

    try {
        const newPhone = new PhoneDataBase(phone);

        const query = `UPDATE phone SET ? WHERE id = ${id}`;

        const response = await runQuery(query, newPhone.getNonNullFields());

        return response === 0 ? null : {};
    } catch (error) {
        throw error;
    }
};

export const remove = async (filters) => {
    try {
        const query = `
            DELETE FROM phone
            ${getQueryFilters(filters, phoneParameters)}
        `;

        const response = await runQuery(query);

        return response === 0 ? null : {};
    } catch (error) {
        throw error;
    }
};

export default {
    select,
    selectById,
    insert,
    update,
    remove,
};
