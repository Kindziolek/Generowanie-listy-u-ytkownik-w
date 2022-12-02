const button = document.querySelector("button");

function renderTable(users) {
    const table = `
    <table class="table is-fullwidth is-bordered is-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Imię i nazwisko</th>
                <th>Nazwa użytkownika</th>
                <th>Adres e-mail</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
     </table>
     `;

     const div = document.createElement("div");
     
     div.innerHTML = table;
}

button.addEventListener("cilck", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => renderTable(data));
});