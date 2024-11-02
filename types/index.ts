export type TProduct = {
  id: string; // Unique identifier for the product
  category: string; // Category of the product, e.g., 'chocolate'
  code: string; // Product code, e.g., 'dd-001'
  nameAr: string; // Name in Arabic, e.g., 'تمر اللوز'
  nameEn: string; // Name in English, e.g., 'Almond Dates'
  price: number; // Price of the product, e.g., 2033
  status: "running" | "stopped"; // Status of the product, limited to 'running' or 'stopped'
  image: string; // URL of the product image
  createdAt: string; // Creation date, in ISO format
  updatedAt: string; // Update date, in ISO format
};

export type TUser={
  email:string;
  id:string;
  image:string | null;
  name:string
}