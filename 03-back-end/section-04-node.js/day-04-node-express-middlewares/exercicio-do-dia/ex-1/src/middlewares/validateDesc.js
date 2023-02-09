const validateDescription = (descriptionValue, res, value) => {
    if (!descriptionValue) {
        return res.status(400).json(
            { message: `O campo ${value} é obrigatório` },
        );
    }
};
module.exports = validateDesc = (req, res, next) => {
    const { description } = req.body;
    const { createdAt, rating, difficulty } = description;
    if (!description) return res.status(400).json({ "message": 'O campo description é obrigatorio' });
    if (!description.createdAt) {
        return res.status(400).json(
            { message: 'O campo createdAt é obrigatório' },
        );
    };
    if (!description.rating) {
        return res.status(400).json(
            { message: 'O campo rating é obrigatório' },
        );
    };
    if (!description.difficulty) {
        return res.status(400).json(
            { message: 'O campo difficulty é obrigatório' },
        );
    };
    next();
    // return validateDescription(description, res, 'description')
    //     || validateDescription(description.createdAt, res, 'createdAt')
    //     || validateDescription(description.rating, res, 'rating')
    //     || validateDescription(description.difficulty, res, 'difficulty')
    //     || next();
}