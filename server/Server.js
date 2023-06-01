import express from "express";
import * as dotenv from "dotenv";
import { DBconnection } from "./database/configmongodb.js";
import user from "./routes/users.routes.js";
import post from "./routes/post.routes.js";
import comment from "./routes/comment.routes.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

class Server {
  constructor() {
    this.headers = {
      cors: {
        origin: "http://localhost:4000",
        methods: ["GET", "POST"],
      },
    };

    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server, this.headers);

    this.paths = {
      auth: "/api/auth",
      user: "/api/user",
    };

    this.setRoutes();

    this.sockets();
  }

  async connectDB() {
    await DBconnection();
  }
}
