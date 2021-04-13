export interface Prestation {
  id: number;
  name: string;
  is_service: number;
  thumbnail_image: string;
  base_price: string;
  unit_price: number;
  rating: number;
  sales: number;
  links: {
      details: string
  };
  description: string;
}
