export function getCompanyPostalAddress(): string {
  const address = process.env.COMPANY_POSTAL_ADDRESS?.trim();
  if (!address) {
    throw new Error(
      'COMPANY_POSTAL_ADDRESS is required before sending newsletter email',
    );
  }
  return address;
}
