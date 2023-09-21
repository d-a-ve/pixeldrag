# PixelDrag - Drag and Drop Image Gallery

PixelDrag is an image gallery web application that allows users to manage the gallery through an intuitive drag and drop interface. Users can rearrange the images in the gallery to their liking. Additionally, PixelDrag provides user account functionality, with the ability to log in or create an account.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [User Authentication](#user-authentication)
- [Special Characters in Password](#special-characters-in-password)

## Technologies Used

PixelDrag is built using the following technologies and libraries:

- [React](https://react.dev/) - A popular JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - For handling client-side routing in the application.
- [DND Kit](https://dndkit.com/) - A set of utilities for building drag and drop interfaces.
- [Firebase](https://firebase.google.com/) - Used for authentication and user management.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - For displaying user-friendly notifications.

## Getting Started

To get started with PixelDrag, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd pixiedrag-hng-stage-3
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

4. **Firebase Configuration**:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).

   - In your Firebase project settings, locate and copy your Firebase configuration object. It should look something like this:

     ```javascript
     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };
     ```

   - In the project directory, find the `firebaseConfig.ts` file located in the `src/configs` folder.

   - Open `firebaseConfig.ts` and replace the existing `firebaseConfig` variable with your Firebase configuration from step 2.

   - Save the file.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and go to `http://localhost:5173` to access PixelDrag.

Now, your local development environment is configured to use Firebase for authentication. PixelDrag will use this configuration to interact with Firebase services when running locally.

> Remember to keep your Firebase configuration secure and avoid sharing sensitive information such as API keys publicly.

## User Authentication

PixelDrag requires user authentication for using the drag and drop functionality. Here are the authentication options:

- **Logging In**: Existing users can log in using their email and password. A testing account is also available with the following credentials:
  - Email: `user@example.com`
  - Password: `1Password`

- **Creating an Account**: Users who do not have an account can create one using their email and a password.

## Special Characters in Password

When creating a password for your PixelDrag account, please note that only the following special characters are allowed: `@$!%*?&`. If any other special characters are used in the password, you will not be able to create an account.

⭐️ Built by [Dave](https://github.com/d-a-ve/) for HNG X Zuri Stage 3 task.