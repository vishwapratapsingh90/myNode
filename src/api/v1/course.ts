import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(["Beginners Course", "Advanced Course", "Expert Course"]);
});

export default router;
