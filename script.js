document.addEventListener("DOMContentLoaded", loadStoredResults);

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = studentNameInput();
    const rollNo = rollNumberInput();
    const marks = getMarks();

    const totalMarks = marks.reduce((a, b) => a + b, 0);
    const percentage = (totalMarks / 300) * 100;

    const grade = calculateGrade(percentage);
    const status = percentage >= 40 ? "Pass" : "Fail";

    displayMessage(status);

    const studentRecord = {
        studentName,
        rollNo,
        totalMarks,
        percentage,
        grade,
        status
    };

    saveToLocal(studentRecord);
    addTableRow(studentRecord);

    document.getElementById("studentForm").reset();
});

function studentNameInput() {
    return document.getElementById("studentName").value.trim();
}

function rollNumberInput() {
    return document.getElementById("rollNumber").value.trim();
}

function getMarks() {
    return [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value)
    ];
}

function calculateGrade(percent) {
    if (percent >= 75) return "A";
    if (percent >= 60) return "B";
    if (percent >= 40) return "C";
    return "F";
}

function displayMessage(status) {
    const msg = document.getElementById("resultMessage");
    msg.textContent = status === "Pass" ? "Student Passed Successfully ✅" : "Student Failed ❌";
    msg.className = status === "Pass" ? "status-pass" : "status-fail";
}

function saveToLocal(record) {
    const records = JSON.parse(localStorage.getItem("studentResults")) || [];
    records.push(record);
    localStorage.setItem("studentResults", JSON.stringify(records));
}

function loadStoredResults() {
    const records = JSON.parse(localStorage.getItem("studentResults")) || [];
    records.forEach(addTableRow);
}

function addTableRow(data) {
    const tbody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${data.studentName}</td>
        <td>${data.rollNo}</td>
        <td>${data.totalMarks}</td>
        <td>${data.percentage.toFixed(2)}%</td>
        <td class="grade-${data.grade}">${data.grade}</td>
        <td class="status-${data.status.toLowerCase()}">${data.status}</td>
        <td><button class="delete-btn" onclick="deleteRecord(this, '${data.rollNo}')">Delete</button></td>
    `;

    tbody.appendChild(row);
}

function deleteRecord(button, rollNo) {
    let records = JSON.parse(localStorage.getItem("studentResults"));
    records = records.filter(r => r.rollNo !== rollNo);
    localStorage.setItem("studentResults", JSON.stringify(records));

    button.parentElement.parentElement.remove();
}

