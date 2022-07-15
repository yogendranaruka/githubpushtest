const express = require('express')
const {
    Customer,
    Order,
    personalInfo,
    companyInfo,
    hobbies,
    con
} = require('./model')
const router = express.Router()

router.use(express.json())

//personalInfo section>>>>>>>>>>>
exports.viewPerInfo = async (req, res) => {
    const check = await personalInfo.findAll()
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

exports.addPerInfo = async (req, res) => {
    await personalInfo.create({
        age: req.body.age,
        gender: req.body.gender,
        mobile: req.body.mobile
    })

    var data = {}
    data['status'] = 200;
    data['message'] = "Successfully created data"
    res.send(data)
}


//companyinfo section>>>>>>>>>>>
exports.viewComInfo = async (req, res) => {
    const check = await companyInfo.findAll()
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

exports.addComInfo = async (req, res) => {
    await companyInfo.create({
        company_name: req.body.company_name,
        established_year: req.body.established_year,
        employee_count: req.body.employee_count
    })

    var data = {}
    data['status'] = 200;
    data['message'] = "Successfully created data"
    res.send(data)
}


//hobbies section>>>>>>>>>>>
exports.viewHobbies = async (req, res) => {
    const check = await hobbies.findAll()
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

exports.addHobbies = async (req, res) => {
    await hobbies.create({
        favroute_game: req.body.favroute_game,
        favroute_player: req.body.favroute_player,
        favroute_actor: req.body.favroute_actor
    })

    var data = {}
    data['status'] = 200;
    data['message'] = "Successfully created data"
    res.send(data)

}

//customer section>>>>>>>>>>>
exports.viewCust = async (req, res) => {
    const check = await Customer.findAll()
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

exports.addCust = async (req, res) => {
    await Customer.create({
        name: req.body.name,
        email: req.body.email
    })

    var data = {}
    data['status'] = 200;
    data['message'] = "Successfully created data"
    res.send(data)
}


// order section>>>>>>>>>>>

exports.viewOrder = async (req, res) => {
    const check = await Order.findAll()
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

exports.addOrder = async (req, res) => {
    await Order.create({
        total: req.body.total,
        item: req.body.item
    })

    var data = {}
    data['status'] = 200;
    data['message'] = "Successfully created data"
    res.send(data)

}


// join both tables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// innerjoin>>>>>>>>>>>>>>>>>>return common values

// exports.innerJoin = async (req, res) => {
//     // const check = await con.query("select custs.id, name, email, total, item from custs, ords where custs.id = ords.id")
//     //we can write in seprate line by using back tics `` as below
//     try {
//         const check = await con.query(`select * from custs 
//         JOIN ords 
//         ON custs.id = ords.id
//         JOIN personal_infos
//         ON ords.id = personal_infos.id 
//         JOIN company_infos
//         ON personal_infos.id = company_infos.ID 
//         JOIN hobbies
//         ON hobbies.id = company_infos.ID 
//         where custs.id = ?`, {
//             replacements: [req.params.id]
//         })

//         var [[newCheck]] = check

//         data = {}
//         data['status'] = 200
//         data['msg'] = "Successfully fetched"
//         data['data'] = newCheck
//         res.send(data)

//     } catch (err) {
//         console.log(err)
//     }

// }

// or>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.innerJoin = async (req, res) => {
    try {
        data = {}
        const check = await con.query(`select * from personal_infos 
        JOIN ords 
        ON personal_infos.id = ords.id
        JOIN hobbies
        ON personal_infos.id = hobbies.id 
        JOIN company_infos
        ON personal_infos.id = company_infos.ID 
        JOIN custs
        ON personal_infos.id = custs.id 
        where personal_infos.id = ?`, {
            replacements: [req.params.id]
        })

        var [[newCheck]] = check
        if (newCheck !== undefined) {
            data['status'] = 200
            data['msg'] = "Successfully fetched Common fields"
            data['data'] = newCheck
            res.send(data)
        } else {
            data['status'] = 400
            data['msg'] = "No common fields with this id in given tables!"
            res.send(data)
        }


    } catch (err) {
        console.log(err)
    }

}

// leftjoin>>>>>>>>>>>>>>>>>>returns common and left table(custs) values

exports.leftJoin = async (req, res) => {
    const check = await con.query(`select * from custs 
    LEFT JOIN ords 
    on custs.id = ords.id
    LEFT JOIN personal_infos
    on personal_infos.id = ords.id`)
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}

// rightjoin>>>>>>>>>>>>>>>>>>returns common and left table(custs) values

exports.rightJoin = async (req, res) => {
    const check = await con.query(`select * from custs 
    RIGHT JOIN ords 
    on custs.id = ords.id
    RIGHT JOIN personal_infos
    on personal_infos.id = ords.id`)
    data = {}
    data['status'] = 200
    data['msg'] = "Successfully fetched"
    data['data'] = check
    res.send(data)
}



