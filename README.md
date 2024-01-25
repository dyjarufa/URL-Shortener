# React URL Shortener

This project is a simple URL shortener developed with React. It allows users to shorten URLs and store these shortened URLs locally. Additionally, the project follows best practices of clean code and SOLID principles to ensure the code's clarity and maintainability.

## Technologies Used

- React
- UUID for generating unique identifiers
- LocalStorage for data storage

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [REPOSITORY_URL]
   ```

2. Navigate to the repository folder:

   ```bash
   cd [FOLDER_NAME]
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm start
   ```

## Usage

- To shorten a URL, enter the desired URL in the input field and click the button to shorten.
- The shortened URLs will be displayed below the input field.
- Click on a shortened URL to open it in a new browser tab.

## Features

- The project uses React Hooks for state management.
- Implements a custom hook to encapsulate URL shortening and storage logic.
- Uses the Single Responsibility Principle (SRP) from SOLID to separate URL formatting logic into a utility function.
- URLs are validated and transformed into absolute URLs to ensure correct redirection.

## Acknowledgments

Thanks to OpenAI's ChatGPT for providing valuable guidance and suggestions during the development of this project.

---

Developed with ❤️ by Jady Rufino
