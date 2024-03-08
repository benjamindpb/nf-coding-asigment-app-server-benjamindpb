import express from 'express';
import cors from 'cors';
import projectsRoutes from "./routes/project.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(projectsRoutes);

app.get('/', (_req, res) => res.send('Hello World!'));

export default app;