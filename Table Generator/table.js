const generateBtn = document.getElementById("generateBtn");
const tableContainer = document.getElementById("tableContainer");

generateBtn.addEventListener("click", generateTable);

function generateTable(){

    tableContainer.innerHTML = "";

    const names = [
        "John",
        "Menna",
        "Ali",
        "Sara",
        "Omar",
        "Mona",
        "Youssef",
        "Laila"
    ];

    const roles = [
        "Developer",
        "Designer",
        "Manager",
        "QA Engineer",
        "Security",
        "Data Analyst"
    ];

    const statusList = [
        "Active",
        "Pending",
        "Inactive"
    ];

    const table = document.createElement("table");

    const headerRow = document.createElement("tr");

    const headers = ["ID", "Name", "Role", "Status"];

    headers.forEach(text => {

        const th = document.createElement("th");

        th.textContent = text;

        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    for(let i = 1; i <= 5; i++){

        const row = document.createElement("tr");

        const randomName =
            names[Math.floor(Math.random() * names.length)];

        const randomRole =
            roles[Math.floor(Math.random() * roles.length)];

        const randomStatus =
            statusList[Math.floor(Math.random() * statusList.length)];

        const rowData = [
            i,
            randomName,
            randomRole,
            randomStatus
        ];

        rowData.forEach(text => {

            const td = document.createElement("td");

            td.textContent = text;

            row.appendChild(td);
        });

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}

generateTable();