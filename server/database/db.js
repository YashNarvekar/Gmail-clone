import mongoose from "mongoose";

const Connection = () => {
  const DB_URI = `mongodb://user:codeforinterview@ac-mj2ejzf-shard-00-00.4cjubc1.mongodb.net:27017,ac-mj2ejzf-shard-00-01.4cjubc1.mongodb.net:27017,ac-mj2ejzf-shard-00-02.4cjubc1.mongodb.net:27017/?ssl=true&replicaSet=atlas-2bnusf-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connecting the databse ", error.message);
  }
};

export default Connection;
