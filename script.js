//your JS code here. If required.
// Get all panels
const panels = document.querySelectorAll('.panel');

// Function to remove active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to add active