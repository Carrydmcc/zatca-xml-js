export declare const valid_simplified_invoice_xml_sample = "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Invoice xmlns=\"urn:oasis:names:specification:ubl:schema:xsd:Invoice-2\" xmlns:cac=\"urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2\" xmlns:cbc=\"urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2\" xmlns:ext=\"urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2\"><ext:UBLExtensions>\n    <ext:UBLExtension>\n        <ext:ExtensionURI>urn:oasis:names:specification:ubl:dsig:enveloped:xades</ext:ExtensionURI>\n        <ext:ExtensionContent>\n            <!-- Please note that the signature values are sample values only -->\n            <sig:UBLDocumentSignatures xmlns:sig=\"urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2\" xmlns:sac=\"urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2\" xmlns:sbc=\"urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2\">\n                <sac:SignatureInformation>\n                    <cbc:ID>urn:oasis:names:specification:ubl:signature:1</cbc:ID>\n                    <sbc:ReferencedSignatureID>urn:oasis:names:specification:ubl:signature:Invoice</sbc:ReferencedSignatureID>\n                    <ds:Signature xmlns:ds=\"http://www.w3.org/2000/09/xmldsig#\" Id=\"signature\">\n                        <ds:SignedInfo>\n                            <ds:CanonicalizationMethod Algorithm=\"http://www.w3.org/2006/12/xml-c14n11\"/>\n                            <ds:SignatureMethod Algorithm=\"http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256\"/>\n                            <ds:Reference Id=\"invoiceSignedData\" URI=\"\">\n                                <ds:Transforms>\n                                    <ds:Transform Algorithm=\"http://www.w3.org/TR/1999/REC-xpath-19991116\">\n                                        <ds:XPath>not(//ancestor-or-self::ext:UBLExtensions)</ds:XPath>\n                                    </ds:Transform>\n                                    <ds:Transform Algorithm=\"http://www.w3.org/TR/1999/REC-xpath-19991116\">\n                                        <ds:XPath>not(//ancestor-or-self::cac:Signature)</ds:XPath>\n                                    </ds:Transform>\n                                    <ds:Transform Algorithm=\"http://www.w3.org/TR/1999/REC-xpath-19991116\">\n                                        <ds:XPath>not(//ancestor-or-self::cac:AdditionalDocumentReference[cbc:ID='QR'])</ds:XPath>\n                                    </ds:Transform>\n                                    <ds:Transform Algorithm=\"http://www.w3.org/2006/12/xml-c14n11\"/>\n                                </ds:Transforms>\n                                <ds:DigestMethod Algorithm=\"http://www.w3.org/2001/04/xmlenc#sha256\"/>\n                                <ds:DigestValue>oeRPH/CKLQuledRrrl2ckczL9bmtn7c8mxBFtNZkTRg=</ds:DigestValue>\n                            </ds:Reference>\n                            <ds:Reference Type=\"http://www.w3.org/2000/09/xmldsig#SignatureProperties\" URI=\"#xadesSignedProperties\">\n                                <ds:DigestMethod Algorithm=\"http://www.w3.org/2001/04/xmlenc#sha256\"/>\n                                <ds:DigestValue>MjNlMDdlOTNlNTAyMjJlMjRjNWZiY2RkOWRhNWE0ZGI1ODgxZGRkZjJiZWExZjA2ZTNhY2RlYzFjMTFlZjE5MA==</ds:DigestValue>\n                            </ds:Reference>\n                        </ds:SignedInfo>\n                        <ds:SignatureValue>MEUCICn7TLKk1k0Oxwd5TSZYKPNRMlL917+UOb3G399Bqj1VAiEA2iYaadaGDQnGoXmbI4wPW41bbbXYfY9262awA2hWDZU=</ds:SignatureValue>\n                        <ds:KeyInfo>\n                            <ds:X509Data>\n                                <ds:X509Certificate>MIID9jCCA5ugAwIBAgITbwAAeCy9aKcLA99HrAABAAB4LDAKBggqhkjOPQQDAjBjMRUwEwYKCZImiZPyLGQBGRYFbG9jYWwxEzARBgoJkiaJk/IsZAEZFgNnb3YxFzAVBgoJkiaJk/IsZAEZFgdleHRnYXp0MRwwGgYDVQQDExNUU1pFSU5WT0lDRS1TdWJDQS0xMB4XDTIyMDQxOTIwNDkwOVoXDTI0MDQxODIwNDkwOVowWTELMAkGA1UEBhMCU0ExEzARBgNVBAoTCjMxMjM0NTY3ODkxDDAKBgNVBAsTA1RTVDEnMCUGA1UEAxMeVFNULS05NzA1NjAwNDAtMzEyMzQ1Njc4OTAwMDAzMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEYYMMoOaFYAhMO/steotfZyavr6p11SSlwsK9azmsLY7b1b+FLhqMArhB2dqHKboxqKNfvkKDePhpqjui5hcn0aOCAjkwggI1MIGaBgNVHREEgZIwgY+kgYwwgYkxOzA5BgNVBAQMMjEtVFNUfDItVFNUfDMtNDdmMTZjMjYtODA2Yi00ZTE1LWIyNjktN2E4MDM4ODRiZTljMR8wHQYKCZImiZPyLGQBAQwPMzEyMzQ1Njc4OTAwMDAzMQ0wCwYDVQQMDAQxMTAwMQwwCgYDVQQaDANUU1QxDDAKBgNVBA8MA1RTVDAdBgNVHQ4EFgQUO5ZiU7NakU3eejVa3I2S1B2sDwkwHwYDVR0jBBgwFoAUdmCM+wagrGdXNZ3PmqynK5k1tS8wTgYDVR0fBEcwRTBDoEGgP4Y9aHR0cDovL3RzdGNybC56YXRjYS5nb3Yuc2EvQ2VydEVucm9sbC9UU1pFSU5WT0lDRS1TdWJDQS0xLmNybDCBrQYIKwYBBQUHAQEEgaAwgZ0wbgYIKwYBBQUHMAGGYmh0dHA6Ly90c3RjcmwuemF0Y2EuZ292LnNhL0NlcnRFbnJvbGwvVFNaRWludm9pY2VTQ0ExLmV4dGdhenQuZ292LmxvY2FsX1RTWkVJTlZPSUNFLVN1YkNBLTEoMSkuY3J0MCsGCCsGAQUFBzABhh9odHRwOi8vdHN0Y3JsLnphdGNhLmdvdi5zYS9vY3NwMA4GA1UdDwEB/wQEAwIHgDAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwMwJwYJKwYBBAGCNxUKBBowGDAKBggrBgEFBQcDAjAKBggrBgEFBQcDAzAKBggqhkjOPQQDAgNJADBGAiEA7mHT6yg85jtQGWp3M7tPT7Jk2+zsvVHGs3bU5Z7YE68CIQD60ebQamYjYvdebnFjNfx4X4dop7LsEBFCNSsLY0IFaQ==</ds:X509Certificate>\n                            </ds:X509Data>\n                        </ds:KeyInfo>\n                        <ds:Object>\n                            <xades:QualifyingProperties xmlns:xades=\"http://uri.etsi.org/01903/v1.3.2#\" Target=\"signature\">\n                                <xades:SignedProperties Id=\"xadesSignedProperties\">\n                                    <xades:SignedSignatureProperties>\n                                        <xades:SigningTime>2022-09-10T22:19:53Z</xades:SigningTime>\n                                        <xades:SigningCertificate>\n                                            <xades:Cert>\n                                                <xades:CertDigest>\n                                                    <ds:DigestMethod Algorithm=\"http://www.w3.org/2001/04/xmlenc#sha256\"/>\n                                                    <ds:DigestValue>NjlhOTVmYzIzN2I0MjcxNGRjNDQ1N2EzM2I5NGNjNDUyZmQ5ZjExMDUwNGM2ODNjNDAxMTQ0ZDk1NDQ4OTRmYg==</ds:DigestValue>\n                                                </xades:CertDigest>\n                                                <xades:IssuerSerial>\n                                                    <ds:X509IssuerName>CN=TSZEINVOICE-SubCA-1, DC=extgazt, DC=gov, DC=local</ds:X509IssuerName>\n                                                    <ds:X509SerialNumber>2475382876776561391517206651645660279462721580</ds:X509SerialNumber>\n                                                </xades:IssuerSerial>\n                                            </xades:Cert>\n                                        </xades:SigningCertificate>\n                                    </xades:SignedSignatureProperties>\n                                </xades:SignedProperties>\n                            </xades:QualifyingProperties>\n                        </ds:Object>\n                    </ds:Signature>\n                </sac:SignatureInformation>\n            </sig:UBLDocumentSignatures>\n        </ext:ExtensionContent>\n    </ext:UBLExtension>\n</ext:UBLExtensions>\n  <cbc:ProfileID>reporting:1.0</cbc:ProfileID>\n  <cbc:ID>SME00062</cbc:ID>\n  <cbc:UUID>6f4d20e0-6bfe-4a80-9389-7dabe6620f12</cbc:UUID>\n  <cbc:IssueDate>2022-03-13</cbc:IssueDate>\n  <cbc:IssueTime>14:40:40</cbc:IssueTime>\n  <cbc:InvoiceTypeCode name=\"0211010\">388</cbc:InvoiceTypeCode>\n  <cbc:DocumentCurrencyCode>SAR</cbc:DocumentCurrencyCode>\n  <cbc:TaxCurrencyCode>SAR</cbc:TaxCurrencyCode>\n  <cac:AdditionalDocumentReference>\n    <cbc:ID>ICV</cbc:ID>\n    <cbc:UUID>62</cbc:UUID>\n  </cac:AdditionalDocumentReference>\n  <cac:AdditionalDocumentReference>\n    <cbc:ID>PIH</cbc:ID>\n    <cac:Attachment>\n      <cbc:EmbeddedDocumentBinaryObject mimeCode=\"text/plain\">NWZlY2ViNjZmZmM4NmYzOGQ5NTI3ODZjNmQ2OTZjNzljMmRiYzIzOWRkNGU5MWI0NjcyOWQ3M2EyN2ZiNTdlOQ==</cbc:EmbeddedDocumentBinaryObject>\n    </cac:Attachment>\n  </cac:AdditionalDocumentReference>\n  <cac:AdditionalDocumentReference>\n        <cbc:ID>QR</cbc:ID>\n        <cac:Attachment>\n            <cbc:EmbeddedDocumentBinaryObject mimeCode=\"text/plain\">ARdBaG1lZCBNb2hhbWVkIEFMIEFobWFkeQIPMzAxMTIxOTcxNTAwMDAzAxQyMDIyLTAzLTEzVDE0OjQwOjQwWgQGMTEwOC45BQUxNDQuOQYsb2VSUEgvQ0tMUXVsZWRScnJsMmNrY3pMOWJtdG43YzhteEJGdE5aa1RSZz0HYE1FVUNJQ243VExLazFrME94d2Q1VFNaWUtQTlJNbEw5MTcrVU9iM0czOTlCcWoxVkFpRUEyaVlhYWRhR0RRbkdvWG1iSTR3UFc0MWJiYlhZZlk5MjYyYXdBMmhXRFpVPQhYMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEYYMMoOaFYAhMO/steotfZyavr6p11SSlwsK9azmsLY7b1b+FLhqMArhB2dqHKboxqKNfvkKDePhpqjui5hcn0QlIMEYCIQDuYdPrKDzmO1AZanczu09PsmTb7Oy9UcazdtTlntgTrwIhAPrR5tBqZiNi915ucWM1/Hhfh2insuwQEUI1KwtjQgVp</cbc:EmbeddedDocumentBinaryObject>\n        </cac:Attachment>\n</cac:AdditionalDocumentReference><cac:Signature>\n      <cbc:ID>urn:oasis:names:specification:ubl:signature:Invoice</cbc:ID>\n      <cbc:SignatureMethod>urn:oasis:names:specification:ubl:dsig:enveloped:xades</cbc:SignatureMethod>\n</cac:Signature><cac:AccountingSupplierParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID schemeID=\"CRN\">454634645645654</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PostalAddress>\n        <cbc:StreetName>test</cbc:StreetName>\n        <cbc:BuildingNumber>3454</cbc:BuildingNumber>\n        <cbc:PlotIdentification>1234</cbc:PlotIdentification>\n        <cbc:CitySubdivisionName>fgff</cbc:CitySubdivisionName>\n        <cbc:CityName>Riyadh</cbc:CityName>\n        <cbc:PostalZone>12345</cbc:PostalZone>\n        <cbc:CountrySubentity>test</cbc:CountrySubentity>\n        <cac:Country>\n          <cbc:IdentificationCode>SA</cbc:IdentificationCode>\n        </cac:Country>\n      </cac:PostalAddress>\n      <cac:PartyTaxScheme>\n        <cbc:CompanyID>301121971500003</cbc:CompanyID>\n        <cac:TaxScheme>\n          <cbc:ID>VAT</cbc:ID>\n        </cac:TaxScheme>\n      </cac:PartyTaxScheme>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName>Ahmed Mohamed AL Ahmady</cbc:RegistrationName>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingSupplierParty>\n  <cac:AccountingCustomerParty>\n    <cac:Party>\n      <cac:PartyIdentification>\n        <cbc:ID schemeID=\"NAT\">2345</cbc:ID>\n      </cac:PartyIdentification>\n      <cac:PostalAddress>\n        <cbc:StreetName>baaoun</cbc:StreetName>\n        <cbc:AdditionalStreetName>sdsd</cbc:AdditionalStreetName>\n        <cbc:BuildingNumber>3353</cbc:BuildingNumber>\n        <cbc:PlotIdentification>3434</cbc:PlotIdentification>\n        <cbc:CitySubdivisionName>fgff</cbc:CitySubdivisionName>\n        <cbc:CityName>Dhurma</cbc:CityName>\n        <cbc:PostalZone>34534</cbc:PostalZone>\n        <cbc:CountrySubentity>ulhk</cbc:CountrySubentity>\n        <cac:Country>\n          <cbc:IdentificationCode>SA</cbc:IdentificationCode>\n        </cac:Country>\n      </cac:PostalAddress>\n      <cac:PartyTaxScheme>\n        <cac:TaxScheme>\n          <cbc:ID>VAT</cbc:ID>\n        </cac:TaxScheme>\n      </cac:PartyTaxScheme>\n      <cac:PartyLegalEntity>\n        <cbc:RegistrationName>sdsa</cbc:RegistrationName>\n      </cac:PartyLegalEntity>\n    </cac:Party>\n  </cac:AccountingCustomerParty>\n  <cac:Delivery>\n    <cbc:ActualDeliveryDate>2022-03-13</cbc:ActualDeliveryDate>\n    <cbc:LatestDeliveryDate>2022-03-15</cbc:LatestDeliveryDate>\n  </cac:Delivery>\n  <cac:PaymentMeans>\n    <cbc:PaymentMeansCode>10</cbc:PaymentMeansCode>\n  </cac:PaymentMeans>\n  <cac:AllowanceCharge>\n    <cbc:ID>1</cbc:ID>\n    <cbc:ChargeIndicator>false</cbc:ChargeIndicator>\n    <cbc:AllowanceChargeReason>discount</cbc:AllowanceChargeReason>\n    <cbc:Amount currencyID=\"SAR\">2</cbc:Amount>\n    <cac:TaxCategory>\n      <cbc:ID schemeAgencyID=\"6\" schemeID=\"UN/ECE 5305\">S</cbc:ID>\n      <cbc:Percent>15</cbc:Percent>\n      <cac:TaxScheme>\n        <cbc:ID schemeAgencyID=\"6\" schemeID=\"UN/ECE 5153\">VAT</cbc:ID>\n      </cac:TaxScheme>\n    </cac:TaxCategory>\n  </cac:AllowanceCharge>\n  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID=\"SAR\">144.9</cbc:TaxAmount>\n    <cac:TaxSubtotal>\n      <cbc:TaxableAmount currencyID=\"SAR\">966</cbc:TaxableAmount>\n      <cbc:TaxAmount currencyID=\"SAR\">144.9</cbc:TaxAmount>\n      <cac:TaxCategory>\n        <cbc:ID schemeAgencyID=\"6\" schemeID=\"UN/ECE 5305\">S</cbc:ID>\n        <cbc:Percent>15</cbc:Percent>\n        <cac:TaxScheme>\n          <cbc:ID schemeAgencyID=\"6\" schemeID=\"UN/ECE 5153\">VAT</cbc:ID>\n        </cac:TaxScheme>\n      </cac:TaxCategory>\n    </cac:TaxSubtotal>\n  </cac:TaxTotal>\n  <cac:TaxTotal>\n    <cbc:TaxAmount currencyID=\"SAR\">144.9</cbc:TaxAmount>\n  </cac:TaxTotal>\n  <cac:LegalMonetaryTotal>\n    <cbc:LineExtensionAmount currencyID=\"SAR\">966</cbc:LineExtensionAmount>\n    <cbc:TaxExclusiveAmount currencyID=\"SAR\">964</cbc:TaxExclusiveAmount>\n    <cbc:TaxInclusiveAmount currencyID=\"SAR\">1108.9</cbc:TaxInclusiveAmount>\n    <cbc:AllowanceTotalAmount currencyID=\"SAR\">2</cbc:AllowanceTotalAmount>\n    <cbc:PrepaidAmount currencyID=\"SAR\">0</cbc:PrepaidAmount>\n    <cbc:PayableAmount currencyID=\"SAR\">1108.9</cbc:PayableAmount>\n  </cac:LegalMonetaryTotal>\n  <cac:InvoiceLine>\n    <cbc:ID>1</cbc:ID>\n    <cbc:InvoicedQuantity unitCode=\"PCE\">44</cbc:InvoicedQuantity>\n    <cbc:LineExtensionAmount currencyID=\"SAR\">966</cbc:LineExtensionAmount>\n    <cac:TaxTotal>\n      <cbc:TaxAmount currencyID=\"SAR\">144.9</cbc:TaxAmount>\n      <cbc:RoundingAmount currencyID=\"SAR\">1110.9</cbc:RoundingAmount>\n    </cac:TaxTotal>\n    <cac:Item>\n      <cbc:Name>dsd</cbc:Name>\n      <cac:ClassifiedTaxCategory>\n        <cbc:ID>S</cbc:ID>\n        <cbc:Percent>15</cbc:Percent>\n        <cac:TaxScheme>\n          <cbc:ID>VAT</cbc:ID>\n        </cac:TaxScheme>\n      </cac:ClassifiedTaxCategory>\n    </cac:Item>\n    <cac:Price>\n      <cbc:PriceAmount currencyID=\"SAR\">22</cbc:PriceAmount>\n      <cac:AllowanceCharge>\n        <cbc:ChargeIndicator>false</cbc:ChargeIndicator>\n        <cbc:AllowanceChargeReason>discount</cbc:AllowanceChargeReason>\n        <cbc:Amount currencyID=\"SAR\">2</cbc:Amount>\n      </cac:AllowanceCharge>\n    </cac:Price>\n  </cac:InvoiceLine>\n</Invoice>";
//# sourceMappingURL=index.d.ts.map