const schema = require("../Models/schema");
const mongo = require("../Models/Mongo");

const service = {
    async login(req, res) {
        try {
            let data = req.body;
            // Input Validation
            const { error } = schema.login.validate(data);
            if (error) return res.status(400).send({ error: error.details[0].message });

            //Inserting user details in DB
            await mongo.db.collection("login").insertOne(data);
            return res.send({ message: "Login Successfully" });

        }
        catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" })
        }
    }
}

module.exports = service;