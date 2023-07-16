

import { User } from "./user";

export interface Pet {
    name: string;
    image: string;
    location: string;
    years: number;
    type: string;
    description: string;
    owner: User;
    likes: [];
}

