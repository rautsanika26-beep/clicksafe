document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        // ✅ REDIRECT TO HOMEPAGE
        window.location.href = "/home";
    } else {
        alert("❌ Invalid username or password");
    }
});

z