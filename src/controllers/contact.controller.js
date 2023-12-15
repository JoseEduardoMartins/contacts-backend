import repository from '../repositories/contact.repository';
import repositoryPhone from '../repositories/phone.repository';

export const find = async (req, res) => {
    try {
        const filters = req.query;

        const response = await repository.select({ filters });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const findById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const response = await repository.selectById(id);

        const params = {
            filters: {
                contactId: id,
            },
        };

        const phones = await repositoryPhone.select(params);

        res.status(200).json({ ...response, phones });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const save = async (req, res) => {
    try {
        const { phones, ...contact } = req.body;

        const response = await repository.insert(contact);

        for (let i = 0; i < phones.length; i++) {
            await repositoryPhone.insert({ ...phones[i], contactId: response.id });
        }

        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { phones, ...contact } = req.body;

        const response = await repository.update(id, contact);
        if (response === null) return res.status(404).json({ message: 'Not found' });

        await repositoryPhone.remove({ contactId: id });

        for (let i = 0; i < phones.length; i++) {
            await repositoryPhone.insert({ ...phones[i], contactId: id });
        }

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const remove = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await repositoryPhone.remove({ contactId: id });

        const response = await repository.remove(id);
        if (response === null) return res.status(404).json({ message: 'Not found' });

        res.sendStatus(204);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default {
    find,
    findById,
    save,
    update,
    remove,
};
