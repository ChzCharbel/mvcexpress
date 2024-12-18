import { Router } from "express";
import {
  getStudents,
  updateStudent,
  createStudent,
  deleteStudent,
} from "../controllers/student";
import validate from "../middlewares/validate";
import { studentSchema } from "../schemas/student";

const router = Router();

router.get("/", getStudents);
router.post("/", validate(studentSchema), createStudent);
router.put("/:id", validate(studentSchema), updateStudent);
router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);

export default router;
