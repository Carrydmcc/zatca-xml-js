import {EGS, EGSUnitInfo} from "../zatca/egs";
import {
    ZATCAInvoiceTypes,
    ZATCAPaymentMethods,
    ZATCASimplifiedInvoiceLineItem
} from "../zatca/templates/simplified_tax_invoice_template";
import {ZATCAStandardTaxInvoice} from "../zatca/ZATCAStandardTaxInvoice";
import {ZATCASimplifiedTaxInvoice} from "../zatca/ZATCASimplifiedTaxInvoice";
import {ENV} from "../";

// Sample line item
const line_item: ZATCASimplifiedInvoiceLineItem = {
    name: 'delivery charges',
    id: '1',
    quantity: 1,
    tax_exclusive_price: 15,
    VAT_percent: 0.15,
    other_taxes: [],
    discounts: [],
    VAT_exemption_reason: 'just testing',
};

// Sample EGSUnit
const egsunit: EGSUnitInfo = {
    uuid: "6f4d20e0-6bfe-4a80-9389-7dabe6620f12",
    current_invoice_uuid: '74D50812-BA66-4934-836E-6020EEF80415',
    custom_id: 'EGS1-886431145',
    model: 'IOS', // model or version
    CRN_number: '454634645645654', // Commercial registration number
    VAT_name: 'Wesam Alzahir',
    VAT_number: '301121971500003', // Take it from the FATOORA portal
    location: { // invoice supplier/seller (Shipa information)
        city: 'Khobar',
        city_subdivision: 'West',
        street: 'King Fahahd st',
        plot_identification: '0000', // no documentation
        building: '0000',
        postal_zone: '31952',
    },
    // The below fields are for a CSR generation
    branch_name: 'My Branch Name',
    branch_industry: 'Food',
};

const invoiceData = {
    props: {
        customer: {
            registered_name: 'Deepali',
            city: 'Dammam',
            street: 'Al Malaz, Riyadh Saudi Arabia, Dammam, Test',
            country: 'SA',
            additional_street_name: '',
            building_number: '42',
            city_subdivision_name: 'Dammam',
            country_subentity: '',
            plot_Identification: '',
            postcode: '13712'
        },
        egs_info: egsunit,
        invoice_counter_number: 1,
        invoice_serial_number: '74D50812-BA66-4934-836E-6020EEF80415',
        issue_date: '2024-05-30',
        issue_time: '15:14:57',
        // For the first invoice,
        // the previous invoice hash is 'NWZlY2ViNjZmZmM4NmYzOGQ5NTI3ODZjNmQ2OTZjNzljMmRiYzIzOWRkNGU5MWI0NjcyOWQ3M2EyN2ZiNTdlOQ==',
        // the equivalent for base64 encoded SHA256 of '0' (zero)
        previous_invoice_hash: 'NWZlY2ViNjZmZmM4NmYzOGQ5NTI3ODZjNmQ2OTZjNzljMmRiYzIzOWRkNGU5MWI0NjcyOWQ3M2EyN2ZiNTdlOQ==',
        line_items: [line_item],
    },
}

// Sample Invoice
const simplifiedTaxInvoice = new ZATCASimplifiedTaxInvoice(invoiceData);

const simplifiedCreditNote = new ZATCASimplifiedTaxInvoice({
    ...invoiceData,
    props: {
        ...invoiceData.props,
        cancelation: {
            reason: 'just testing',
            payment_method: ZATCAPaymentMethods.CASH,
            cancelation_type: ZATCAInvoiceTypes.CREDIT_NOTE,
            canceled_invoice_number: invoiceData.props.invoice_serial_number,
        }
    },
});


const simplifiedDebitNote = new ZATCASimplifiedTaxInvoice({
    ...invoiceData,
    props: {
        ...invoiceData.props,
        cancelation: {
            reason: 'just testing',
            payment_method: ZATCAPaymentMethods.CASH,
            cancelation_type: ZATCAInvoiceTypes.DEBIT_NOTE,
            canceled_invoice_number: invoiceData.props.invoice_serial_number,
        }
    },
});

const standardTaxInvoice = new ZATCAStandardTaxInvoice(invoiceData);

const standardCreditNote = new ZATCAStandardTaxInvoice({
    ...invoiceData,
    props: {
        ...invoiceData.props,
        cancelation: {
            reason: 'just testing',
            payment_method: ZATCAPaymentMethods.CASH,
            cancelation_type: ZATCAInvoiceTypes.CREDIT_NOTE,
            canceled_invoice_number: invoiceData.props.invoice_serial_number,
        }
    },
});


const standardDebitNote = new ZATCAStandardTaxInvoice({
    ...invoiceData,
    props: {
        ...invoiceData.props,
        cancelation: {
            reason: 'just testing',
            payment_method: ZATCAPaymentMethods.CASH,
            cancelation_type: ZATCAInvoiceTypes.DEBIT_NOTE,
            canceled_invoice_number: invoiceData.props.invoice_serial_number,
        }
    },
});

const onboardEgsUnit = async () => {
    // Init a new EGS
    const egs = new EGS(egsunit, ENV.SIMULATION)

    await egs.generateNewKeysAndCSR(false, 'solution_name')

    // Issue a new compliance cert for the EGS
    // OTP code is generated using the FATOORA portal
    const compliance_request_id = await egs.issueComplianceCertificate('123345');


    // We need to check compliance for each type of invoice before issuing production certificate
    for (const invoice of [simplifiedTaxInvoice, simplifiedCreditNote, simplifiedDebitNote, standardTaxInvoice, standardCreditNote, standardDebitNote]) {
        const {signed_invoice_string, invoice_hash, qr} = egs.signInvoice(invoice, false);

        // Check invoice compliance
        await egs.checkInvoiceCompliance(signed_invoice_string, invoice_hash)
    }

    // Issue production certificate
    await egs.issueProductionCertificate(compliance_request_id);

    return egs
}


const main = async () => {
    try {
        // onboarding unit happens only once per the environment
        // after onboarding step we need to save egs unit to use it for invoices' clearance
        const egs = await onboardEgsUnit()

        const {signed_invoice_string, invoice_hash, qr} = egs.signInvoice(standardTaxInvoice, true);

        const clearanceResult = await egs.clearInvoice(signed_invoice_string, invoice_hash)

        const attributesThatNeedToBeStored = {
            signed_invoice_string,
            invoice_hash,
            qr,
            cryptographicStamp: clearanceResult.clearedInvoice,
        }

        console.log(attributesThatNeedToBeStored)
    } catch (error: any) {
        if (error.response?.data?.validationResults?.errorMessages) {
            return console.log(error.response.data.validationResults.errorMessages)
        }

        console.log(error.message ?? error);
    }
}


main();