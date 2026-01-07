function sanitizeInput(str) {
    // This prevents Cross-Site Scripting (XSS) by removing HTML tags
    // Essential for Fintech security
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function handleLogin() {
    const userField = document.getElementById('username').value;
    const display = document.getElementById('display');

    // 1. Check for empty fields (Error Handling)
    if (!userField) {
        alert("Please enter a username");
        return;
    }

    // 2. Sanitize the input (Defensive Coding)
    const safeUser = sanitizeInput(userField);

    // 3. Mock logic for Dashboard Access
    display.style.display = 'block';
    display.innerHTML = `<strong>Welcome, ${safeUser}</strong><br>Account Balance: $25,430.12<br><small>Security Status: Protected</small>`;
    
    console.log("System Log: Secure login attempt for user: " + safeUser);
}
