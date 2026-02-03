import winston from 'winston';
const { combine, timestamp, errors, json } = winston.format;

const isProd = process.env.NODE_ENV === "production";

const logFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || (isProd ? "info" : "debug"),
  format: logFormat,
  // this logger should only be used for api-service from next
  defaultMeta: {
    service: "bitspace-website-api",
  },
  transports: [
    new winston.transports.Console(),
  ],
  exitOnError: false,
});

export default logger;
