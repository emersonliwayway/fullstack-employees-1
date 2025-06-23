import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employees = [
    { name: "Akali", birthday: "05-11-2010", salary: 157500 },
    { name: "Amumu", birthday: "06-26-2009", salary: 225000 },
    { name: "Fiddlesticks", birthday: "02-21-2009", salary: 675000 },
    { name: "Gwen", birthday: "04-15-20021", salary: 240000 },
    { name: "Ezreal", birthday: "03-16-2010", salary: 67500 },
    { name: "Shieda Kayn", birthday: "07-12-2017", salary: 157500 },
    { name: "Neeko", birthday: "05-13-2018", salary: 240000 },
    { name: "Ahri", birthday: "12-14-2011", salary: 157500 },
    { name: "Taliyah", birthday: "05-18-2016", salary: 240000 },
    { name: "Lillia", birthday: "07-22-2020", salary: 240000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
