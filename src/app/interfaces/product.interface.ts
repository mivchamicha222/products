export interface Product {
  id: number;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}

export interface FinancialProducts {
  data: Product[];
}