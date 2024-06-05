import { XMLDocument } from "../parser";
import { ZATCASimplifiedInvoiceLineItem, ZATCAInvoiceTypes, ZATCAPaymentMethods } from "./templates/simplified_tax_invoice_template";
import { ZATCAStandardInvoiceCustomer, ZATCAStandardInvoiceProps } from "./templates/standard_tax_invoice_template";
declare global {
    interface Number {
        toFixedNoRounding: (n: number) => string;
    }
}
export { ZATCASimplifiedInvoiceLineItem, ZATCAStandardInvoiceProps, ZATCAInvoiceTypes, ZATCAPaymentMethods, ZATCAStandardInvoiceCustomer };
export declare class ZATCAStandardTaxInvoice {
    private invoice_xml;
    /**
     * Parses a ZATCA Simplified Tax Invoice XML string. Or creates a new one based on given props.
     * @param invoice_xml_str Invoice XML string to parse.
     * @param props ZATCASimplifiedInvoiceProps props to create a new unsigned invoice.
     */
    constructor({ invoice_xml_str, props }: {
        invoice_xml_str?: string;
        props?: ZATCAStandardInvoiceProps;
    });
    private constructLineItemTotals;
    private constructLineItem;
    private constructLegalMonetaryTotal;
    private getTaxCategoryCode;
    private constructTaxTotal;
    private parseLineItems;
    getXML(): XMLDocument;
    /**
     * Signs the invoice.
     * @param certificate_string String signed EC certificate.
     * @param private_key_string String ec-secp256k1 private key;
     * @returns String signed invoice xml, includes QR generation.
     */
    sign(certificate_string: string, private_key_string: string): {
        signed_invoice_string: string;
        invoice_hash: string;
        qr: string;
    };
}
//# sourceMappingURL=ZATCAStandardTaxInvoice.d.ts.map