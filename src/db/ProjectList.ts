import noImage from "../images/noImage.png";
import lightsOutImage from "../images/lightsOutImage.png";
import hangmanImage from "../images/hangmanImage.png";
import qrCodeGenImage from "../images/qrCodeGenImage.png";
import ninetyYearsImage from "../images/ninetyYearsImage.png";
import passwordGenImage from "../images/passwordGenImage.png";
import instantNotesImage from "../images/instantNotesImage.png";
import pomodoroAppImage from "../images/pomodoroAppImage.png";
import ticTacToeImage from "../images/ticTacToeImage.png";
import nasaApodImage from "../images/nasaApodImage.png";
import binaryClockImage from "../images/binaryClockImage.png";
import wordleGameImage from "../images/wordleGameImage.png";
import colorGenImage from "../images/colorGenImage.png";
import mineSweeperImage from "../images/mineSweeperImage.png";
import pokedexAppImage from "../images/pokedexAppImage.png";
import toDoAppImage from "../images/toDoAppImage.png";
import weatherAppImage from "../images/weatherAppImage.png";

export interface IProject {
  name: string;
  id: string;
  cover: string;
  skills?: string;
  desc: string;
  type: "base" | "game";
  code: string;
  demo: string;
  level: "easy" | "medium" | "hard";
}

