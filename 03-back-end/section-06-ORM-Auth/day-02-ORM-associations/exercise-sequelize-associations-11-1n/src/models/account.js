module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false,
            tableName: 'Accounts',
            underscored: true,
        });

    return Account;
};
