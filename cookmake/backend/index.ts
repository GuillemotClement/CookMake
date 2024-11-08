import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});