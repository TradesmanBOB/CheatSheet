// Declare 'sidePanel' outside of the DOMContentLoaded listener
const sidePanel = document.querySelector('.side-panel');

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
        if (button1.classList.contains('active')) {
            button1.classList.remove('active'); // directly remove the active class
            hideAllCodeBlocks();  // hide code block
            updateSidePanel('');  // reset the side panel for HTML
        } else {
            setActiveButton(button1);  // Make HTML button active
            showHTML();  // Display HTML code
            updateSidePanel('html');  // Update the side panel for HTML
        }
    });

    // Add click event listeners to each button
    button2.addEventListener('click', function() {
        if (button2.classList.contains('active')) {
            button2.classList.remove('active'); // directly remove the active class
            hideAllCodeBlocks();  // hide code block
            updateSidePanel('');  // reset the side panel for CSS
        } else {
            setActiveButton(button2);  // Make CSS button active
            showCSS();  // Display CSS code
            updateSidePanel('css');  // Update the side panel for CSS
        }
    });

    // Add click event listeners to each button
    button3.addEventListener('click', function() {
        if (button3.classList.contains('active')) {
            button3.classList.remove('active'); // directly remove the active class
            hideAllCodeBlocks();  // hide code block
            updateSidePanel('');  // reset the side panel for JS
        } else {
            setActiveButton(button3);  // Make HTML button active
            showJS();  // Display JS code
            updateSidePanel('js');  // Update the side panel for JS
        }
    });

    // Fetch and display the raw HTML, CSS, and JS files
    fetchAndDisplayFile('index.html', 'htmlCode');   // HTML code
    fetchAndDisplayFile('styles.css', 'cssCode');    // CSS code
    fetchAndDisplayFile('index.js', 'jsCode');       // JS code
});

// Function to add/remove the 'active' class on a button which in turn adjusts content on the page to open block for that language and opens summary for that language
function setActiveButton(button) {
    // Select all buttons
    const buttons = document.querySelectorAll('.btn');
    
    // if already active remove active class from previously clicked button and reset the side panel
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        updateSidePanel(''); // Reset side panel content
        hideAllCodeBlocks(); // Hide all codewa blocks
        return; // Exit function early
    }
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active');
    });
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// Function to hide all code blocks when a button is deselected all at once
function hideAllCodeBlocks() {
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'none';
}

// Fetch and display file content in the respective code block
function fetchAndDisplayFile(filePath, codeId) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(codeId).textContent = data;
        })
        // if error log it to (Dev Console) located in F12 menu
        .catch(error => console.error('Error fetching file:', error));
}

// Functions to show specific code blocks when corresponding button is clicked
// HTML Button clicked
function showHTML() {
    console.log('Showing HTML Code');
    document.getElementById('htmlCode').style.display = 'block';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'none';
}

// CSS Button clicked
function showCSS() {
    console.log('Showing CSS Code');
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'block';
    document.getElementById('jsCode').style.display = 'none';
}

// JS Button clicked
function showJS() {
    console.log('Showing JS Code');
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'block';
}

// Update the side panel based on selected button to summarize the selected language, provides default content when no button clicked
function updateSidePanel(section) {
    // Reset the content of the side panel
    if (section === '') {
        sidePanel.innerHTML = '<h2>Please, chose a button.</h2> <p>Upon selecting a button, you will see an explanation here as to what said language generally does and an example of it.</p>';
    } else {
        // Add explanation based on section selected
        let explanation = '';

        switch (section) {
            // explanation of HTML elements
            case 'html':
                explanation = `<h2>Explanation of HTML Elements:</h2><p>HTML (HyperText Markup Language) defines the structure of web pages. It uses elements like headings, paragraphs, and links to structure content. Think of it as the frame and foundation of a webpage.</p>`;
                break;
            // explanation of CSS elements
            case 'css':
                explanation = `<h2>Explanation of CSS Elements:</h2><p>CSS (Cascading Style Sheets) controls the layout, colors, fonts, and overall appearance of a webpage. If HTML is the structure, CSS is the style and design that makes it look good. As said, if HTML is frame and foundation, CSS would be paint, appearance, and beauty.</p>`;
                break;
            // explanation of JS elements
            case 'js':
                explanation = `<h2>Explanation of JavaScript Elements:</h2><p>JavaScript(JS) adds interactivity to webpages. Enabling dynamic content changes, animations, and user interactions, like the buttons above that change code blocks and my content based on clicks.</p>`;
                break;
            default:
                explanation = '<h2>Upon selecting a button, you will see an explanation here.</h2>';
        }

        sidePanel.innerHTML = explanation;
    }
}

// Making the side-panel sticky to the top right of screen
// set the scroll threshold (when to make panel sticky)
const scrollThreshold = 500; // When page is scrolled 100px or more

// Add scroll event listener, makes side panel stick to viewport after scrolling past certain distance from top of page to follow that of the viewport
window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollThreshold) {
        sidePanel.classList.add('sticky');
    } else {
        sidePanel.classList.remove('sticky');
    }
});