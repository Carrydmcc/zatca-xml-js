import { ZATCASimplifiedInvoiceProps } from "./simplified_tax_invoice_template";
export interface ZATCAStandardInvoiceCustomer {
    registered_name: string;
    street: string;
    additional_street_name: string;
    building_number: string;
    plot_Identification: string;
    city_subdivision_name: string;
    city: string;
    postcode: string;
    country_subentity: string;
    country: string;
    vat_id?: string;
    crn?: string;
}
export interface ZATCAStandardInvoiceProps extends ZATCASimplifiedInvoiceProps {
    customer: ZATCAStandardInvoiceCustomer;
}
export default function populate(props: ZATCAStandardInvoiceProps): string;
//# sourceMappingURL=standard_tax_invoice_template.d.ts.map