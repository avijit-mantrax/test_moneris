export  interface  MonerisDataResponse {
    response:{
        receipt: {
            ReceiptId: number | string | null,
            ReferenceNum: number | string | null,
            ResponseCode: number | string | null,
            ISO: number | string | null,
            AuthCode: number | string | null,
            TransTime: number | string | null,
            TransDate: number | string | null,
            TransType: number | string | null,
            Complete: string,
            Message: string,
            TransAmount: number | string | null,
            CardType: number | string | null,
            TransID: number | string | null,
            TimedOut: boolean,
            BankTotals: number | string | null,
            Ticket: number | string | null,
            IsVisaDebit: boolean
          }
    }
}
