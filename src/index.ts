import 'reflect-metadata';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

//import provinciaRoutes from "./routes/provincia.routes";
import atencionRoutes from "./routes/atencion.routes";
//import photoRoutes from "./routes/photo.routes";

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
//app.use(provinciaRoutes);
app.use(atencionRoutes);
//app.use(photoRoutes);

app.listen(3000);
console.log("Server on port", 3000);