export const ProjectList: IProject[] = [
  {
    name: "Hangman",
    id: "hangman-game",
    cover: hangmanImage,
    desc: "A classic Hangman game built with React and Vite, challenging players to guess a hidden programming-related word before running out of attempts.",
    type: "game",
    code: "https://github.com/FunChosa/hangman-game",
    demo: "https://funchosa-hangman-game.netlify.app",
    level: "medium",
  },
  {
    name: "Lights Out",
    id: "lightsout-game",
    cover: lightsOutImage,
    desc: "A classic Lights Out puzzle game built with React and Vite, challenging players to extinguish all lights on the board by clicking tiles.",
    type: "game",
    code: "https://github.com/FunChosa/lightsout-game",
    demo: "https://funchosa-lights-out-game.netlify.app",
    level: "easy",
  },
  {
    name: "QR Code Generator",
    id: "qr-code-generator",
    cover: qrCodeGenImage,
    desc: "This React application, built with Vite, generates QR codes from any text input using the qrserver.com API. It provides a simple way to create QR codes from arbitrary text and URLs, showcasing the use of the qrserver.com API within a React application.",
    type: "base",
    code: "https://github.com/FunChosa/qr-code-generator",
    demo: "https://funchosa-qr-code-generator.netlify.app",
    level: "easy",
  },
  {
    name: "90 years in weeks",
    id: "90-years-in-weeks",
    cover: ninetyYearsImage,
    desc: "This React application visualizes 90 years of a user's life in weeks, displaying a grid of cells representing the total number of weeks and highlighting those already lived.",
    type: "base",
    code: "https://github.com/FunChosa/90-years-in-weeks",
    demo: "https://funchosa-90-years-in-weeks.netlify.app",
    level: "easy",
  },
  {
    name: "Password Generator",
    id: "password-generator",
    cover: passwordGenImage,
    desc: "This React application, built with Vite, lets users generate strong, customizable passwords by selecting character types and specifying the desired length.",
    type: "base",
    code: "https://github.com/FunChosa/password-generator",
    demo: "https://funchosa-password-generator.netlify.app",
    level: "medium",
  },
  {
    name: "NASA APOD",
    id: "nasa-apod",
    cover: nasaApodImage,
    desc: "This React application fetches and displays NASA's Astronomy Picture of the Day (APOD), including its desc, using the NASA APOD API.",
    type: "base",
    code: "https://github.com/FunChosa/nasa-apod",
    demo: "https://funchosa-nasa-apod.netlify.app",
    level: "easy",
  },
  {
    name: "Binary Clock",
    id: "binary-clock",
    cover: binaryClockImage,
    desc: "A simple and visually appealing binary clock application that displays the current time and date in binary format. Each digit is represented using four LEDs (simulated with colored circles).",
    type: "base",
    code: "https://github.com/FunChosa/binary-clock",
    demo: "https://funchosa-binary-clock.netlify.app",
    level: "easy",
  },
  {
    name: "Tic Tac Toe",
    id: "tic-tac-toe-game",
    cover: ticTacToeImage,
    desc: "A simple and classic Tic-Tac-Toe game for two players on a single device. The game is played on a standard 3x3 grid.",
    type: "game",
    code: "https://github.com/FunChosa/tic-tac-toe-game",
    demo: "https://funchosa-tic-tac-toe-game.netlify.app",
    level: "medium",
  },
  {
    name: "Wordle",
    id: "wordle-game",
    cover: wordleGameImage,
    desc: "A classic Wordle game built with React and Vite, challenging players to guess a hidden five-letter word in six attempts or less.",
    type: "game",
    code: "https://github.com/FunChosa/wordle-game",
    demo: "https://funchosa-wordle-game.netlify.app",
    level: "medium",
  },
  {
    name: "Color generator",
    id: "color-generator",
    cover: colorGenImage,
    desc: "A simple color generator application built with React, allowing users to generate random HEX color codes and copy them directly to their clipboard.",
    type: "base",
    code: "https://github.com/FunChosa/color-generator",
    demo: "https://funchosa-color-generator.netlify.app",
    level: "easy",
  },
  {
    name: "Instant notes",
    id: "instant-notes",
    cover: instantNotesImage,
    desc: "A simple and intuitive note-taking application built with React, leveraging Tailwind CSS for styling and local storage for persistence.",
    type: "base",
    code: "https://github.com/FunChosa/instant-notes",
    demo: "https://funchosa-instant-notes.netlify.app",
    level: "medium",
  },
  {
    name: "Pomodoro timer",
    id: "pomodoro-timer",
    cover: pomodoroAppImage,
    desc: "This Pomodoro timer app replicates the clean and minimalist aesthetic of the Notion app. It provides a simple and intuitive interface for managing your work sessions and breaks using the classic Pomodoro Technique.",
    type: "base",
    code: "https://github.com/FunChosa/pomodoro-app",
    demo: "https://funchosa-pomodoro-app.netlify.app",
    level: "medium",
  },
  {
    name: "Todo app",
    id: "todo-app",
    cover: toDoAppImage,
    desc: "This is a basic to-do list application built with React, Vite, Tailwind CSS, and Firebase. The primary goal of this project was to practice using Firebase for data persistence.",
    type: "base",
    code: "https://github.com/FunChosa/todo-app",
    demo: "https://funchosa-todo-app.netlify.app",
    level: "easy",
  },
  {
    name: "Weather app",
    id: "weather-app",
    cover: weatherAppImage,
    desc: "A React application built with Vite, fetching real-time weather data using the WeatherAPI https://www.weatherapi.com/. This app utilizes the browser's geolocation capabilities to determine the user's location and display the relevant weather information.",
    type: "base",
    code: "https://github.com/FunChosa/weather-app",
    demo: "https://funchosa-weather-app.netlify.app",
    level: "easy",
  },
  {
    name: "Pokedex",
    id: "pokedex",
    cover: pokedexAppImage,
    desc: "A simple Pokedex application built with React and Vite. Displays basic information about Pokémon.",
    type: "base",
    code: "https://github.com/FunChosa/pokedex",
    demo: "https://funchosa-pokedex.netlify.app",
    level: "medium",
  },
  {
    name: "Mine-sweeper",
    id: "mine-sweeper-game",
    cover: mineSweeperImage,
    desc: "A classic Minesweeper game built with React and Vite. This version features a 10x10 grid with 10 randomly placed mines.",
    type: "game",
    code: "https://github.com/FunChosa/mine-sweeper-game",
    demo: "https://funchosa-mine-sweeper-game.netlify.app",
    level: "medium",
  },
];
