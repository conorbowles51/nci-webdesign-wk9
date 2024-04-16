const container = document.getElementById("container");

const numSubjects = parseInt(prompt("How many subjects do you take?"));

const table = document.createElement("table");
container.append(table);

for(let i = 0; i < numSubjects; i++) {
    let grade = parseInt(prompt(`What grade did you get in subject ${i}`));
    let row = document.createElement("tr");

    table.append(row);

    const nameTh = document.createElement("th");
    nameTh.innerHTML = `Subject ${i+1}`;

    const gradeTd = document.createElement("td");
    gradeTd.innerHTML = grade + "%";

    row.append(nameTh);
    row.append(gradeTd);
}