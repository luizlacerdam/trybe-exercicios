const { Patient, Plan } = require('../models');
const { Surgery } = require('../models');

const getAll = async () => {
    const patients = await Patient.findAll({ include: { model: Plan, as: 'plan' } });
    return patients;
};

const getById = async (id) => {
    const patients = await Patient.findOne({ where: { patient_id: id } });
    return patients;
};

const getAllPatientsSurgeries = async () => {
    const patients = await Patient
    .findAll({ include: { model: Surgery, as: 'surgeries', through: { attributes: [] } } });
    return patients;
};

module.exports = {
    getAll,
    getById,
    getAllPatientsSurgeries,
};