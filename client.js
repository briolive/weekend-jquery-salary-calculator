$(document).ready(readyNow);

let monthlyCost = 0;

function readyNow(){
    console.log('ready!');
    $('#submitInfo').on('click', addEmployee)
}

function addEmployee(){
    console.log('in addEmployee');
    // assigning values
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let idNumber = $('#id-number-input').val();
    let jobTitle = $('#job-title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    // clearing inputs
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-number-input').val('');
    $('#job-title-input').val('');
    $('#annual-salary-input').val('');
    // adding employee info to table
    $('#employee-table').append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    </tr>
    `)
    // calculating monthly cost
    calculateMonthlyCost();
    // monthlyCost = Number(monthlyCost) + Number(annualSalary);
}


function calculateMonthlyCost(){
    console.log('in calculateMonthlyCost');
    let el = $('#monthlyCost');
    el.append(monthlyCost)
}