const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const URL = process.env.DB_URL ||"mongodb+srv://yadav123yo:TSrGhXr9JLakgGRK@cluster0.tayxi0r.mongodb.net/furation?retryWrites=true&w=majority"

const ConnectDB = () => {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    });
};

module.exports = ConnectDB;