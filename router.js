const express = require('express')
const controller = require('./controller')
const router = express.Router()

//personalInfo section>>>>>>>>>>>
router.get('/showpersonalinfo', controller.viewPerInfo)
router.post('/addpersonalinfo', controller.addPerInfo)

//companyinfo section>>>>>>>>>>>
router.get('/showcompanyinfo', controller.viewComInfo)
router.post('/addcompanyinfo', controller.addComInfo)

//hobbies section>>>>>>>>>>>
router.get('/showhobbies', controller.viewHobbies)
router.post('/addhobbies', controller.addHobbies)

//customer section>>>>>>>>>>>
router.get('/showcustomer', controller.viewCust)
router.post('/addcustomer', controller.addCust)

// order section>>>>>>>>>>>
router.get('/showorder', controller.viewOrder)
router.post('/addorder', controller.addOrder)


// join multiple tables>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// innerjoin>>>>>>>>>>>>>>>>>>return common values
router.get('/innerjoin/:id', controller.innerJoin)

// leftjoin>>>>>>>>>>>>>>>>>>returns common and left table(custs) values
router.get('/leftjoin', controller.leftJoin)

// rightjoin>>>>>>>>>>>>>>>>>>returns common and left table(custs) values
router.get('/rightjoin', controller.rightJoin)


module.exports = router