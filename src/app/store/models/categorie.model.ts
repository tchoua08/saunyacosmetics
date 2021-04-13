export interface Categorie {
  id: number;
  name: string;
  banner: string;
  icon: string;
  number_of_children: number;
  links: {
      products: string;
      sub_categories: string;
  };
}

