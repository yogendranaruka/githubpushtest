const Sequelize = require('sequelize')

const con = new Sequelize("tester", 'root', '',
    {
        host: 'localhost',
        dialect: 'mysql'
    });

// con.sync()

var Customer = con.define('cust', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

var Order = con.define('ord', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    total: Sequelize.INTEGER,
    item: Sequelize.INTEGER,
})


var personalInfo = null
personalInfo = con.define('personal_info', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    age: Sequelize.INTEGER,
    gender: Sequelize.STRING,
    mobile: Sequelize.INTEGER,
})

var companyInfo = con.define('company_info', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    company_name: Sequelize.STRING,
    established_year: Sequelize.INTEGER,
    employee_count: Sequelize.INTEGER,
})

var hobbies = con.define('hobbie', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    favroute_game: Sequelize.STRING,
    favroute_player: Sequelize.STRING,
    favroute_actor: Sequelize.STRING,
})


module.exports = {
    Customer,
    Order,
    personalInfo,
    companyInfo,
    hobbies,
    con
}