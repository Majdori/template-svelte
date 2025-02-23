import pino from "pino";
import PinoLoki from "pino-loki";

const LOKI_URL = process.env.LOKI_URL || "http://localhost:3100";
const NODE_ENV = process.env.NODE_ENV || "development";

const transport =
  NODE_ENV === "production"
    ? PinoLoki({
        host: LOKI_URL,
        interval: 5,
        labels: { app: "sveltekit-app" },
      })
    : pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
        },
      });

const logger = pino(
  {
    level: "info",
    base: { service: "sveltekit-backend" },
  },
  transport
);

export default logger;
