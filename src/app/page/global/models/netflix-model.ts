


export interface NetflixModel {
    nav: Nav;
    hero: Hero;
    scifi: SciFi;
    action: Action;
}
      
    
export interface Nav {
    title: string;
    logo: Img;
}

export interface Img {
    src: string;
    alt: string;
}


export interface Hero {
    title: string;
    gallery: Gallery[];
    
}
export interface Gallery {
    img: Img;
}

export interface SciFi {
    title: string;
    gallery: Gallery[];
}
export interface Action {
    title: string;
    gallery: Gallery[];
}