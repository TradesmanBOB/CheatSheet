document.addEventListener('DOMContentLoaded', function () {
    // Select the buttons
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const sidePanel = document.querySelector('.side-panel');
    
    // Initial side panel message when no section is selected
    updateSidePanel(''); // Default message when the page is loaded

    // Add click event listeners to each button
    button1.addEventListener('click', function() {
        setActiveButton(button1);  // Make HTML button active
        showHTML();  // Display HTML code
        updateSidePanel('html');  // Update the side panel for HTML
    });

    button2.addEventListener('click', function() {
        setActiveButton(button2);  // Make CSS button active
        showCSS();  // Display CSS code
        updateSidePanel('css');  // Update the side panel for CSS
    });

    button3.addEventListener('click', function() {
        setActiveButton(button3);  // Make JS button active
        showJS();  // Display JS code
        updateSidePanel('js');  // Update the side panel for JS
    });

    // Fetch and display the raw HTML, CSS, and JS files
    fetchAndDisplayFile('index.html', 'htmlCode');   // HTML code
    fetchAndDisplayFile('styles.css', 'cssCode');    // CSS code
    fetchAndDisplayFile('index.js', 'jsCode');       // JS code
});

// Function to set active class on a button
function setActiveButton(button) {
    // Select all buttons
    const buttons = document.querySelectorAll('.btn');
    
    // Remove 'active' class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// Fetch and display file content in the respective code block
function fetchAndDisplayFile(filePath, codeId) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(codeId).textContent = data;
        })
        .catch(error => console.error('Error fetching file:', error));
}

// Functions to show specific code blocks when corresponding button is clicked
function showHTML() {
    console.log('Showing HTML Code');
    document.getElementById('htmlCode').style.display = 'block';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'none';
}

function showCSS() {
    console.log('Showing CSS Code');
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'block';
    document.getElementById('jsCode').style.display = 'none';
}

function showJS() {
    console.log('Showing JS Code');
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'block';
}

// Update the side panel based on selected button
function updateSidePanel(section) {
    const sidePanel = document.querySelector('.side-panel');
    
    // Reset the content of the side panel
    if (section === '') {
        sidePanel.innerHTML = '<h2>Please, chose a button.</h2> <p>Upon selecting a button, you will see an explanation here as to what said language generally does and an example of it.</p>';
    } else {
        // Add explanation based on section selected
        let explanation = '';

        switch (section) {
            case 'html':
                explanation = `<h2>Explanation of HTML Elements:</h2><p>HTML (HyperText Markup Language) defines the structure of web pages. It uses elements like headings, paragraphs, and links to structure content. Think of it as the frame and foundation of a webpage.</p>`;
                break;
            case 'css':
                explanation = `<h2>Explanation of CSS Elements:</h2><p>CSS (Cascading Style Sheets) controls the layout, colors, fonts, and overall appearance of a webpage. If HTML is the structure, CSS is the style and design that makes it look good. As said, if HTML is frame and foundation, CSS would be paint, appearance, and beauty.</p>`;
                break;
            case 'js':
                explanation = `<h2>Explanation of JavaScript Elements:</h2><p>JavaScript (JS) is a programming language that adds interactivity to web pages. It allows for dynamic changes to content, animations, and user interactions, like the buttons above that change which code block shows, and myself which changes dynamically based upon which button clicked.</p>`;
                break;
            default:
                explanation = '<h2>Upon selecting a button, you will see an explanation here.</h2>';
        }

        sidePanel.innerHTML = explanation;
    }
}

// Making the side-panel sticky to the top right of screen
// Get side panel element
const sidePanel = document.querySelector('.side-panel');

// set the scroll threshold (when to make panel sticky)
const scrollThreshold = 500; // When page is scrolled 100px or more

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollThreshold) {
        sidePanel.classList.add('sticky');
    } else {
        sidePanel.classList.remove('sticky');
    }
});