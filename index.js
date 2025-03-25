document.addEventListener('DOMContentLoaded', function () {
    // Select the buttons
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    // Add click event listeners to each button
    button1.addEventListener('click', function() {
        setActiveButton(button1);  // Make HTML button active
        showHTML();  // Display HTML code
    });

    button2.addEventListener('click', function() {
        setActiveButton(button2);  // Make CSS button active
        showCSS();  // Display CSS code
    });

    button3.addEventListener('click', function() {
        setActiveButton(button3);  // Make JS button active
        showJS();  // Display JS code
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
    document.getElementById('htmlCode').style.display = 'block';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'none';
}

function showCSS() {
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'block';
    document.getElementById('jsCode').style.display = 'none';
}

function showJS() {
    document.getElementById('htmlCode').style.display = 'none';
    document.getElementById('cssCode').style.display = 'none';
    document.getElementById('jsCode').style.display = 'block';
}


function setActiveButton(button) {
    const buttons = document.querySelectorAll('.btn');
    
    // Remove 'active' class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        console.log(`Removed 'active' from: ${btn.id}`);  // Log removal of 'active' class
    });
    
    // Add 'active' class to the clicked button
    button.classList.add('active');
    console.log(`Added 'active' to: ${button.id}`);  // Log addition of 'active' class
}
