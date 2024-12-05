export interface IProject {
  name: string;
  id: string;
  cover: string;
  skills?: string;
  description: string;
  type: "base" | "game";
  code: string;
  demo: string;
  level: "easy" | "medium" | "hard";
}

export const ProjectList: IProject[] = [
  {
    name: "Hangman",
    id: "hangman-game",
    cover: "src/images/1.png",
    description:
      "A classic Hangman game built with React and Vite, challenging players to guess a hidden programming-related word before running out of attempts.",
    type: "game",
    code: "https://github.com/FunChosa/hangman-game",
    demo: "https://funchosa-hangman-game.netlify.app",
    level: "medium",
  },
  {
    name: "LightsOut",
    id: "lightsout-game",
    cover: "src/images/log.png",
    description:
      "A classic Lights Out puzzle game built with React and Vite, challenging players to extinguish all lights on the board by clicking tiles.",
    type: "game",
    code: "https://github.com/FunChosa/lightsout-game",
    demo: "https://funchosa-lights-out-game.netlify.app",
    level: "easy",
  },
  {
    name: "QR Code Generator",
    id: "qr-code-generator",
    cover: "src/images/qrg.png",
    description:
      "This React application, built with Vite, generates QR codes from any text input using the qrserver.com API. It provides a simple way to create QR codes from arbitrary text and URLs, showcasing the use of the qrserver.com API within a React application.",
    type: "base",
    code: "https://github.com/FunChosa/qr-code-generator",
    demo: "https://funchosa-qr-code-generator.netlify.app",
    level: "easy",
  },
  {
    name: "90 years in weeks",
    id: "90-years-in-weeks",
    cover: "src/images/90wy.png",
    description:
      "This React application visualizes 90 years of a user's life in weeks, displaying a grid of cells representing the total number of weeks and highlighting those already lived.",
    type: "base",
    code: "https://github.com/FunChosa/90-years-in-weeks",
    demo: "https://funchosa-90-years-in-weeks.netlify.app",
    level: "easy",
  },
  {
    name: "Password Generator",
    id: "password-generator",
    cover: "src/images/pg.png",
    description:
      "This React application, built with Vite, lets users generate strong, customizable passwords by selecting character types and specifying the desired length.",
    type: "base",
    code: "https://github.com/FunChosa/password-generator",
    demo: "https://funchosa-password-generator.netlify.app",
    level: "medium",
  },
  {
    name: "NASA APOD",
    id: "nasa-apod",
    cover: "src/images/empty.jpg",
    description:
      "This React application fetches and displays NASA's Astronomy Picture of the Day (APOD), including its description, using the NASA APOD API.",
    type: "base",
    code: "https://github.com/FunChosa/nasa-apod",
    demo: "https://funchosa-nasa-apod.netlify.app",
    level: "easy",
  },
  {
    name: "Mine-sweeper",
    id: "mine-sweeper-game",
    cover: "src/images/empty.jpg",
    description: "Lorem",
    type: "game",
    code: "https://github.com/FunChosa/mine-sweeper-game",
    demo: "https://funchosa-mine-sweeper-game.netlify.app",
    level: "medium",
  },
  {
    name: "Tic Tac Toe",
    id: "tic-tac-toe-game",
    cover: "src/images/empty.jpg",
    description: "Lorem",
    type: "game",
    code: "https://github.com/FunChosa/tic-tac-toe-game",
    demo: "https://funchosa-tic-tac-toe-game.netlify.app",
    level: "medium",
  },
  {
    name: "Wordle",
    id: "wordle-game",
    cover: "src/images/empty.jpg",
    description: "Lorem",
    type: "game",
    code: "https://github.com/FunChosa/wordle-game",
    demo: "https://funchosa-wordle-game.netlify.app",
    level: "medium",
  },
];
