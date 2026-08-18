import { Router } from "express";
import userRouter from "./v1/user";
import courseRouter from "./v1/course";

const router = Router();

// Mount routers under /api/v1/... like /api/v1/users
router.use("/users", userRouter);
router.use("/courses", courseRouter);

export default router;
