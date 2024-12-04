import empty from "../images/empty.jpg";
import hg from "../images/hg.png";

export const ProjectList = [
  {
    name: "QR Code Generator",
    id: "qr-code-generator",
    image: empty,
    skills: "ReactJS, HTML, CSS, JavaScript",
    description:
      "This React application, built with Vite, generates QR codes from any text input using the qrserver.com API. It provides a simple way to create QR codes from arbitrary text and URLs, showcasing the use of the qrserver.com API within a React application.",
    type: "base",
    code: "https://github.com/FunChosa/qr-code-generator",
    demo: "https://funchosa-qr-code-generator.netlify.app",
    level: "hard",
  },
  {
    name: "Binary Clock",
    id: "binary-clock",
    image: empty,
    skills: "ReactJS, HTML, CSS, JavaScript",
    description:
      "This project implements a binary clock, which displays time and date in binary format.",
    type: "base",
    code: "https://github.com/FunChosa/binary-clock",
    demo: "https://funchosa-binary-clock.netlify.app",
    level: "easy",
  },
  {
    name: "Hangman-game",
    id: "hangman-game",
    image: hg,
    skills: "ReactJS, HTML, CSS, JavaScript",
    description:
      "A classic Hangman game built with React and Vite, challenging players to guess a hidden programming-related word before running out of attempts.",
    type: "game",
    code: "https://github.com/FunChosa/hangman-game",
    demo: "https://funchosa-hangman-game.netlify.app",
    level: "hard",
  },
  {
    name: "LightsOut-game",
    id: "lightsout-game",
    image: empty,
    skills: "ReactJS, HTML, CSS, JavaScript",
    description:
      "A classic Lights Out puzzle game built with React and Vite, challenging players to extinguish all lights on the board by clicking tiles.",
    type: "game",
    code: "https://github.com/FunChosa/lightsout-game",
    demo: "https://funchosa-lightsout-game.netlify.app",
    level: "medium",
  },
  {
    name: "Password Generator",
    id: "password-generator",
    image: empty,
    skills: "ReactJS, HTML, CSS, JavaScript",
    description:
      "This React application, built with Vite, lets users generate strong, customizable passwords by selecting character types and specifying the desired length.",
    type: "base",
    code: "https://github.com/FunChosa/password-generator",
    demo: "https://funchosa-password-generator.netlify.app",
    level: "hard",
  },
];
