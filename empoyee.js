const fs = require('fs');
fs.readFile('employee.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }
  const employeeData = JSON.parse(data);
  const targetEmployeeId = 123;
  const targetEmployee = employeeData.find((employee) => employee.EmployeeId === targetEmployeeId);

  if (targetEmployee) {
    const fn=targetEmployee.FirstName;
    const ln=targetEmployee.LastName;
    let camelc=fn.toLowerCase();
    camelc+=ln.charAt(0).toUpperCase();
    camelc+=ln.substr(1,ln.length-1);
    console.log('Employee Id:', targetEmployee.EmployeeId);
    console.log('Camel Case Name:', camelc);
    console.log('Salary:', targetEmployee.Salary);
  } else {
    console.log('Employee not found for the specified Employee Id.');
  }
});
