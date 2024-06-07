document.getElementById('dropdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dropdown1Value = document.getElementById('dropdown1').value;
    const dropdown2Value = document.getElementById('dropdown2').value;
    const dropdown3Value = document.getElementById('dropdown3').value;
    
    alert(`Dropdown 1: ${dropdown1Value}\nDropdown 2: ${dropdown2Value}\nDropdown 3: ${dropdown3Value}`);
});
