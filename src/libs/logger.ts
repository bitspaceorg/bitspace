import winston from 'winston';
const { combine, timestamp, errors, json } = winston.format;

const isProd = process.env.NODE_ENV === "production";

const logFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

export const createServiceLogger = (service: String) => winston.createLogger({
  level: process.env.LOG_LEVEL || (isProd ? "info" : "debug"),
  format: logFormat,
  defaultMeta: { service },
  transports: [
    new winston.transports.Console(),
  ],
  exitOnError: false,
});

// should use logger in /api  calls only
export default createServiceLogger("bs-website-api");
