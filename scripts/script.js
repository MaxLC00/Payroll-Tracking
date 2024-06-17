// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function () {
  let employeesArray = []; //creates array of employees
  let addEmployee = true; //starts/restarts employee input
  while (addEmployee) {
    let employee = {};
    employee.firstName = prompt('Enter Employee First Name.');
    employee.lastName = prompt('Enter Employee Last Name.');
    employee.salary = parseInt(prompt('Enter Employee Salary.'));
    // previous lines add employee info via prompt, parseInt converts string to int
    employeesArray.push(employee); //adds employee to the array of employees
    addEmployee = confirm('Add Another Employee?'); //restarts or ends employee input, now properly named
  }
  return (employeesArray); //returns value of array
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let salarySum = 0
  for (let i = 0; i < employeesArray.length; i++) { // for loop parameters
    const salaries = employeesArray[i] // adds constant for loop to ass into
    salarySum += salaries.salary // modifies constant for total salary
  }
  const averageSalary = salarySum / employeesArray.length; // divides total by # of employees
  console.log(`The Average Employee Salary is ${averageSalary}`) // log average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomNum = Math.floor(Math.random() * employeesArray.length) // picks a number(int) at random between 1 and the number of employees
  const randomEmployee = employeesArray[randomNum] //choses eemployee based on randomly generated number
  console.log(`This Weeks Winner is ${randomEmployee.firstName} ${randomEmployee.lastName}, Congratulations!`) //logs winner to console
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
