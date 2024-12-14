export interface Movie {
  id: number;
  title: string;
  year: string;
  image: string;
  summary: string;
  youtubeId: string;
  ebookUrl: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    year: "2001",
    image: "src/assets/images/1.png",
    summary: "On his 11th birthday, Harry Potter discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he begins to uncover the truth about his parents' death and faces the dark wizard Voldemort.",
    youtubeId: "VyHV0BRtdxo",
    ebookUrl: "src/assets/ebooks/harry-potter-sorcerers-stone.pdf"
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    year: "2002",
    image: "src/assets/images/2.png",
    summary: "Harry returns to Hogwarts for his second year and discovers a hidden chamber within the school, unleashing a dark force that threatens students.",
    youtubeId: "1bq0qff4iF8",
    ebookUrl: "src/assets/ebooks/harry-potter-chamber-of-secret-3.pdf"
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
    image: "src/assets/images/3.png",
    summary: "In his third year at Hogwarts, Harry learns about Sirius Black, an escaped prisoner who seems to be targeting him, while uncovering secrets about his own past.",
    youtubeId: "lAxgztbYDbs",
    ebookUrl: "src/assets/ebooks/3 - Harry Potter and the Prisoner of Azkaban.pdf"
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    year: "2005",
    image: "src/assets/images/4.png",
    summary: "Harry's fourth year is marked by his unexpected participation in the Triwizard Tournament, where he faces deadly challenges and encounters Voldemort's return.",
    youtubeId: "3EGojp4Hh6I",
    ebookUrl: "src/assets/ebooks/harry-potter-and-the-goblet-of-fire.pdf"
  },
  {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
    year: "2007",
    image: "src/assets/images/5.png",
    summary: "Harry, now in his fifth year, struggles with the return of Voldemort while forming a secret group to train fellow students in defensive magic.",
    youtubeId: "y6ZW7KXaXYk",
    ebookUrl: "src/assets/ebooks/harry-potter-and-the-order-of-feanix.pdf"
  },
  {
    id: 6,
    title: "Harry Potter and the Half-Blood Prince",
    year: "2009",
    image: "src/assets/images/6.png",
    summary: "Harry uncovers Voldemort's dark past with the help of Professor Dumbledore, while facing new challenges in his sixth year at Hogwarts.",
    youtubeId: "sg81Lts5kYY",
    ebookUrl: "src/assets/ebooks/harry-potter-and-the-half-blood-prince-j.k.-rowling.pdf"
  },
  {
    id: 7,
    title: "Harry Potter and the Deathly Hallows: Part 1",
    year: "2010",
    image: "src/assets/images/7.png",
    summary: "As Voldemort's power grows, Harry, Ron, and Hermione leave Hogwarts to destroy Horcruxes and weaken the Dark Lord's power.",
    youtubeId: "MUkxOQXkZRc",
    ebookUrl: "harry-potter-and-the-deathly-hallows-j.k.-rowling.pdf"
  },
  {
    id: 8,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: "2011",
    image: "src/assets/images/8.png",
    summary: "The epic finale sees Harry and his friends face Voldemort in a final battle at Hogwarts to save the wizarding world.",
    youtubeId: "mObK5XD8udk",
    ebookUrl: "harry-potter-and-the-deathly-hallows-j.k.-rowling.pdf"
  },
  {
    id: 9,
    title: "Harry Potter and the Cursed Child",
    year: "2016",
    image: "src/assets/images/9.png",
    summary: "Set 19 years after the Battle of Hogwarts, Harry Potter, now a Ministry of Magic employee, and his son Albus grapple with the weight of their family legacy as a new darkness emerges.",
    youtubeId: "N/A",
    ebookUrl: "src/assets/ebooks/harry-potter-cursed-child.pdf"
  },
  {
    id: 9,
    title: "Harry Potter All in One Collection",
    year: "2016",
    image: "src/assets/images/all.png",
    summary: "Harry Potter All in One Collection",
    youtubeId: "N/A",
    ebookUrl: "src/assets/ebooks/harrypotter all.pdf"
  }


  // Add more movies...
];