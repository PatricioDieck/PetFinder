interface RootObject {
    animals: Animal[];
    pagination: Pagination;
}

interface Pagination {
    count_per_page: number;
    total_count: number;
    current_page: number;
    total_pages: number;
    _links: Links2;
}

interface Links2 {
    previous: Self;
    next: Self;
}

export interface Animal {
    id: number;
    organization_id: string;
    url: string;
    type: string;
    species: string;
    breeds: Breeds;
    colors: Colors;
    age: string;
    gender: string;
    size: string;
    coat: null;
    attributes: Attributes;
    environment: Environment;
    tags: string[];
    name: string;
    description: string;
    photos: Photo[];
    videos: Video[];
    status: string;
    published_at: string;
    contact: Contact;
    _links: Links;
}

interface Links {
    self: Self;
    type: Self;
    organization: Self;
}

interface Self {
    href: string;
}

interface Contact {
    email: string;
    phone: string;
    address: Address;
}

interface Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
}

interface Video {
    embed: string;
}

interface Photo {
    small: string;
    medium: string;
    large: string;
    full: string;
}

interface Environment {
    children: boolean;
    dogs: boolean;
    cats: boolean;
}

interface Attributes {
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed: null;
    special_needs: boolean;
    shots_current: boolean;
}

interface Colors {
    primary: null;
    secondary: null;
    tertiary: null;
}

interface Breeds {
    primary: string;
    secondary: null;
    mixed: boolean;
    unknown: boolean;
}