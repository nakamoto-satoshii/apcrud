
document.querySelector(".fetch-button").addEventListener("click", function() {
    fetchData();
});

function fetchData() {
    fetch('./php/read.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayData(data) {
    const container = document.getElementById('data-container');
    let html = '';

    data.forEach(item => {
        html += `<div>ID: ${item.id}: NAME ${item.name}: TIME ${item.time}: EMAIL ${item.email}</div>`;
    });

    container.innerHTML = html;
}


