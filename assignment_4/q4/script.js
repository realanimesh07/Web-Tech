function filterItems() {
    // 1. Get the search text and convert to lowercase for case-insensitive matching
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. Grab all list items and convert the NodeList to a standard Array
    const items = Array.from(document.getElementsByClassName('item'));

    // 3. Use .filter() to find items that DON'T match (to hide them)
    // Actually, it's more efficient to loop and toggle based on the match:
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        // 4. DOM Hide/Show logic
        if (text.includes(query)) {
            item.style.display = ""; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
}