import pino from 'pino'

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: 'pid,hostname',
    timestampKey: ''
  }
})

export default logger
