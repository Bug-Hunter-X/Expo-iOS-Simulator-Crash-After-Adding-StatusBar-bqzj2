# Expo iOS Simulator Crash with StatusBar

This repository demonstrates an unusual bug encountered when using the StatusBar component in an Expo React Native app. The app functions correctly on Android simulators and devices, but crashes on iOS simulators after the addition of the StatusBar component.

## Bug Description

The application crashes upon launch on iOS simulator when the StatusBar component is included. The crash occurs without any explicit error messages in the console.  The exact same code works without issue on Android.

## Solution

The solution involves using a conditional rendering of the StatusBar based on the platform. This workaround prevents the crash on iOS.

## Reproduction

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `expo start` to start the development server.
5. Observe the crash on the iOS simulator.
6. Implement the solution from `AppSolution.js` to see the fix in action.

## Technologies Used

* React Native
* Expo
* JavaScript

## License

[MIT](https://choosealicense.com/licenses/mit/) 