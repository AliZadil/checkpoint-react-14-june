# Getting started:
Fork, then clone this repository and run

    npm install

Inside the repository.

Run:

    npm run dev

This will start your react app.
React app will run on **localhost:3000**.

## Start editing the **src/app.jsx** file.
API URL: https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new

You can use class components or function components for this test.
- Create a component NumberComponent, in a new file NumberComponent.jsx. Import it in App.jsx.
- Implement a function in NumberComponent that fetches the number from an API when the component mounts.
- Render the fetched number within the NumberComponent component.

- Create a button within the NumberComponent called "Increment".
- Implement a function that increments the value of the number when the "Increment" button is clicked.

- Create a button in NumberComponent called "Save to LocalStorage".
- Implement a function that saves the current value of the number to localStorage when the "Save to LocalStorage" button is clicked.

- Create a button in NumberComponent called "Load from LocalStorage".
- Implement a function that retrieves the saved number from localStorage and updates the value of the number when the "Load from LocalStorage" button is clicked.

- If the number is odd, make it so the text for the number is red. If the number is even, the text is blue.
- Use css classes, you can write them in App.css, and apply them to the text depending on the number.