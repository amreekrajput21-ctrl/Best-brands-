// --- Premium JS Logic ---

// 1. Dynamic Greeting based on time
function updateGreeting() {
    const hours = new Date().getHours();
    const nameElement = document.getElementById("name");
    let greeting = "";

    if (hours < 12) greeting = "Good Morning, Ajay";
    else if (hours < 18) greeting = "Good Afternoon, Ajay";
    else greeting = "Good Evening, Ajay";

    // Text change hone par fade-in effect
    nameElement.style.opacity = 0;
    setTimeout(() => {
        nameElement.innerHTML = greeting;
        nameElement.style.opacity = 1;
        nameElement.style.transition = "opacity 1s";
    }, 500);
}

// 2. Button Click Sound (Visual Feedback)
function toggleStyle() {
    const card = document.querySelector('.card');
    const btn = document.querySelector('.btn');
    
    // Smooth Scale effect on click
    card.style.transform = "scale(0.95)";
    setTimeout(() => card.style.transform = "scale(1.05)", 150);

    if (btn.innerText === "UPGRADE LOOK") {
        card.style.border = "1px solid #d4af37";
        card.style.boxShadow = "0 0 40px rgba(212, 175, 55, 0.3)";
        btn.style.background = "linear-gradient(45deg, #d4af37, #f9d423)";
        btn.innerText = "Premium Active";
    } else {
        alert("System Resetting...");
        location.reload();
    }
}

// 3. Mouse Move Effect (Card 3D Tilt)
document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    const card = document.querySelector('.card');
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Initialize
window.onload = updateGreeting;

function orderNow() {
    window.open("https://wa.me/919797475525", "_blank");
}
