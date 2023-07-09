# Login-SignUp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also has:

- Typescript
- Tailwind
- ESLint
- React Testing library

It's build using reusable components: easy to test and cleaner code avoiding repetitions.

## About this proyect

- Users can log in, and the email is saved in the Redux state under the register slice.
- Users can sign up, and the email and password are saved in the Redux state under the signUp slice.
- There are validations if the user enters an incorrect email or password.
- I am currently working on the payment page, and there's a placeholder page to notify users about it.
- If users navigate to a page that doesn't exist, a "Not Found" page is displayed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
