document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const docID = document.getElementById("docID").value;
      const specialization = document.getElementById("dept").value;
      const experience = document.getElementById("exp").value;
      const email = document.getElementById("email").value;
      const mobileNumber = document.getElementById("mbl").value;
  
      let role;
      if (experience > 5) {
        role = "Senior";
      } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
      } else {
        role = "Trainee";
      }
  
      const newRow = document.createElement("tr");
  
      const columns = [name, docID, specialization, experience, email, mobileNumber, role];
      for (const column of columns) {
        const cell = document.createElement("td");
        cell.textContent = column;
        newRow.appendChild(cell);
      }
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        tableBody.removeChild(newRow);
      });
  
      const deleteCell = document.createElement("td");
      deleteCell.appendChild(deleteButton);
      newRow.appendChild(deleteCell);
  
      tableBody.appendChild(newRow);
  
      form.reset();
    });
  });
  