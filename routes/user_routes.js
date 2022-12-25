const express=require('express')
const router = express.Router();
const {otp_sendEmail} =require('../controllers/mail')

const {login,signup,getAllUsers,get_user,sendOtp,updateskills,study_project,update_profile,getDomin_user, delete_notification, getDept_user} = require('../controllers/user_controller')
const {change_password,change_password_request} = require('../controllers/forgotten_password_controller')

router.get('/all',getAllUsers)
router.post('/login',login)
router.post('/signup',signup)
router.post('/otp',otp_sendEmail)
router.get('/:id',get_user)
//notification dlelte
router.delete('/notification/:u_id/:p_id/delete',delete_notification)
//forgotten_password
router.post('/forgotten-password',change_password_request)

router.post('/reset/forgotten-password/',change_password)

router.patch('/update/skills',updateskills)
router.patch('/update/study_project',study_project)
router.post('/update/profile',update_profile)

//user show
router.get('/getDomin_user/:domain_name',getDomin_user)
router.get('/dept_user/:dept_name',getDept_user)


module.exports=router;