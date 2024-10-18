// routes/user.ts

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Listado de Usuarios");
});

export default router;
