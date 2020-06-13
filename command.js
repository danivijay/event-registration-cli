#! /usr/bin/env node

const program = require("commander");
const {
  addPerson,
  findPersons,
  updatePerson,
  removePerson,
  listPersons,
} = require("./index");
const { prompt } = require("inquirer");

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "firstname:",
  },
  {
    type: "input",
    name: "lastname",
    message: "lastname:",
  },
  {
    type: "input",
    name: "phone",
    message: "phone:",
  },
  {
    type: "input",
    name: "email",
    message: "email:",
  },
];

program.version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("register")
  .action(() => {
    prompt(questions)
      .then((answers) => addPerson(answers))
      .catch((e) => console.error(e));
  });

program
  .command("find <name>")
  .alias("f")
  .description("find a registered person")
  .action((name) => {
    findPersons(name);
  });

program
  .command("update <_id>")
  .alias("u")
  .description("update a registered person")
  .action((_id) =>
    prompt(questions)
      .then((answers) => updatePerson(_id, answers))
      .catch((e) => console.error(e))
  );

program
  .command("remove <_id>")
  .alias("r")
  .description("remove a registered person")
  .action((_id) => removePerson(_id));

program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => listPersons());

program.parse(process.argv);
