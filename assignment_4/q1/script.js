// Selecting elements
const studentInput = document.getElementById('studentInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');
const studentCountDisplay = document.getElementById('studentCount');

let count = 0;

// Function to update the student counter
function updateCounter() {
    studentCountDisplay.textContent = count;
}

// Function to add a student
addBtn.addEventListener('click', () => {
    const name = studentInput.value.trim();

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    // 1. Create the <li> element
    const li = document.createElement('li');
    li.textContent = name + " ";

    // 2. Create the "Remove" button per item
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = "10px";

    // Add functionality to the remove button
    removeBtn.onclick = function() {
        li.remove(); // Removes the specific <li> from the DOM
        count--;     // Decrement count
        updateCounter();
    };

    // 3. Use appendChild to build the structure
    li.appendChild(removeBtn);
    studentList.appendChild(li);

    // Update count and clear input
    count++;
    updateCounter();
    studentInput.value = "";
});