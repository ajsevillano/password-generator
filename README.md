# Password Generator

> A React app that generates random, secure passwords with configurable length and character sets.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/932b456405d340868271fe85ef9a672f)](https://www.codacy.com/gh/ajsevillano/password-generator/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ajsevillano/password-generator&utm_campaign=Badge_Grade)

🔗 **[Live Demo](https://lucid-goldberg-c11d8e.netlify.app/)**

![Demo](https://user-images.githubusercontent.com/35935634/174480940-2e787f38-bcc5-4922-b6cc-8298f374bdb6.gif)

## About

One of my first useful tools, built with several goals in mind: understanding the basics of password security, getting hands-on with React and TypeScript, and shipping something practical rather than just another tutorial clone. It was also a good exercise in managing multiple pieces of interdependent state and surfacing meaningful feedback to the user through the strength indicator.

## Features

- 🔒 Generate passwords between 1 and 30 characters
- 🔤 Mix lowercase, uppercase, numbers and symbols
- 🎨 Visual strength indicator so you know how secure your password is
- 📋 One-click copy to clipboard
- ❌ Requires at least one character type to be selected
- 📱 Fully responsive, works on mobile

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 + TypeScript |
| Styles | SCSS |
| Deployment | Netlify |

## Getting Started

```bash
git clone https://github.com/ajsevillano/password-generator.git
cd password-generator
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** This project uses Sass in standalone (global) mode. If styles don't compile, install it globally: `npm install -g sass`

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Contributing

Found a bug or have an idea? Feel free to open an issue.

## License

MIT
