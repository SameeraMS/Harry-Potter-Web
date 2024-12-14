export interface Character {
  id: number;
  name: string;
  image: string;
  house: string;
  description: string;
  wand: string;
  patronus?: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Harry Potter",
    image: "https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?w=800",
    house: "Gryffindor",
    description: "The Boy Who Lived, known for his lightning bolt scar and prophesied destiny...",
    wand: "11 inches, holly and phoenix feather",
    patronus: "Stag"
  },
  // Add more characters...
];