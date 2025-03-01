document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Simple alert on clicking a product
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("click", function() {
            alert("This item is available for pickup only. Price is " + this.querySelector(".price").textContent);
        });
    });
});
