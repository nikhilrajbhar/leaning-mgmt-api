const mongoose = require('mongoose');
const dbConnectionString = 'mongodb+srv://nik:NA7T4JExmRAPuGZ@cluster0.ozcp8.mongodb.net/learning'

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection Successful");
}).catch((error) => {
    console.log(error);
})