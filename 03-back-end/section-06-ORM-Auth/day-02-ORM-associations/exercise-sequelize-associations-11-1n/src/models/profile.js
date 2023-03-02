module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false,
            tableName: 'Profiles',
            underscored: true,
        });

    return Profile;
};
