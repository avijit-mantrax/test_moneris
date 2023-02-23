import { Response, Request } from "express";
import send from "./moneris_event";
import { MonerisDataResponse } from "../interface/monerisDataResponse";
import { api_token, cyper_type, store_id, test_mode } from "../config";
import { MonerisCredentials } from "../interface/monerisCredential";
import { ApliedData } from "../interface/apliedData";



var credentials : MonerisCredentials = {
    store_id: store_id,
    api_token: api_token,
    test:  test_mode === "true" ? true : false
  }

  const Purchase = async (req: Request, res: Response) => {
    console.log(req.body);
    
    var purchase :ApliedData = {
        type: 'purchase',
        cust_id: 'custid1',
        order_id: 'order2' + Date.now() ,
        amount: `${5.99 * 2}`,
        pan: req.body.pan, // atm card
        expdate: req.body.expdate,
        crypt_type: parseInt(cyper_type || "7"),
        dynamic_descriptor: "Two drinks",
        status_check: false
      }
    const result : MonerisDataResponse = await send(credentials, purchase);
    console.log(result.response);
    result.response.receipt.Complete === "true" ?  res.status(201).json(result.response.receipt) : res.status(400).json(result.response.receipt)
  }
  export default Purchase;