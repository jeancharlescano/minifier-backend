import cors from "@fastify/cors";
import { createMinifier, getMinifiers } from "../controller/url.controller.js";

const routes = async (fastify) => {
  fastify.register(cors, { origin: true });

  fastify.post("/", createMinifier);
  fastify.get("/", getMinifiers);
};

export default routes;
