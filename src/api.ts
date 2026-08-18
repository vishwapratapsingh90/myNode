import { Router } from "express";
import v1Router from "./api/v1";

const router = Router();

// Mount routers under /api/v1
router.use("/v1", v1Router);

export default router;
