# ⚽ Football Info API Playground
This project is a simple Node.js application that demonstrates API calls to [API-FOOTBALL](https://www.api-football.com). The application retrieves and displays various football information, such as match data, team stats, player details, etc.

The primary goal of this project is to learn and improve Node.js skills through hands-on practice and exploration.

🌟 **Features**

- Connects to [API-FOOTBALL](https://www.api-football.com) to fetch real-time football data.
- Retrieves information about:
- Matches (e.g., live scores, fixtures).
- Teams (e.g., lineups, formations).
- Players (e.g., stats, positions).
- Dynamically renders data using the EJS templating engine.

✨ **Why This Project?**

This project serves as a personal learning tool to:

- Gain experience in making API calls with Node.js.
- Use EJS templating to dynamically display server-side data.
- Improve knowledge of football-related APIs and data structures.
- Experiment with Express and the modular design of Node.js applications.

🛠️ **Tech Stack**
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- API-FOOTBALL (third-party API)

📚 **Learning Goals**
- Improve understanding of server-side programming using Node.js.
- Develop familiarity with REST APIs and their implementation.
- Learn how to fetch, parse, and render dynamic data in web applications.

🎯 **Future Enhancements**
- Add user-friendly UI with Bootstrap or other frameworks.
- Include error handling and rate limit management for API calls.
- Create more advanced endpoints for additional football stats.
- Implement caching for frequently accessed data.

📧 Contact
For questions, suggestions, or collaborations, feel free to reach out:

- Email: joaomendonca2000@hotmail.com
- GitHub: jfilipegm

# 🚀 Getting Started - Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (LTS version recommended)
- npm (comes with Node.js)

Installation
Clone the repository:
 ```
git clone https://github.com/your-username/football-api-playground.git
cd football-api-playground
```

Install dependencies:
```
npm install
```
- Get your free or paid API key from [API-FOOTBALL](https://www.api-football.com) and add it to your environment variables:

Create a .env file in the root directory:
```
API_KEY=your_api_football_key
```
📂 Project Structure (work in progress)
.

├── views/              # EJS templates for rendering data

├── routes/             # API call handlers and Express routes

├── public/             # Static files (CSS, images)

├── .env                # API key configuration

├── index.js            # Main entry point

└── README.md           # Documentation (this file)
