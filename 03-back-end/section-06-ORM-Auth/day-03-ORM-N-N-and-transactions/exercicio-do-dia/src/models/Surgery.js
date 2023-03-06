/**
* @param {import('sequelize').DataTypes} DataTypes
* @param {import('sequelize').Sequelize } sequelize
* @returns
*/

module.exports = (sequelize, DataTypes) => {
    const Surgery = sequelize.define('Surgery', {
        surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
        specialty: DataTypes.STRING,
        doctor: DataTypes.DOUBLE,
    },
        { timestamps: false }
    );
    return Surgery;
};