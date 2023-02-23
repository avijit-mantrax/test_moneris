import dotenv from "dotenv"

dotenv.config()

export const cyper_type = process.env.PAYMENT_GATEWAY_CYPER_TYPE;
export const test_mode = process.env.PAYMENT_GATEWAY_ON_TEST_MODE;
export const api_token = process.env.PAYMENT_GATEWAY_API_TOKEN;
export const store_id = process.env.PAYMENT_GATEWAY_STORE_ID;
export const PAYMENT_GATEWAY_URL = process.env.PAYMENT_GATEWAY_URL;