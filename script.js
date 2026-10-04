/* =========================================
   LIFEDROP - KERALA BLOOD BANK DIRECTORY
========================================= */

const centers = [

    /* THIRUVANANTHAPURAM */

    {
        name: "Government Medical College Blood Bank",
        city: "Thiruvananthapuram",
        state: "Kerala",
        district: "Thiruvananthapuram",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0471-2528386"
    },

    {
        name: "Regional Cancer Centre Blood Bank",
        city: "Thiruvananthapuram",
        state: "Kerala",
        district: "Thiruvananthapuram",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0471-2442541"
    },


    /* KOLLAM */

    {
        name: "Government Medical College Blood Bank",
        city: "Kollam",
        state: "Kerala",
        district: "Kollam",
        bloodGroups: ["A+", "A-", "B+", "AB+", "O+", "O-"],
        phone: "0474-2575050"
    },

    {
        name: "IMA Blood Bank",
        city: "Kollam",
        state: "Kerala",
        district: "Kollam",
        bloodGroups: ["A+", "B+", "B-", "AB+", "O+"],
        phone: "0474-2766551"
    },


    /* PATHANAMTHITTA */

    {
        name: "Government General Hospital Blood Bank",
        city: "Pathanamthitta",
        state: "Kerala",
        district: "Pathanamthitta",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0468-2222223"
    },

    {
        name: "Pushpagiri Medical College Blood Bank",
        city: "Thiruvalla",
        state: "Kerala",
        district: "Pathanamthitta",
        bloodGroups: ["A+", "B+", "AB+", "O+"],
        phone: "0469-2700755"
    },


    /* ALAPPUZHA */

    {
        name: "Government Medical College Blood Bank",
        city: "Alappuzha",
        state: "Kerala",
        district: "Alappuzha",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0477-2282015"
    },

    {
        name: "KVM Hospital Blood Bank",
        city: "Cherthala",
        state: "Kerala",
        district: "Alappuzha",
        bloodGroups: ["A+", "B+", "AB+", "O+"],
        phone: "0478-2813200"
    },


    /* KOTTAYAM */

    {
        name: "Government Medical College Blood Bank",
        city: "Kottayam",
        state: "Kerala",
        district: "Kottayam",
        bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "O+"],
        phone: "0481-2592000"
    },

    {
        name: "Bharath Charitable Hospital Blood Bank",
        city: "Kottayam",
        state: "Kerala",
        district: "Kottayam",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0481-2582947"
    },


    /* IDUKKI */

    {
        name: "District Hospital Blood Bank",
        city: "Thodupuzha",
        state: "Kerala",
        district: "Idukki",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0486-2222050"
    },

    {
        name: "Government Hospital Blood Storage Centre",
        city: "Adimali",
        state: "Kerala",
        district: "Idukki",
        bloodGroups: ["A+", "B+", "O+", "O-"],
        phone: "0486-4252222"
    },


    /* ERNAKULAM */

    {
        name: "Amrita Institute of Medical Sciences Blood Bank",
        city: "Kochi",
        state: "Kerala",
        district: "Ernakulam",
        bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "O+"],
        phone: "0484-4001234"
    },

    {
        name: "IMA Blood Bank",
        city: "Ernakulam",
        state: "Kerala",
        district: "Ernakulam",
        bloodGroups: ["A+", "B+", "B-", "AB+", "O+", "O-"],
        phone: "0484-2350522"
    },


    /* THRISSUR */

    {
        name: "Government Medical College Blood Bank",
        city: "Thrissur",
        state: "Kerala",
        district: "Thrissur",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0487-2200310"
    },

    {
        name: "Amala Institute of Medical Sciences Blood Bank",
        city: "Thrissur",
        state: "Kerala",
        district: "Thrissur",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0487-2304000"
    },

    {
        name: "IMA Blood Bank Complex",
        city: "Thrissur",
        state: "Kerala",
        district: "Thrissur",
        bloodGroups: ["A+", "A-", "B+", "AB+", "O+"],
        phone: "0487-2323964"
    },


    /* PALAKKAD */

    {
        name: "Government District Hospital Blood Bank",
        city: "Palakkad",
        state: "Kerala",
        district: "Palakkad",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0491-2533329"
    },

    {
        name: "Government Medical College Blood Bank",
        city: "Palakkad",
        state: "Kerala",
        district: "Palakkad",
        bloodGroups: ["A+", "B+", "AB+", "O+"],
        phone: "0491-2533333"
    },


    /* MALAPPURAM */

    {
        name: "District Hospital Blood Bank",
        city: "Perinthalmanna",
        state: "Kerala",
        district: "Malappuram",
        bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-"],
        phone: "0493-3227200"
    },

    {
        name: "District Hospital Blood Bank",
        city: "Manjeri",
        state: "Kerala",
        district: "Malappuram",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0483-2766880"
    },


    /* KOZHIKODE */

    {
        name: "Government Medical College Blood Bank",
        city: "Kozhikode",
        state: "Kerala",
        district: "Kozhikode",
        bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "O+"],
        phone: "0495-2350216"
    },

    {
        name: "General Hospital Blood Bank",
        city: "Kozhikode",
        state: "Kerala",
        district: "Kozhikode",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0495-2386000"
    },


    /* WAYANAD */

    {
        name: "District Hospital Blood Bank",
        city: "Mananthavady",
        state: "Kerala",
        district: "Wayanad",
        bloodGroups: ["A+", "B+", "B-", "O+", "O-"],
        phone: "04935-240264"
    },

    {
        name: "Government Hospital Blood Storage Centre",
        city: "Sulthan Bathery",
        state: "Kerala",
        district: "Wayanad",
        bloodGroups: ["A+", "B+", "O+"],
        phone: "04936-220225"
    },


    /* KANNUR */

    {
        name: "District Hospital Blood Bank",
        city: "Kannur",
        state: "Kerala",
        district: "Kannur",
        bloodGroups: ["A+", "A-", "B+", "B-", "AB+", "O+"],
        phone: "0497-2733500"
    },

    {
        name: "Government Medical College Blood Bank",
        city: "Kannur",
        state: "Kerala",
        district: "Kannur",
        bloodGroups: ["A+", "B+", "AB+", "O+", "O-"],
        phone: "0497-2803000"
    },


    /* KASARAGOD */

    {
        name: "District Hospital Blood Bank",
        city: "Kasaragod",
        state: "Kerala",
        district: "Kasaragod",
        bloodGroups: ["A+", "A-", "B+", "O+", "O-"],
        phone: "04994-230300"
    },

    {
        name: "Government General Hospital Blood Storage Centre",
        city: "Kasaragod",
        state: "Kerala",
        district: "Kasaragod",
        bloodGroups: ["A+", "B+", "AB+", "O+"],
        phone: "04994-255000"
    }

];


