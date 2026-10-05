// ================================
// CREATE ACCOUNT
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const username =
            document.getElementById("username").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const bloodGroup =
            document.getElementById("bloodGroup").value;

        const location =
            document.getElementById("location").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");


        // Check passwords

        if (password !== confirmPassword) {

            message.textContent = "Passwords do not match.";
            message.style.color = "red";

            return;
        }


        // Password length

        if (password.length < 6) {

            message.textContent =
                "Password must contain at least 6 characters.";

            message.style.color = "red";

            return;
        }


        // Check whether username already exists

        const existingUser =
            localStorage.getItem("bloodBankUser");

        if (existingUser) {

            const user =
                JSON.parse(existingUser);

            if (
                user.username.toLowerCase()
                === username.toLowerCase()
            ) {

                message.textContent =
                    "Username already exists.";

                message.style.color = "red";

                return;
            }
        }


        // Create user object

        const user = {

            fullName: fullName,

            username: username,

            email: email,

            phone: phone,

            bloodGroup: bloodGroup,

            location: location,

            password: password

        };


        // Save user

        localStorage.setItem(
            "bloodBankUser",
            JSON.stringify(user)
        );


        message.textContent =
            "Account created successfully!";

        message.style.color = "green";


        // Go to login page

        setTimeout(function() {

            window.location.href = "login.html";

        }, 1500);

    });
}



// ================================
// LOGIN
// ================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const username =
            document.getElementById("loginUsername")
            .value.trim();

        const password =
            document.getElementById("loginPassword")
            .value;


        const message =
            document.getElementById("loginMessage");


        // Get registered user

        const storedUser =
            localStorage.getItem("bloodBankUser");


        if (!storedUser) {

            message.textContent =
                "No account found. Please create an account first.";

            message.style.color = "red";

            return;
        }


        const user =
            JSON.parse(storedUser);


        // Check username/email

        const correctUsername =
            username.toLowerCase()
            === user.username.toLowerCase();

        const correctEmail =
            username.toLowerCase()
            === user.email.toLowerCase();


        // Check login

        if (
            (correctUsername || correctEmail)
            && password === user.password
        ) {

            message.textContent =
                "Login successful!";

            message.style.color = "green";


            // Save login status

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            // Go to main website

            setTimeout(function() {

                window.location.href = "index.html";

            }, 1000);

        } else {

            message.textContent =
                "Incorrect username/email or password.";

            message.style.color = "red";

        }

    });
}