

const fetch = require('node-fetch')
const { Core } = require('@adobe/aio-sdk')
const stateLib = require('@adobe/aio-lib-state')
const crypto = require("crypto")
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  // create a Logger
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  try {
    // 'info' is the default level if not set
    logger.info('Calling the main action')

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params))

    // // check for missing request input parameters and headers
    // const requiredParams = [/* add required params */]
    // const requiredHeaders = ['Authorization']
    // const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
    // if (errorMessage) {
    //   // return and log client errors
    //   return errorResponse(400, errorMessage, logger)
    // }

    // extract the user Bearer token from the Authorization header
    const token = getBearerToken(params)

    // init when running in an Adobe I/O Runtime action (OpenWhisk) (uses env vars __OW_API_KEY and __OW_NAMESPACE automatically)
    const state = await stateLib.init()
    let res1 = await state.get('privateValue1')
    let res2 = await state.get('privateValue2')
    if (!res1 || !res2) {
      res1 = { value: crypto.randomBytes(2048).toString('hex') }
      res2 = { value: crypto.randomBytes(2048).toString('hex') }
      await state.put('privateValue1', res1.value)
      await state.put('privateValue1', res2.value)
    }

    const response = {
      statusCode: 200,
      body: { 
        key1: res1.value, 
        key2: res2.value
      }
    }

    // log the response status code
    logger.info(`${response.statusCode}: successful request`)
    return response
  } catch (error) {
    // log any server errors
    logger.error(error)
    // return with 500
    return errorResponse(500, 'server error', logger)
  }
}

exports.main = main
