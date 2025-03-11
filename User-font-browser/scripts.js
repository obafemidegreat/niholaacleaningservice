document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/blogs")
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById("blog-list");
            if (blogContainer) {
                blogContainer.innerHTML = data.map(blog => `<li>${blog.title}</li>`).join("");
            }
        })
        .catch(error => console.error("Error fetching blogs:", error));
});

// Form submission handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => alert("Message sent successfully!"))
        .catch(error => console.error("Error sending message:", error));
    });
}