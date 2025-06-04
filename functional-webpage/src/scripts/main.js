// This file contains the JavaScript code for the webpage. It handles interactivity, DOM manipulation, and any dynamic behavior required by the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button was clicked!';
    });
});