/* =========================================
   DISPLAY CENTERS
========================================= */

function displayCenters(data) {

    const container =
        document.getElementById("centerContainer");

    const noResults =
        document.getElementById("noResults");

    container.innerHTML = "";


    if (data.length === 0) {

        noResults.style.display = "block";

        return;
    }


    noResults.style.display = "none";


    data.forEach(function(center) {

        const card =
            document.createElement("div");

        card.className = "center-card";


        card.innerHTML = `

            <div class="center-icon">
                🏥
            </div>

            <h3>${center.name}</h3>

            <p class="center-location">
                📍 ${center.city}, ${center.district}
            </p>

            <span class="available">
                Blood Donation Center
            </span>

            <p style="margin-top:15px;">
                <strong>Blood Groups:</strong>
                ${center.bloodGroups.join(", ")}
            </p>

            <button onclick="callCenter('${center.phone}')">
                📞 Contact Center
            </button>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   SEARCH
========================================= */

function searchCenters() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    const selectedBlood =
        document
        .getElementById("bloodFilter")
        .value;


    const filteredCenters =
        centers.filter(function(center) {

            const searchableText = (

                center.name + " " +
                center.city + " " +
                center.district + " " +
                center.state

            ).toLowerCase();


            const matchesSearch =
                searchableText.includes(searchText);


            const matchesBlood =
                selectedBlood === "all" ||
                center.bloodGroups.includes(selectedBlood);


            return matchesSearch && matchesBlood;

        });


    displayCenters(filteredCenters);

}


/* =========================================
   LIVE SEARCH
========================================= */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchCenters
    );


document
    .getElementById("bloodFilter")
    .addEventListener(
        "change",
        searchCenters
    );


/* =========================================
   CONTACT
========================================= */

function callCenter(phone) {

    alert(
        "Contact number: " + phone
    );

}


/* =========================================
   SCROLL
========================================= */

function scrollToCenters() {

    document
        .getElementById("centers")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToGroups() {

    document
        .getElementById("groups")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   CONTACT FORM
========================================= */

function submitForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );


    document
        .querySelector(".contact-form")
        .reset();

}


/* =========================================
   LOAD CENTERS
========================================= */

displayCenters(centers);