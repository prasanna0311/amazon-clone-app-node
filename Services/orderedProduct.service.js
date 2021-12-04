const mongo = require("../Models/Mongo");

const service = {
    async postproduct(req, res) {
        try {
            let data = req.body;

            //Inserting user details in DB
            await mongo.db.collection("orderedProduct").insertOne(data);
            return res.send({ message: "Added Successfully" });

        }
        catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" })
        }
    },

    async getproduct(req, res) {
        try {
            const mailid = req.body;
            const data = await mongo.db.collection("orderedProduct").find({ mailid : mailid.mailid }).toArray();
            res.send(data);
           
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" })
        }
    },
    findEmail(mailid) {
        return mongo.db.collection("orderedProduct").findOne({ mailid });
    }
}

module.exports = service;