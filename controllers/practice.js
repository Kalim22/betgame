const user = require('../modals/practice')

const addUserDetails = async (req, res) => {
    const {username, mobile, email, age} = req.body
    try {
        const newuser = await user({
            username,
            mobile, 
            email,
            age
        })

        await newuser.save()
        return res.status(201).json({data: newuser})
    } catch (error) {
        console.log(error)
    }
}

const getuser = async (req, res) => {
    try {
        const alluser = await user.find({})
        return res.status(200).json({user: alluser})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addUserDetails,
    getuser
}