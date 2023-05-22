const result = require('../modals/resultModal')

const placebet = require('../modals/placeBetModal')

const addResult = async (req, res) => {
    const { serialNo, dateTime, color } = req.body

    // if(!(serialNo && dateTime && color)){
    //     return res.status(404).json({message: 'please fill all the fields!'})
    // }

    try {
        const existingDoc = await result.findOne().sort({ serialNo: -1 }).exec()

        let date = new Date()
      date = date.toISOString().replaceAll('-', '').split('T')[0]
    //   console.log(date)

        // console.log(existingDoc  === null)

        if(existingDoc){
            const newResult = await result({
                serialNo: existingDoc.serialNo += 1,
                dateTime: date,
                color
            })
            await newResult.save()
            return res.status(201).json({ status: true, message: 'A new result added...', data: newResult })
        }

        if(existingDoc === null){
            const newResult = await result({
                serialNo: 1,
                dateTime: date,
                color
            })
            await newResult.save()
            return res.status(201).json({ status: true, message: 'A new result added...' })
        }



    } catch (error) {
        console.log(error)
    }
}

const getResult = async (req, res) => {
    try {
        const results = await result.find({})
        return res.status(200).json({ status: true, message: results })
    } catch (error) {
        console.log(error)
    }
}

const savePlaceBet = async (req, res) => {

    const { userName, selectedColor} = req.body;

    try {
        const bet = await placebet({
            userName: 'kalim',
            selectedColor,
        })

        await bet.save()

        return res.status(201).json({status: true, data: bet})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addResult,
    getResult,
    savePlaceBet
}