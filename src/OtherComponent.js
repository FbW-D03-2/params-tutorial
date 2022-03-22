import { useParams } from "react-router-dom";
import { useState } from "react";

const OtherComponent = () => {
    const { param1 } = useParams();
    const [invoices, setInvoices] = useState([
        {
            id: 0,
            amount: 100,
            paid: false
        },
        {
            id: 1,
            amount: 200,
            paid: true
        }
    ]);
    const getInvoice = () => {
        const invoiceObj = invoices.find((invoice) => {
            return param1 === invoice.id.toString();
        });
        return invoiceObj;
    }   
    return(<>
    <p> Rendering other Component: {getInvoice()?.amount}</p>
    </>)
}

export default OtherComponent;