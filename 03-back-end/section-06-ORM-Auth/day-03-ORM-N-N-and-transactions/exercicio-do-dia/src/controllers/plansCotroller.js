const planService = require('../services/plansService');

const getAllPlansById = async (req, res) => {
    try {
        const { id } = req.params;
        const plans = await planService.getAllPlansById(id);
        return res.status(200).json(plans);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

module.exports = {
    getAllPlansById,
};