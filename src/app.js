import Fastify from "fastify";

import minifierRoutes from "./router/url.routes.js";

export const fastify = Fastify();

const buildApp = async () => {
  fastify.register(minifierRoutes, { prefix: "/mini" });
  return fastify;
};
export default buildApp;
