const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_SECRET
        ).toString()
    })
    // console.log(newUser)
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("Wrong credentials!")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SECRET
        )
        const storedPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        storedPassword !== req.body.password && res.status(401).json("Wrong credentials!")

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        )

        const { password, ...otherFields } = user._doc

        res.status(200).json({ ...otherFields, accessToken })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router