import { ApliedData } from "./apliedData"
export interface MonerisBodyData {
    store_id: string,
    api_token: string,
    purchase?: ApliedData
}