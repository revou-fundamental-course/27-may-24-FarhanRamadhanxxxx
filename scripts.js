document.addEventListener("DOMContentLoaded", () => {
    // Welcome message personalization
    const name = prompt("Enter your name:");
    document.getElementById("welcome-message").textContent = `Hi ${name}, Welcome To Website`;

    // Form validation and submission
    const form = document.getElementById("message-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const submittedData = document.getElementById("submitted-data");
        document.getElementById("current-time").textContent = new Date().toLocaleString();
        document.getElementById("submitted-name").textContent = form.name.value;
        document.getElementById("submitted-dob").textContent = form.dob.value;
        document.getElementById("submitted-gender").textContent = form.gender.value;
        document.getElementById("submitted-message").textContent = form.message.value;

        submittedData.style.display = "block";
    });
});
