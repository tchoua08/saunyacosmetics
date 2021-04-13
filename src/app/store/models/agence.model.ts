export interface Agence {
    name: string;
    id: number;
    user: {
        name: string;
        email: string;
        avatar:string;
        avatar_original: string ;
    };
    logo: string;
    
    sliders: {
        address: string;
        facebook: string;
        google: string;
        twitter: string;
        youtube: string;
        instagram: string;
    };
    links: {
        featured: string;
        top: string;
        new: string;
        all: string;
        brands: string;
    }
  }
  
  