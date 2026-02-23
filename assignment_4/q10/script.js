let studentData = []; // Global storage for the fetched data

// 1. Fetching the data
async function fetchStudents() {
    try {
        const response = await fetch('students.json');
        studentData = await response.json();
        renderTable(studentData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 2. Rendering the data to the DOM Table
function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; // Clear existing rows

    data.forEach(student => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.major}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// 3. Search logic (filtering the array)
function searchTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Use .filter() to find matching students
    const filteredData = studentData.filter(student => 
        student.name.toLowerCase().includes(searchTerm)
    );

    renderTable(filteredData);
}

// Initialize the fetch on page load
fetchStudents();