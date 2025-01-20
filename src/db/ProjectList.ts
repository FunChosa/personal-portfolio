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
import stellarBurgerImage from "../images/stellarBurgerImage.png";
import gradientGenImage from "../images/gradientGenImage.png";
import githubUserInfoImage from "../images/githubUserInfoImage.png";
import memoryCardsImage from "../images/memoryCardsImage.png";
export interface IProject {
  name: string;
  id: string;
  cover: string;
  skills?: string;
  desc: string;
  features?: string[];
  type: "base" | "game" | "api";
  code: string;
  demo: string;
  level: "easy" | "medium" | "hard";
}

export const ProjectList: IProject[] = [
  {
    name: "Stellar Burger",
    id: "stellar-burger",
    cover: stellarBurgerImage,
    desc: "This is a React application built for an educational course, providing user authentication and registration, as well as burger ordering functionality. It employs Redux for state management, WebSockets for real-time interactions, and incorporates drag-and-drop capabilities.",
    type: "api",
    code: "https://github.com/FunChosa/react-burger?tab=readme-ov-file",
    demo: "https://funchosa.github.io/react-burger/",
    level: "hard",
  },
  {
    name: "Memory Cards",
    id: "memory-cards-app",
    cover: memoryCardsImage,
    desc: "The Memory Cards App is a flashcard-based learning tool designed to help you remember information more effectively. Built with React and Vite, this app allows you to easily create, edit, and manage your flashcards. You can use them to practice in a dedicated practice mode or browse them in a convenient collection. The app also offers import and export functions, so you can save and share your collection with your friends.",
    type: "game",
    code: "https://github.com/FunChosa/memory-cards-app.git",
    demo: "https://funchosa-memory-cards-app.netlify.app",
    level: "hard",
  },
  {
    name: "Hangman",
    id: "hangman-game",
    cover: hangmanImage,
    desc: "A classic Hangman game built with React and Vite, challenging players to guess a hidden programming-related word before running out of attempts.",
    features: [
      "The player guesses letters one at a time to reveal a hidden word related to programming.",
      "Used letters (both correct and incorrect) are deactivated, preventing repeated guesses.",
      "Incorrect guesses add a body part to the hangman drawing.",
      "Correct guesses reveal the letter in its correct position within the hidden word, without adding to the hangman drawing.",
      "The game ends when the player either correctly guesses the word or runs out of attempts.",
      "Upon game completion, a modal window displays the correct word and the player's win/lose status.",
    ],
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
    features: [
      "The player clicks on tiles to toggle their state (on/off)",
      "Clicking a tile also toggles the state of its horizontally and vertically adjacent tiles (one step away)",
      "The goal is to turn off all lights on the board",
      "The game starts automatically with a randomly lit board",
      "Board sizes range from 2x2 to 7x7",
      "Upon winning the game, a message appears notifying the player of their success",
    ],
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
    features: [
      "Text Input: Enter any text to generate a QR code.",
      'QR Code Generation: Click the "Generate" button to create the QR code.',
      "Image Display: The generated QR code is displayed as an image.",
      "Reset Button: Clears the text input field.",
      "Error Handling: Displays a message if the API request fails.",
    ],
    type: "api",
    code: "https://github.com/FunChosa/qr-code-generator",
    demo: "https://funchosa-qr-code-generator.netlify.app",
    level: "easy",
  },
  {
    name: "90 years in weeks",
    id: "90-years-in-weeks",
    cover: ninetyYearsImage,
    desc: "This React application visualizes 90 years of a user's life in weeks, displaying a grid of cells representing the total number of weeks and highlighting those already lived.",
    features: [
      "Date of Birth Input: Users enter their birthdate using an input field.",
      "Week Grid Visualization: A grid visually represents 90 years in weeks. Lived weeks are highlighted.",
      "Details View: A 'Details' button displays the user's age in years, months, weeks, and days.",
      "Error Handling: Displays an error message if the entered date is in the future or more than 90 years in the past.",
    ],
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
    features: [
      "Character Type Selection: Checkboxes allow users to select uppercase letters, lowercase letters, numbers, and symbols.",
      "Password Length: A slider controls the password length (8-40 characters).",
      "Password Generation: Clicking 'Generate Password' or changing the password length generates a new password.",
      "Password Display: The generated password is displayed in a text field.",
      "Copy to Clipboard: A button copies the generated password to the clipboard.",
    ],
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
    features: [
      "Displays Current APOD: Shows the current Astronomy Picture of the Day image and its description.",
    ],
    type: "api",
    code: "https://github.com/FunChosa/nasa-apod",
    demo: "https://funchosa-nasa-apod.netlify.app",
    level: "easy",
  },
  {
    name: "Binary Clock",
    id: "binary-clock",
    cover: binaryClockImage,
    desc: "A simple and visually appealing binary clock application that displays the current time and date in binary format. Each digit is represented using four LEDs (simulated with colored circles).",
    features: [
      "Real-time display: The clock dynamically updates to show the current time and date.",
      "Binary representation: Time (hours, minutes, seconds) and date (day, month, year) are shown using binary code.",
      "Clear visual design: Each binary digit is represented by four LEDs (circles) that illuminate to represent 1s and 0s.",
      "Intuitive interface: Simple and easy to understand display.",
      "Standard format display: The current time and date are also displayed below the binary representation in a standard, easily readable format.",
    ],
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
    features: [
      "Two-Player Mode: Designed for two players playing on the same device.",
      "Alternating Turns: X always goes first, and turns alternate between X and O automatically.",
      "Win Condition Check: The game checks for a win after every move, immediately announcing the winner if one is found. Winning conditions include three in a row horizontally, vertically, or diagonally.",
      "Tie Condition Check: If all squares are filled and no winning condition is met, the game declares a tie.",
      "Clear Visual Feedback: The game provides clear visual feedback to show the current player’s turn and the placement of marks on the board.",
      "Easy Restart: A dedicated restart button allows players to quickly start a new game.",
    ],
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
    features: [
      "Classic Wordle Gameplay: Guess the five-letter word within six attempts.",
      "Feedback System: Letters are color-coded to indicate correctness",
    ],
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
    features: [
      "Generate Random Colors: Click a button to generate a new random HEX color code. The color is displayed visually and as a HEX code.",
      "Copy to Clipboard: Easily copy the generated HEX color code to your clipboard with a single click.",
      "Theme Switching: Toggle between light and dark themes to personalize your experience.",
    ],
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
    features: [
      "Create Notes: Quickly add new notes via a modal window triggered by an “Add Note” button.",
      "Customizable Colors: Choose from a selection of colors to personalize your notes.",
      "Pinning: Keep important notes at the top of the list.",
      "Deleting: Remove notes permanently.",
      "Editing: Modify existing notes’ titles, descriptions, and colors.",
      "Cloning: Create exact copies of notes, including their color, title and description.",
      "Unique Identifiers: Each note is assigned a unique UUID for reliable identification.",
      "Timestamping: Creation time is recorded and displayed for each note.",
      "Persistent Storage: Notes are saved locally using browser’s localStorage, ensuring data is preserved across sessions.",
    ],
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
    features: [
      "Notion-inspired design: Clean, minimalist interface for a distraction-free experience.",
      "Customizable Backgrounds: Choose between a minimalist black background or a selection of charming landscape images to personalize your timer.",
      "Standard Pomodoro functionality with preset intervals: Work intervals are 25 minutes, short breaks are 5 minutes, and long breaks are 10 minutes.",
      "Timer tracking: Clearly displays the remaining time for each session.",
      "Simple controls: Easy to start, pause, and reset the timer.",
    ],
    type: "base",
    code: "https://github.com/FunChosa/pomodoro-app",
    demo: "https://funchosa-pomodoro-app.netlify.app",
    level: "medium",
  },
  // {
  //   name: "Todo app",
  //   id: "todo-app",
  //   cover: toDoAppImage,
  //   desc: "This is a basic to-do list application built with React, Vite, Tailwind CSS, and Firebase. The primary goal of this project was to practice using Firebase for data persistence.",
  //   features: [
  //     "Add Tasks: Add new tasks via a simple input field and button.",
  //     "Delete Tasks: Remove completed or unwanted tasks with a dedicated delete button.",
  //     "Mark as Complete: Use checkboxes to mark tasks as complete. (Completed tasks are still visible but visually indicated as done).",
  //   ],
  //   type: "base",
  //   code: "https://github.com/FunChosa/todo-app",
  //   demo: "https://funchosa-todo-app.netlify.app",
  //   level: "easy",
  // },
  // {
  //   name: "Weather app",
  //   id: "weather-app",
  //   cover: weatherAppImage,
  //   desc: "A React application built with Vite, fetching real-time weather data using the WeatherAPI https://www.weatherapi.com/. This app utilizes the browser's geolocation capabilities to determine the user's location and display the relevant weather information.",
  //   features: [
  //     "Automatic Location Detection: Uses navigator.geolocation.getCurrentPosition to automatically detect the user's location and display the weather for that location.",
  //     "Current Weather Conditions: Displays current temperature and temperature for next 24 hours.",
  //     "Error Handling: Provides user-friendly messages for location errors and API issues.",
  //     "Responsive Design: Adapts to various screen sizes for optimal viewing on desktops and mobile devices.",
  //     "Clear and Concise UI: Presents weather information in an easily understandable format.",
  //   ],
  //   type: "api",
  //   code: "https://github.com/FunChosa/weather-app",
  //   demo: "https://funchosa-weather-app.netlify.app",
  //   level: "easy",
  // },
  // {
  //   name: "Pokedex",
  //   id: "pokedex",
  //   cover: pokedexAppImage,
  //   desc: "A simple Pokedex application built with React and Vite. Displays basic information about Pokémon.",
  //   features: ["Search for Pokémon by full name.", "View basic information."],
  //   type: "api",
  //   code: "https://github.com/FunChosa/pokedex",
  //   demo: "https://funchosa-pokedex.netlify.app",
  //   level: "medium",
  // },
  // {
  //   name: "Mine-sweeper",
  //   id: "mine-sweeper-game",
  //   cover: mineSweeperImage,
  //   desc: "A classic Minesweeper game built with React and Vite. This version features a 10x10 grid with 10 randomly placed mines.",
  //   features: [
  //     "Fixed Grid Size: A 10x10 game grid with 10 mines.",
  //     "Random Mine Placement: Mines are randomly distributed across the grid at the start of each game.",
  //     "Flag Placement: Right-click to place or remove flags marking suspected mine locations.",
  //     "Game Over Condition: Clicking a mine immediately ends the game, displaying an alert. The game restarts automatically after a mine is hit.",
  //     "No Scoring/Timing: This version does not include a timer or score tracking.",
  //   ],
  //   type: "game",
  //   code: "https://github.com/FunChosa/mine-sweeper-game",
  //   demo: "https://funchosa-mine-sweeper-game.netlify.app",
  //   level: "medium",
  // },
  // {
  //   name: "Gradient generator",
  //   id: "gradient-generator",
  //   cover: gradientGenImage,
  //   desc: "A simple gradient generator application built with React, allowing users to generate two-color gradients with adjustable direction and type (linear/radial). Copy the generated CSS to the clipboard.",
  //   features: [
  //     "Two-Color Gradient Creation: Select two colors to form the basis of your custom gradient.",
  //     "Direction Control: Adjust the gradient direction (e.g., top to bottom, left to right, diagonal).",
  //     "Gradient Type Selection: Choose between linear (straight line) or radial (circular) gradient.",
  //     "Customizable Color Stops: Set the percentage positions of each color within the gradient.",
  //     "CSS Code Copy: Copy the generated CSS code to your clipboard for easy integration.",
  //   ],
  //   type: "base",
  //   code: "https://github.com/FunChosa/gradient-generator",
  //   demo: "https://funchosa-gradient-generator.netlify.app",
  //   level: "medium",
  // },
  {
    name: "GitHub user info",
    id: "github-user-info",
    cover: githubUserInfoImage,
    desc: "A simple application built with React, allowing users to get information about GitHub users using the GitHub API. The main goal of this project is to study and practically apply the Zustand state management library for effective application state management.",
    features: [
      "Allows users to quickly find and view key information about a GitHub user.",
      "Shows the user's public repositories in an easy-to-browse list.",
      "Enables users to easily navigate to a repository on GitHub directly.",
    ],
    type: "api",
    code: "https://github.com/FunChosa/github-user-info",
    demo: "https://funchosa-github-user-info.netlify.app",
    level: "medium",
  },
];
