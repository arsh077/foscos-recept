export interface InvoiceData {
  state: string;
  refNo: string;
  date: string;
  companyName: string;
  licenseCategory: string;
  address: string;
  kindOfBusiness: string;
  paymentMode: string;
  registrationFee: string;
  totalFee: string;
  transactionNo: string;
  razorPayId: string;
}

export const initialData: InvoiceData = {
  state: "Haryana",
  refNo: "30260212123338101",
  date: "13-02-2026",
  companyName: "GHAR KA ZAAYIKA",
  licenseCategory: "Registration [Haryana] [New Registration]",
  address: "Gali no 1, near Mohan kiryana store, mill gate, hisar 125001, Hisar (Rural)(146), Hisar, Hisar, , Haryana, 125001",
  kindOfBusiness: "Food Services - Food Vending Establishment",
  paymentMode: "Razorpay",
  registrationFee: "Rs 1000 (1 Year(s))",
  totalFee: "Rs 1000.00",
  transactionNo: "447399082294460945875634",
  razorPayId: "447399082294460945875634"
};