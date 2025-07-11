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
