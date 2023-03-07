const { Patient } = require('../models');

const getAll = async () => {
    const patients = await Patient.findAll();
    return patients;
};

const getById = async (id) => {
    const patients = await Patient.findOne({ where: { patient_id: id } });
    return patients;
};

module.exports = {
    getAll,
    getById,
};