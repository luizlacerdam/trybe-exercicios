const { Plan, Surgery, Patient } = require('../models');

const getAllPlansById = async (id) => {
    const plan = await Plan.findAll({
        where: { plan_id: id },
        include: [{ model: Patient, as: 'patients' }],
    });
    return plan;
};

module.exports = {
    getAllPlansById,
};