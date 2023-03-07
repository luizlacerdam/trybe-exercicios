const { 
      Surgery, Patient } = require('../models');

const getSurgeriesAllByDoctorName = async (doctor) => {
    console.log({ doctor });
    const surgeries = await Surgery
    .findAll({
        where: { doctor },
        include: [{ model: Patient, as: 'patients', through: { attributes: [] } }],
      });
    return surgeries;
};

module.exports = {
    getSurgeriesAllByDoctorName,
};