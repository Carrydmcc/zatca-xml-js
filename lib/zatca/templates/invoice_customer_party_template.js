"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template = /* XML */ `
<cac:AccountingCustomerParty>
        <cac:Party>
            <cac:PartyIdentification>
                <cbc:ID schemeID="NAT">SET_CUSTOMER_CRN</cbc:ID>
            </cac:PartyIdentification>
            <cac:PostalAddress>
                <cbc:StreetName>SET_CUSTOMER_STREET</cbc:StreetName>
                <cbc:AdditionalStreetName>-</cbc:AdditionalStreetName>
                <cbc:BuildingNumber>SET_CUSTOMER_BUILDING_NUMBER</cbc:BuildingNumber>
                <cbc:PlotIdentification>SET_CUSTOMER_PLOT_IDENTIFICATION</cbc:PlotIdentification>
                <cbc:CitySubdivisionName>SET_CUSTOMER_CITY_SUB_DIVISION_NAME</cbc:CitySubdivisionName>
                <cbc:CityName>SET_CUSTOMER_CITY_NAME</cbc:CityName>
                <cbc:PostalZone>SET_CUSTOMER_POSTAL_CODE</cbc:PostalZone>
                <cbc:CountrySubentity>SET_CUSTOMER_SUB_ENTITY</cbc:CountrySubentity>
                <cac:Country>
                    <cbc:IdentificationCode>SET_CUSTOMER_COUNTRY_CODE</cbc:IdentificationCode>
                </cac:Country>
            </cac:PostalAddress>
            <cac:PartyTaxScheme>
                <cac:TaxScheme>
                    <cbc:ID>VAT</cbc:ID>
                </cac:TaxScheme>
            </cac:PartyTaxScheme>
            <cac:PartyLegalEntity>
                <cbc:RegistrationName>SET_CUSTOMER_REGISTERED_NAME</cbc:RegistrationName>
            </cac:PartyLegalEntity>
        </cac:Party>
    </cac:AccountingCustomerParty>
    <cac:Delivery>
        <cbc:ActualDeliveryDate>SET_ACTUAL_DELIVERY_DATE</cbc:ActualDeliveryDate>
        <cbc:LatestDeliveryDate>SET_LATEST_DELIVERY_DATE</cbc:LatestDeliveryDate>
    </cac:Delivery>`;
function populate(customer, date) {
    let populated_template = template;
    populated_template = populated_template.replace("SET_CUSTOMER_REGISTERED_NAME", `${customer.registered_name}`);
    populated_template = populated_template.replace("SET_CUSTOMER_STREET", `${customer.street}`);
    populated_template = populated_template.replace("SET_CUSTOMER_CITY_SUB_DIVISION_NAME", `${customer.city_subdivision_name}`);
    populated_template = populated_template.replace("SET_CUSTOMER_CITY_NAME", `${customer.city}`);
    populated_template = populated_template.replace("SET_CUSTOMER_POSTAL_CODE", `${customer.postcode}`);
    populated_template = populated_template.replace("SET_CUSTOMER_CRN", `${customer.crn || '000'}`);
    populated_template = populated_template.replace("SET_CUSTOMER_BUILDING_NUMBER", `${customer.building_number || '0000'}`);
    populated_template = populated_template.replace("SET_CUSTOMER_PLOT_IDENTIFICATION", `${customer.plot_Identification || '0000'}`);
    populated_template = populated_template.replace("SET_CUSTOMER_SUB_ENTITY", `${customer.country_subentity || '-'}`);
    populated_template = populated_template.replace("SET_CUSTOMER_COUNTRY_CODE", `${customer.country || 'SA'}`);
    populated_template = populated_template.replace("SET_ACTUAL_DELIVERY_DATE", `${date}`);
    populated_template = populated_template.replace("SET_LATEST_DELIVERY_DATE", `${date}`);
    /** TODO replace hardcoded values with replace */
    return populated_template;
}
exports.default = populate;
;
