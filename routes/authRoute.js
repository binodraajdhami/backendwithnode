const express = require('express');
const router = express.Router();
const UserModel = require('./../models/userModel');

router.route('/login')
    .get(function (req, res, next) {
        res.render('login.ejs');
    })
    .post(async function (req, res, next) {

        try {
            const data = await UserModel.findOne({
                email: req.body.email,
                password: req.body.password
            });

            // token genereate'
            let token = "fdfdsfsdfdsfjsofjoisdfiosdf";

            res.status(200).json({
                token: token,
                data: data,
                msg: "User Login Successful!",
            });

        } catch (error) {
            next(error);
        }



        // res.json({
        //     msg: "POST: Auth/login"
        // });
    })

router.route('/register')
    // for views ejs
    // .get(function (req, res, next) {
    //     res.json({
    //         msg: "GET: Auth/login"
    //     });
    // })
    .post(async function (req, res, next) {
        try {
            const data = await UserModel.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            res.status(200).json({
                data: data,
                msg: "User created Successfully!",
            });

        } catch (err) {
            next(err)
        }
    })

module.exports = router;