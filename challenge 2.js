// 1. Define Multi-Dimensional Array
let studentData = [
    ["Ali bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Function to check Dean's List
function checkDeanList(credit, cgpa) {
    if (cgpa >= 3.50 && credit >= 12) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}

let output = document.getElementById("output");

output.innerHTML += "<h2>Section 03 Result</h2>";

// 3 & 4. Loop + Print output
for (let i = 0; i < studentData.length; i++) {

    let name = studentData[i][0];
    let credit = studentData[i][1];
    let cgpa = studentData[i][2];
    let status = checkDeanList(credit, cgpa);

    output.innerHTML += `
        <div>
            <b>Name:</b> ${name}<br>
            <b>Current GPA:</b> ${cgpa}<br>
            <b>Status:</b> ${status}<br>
            <hr style="border-top:1px dotted #ccc;">
        </div>
    `;
}
