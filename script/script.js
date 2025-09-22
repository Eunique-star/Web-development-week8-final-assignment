// =============================
// Highlight input field on focus
// =============================
// Get all elements with class 'inputField' and add a focus event to highlight them
let input = document.getElementsByClassName("inputField");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", function(){
        input[i].style.outlineColor = "#f0a500"; // Highlight color
    });
}

// =============================
// Booking Form Validation Logic
// =============================
// Attach validation to the booking form's submit event
document.getElementById("bookingForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true; // Track if all fields are valid

    // Get values from form fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let checkIn = document.getElementById("check-in").value; 
    let checkOut = document.getElementById("check-out").value;
    let rooms = document.getElementById("rooms").value.trim();
    let roomType = document.getElementById("room-type").value;

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("checkInError").innerText = "";
    document.getElementById("checkOutError").innerText = "";
    document.getElementById("roomsError").innerText = "";
    document.getElementById("roomTypeError").innerText = "";

    // Validate name field
    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Full name is required.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation using regex pattern
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // Phone number validation (length between 10 and 14 digits)
    if(phone === ""){
        document.getElementById("phoneError").style.color = "red";
        document.getElementById("phoneError").innerText = "Phone Number is required";
        isValid = false;
    } else if(phone.length < 10){
         document.getElementById("phoneError").style.color = "red";
         document.getElementById("phoneError").innerText = "Phone number shouldn't be less than 10 digits"
         isValid = false;
    } else if(phone.length > 14){
         document.getElementById("phoneError").style.color = "red";
         document.getElementById("phoneError").innerText = "Phone number shouldn't be more than 14 digits"
         isValid = false;
    }

    // Check-in date validation
    if(checkIn === ""){
         document.getElementById("checkInError").style.color = "red";
         document.getElementById("checkInError").innerText = "Select a date to check in";
         isValid = false;
    }

    // Check-out date validation
    if(checkOut === ""){
         document.getElementById("checkOutError").style.color = "red";
         document.getElementById("checkOutError").innerText = "Select a date to check out";
         isValid = false;
    }

    // Number of rooms validation
    if(rooms === ""){
         document.getElementById("roomsError").style.color = "red";
         document.getElementById("roomsError").innerText = "Select number of room";
         isValid = false;
    }

    // Room type selection validation
    if(roomType === ""){
        document.getElementById("roomTypeError").style.color = "red";
        document.getElementById("roomTypeError").innerText = "Select the type of room you want";
        isValid = false;
    } 

    // If all validations pass, reset form and redirect to success page
    if(isValid) {
        document.getElementById("bookingForm").reset(); // Reset form fields
        window.location.href = "form-submit.html"; // Redirect to confirmation page
    }
}
