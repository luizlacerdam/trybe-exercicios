const SurgeryService = require('../services/surgeryService');

const getSurgeriesAllByDoctorName = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name);
        const surgeries = await SurgeryService.getSurgeriesAllByDoctorName(name);
        return res.status(200).json(surgeries);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    getSurgeriesAllByDoctorName,
};