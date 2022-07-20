$(document).ready(readyNow);

function readyNow(){
    console.log('ready!');
    $('#submitInfo').on('click', addEmployee)
}

let monthlyCost = 0;
let annualSalary = 0;

function addEmployee(){
    console.log('in addEmployee');
    // assigning values
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let idNumber = $('#id-number-input').val();
    let jobTitle = $('#job-title-input').val();
    annualSalary = $('#annual-salary-input').val();
    console.log('annualSalary', annualSalary);
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
    <td><button id="deleteBtn">Delete</button>
    </tr>
    `)
    // calculating monthly cost
    monthlyCost = monthlyCost + Number(annualSalary) / 12
    console.log('annualSalary:', annualSalary)
    console.log('monthlyCost:', monthlyCost)
    // updating monthly cost
    updateMonthlyCost();
}


function updateMonthlyCost(){
    console.log('in updateMonthlyCost');
    let el = $('#monthlyCost');
    el.empty();
    el.append(monthlyCost);
    console.log('monthlyCost:', monthlyCost);
    if(monthlyCost > 20000){
        console.log('in if loop');
        $('#monthlyCost').css('background-color', 'red')
    }
}