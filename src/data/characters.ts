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
        "id": 1,
        "name": "Harry Potter",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
        "house": "Gryffindor",
        "description": "Harry Potter is the Boy Who Lived, famous for surviving an attack by Lord Voldemort when he was just a baby. He is known for his bravery, loyalty, and determination. With a lightning bolt scar on his forehead, Harry is prophesied to defeat Voldemort. Throughout the series, Harry learns about love, friendship, sacrifice, and the importance of standing up for what's right.",
        "wand": "11 inches, holly and phoenix feather",
        "patronus": "Stag"
      },
      {
        "id": 2,
        "name": "Hermione Granger",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
        "house": "Gryffindor",
        "description": "Hermione Granger is one of Harry's best friends, known for her intelligence, resourcefulness, and strong sense of justice. Coming from a Muggle family, Hermione proves that determination and hard work are key to mastering magic. She is a loyal and brave friend, often solving critical problems and helping Harry and Ron navigate their many challenges.",
        "wand": "10¾ inches, vine wood and dragon heartstring",
        "patronus": "Otter"
      },
      {
        "id": 3,
        "name": "Ron Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
        "house": "Gryffindor",
        "description": "Ron Weasley is Harry's loyal and courageous best friend. Growing up in a large, loving family, Ron sometimes feels overshadowed by his brothers. However, his wit, bravery, and unwavering support for Harry make him an invaluable friend. He plays a major role in helping Harry and Hermione in their adventures, providing comic relief and emotional support.",
        "wand": "14 inches, willow and unicorn hair",
        "patronus": "Jack Russell Terrier"
      },
      {
        "id": 4,
        "name": "Albus Dumbledore",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e8/Dumbledore_-_Prisoner_of_Azkaban.jpg",
        "house": "Gryffindor",
        "description": "Albus Dumbledore is the wise and powerful Headmaster of Hogwarts. He is one of the greatest wizards of all time, renowned for his kindness, intelligence, and strategic mind. Dumbledore serves as a mentor to Harry, guiding him in his fight against Voldemort. Despite his greatness, Dumbledore has a troubled past and carries heavy secrets about his youth.",
        "wand": "15 inches, elder wood and phoenix feather",
        "patronus": "Phoenix"
      },
      {
        "id": 5,
        "name": "Severus Snape",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg",
        "house": "Slytherin",
        "description": "Severus Snape is a complex character, initially portrayed as a villain but later revealed to be one of the most heroic figures in the series. He is an expert in potion-making and the Dark Arts. Snape's love for Lily Potter and his ultimate sacrifice for Harry shows a depth of character that contradicts his earlier actions. He is a tragic figure who hides his true loyalties.",
        "wand": "14 inches, ebony and dragon heartstring",
        "patronus": "Doe"
      },
      {
        "id": 6,
        "name": "Draco Malfoy",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
        "house": "Slytherin",
        "description": "Draco Malfoy is a member of the prestigious Malfoy family and an antagonist to Harry throughout their time at Hogwarts. His rivalry with Harry stems from their differing upbringings, with Draco’s family supporting Voldemort. Despite his harsh attitude, Draco shows signs of internal conflict, particularly as he is pushed into a life-altering decision by the war.",
        "wand": "10 inches, hawthorn and unicorn hair",
        "patronus": "Dragon"
      },
      {
        "id": 7,
        "name": "Luna Lovegood",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c2/LunaLovegood.jpeg",
        "house": "Ravenclaw",
        "description": "Luna Lovegood is a quirky and eccentric student from Ravenclaw, known for her eccentric personality and unwavering belief in magical creatures. Despite being considered odd by her peers, Luna is a kind and loyal friend, who helps Harry and his friends in their fight against Voldemort. Her unique perspective and open-mindedness make her a standout character in the series.",
        "wand": "9 ¾ inches, willow and phoenix feather",
        "patronus": "Hare"
      },
      {
        "id": 8,
        "name": "Neville Longbottom",
        "image": "https://upload.wikimedia.org/wikipedia/en/7/75/Neville_Longbottom.jpeg",
        "house": "Gryffindor",
        "description": "Neville Longbottom is initially shy and awkward, but over the course of the series, he becomes one of the most courageous and heroic characters. Known for his determination and bravery, Neville plays a key role in the Battle of Hogwarts. He proves that even those who seem unlikely heroes can rise to greatness when needed.",
        "wand": "13 inches, cherry wood and unicorn hair",
        "patronus": "Hare"
      },
      {
        "id": 9,
        "name": "Ginny Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg",
        "house": "Gryffindor",
        "description": "Ginny Weasley is the youngest member of the Weasley family and a strong-willed, independent character. Over the years, she grows from a shy girl to a confident and powerful witch. Ginny becomes a key member of Dumbledore's Army and eventually marries Harry Potter. Her bravery, intelligence, and loyalty make her one of the series' most inspiring characters.",
        "wand": "14 inches, willow and dragon heartstring",
        "patronus": "Horse"
      },
      {
        "id": 10,
        "name": "Fred Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/46/Fred_and_George.jpeg",
        "house": "Gryffindor",
        "description": "Fred Weasley is one half of the mischievous Weasley twins. Known for their pranks and sense of humor, Fred is always seen with his twin brother, George. Despite their lighthearted nature, Fred plays a key role in the resistance against Voldemort, running a successful joke shop and fighting in the Battle of Hogwarts. His tragic death leaves a lasting impact on the Weasley family.",
        "wand": "13 inches, willow and dragon heartstring",
        "patronus": "None"
      },
      {
        "id": 11,
        "name": "George Weasley",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/46/Fred_and_George.jpeg",
        "house": "Gryffindor",
        "description": "George Weasley is the other half of the Weasley twins, with a similar sense of humor and love for pranks. After Fred’s death, George continues the joke shop they started together, though he struggles with the loss of his twin. George plays an important role in the fight against Voldemort, contributing to the war effort with his ingenuity and humor.",
        "wand": "13 inches, willow and dragon heartstring",
        "patronus": "None"
      },
      {
        "id": 12,
        "name": "Minerva McGonagall",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/ea/McGonagall_%28screenshot%29.jpg",
        "house": "Gryffindor",
        "description": "Minerva McGonagall is the strict yet caring Transfiguration teacher at Hogwarts and Head of Gryffindor House. A former animagus, she is a skilled witch who serves as a powerful ally in the fight against Voldemort. McGonagall is a symbol of strength and fairness, balancing her stern discipline with a deep love for her students.",
        "wand": "9 ½ inches, willow and phoenix feather",
        "patronus": "Cat"
      },
      {
        "id": 13,
        "name": "Hagrid",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
        "house": "Gryffindor",
        "description": "Rubeus Hagrid is the half-giant Keeper of Keys and Grounds at Hogwarts. Hagrid is known for his love of magical creatures and his deep affection for Harry, whom he introduces to the wizarding world. Despite his tough exterior, Hagrid is kind-hearted and always there for his friends, often offering them sanctuary and protection.",
        "wand": "16 inches, oak and giant's hair",
        "patronus": "None"
      },
      {
        "id": 14,
        "name": "Bellatrix Lestrange",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d8/Bellatrix.jpeg",
        "house": "Slytherin",
        "description": "Bellatrix Lestrange is one of Voldemort's most loyal followers, known for her sadistic cruelty and deep devotion to the Dark Lord. She is a member of the Black family and the aunt of Draco Malfoy. Bellatrix takes pleasure in torturing her enemies, including Hermione, and plays a significant role in the Death Eaters' quest for power.",
        "wand": "12 ¼ inches, walnut and dragon heartstring",
        "patronus": "None"
      },
      {
        "id": 15,
        "name": "Voldemort",
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
        "house": "Slytherin",
        "description": "Lord Voldemort, born Tom Riddle, is the Dark Lord who seeks to conquer the wizarding world and subjugate Muggle-borns. His obsession with immortality and power leads him to create Horcruxes and commit unspeakable crimes. Throughout the series, Voldemort is the primary antagonist, posing a threat to Harry and all those who oppose him.",
        "wand": "17 inches, yew and phoenix feather",
        "patronus": "None"
      },
      {
        "id": 16,
        "name": "Sirius Black",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/Sirius_Black.jpeg",
        "house": "Gryffindor",
        "description": "Sirius Black is Harry Potter’s godfather and a member of the Marauders. A former student of Hogwarts, he was wrongfully imprisoned in Azkaban for a crime he did not commit. Sirius is known for his rebellious nature, his deep loyalty to his friends, and his unshakable love for Harry, whom he treats as a son.",
        "wand": "None",
        "patronus": "Hound"
      },
      {
        "id": 17,
        "name": "Remus Lupin",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2f/Remus_Lupin.jpeg",
        "house": "Gryffindor",
        "description": "Remus Lupin is a former Hogwarts professor who teaches Defense Against the Dark Arts. A kind and gentle man, Lupin is also a werewolf, which makes him a target of prejudice. He is one of Harry’s mentors and plays a key role in the Order of the Phoenix, contributing his knowledge and wisdom in the fight against Voldemort.",
        "wand": "None",
        "patronus": "Wolf"
      },
      {
        "id": 18,
        "name": "Dolores Umbridge",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b9/Umbridge.jpeg",
        "house": "Slytherin",
        "description": "Dolores Umbridge is a Ministry of Magic official who becomes the Defense Against the Dark Arts teacher at Hogwarts. She is cruel, manipulative, and has a penchant for enforcing strict and unjust rules. Umbridge is one of the series' primary antagonists, and her authoritarian reign at Hogwarts makes her one of the most despised characters.",
        "wand": "None",
        "patronus": "None"
      },
      {
        "id": 19,
        "name": "Cedric Diggory",
        "image": "https://upload.wikimedia.org/wikipedia/en/f/f7/Cedric_Diggory.jpeg",
        "house": "Hufflepuff",
        "description": "Cedric Diggory is a talented Hufflepuff student at Hogwarts, known for his good looks, sportsmanship, and bravery. He is chosen as one of the champions in the Triwizard Tournament and competes against Harry. Cedric’s tragic death at the hands of Voldemort marks a turning point in Harry’s battle against the Dark Lord.",
        "wand": "None",
        "patronus": "None"
      },


    ]


;