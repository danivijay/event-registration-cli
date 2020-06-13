const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/customercli", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const RegisteredPerson = require("./models/RegisteredPerson");

const addPerson = async (payload) => {
  try {
    const person = await RegisteredPerson.create(payload);
    if (person) {
      console.info(person);
      console.info(`Registration ID: ${person.id}`);
    }
  } catch (e) {
    console.log(e);
  }
};

const findPersons = async (name) => {
  try {
    const search = new RegExp(name, "i");
    const person = await RegisteredPerson.find().or([
      { firstname: search },
      { lastname: search },
    ]);
    if (person) {
      console.info(person.map((c) => c.id));
      console.info(`${person.length} matches`);
    }
  } catch (e) {
    console.log(e);
  }
};

const updatePerson = async (_id, payload) => {
  try {
    const person = await RegisteredPerson.updateOne({ _id }, { $set: payload });
    console.log("Person details updated");
  } catch (e) {
    console.error(e);
  }
};

const removePerson = async (_id) => {
  try {
    const deletedPerson = await RegisteredPerson.deleteOne({ _id });
    console.log("Person removed");
  } catch (e) {
    console.error(e);
  }
};

const listPersons = async () => {
  try {
    const persons = await RegisteredPerson.find();
    console.info(persons);
    console.info(`${persons.length} matches`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  addPerson,
  findPersons,
  updatePerson,
  removePerson,
  listPersons,
};
