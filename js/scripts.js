// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode toggle
const toggleDarkMode = document.createElement("button");
toggleDarkMode.textContent = "Toggle Dark Mode";
toggleDarkMode.classList.add("dark-mode-toggle");
document.body.appendChild(toggleDarkMode);
toggleDarkMode.setAttribute("aria-label", "Toggle dark mode");

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.textContent = document.body.classList.contains("dark-mode")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});

// Counter Animation for Years of Experience
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('experience-counter');
    const target = parseInt(counterElement.textContent, 10);
    let count = 0;
    
    const updateCounter = () => {
        if (count < target) {
            count++;
            counterElement.textContent = `${count}+`;
            setTimeout(updateCounter, 50); // Adjust speed as needed
        } else {
            counterElement.textContent = `${target}+`;
        }
    };
    
    updateCounter();
});

