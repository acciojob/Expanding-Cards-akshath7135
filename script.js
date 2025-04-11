// Get all panels
const panels = document.querySelectorAll('.panel');

// Function to remove active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to handle panel click events
function activatePanel(panel) {
    removeActiveClasses();
    panel.classList.add('active');
}

// Add click event listener to all panels
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        activatePanel(panel);
    });
});
