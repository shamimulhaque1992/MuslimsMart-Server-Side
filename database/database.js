import { mongoose } from "mongoose";

export const Conncetion = async (USERNAME, PASSWORD) => {
  const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fjnqzfm.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db connected");
  } catch (error) {
    console.log(`Error while connectiont to the database ${error.message}`);
  }
};

export default Conncetion;
