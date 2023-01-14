import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = { email, name, message };

    let clientInstance;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.f4ns3ls.mongodb.net/?retryWrites=true&w=majority`;

    try {
      const client = new MongoClient(connectionString);
      clientInstance = await client.connect();
      console.log("Connected to database");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = clientInstance.db(process.env.mongodb_database);

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      clientInstance.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    clientInstance.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", body: newMessage });
  }
}

export default handler;
