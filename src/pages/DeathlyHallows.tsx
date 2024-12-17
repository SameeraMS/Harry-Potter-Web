import React from 'react';
import { Scroll } from 'lucide-react';

const hallows = [
  {
    name: "The Elder Wand",
    description: "The most powerful wand ever created, said to have been made by Death himself...",
    image: "src/assets/images/dh1.jpeg"
  },
  {
    name: "The Resurrection Stone",
    description: "A stone that can recall the spirits of the dead, though they are neither truly alive nor at peace...",
    image: "src/assets/images/dh2.jpeg"
  },
  {
    name: "The Invisibility Cloak",
    description: "A cloak that provides true invisibility and never loses its power, passed down through generations...",
    image: "src/assets/images/dh3.jpeg"
  }
];

export default function DeathlyHallows() {
  return (
      <div className="min-h-screen gradient-bg py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="harry-potter-font text-4xl text-gold mb-4">The Deathly Hallows</h1>
              <p className="text-white max-w-2xl mx-auto">
                Three magical objects that, together, make their possessor the Master of Death
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {hallows.map((hallow, index) => (
                  <div key={index} className="bg-[#00001b]/90 p-6 rounded-lg text-white">
                    <img src={hallow.image} alt={hallow.name} className="w-full h-64 object-cover rounded-lg mb-4"/>
                    <h2 className="harry-potter-font text-2xl text-gold mb-2">{hallow.name}</h2>
                    <p>{hallow.description}</p>
                  </div>
              ))}
            </div>

            <div className="mt-16 bg-[#00001b]/90 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <Scroll className="text-gold w-8 h-8"/>
                <h2 className="harry-potter-font text-2xl text-gold">The Tale of the Three Brothers</h2>
              </div>
              <p className="text-white">
                <br/>
                <p className="mb-4 leading-relaxed">
                  Once upon a time, three brothers were traveling along a winding road
                  at twilight. In time, they reached a treacherous river, too deep to
                  wade through and too dangerous to swim across. Being skilled in the
                  magical arts, the three brothers simply waved their wands and
                  conjured a bridge to carry them safely over.
                </p>
                <p className="mb-4 leading-relaxed">
                  Before they could cross, however, a hooded figure appeared before
                  them. It was Death, and he was angry. Death felt cheated because
                  travelers who attempted to cross the river usually drowned. But
                  Death was cunning. Pretending to congratulate the brothers on their
                  ingenuity, he offered each of them a reward for outsmarting him.
                </p>
                <p className="mb-4 leading-relaxed">
                  The eldest brother, a combative man, asked for a wand more powerful
                  than any in existence, a wand that would make him invincible. Death
                  fashioned one from a nearby elder tree and handed it to the first
                  brother.
                </p>
                <p className="mb-4 leading-relaxed">
                  The second brother, a grief-stricken man, asked for the power to
                  bring back those who had died. Death picked up a stone from the
                  riverbank and handed it to the second brother, promising that it
                  would allow him to summon the dead.
                </p>
                <p className="mb-4 leading-relaxed">
                  The third brother, the youngest and wisest of the three, did not
                  trust Death. He asked for something that would allow him to leave
                  without being followed. Reluctantly, Death handed over his own
                  Cloak of Invisibility.
                </p>
                <p className="mb-4 leading-relaxed">
                  Death stepped aside, and the brothers went on their way.
                </p>
                <p className="mb-4 leading-relaxed">
                  The first brother traveled to a distant village, where he sought
                  out a fellow wizard with whom he had quarreled. Armed with the
                  Elder Wand, he dueled and easily defeated his rival, leaving the
                  other man dead upon the floor. Boasting of the wand’s power, the
                  eldest brother drank heavily that night. But as he lay sleeping,
                  another wizard crept upon him, slit his throat, and stole the wand.
                  And so, Death claimed the first brother.
                </p>
                <p className="mb-4 leading-relaxed">
                  The second brother returned to his home and used the Resurrection
                  Stone to bring back the woman he had once loved, but she had died
                  many years before. Though she appeared before him, she was not
                  truly alive and suffered as a shadow of her former self. Unable to
                  bear her sadness, the second brother took his own life to join her.
                  And so, Death claimed the second brother.
                </p>
                <p className="mb-4 leading-relaxed">
                  But Death searched for the third brother in vain. For many years,
                  the youngest brother lived in secret, shielded by the Cloak of
                  Invisibility. Only when he had lived a long, full life did he remove
                  the cloak and give it to his son. He greeted Death as an old friend
                  and went with him gladly, as equals.
                </p>
                <p className="mt-6 italic text-center text-yellow-700">
                  "While pride and obsession led the first two brothers to their doom,
                  the youngest brother’s humility and prudence allowed him to live
                  fully and embrace death without fear."
                </p>
              </p>
            </div>
          </div>
        </div>
        );
        }