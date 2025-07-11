# Interactive_Button_Click_Tracker
## Date: 11-07-2025
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function


## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Interactive Button Click Tracker</title>
        <link rel="stylesheet" href="styles.css">

    </head>

    <body>
        <div class="counter-card">
        <h1> Interactive Button click Counter</h1>

        <button id="clickButton">Click Here</button>
        <p id="displayCount"> Clicked 0 times</p>

      
        </div>

          <script src="script.js"></script>
    </body>
</html>
```
## CSS Code:
```
body {
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    background-color: #fef6f9; 
}

.counter-card {
    background-color: #ffe3ec; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 40%;
    padding: 40px;
}

button {
    background-color: #d45d79;
    padding:25px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    color: #fff5f8;
    cursor: pointer;
   
}

button:hover {
    background-color: #b04c65;
}
```
## JavaScript Code:
```
function funCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = funCounter();

const button = document.getElementById('clickButton');
const display = document.getElementById('displayCount');

button.addEventListener('click', () => {
  const currentCount = counter(); 
  display.textContent = `Clicked ${currentCount} times`;
});
```

## Output:
<img width="1919" height="993" alt="image" src="https://github.com/user-attachments/assets/686b830d-40f2-49a3-9d50-9ad6f208bbe1" />

<img width="1915" height="1002" alt="image" src="https://github.com/user-attachments/assets/14c06504-2c77-4b2c-a035-86e27736daab" />


## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
