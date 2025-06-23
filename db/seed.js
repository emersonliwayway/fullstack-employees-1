import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employees = [
    { name: "Akali", birthday: "2010-05-11", salary: 157500 },
    { name: "Amumu", birthday: "2009-06-26", salary: 225000 },
    { name: "Fiddlesticks", birthday: "2009-02-21", salary: 675000 },
    { name: "Gwen", birthday: "2021-04-15", salary: 240000 },
    { name: "Ezreal", birthday: "2010-03-16", salary: 67500 },
    { name: "Shieda Kayn", birthday: "2017-07-12", salary: 157500 },
    { name: "Neeko", birthday: "2018-13-05", salary: 240000 },
    { name: "Ahri", birthday: "2011-12-14", salary: 157500 },
    { name: "Taliyah", birthday: "2016-05-18", salary: 240000 },
    { name: "Lillia", birthday: "2020-07-22", salary: 240000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
