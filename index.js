// Write your solution in this file!
const employee = {
    name: "Eddy",
    streetAddress: "123 North Street",
};

function updateEmployeeWithKeyAndValue (employee, name, streetAddress) {
    const newEmployee = { ...employee };
  
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "11 Broadway";
  
    return newEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress) {
    const newEmployee = (employee);

    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "12 Broadway";

    return newEmployee;
}

function deleteFromEmployeeByKey (employee, name, streetAddress) {
    const newEmployee = {... employee } ;

    delete newEmployee["name"];

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    const newEmployee = (employee);

    delete newEmployee["name"];

    return newEmployee;
}
  