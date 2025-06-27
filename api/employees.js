import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

// GET all employees
router
  .route("/")
  .get(async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
  })
  .post(async (req, res) => {
    if (!req.body) return res.status(400).send("Body is not provided.");

    const { name, birthday, salary } = req.body;
    if (!name || !birthday || !salary)
      return res
        .status(400)
        .send("Request body must include: name, birthday, salary");

    // create employee
    const employee = await createEmployee({ name, birthday, salary });
    res.status(201).send(employee);
  });

// GET employee with specific ID
router.param("id", async (req, res, next, id) => {
  if (!/^\d+$/.test(id))
    return res.status(400).send("ID must be a positive integer.");

  const employee = await getEmployee(id);
  if (!employee) return res.status(404).send("Employee does not exist.");

  req.employee = employee;
  next();
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(req.employee);
  })
  .put(async (req, res) => {
    if (!req.body) return res.status(400).send("Request must have a body.");

    const { name, birthday, salary } = req.body;
    if (!name || !birthday || !salary)
      return res
        .status(400)
        .send("Request body must include: name, birthday, salary.");

    const employee = await updateEmployee({
      id: req.employee.id,
      name,
      birthday,
      salary,
    });
    res.status(200).send(employee);
  })
  .delete(async (req, res) => {
    await deleteEmployee(req.employee.id);
    res.sendStatus(204);
  });
