const PatientService = require('../services/patientService');

const getAll = async (req, res) => {
    try {
        const patients = await PatientService.getAll();
        return res.status(200).json(patients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await PatientService.getById(id);
        if (!patient) {
            return res.status(404).json({ message: 'Paciente não encontrado!' });
        } 
        return res.status(200).json(patient);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    getAll,
    getById,
};