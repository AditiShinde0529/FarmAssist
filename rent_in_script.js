const rentalListModal = document.getElementById("rental-list-modal");
const calendarModal = document.getElementById("calendar-modal");
const closeButtons = document.getElementsByClassName("close-button");
const bookButton = document.getElementsByClassName("book-button")[0];

// Sample rental data
const rentalData = {
    tractor: [
        { name: "John Doe", phone: "+1 (123) 456-7890", location: "Farmville, CA", available: true },
        { name: "Jane Smith", phone: "+1 (987) 654-3210", location: "Greenfield, OR", available: false },
        { name: "Bob Johnson", phone: "+1 (456) 789-0123", location: "Oakville, TX", available: true },
    ],
    livestock: [
        { name: "Sarah Lee", phone: "+1 (321) 654-0987", location: "Meadowbrook, WA", available: true },
        { name: "Michael Brown", phone: "+1 (789) 012-3456", location: "Hillside, NE", available: false },
    ],
    farmland: [
        { name: "Emily Davis", phone: "+1 (159) 753-2468", location: "Greenvalley, KS", available: true },
        { name: "David Wilson", phone: "+1 (753) 159-2468", location: "Sunnydale, FL", available: true },
    ],
    transportation: [
        { name: "Jessica Taylor", phone: "+1 (951) 357-1357", location: "Riverdale, NY", available: true },
        { name: "William Anderson", phone: "+1 (753) 951-3579", location: "Lakeside, MI", available: false },
    ],
};

// Function to show the rental list modal
function showRentalList(type) {
    document.getElementById("modal-title").textContent = `Available ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    rentalListModal.style.display = "block";

    const rentalList = document.getElementById("rental-list");
    rentalList.innerHTML = "";

    const rentals = rentalData[type];
    rentals.forEach((rental) => {
        const rentalItem = document.createElement("div");
        rentalItem.className = "rental-item";
        rentalItem.innerHTML = `
            <div class="rental-info">
                <h3>${rental.name}</h3>
                <p>Phone: ${rental.phone}</p>
                <p>Location: ${rental.location}</p>
            </div>
            <div class="action-buttons">
                <button>Chat Now</button>
                ${rental.available ? '<button onclick="showCalendar(\'' + type + '\', \'' + rental.name + '\')">Book Now</button>' : '<button disabled>Unavailable</button>'}
            </div>
        `;
        rentalList.appendChild(rentalItem);
    });
}

// Function to show the calendar modal
function showCalendar(type, renterName) {
    document.getElementById("calendar-title").textContent = `Book a ${type} from ${renterName}`;
    calendarModal.style.display = "block";

    const calendar = new AirDatepicker("#calendar", {
        inline: true,
        minDate: new Date(),
        onSelect: function (date) {
            // Handle the selected date
            console.log("Selected date:", date.date);
        },
    });
}

// Close the modals when the close button is clicked
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
        rentalListModal.style.display = "none";
        calendarModal.style.display = "none";
    });
}

// Close the modals when the user clicks outside the modal
window.addEventListener("click", function (event) {
    if (event.target == rentalListModal || event.target == calendarModal) {
        rentalListModal.style.display = "none";
        calendarModal.style.display = "none";
    }
});

// Handle the book button click
bookButton.addEventListener("click", function () {
    // Implement your booking logic here
    console.log("Booking button clicked");
    calendarModal.style.display = "none";
});

function showMachines(type) {
    showPage('machines');
    document.getElementById('machineType').textContent = `Available ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    const machineList = document.getElementById('machineList');
    machineList.innerHTML = '';

    // Sample data - replace with actual data
    const machines = [
        { name: `${type.slice(0, -1)} 1`, size: "Medium", capacity: "500kg", dealer: "Farm Equipment Co.", image: `${type.slice(0, -1)}tractor1.jpg` },
        { name: `${type.slice(0, -1)} 2`, size: "Large", capacity: "1000kg", dealer: "Agri Machines Ltd.", image: `${type.slice(0, -1)}tractor2.jpg` },
        { name: `${type.slice(0, -1)} 3`, size: "Small", capacity: "250kg", dealer: "Rural Tools Inc.", image: `${type.slice(0, -1)}tractor3.jpg` },
        { name: `${type.slice(0, -1)} 4`, size: "Medium", capacity: "750kg", dealer: "Green Fields Equipment", image: `${type.slice(0, -1)}tractor4.jpg` },
        { name: `${type.slice(0, -1)} 5`, size: "Extra Large", capacity: "1500kg", dealer: "Harvest Solutions", image: `${type.slice(0, -1)} 'tractor5.jpg` },
    ];

    machines.forEach(machine => {
        const box = document.createElement('div');
        box.className = 'machine-box';
        box.innerHTML = `
            <img src="${machine.image}" alt="${machine.name}">
            <h3>${machine.name}</h3>
            <p>Size: ${machine.size}</p>
            <p>Capacity: ${machine.capacity}</p>
            <p>Dealer: ${machine.dealer}</p>
        `;
        box.onclick = () => showMachineDetails(machine);
        machineList.appendChild(box);
    });
}

function showMachineDetails(machine) {
    showPage('machineDetails');
    document.getElementById('machineName').textContent = machine.name;
    const machineInfo = document.getElementById('machineInfo');
    machineInfo.innerHTML = `
        <img src="${machine.image}" alt="${machine.name}">
        <h3>Specifications:</h3>
        <p>Size: ${machine.size}</p>
        <p>Capacity: ${machine.capacity}</p>
        <p>Application: Suitable for various farming tasks</p>
        <h3>Dealer Information:</h3>
        <p>Name: ${machine.dealer}</p>
        <p>Phone: +1234567890</p>
        <p>Email: info@${machine.dealer.toLowerCase().replace(/ /g, '')}.com</p>
    `;
}

