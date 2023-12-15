import { Contact } from '../models/contact.model';
import { runQuery } from '../config/database';
import { typeValidators } from '../utils/type-utils';
import { getQueryFilters } from '../utils/sql/queries';
import { contactParameters } from '../utils/sql/contact.query';

export const select = async ({ filters = {} }) => {
    try {
        const query = `
            SELECT *
            FROM contact
            ${getQueryFilters(filters, contactParameters)}
        `;

        const response = await runQuery(query);

        const contacts = response.map((contact) => new Contact(contact));
        return contacts;
    } catch (error) {
        throw error;
    }
};

export const selectById = async (id) => {
    if (!typeValidators(id, 'number')) throw new Error('Param {id} is invalid');

    try {
        const query = `
            SELECT *
            FROM contact
            WHERE id = ${id}
        `;

        const response = await runQuery(query);
        if (response?.length === 0) return {};

        const contact = new Contact(response[0]);
        return contact;
    } catch (error) {
        throw error;
    }
};

export const insert = async (contact) => {
    try {
        const newContact = new Contact(contact);

        const query = ` INSERT INTO contact SET ?`;

        const response = await runQuery(query, newContact.getNonNullFields());

        return { id: response.insertId };
    } catch (error) {
        throw error;
    }
};

export const update = async (id, contact) => {
    if (!typeValidators(id, 'number')) throw new Error('Param {id} is invalid');

    try {
        const newContact = new Contact({ ...contact, updatedAt: new Date() });

        const query = `
            UPDATE contact
            SET ?
            WHERE id = ${id}
        `;

        const response = await runQuery(query, newContact.getNonNullFields());

        return response === 0 ? null : {};
    } catch (error) {
        throw error;
    }
};

export const remove = async (id) => {
    if (!typeValidators(id, 'number')) throw new Error('Param {id} is invalid');

    try {
        const query = `DELETE FROM contact WHERE id = ${id}`;

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
