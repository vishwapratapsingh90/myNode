import { Router, Request, Response } from "express";

export interface UserInterface {
  id: number;
  name: string;
}

const router = Router();

// In-memory database
let users: UserInterface[] = [];

// Get all users
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(users);
});

// Add new user
router.post("/", (req: Request, res: Response) => {
  const user = req.body as UserInterface;
  users.push(user);
  res.status(201).json(user);
});

console.log("src/user router loaded");

export default router;
