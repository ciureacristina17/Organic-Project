function readMoreFirst() { //finds function
    var dots = document.getElementById("dots"); //returns element that has the ID attribute with value, searches for dots
    var moreText = document.getElementById("more"); // '' '' searches for more
    var btnText = document.getElementById("myBtn"); // '' '' searches for myBtn

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}


function readMoreTwo() { //finds function
    var dots2 = document.getElementById("dots2"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more2"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn2"); // '' '' searches for myBtn2

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}


function readMoreThree() { //finds function
    var dots3 = document.getElementById("dots3"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more3"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn3"); // '' '' searches for myBtn2

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}

function readMoreFour() { //finds function
    var dots4 = document.getElementById("dots4"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more4"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn4"); // '' '' searches for myBtn2

    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots4.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}

function readMoreFive() { //finds function
    var dots5 = document.getElementById("dots5"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more5"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn5"); // '' '' searches for myBtn2

    if (dots5.style.display === "none") {
        dots5.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots5.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}


function readMoreSix() { //finds function
    var dots6 = document.getElementById("dots6"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more6"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn6"); // '' '' searches for myBtn2

    if (dots6.style.display === "none") {
        dots6.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots6.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}

(function() {
    const form = document.getElementById('calc-form');
    const results = document.getElementById('results');
    const errors = document.getElementById('form-error');

    /**
     * Display a form validation error
     *
     * @param   {String}  msg  The validation message
     * @return  {Boolen}       Returns false
     */
    function errorMessage(msg) {
        errors.innerHTML = msg;
        errors.style.display = '';
        return false;
    }

    /**
     * Display the calculation results
     *
     * @param   {Integer}  calories   The calories burned
     * @param   {Integer}  distance   The distance run
     * @param   {String}   unit       The distance unit (miles or kilometers)
     * @param   {Integer}  burnRate   The calories per distance burn rate
     * @param   {Integer}  calsPerHr  The calories burned per hour
     */
    function showResults(calories) {
        results.innerHTML = `<p>Your basal metabolic rate (BMR) is: <strong>${(calories).toFixed(2)} </strong> calories a day.</p><a href="#" id="rs">revise</a>`;
        results.style.display = ''
        form.style.display = 'none'
        errors.style.display = 'none'
    }

    /**
     * Hide the results and reset the form
     */
    function resetForm(e) {
        if (e.target.id = 'rs') {
            e.preventDefault();
            results.style.display = 'none';
            form.style.display = '';
            form.reset()
        }
    }

    /**
     * Handle form submit
     */
    function submitHandler(e) {
        e.preventDefault();

        // Age
        let age = parseFloat(form.age.value);
        //let unit = form.distance_unit.value;
        if (isNaN(age) || age < 0) {
            return errorMessage('Please enter a valid age');
        }

        // Height
        let heightCM = parseFloat(form.height_cm.value);
        if (isNaN(heightCM) || heightCM < 0) {

            let heightFeet = parseFloat(form.height_ft.value);
            if (isNaN(heightFeet) || heightFeet < 0) {
                return errorMessage('Please enter a valid Height in feet or centimeters');
            }
            let heightInches = parseFloat(form.height_in.value);
            if (isNaN(heightInches) || heightInches < 0) {
                heightInches = 0;
            }
            heightCM = (2.54 * heightInches) + (30.4 * heightFeet)

        }

        let weight = parseFloat(form.weight.value);
        if (isNaN(weight) || weight < 0) {
            return errorMessage('Please enter a valid weight');
        }

        if (form.weight_unit.value == 'lb') {
            weight = 0.453592 * weight;
        }

        let calories = 0;
        if (form.gender.value == 'Female') {
            //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
            calories = 655.09 + (9.56 * weight) + (1.84 * heightCM) - (4.67 * age);
        } else {
            calories = 66.47 + (13.75 * weight) + (5 * heightCM) - (6.75 * age);
        }

        // Display results
        showResults(calories);
    }

    // Add Event Listeners
    form.addEventListener('submit', submitHandler);
    results.addEventListener('click', resetForm, true);

})();