// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employees = [];

// Collect employee data
const collectEmployees = function() {
  let addEmployee = true;

  while (addEmployee) {
    let firstName = prompt("Enter the first name of the employee:");
    let lastName = prompt("Enter the last name of the employee:");
    let salaryInput = prompt("Enter the salary of the employee (enter a number):");
    let salary = parseInt(salaryInput) || 0;

    employees.push({firstName, lastName, salary});

    let continueInput = prompt("Do you want to add another employee? (yes/no)");
    addEmployee = continueInput.toLowerCase() === "yes";
  }

  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  let averageSalary = totalSalary / employeesArray.length;

  console.log("The average employee salary between our", employeesArray.length ,"employee(s)", "is", averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
  }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];

  console.log("Congratulations to",`${randomEmployee.firstName} ${randomEmployee.lastName}`,", our random drawing winner!");
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
