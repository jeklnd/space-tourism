export const planets = [
  {
    id: 0,
    name: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS",
    image: "assets/images/destination/image-moon.webp",
  },
  {
    id: 1,
    name: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
    image: "assets/images/destination/image-mars.webp",
  },
  {
    id: 2,
    name: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
    image: "assets/images/destination/image-europa.webp",
  },
  {
    id: 3,
    name: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
    image: "assets/images/destination/image-titan.webp",
  },
];
export const [moon, mars, europa, titan] = planets;

export const people = [
  {
    id: 0,
    role: "Commander",
    first: "Douglas",
    last: "Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "assets/images/crew/image-douglas-hurley.webp",
  },
  {
    id: 1,
    role: "Mission Specialist",
    first: "MARK",
    last: "SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "assets/images/crew/image-mark-shuttleworth.webp",
  },
  {
    id: 2,
    role: "PILOT",
    first: "Victor",
    last: "Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "assets/images/crew/image-victor-glover.webp",
  },
  {
    id: 3,
    role: "Flight Engineer",
    first: "Anousheh",
    last: "Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "assets/images/crew/image-anousheh-ansari.webp",
  },
];

export const [hurley, shuttleworth, glover, ansari] = people;

export const technology = [
  {
    id: 0,
    name: "launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 1,
    name: "spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 2,
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export const [vehicle, spaceport, capsule] = technology