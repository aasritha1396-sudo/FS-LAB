let students = [];

function addStudent() {

    let input = document.getElementById("studentName");
    let name = input.value.trim();

    if(name === ""){
        alert("Please enter a student name");
        return;
    }

    students.push(name);
    input.value = "";

    displayStudents();
}

function displayStudents(){

    let list = document.getElementById("studentList");
    let count = document.getElementById("count");

    list.innerHTML = "";

    students.forEach(function(student,index){

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${index + 1}. ${student}</span>
            <button class="deleteBtn" onclick="deleteStudent(${index})">Delete</button>
        `;

        list.appendChild(li);
    });

    count.textContent = students.length;
}

function deleteStudent(index){

    students.splice(index,1);
    displayStudents();
}