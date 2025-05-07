// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const serviceDateInput = document.getElementById('service date');
    const servicesList = document.querySelectorAll('ol li');
    const image = document.querySelector('img');

    // Form validation
    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            alert('Name is required.');
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.includes('@')) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
        }

        // Validate service date
        if (serviceDateInput.value === '') {
            alert('Please select a service date.');
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Add event listener for real-time feedback
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = 'red';
        } else {
            nameInput.style.borderColor = 'green';
        }
    });

    // Button click event
    const changeTextButton = document.getElementById("changeTextButton");
    const textToChange = document.getElementById("textToChange");
    changeTextButton.addEventListener("click", () => {
        textToChange.textContent = "You clicked the button!";
    });

    // Hover effect
    const hoverImage = document.getElementById("hoverImage");
    hoverImage.addEventListener("mouseover", () => {
        hoverImage.style.border = "5px solid red";
    });
    hoverImage.addEventListener("mouseout", () => {
        hoverImage.style.border = "none";
    });

    // Secret action (double-click)
    const secretButton = document.getElementById("secretButton");
    const secretMessage = document.getElementById("secretMessage");
    secretButton.addEventListener("dblclick", () => {
        secretMessage.style.display = "block";
    });

    // Change button color
    const colorChangeButton = document.getElementById("colorChangeButton");
    colorChangeButton.addEventListener("click", () => {
        colorChangeButton.style.backgroundColor = colorChangeButton.style.backgroundColor === "green" ? "blue" : "green";
    });

    // Tabs functionality
    const tabs = document.querySelectorAll(".tab");
    const tabContent = document.getElementById("tabContent");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabContent.textContent = `You clicked on Tab ${tab.dataset.tab}`;
        });
    });

    // Real-Time Feedback
    const feedbackInput = document.getElementById("feedbackInput");
    const feedbackOutput = document.getElementById("feedbackOutput");
    feedbackInput.addEventListener("input", () => {
        feedbackOutput.textContent = feedbackInput.value || "Your feedback will appear here in real-time.";
    });

    // Hover effect on services list
    servicesList.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'green';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
        });
    });

    // Click event on the image
    image.addEventListener('click', () => {
        alert('You clicked on the image!');
    });

    // Real-time feedback for email input
    emailInput.addEventListener('input', () => {
        if (!emailInput.value.includes('@')) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'green';
        }
    });

    // Real-time feedback for password input
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 8) {
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.borderColor = 'green';
        }
    });
});