import xml, { Builder } from "xml2js";
import axios from "axios";
import { ApliedData } from "../interface/apliedData";
import { MonerisBodyData } from "../interface/moerisBody_data";
import xmlparser from "xml2json"
import { MonerisCredentials } from "../interface/monerisCredential";

const send = async (credentials : MonerisCredentials, req : ApliedData) =>  {
    const Builderoptions = {rootName: "request"}
    const xmlBuilder : Builder   = new xml.Builder(Builderoptions)
    try {
        if (!credentials || !req || !req.type || !credentials.store_id || !credentials.api_token) {
            return new Error('Requires country_code, store_id, api_token')
          }
          var data : MonerisBodyData = {
              store_id: credentials.store_id,
              api_token : credentials.api_token,
              [`${req.type}`] : req
          };
          console.log(data);
          
          const result : any = await axios.post( "https://esqa.moneris.com:443/gateway2/servlet/MpgRequest", xmlBuilder.buildObject(data), {headers:{
              'User-Agent': "PHP NA - 1.0.5"
            }, timeout: 30000} )
          
          return JSON.parse( xmlparser.toJson(result.data));
    } catch (error) {
      console.log(error);
      
        return error
    }

  }


export default send ;