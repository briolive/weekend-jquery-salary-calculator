$(document).ready(readyNow);

function readyNow(){
    console.log('ready!');
    $('#submitInfo').on('click', addEmployee)
}

function addEmployee(){
    console.log('in addEmployee');
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let idNumber = $('#id-number-input').val();
    let jobTitle = $('#job-title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    $('#employee-table').append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    </tr>
    `)

}