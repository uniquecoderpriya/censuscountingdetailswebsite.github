var counter = 1
function add_more_field(){
    counter+=1
    html =  ' <p id="row'+counter+'">\
    <p>\
        <label for="childname">Child Name</label>\
        <input type="text" name = "name1'+counter+'" id="childname" placeholder="Priya" required>\
    </p>\
    <p>\
        <label for="age">Age</label>\
        <input type="number" name = "age1'+counter+'" id="age" placeholder="25" required>\
    </p>\
    <p>\
        <label for="gender-male">Male</label>\
        <input type="radio" name="gender-choice'+counter+'" value="choice-1">\
        <label for="gender-female">Female</label>\
        <input type="radio" name="gender-choice'+counter+'" value="choice-2">\
        <label for="gender-other">Other</label>\
        <input type="radio" name="gender-choice'+counter+'" value="choice-3">\
    </p>\
    <p>\
       <label for="Aadharno">Aadhar Number</label>\
       <input type="number" name="Aadhar1'+counter+'" id="Aadharno" placeholder="1234 1236 1235" >\
    </p>\
    <p>\
        <label for="highereducation">Higher Education</label>\
        <input type="text" name="highereducation1'+counter+'" id="highereducation" placeholder="10th,12th,bca,btech,.." required>\
    </p>\
    <p>\
       <label for="Occupation">Occupation / Student </label>\
       <input type="text" name="occupation'+counter+'" id="occupation" placeholder=" student,business woman , police, housewife,..." required>\
    </p>\
    <p>\
        <select id="religion"  name="highereducation1'+counter+'">\
        <option value="">Religion</option>\
        <option value="hindu">Hindu</option>\
        <option value="muslim">Muslim</option>\
        <option value="christan">Christianity</option>\
        <option value="buddhism">Buddhism</option>\
        <option value="sikh">Sikhism</option>\
        <option value="other">Other</option>\
        </select>\
    </p>\
    <p>\
        <select id="caste" name="highereducation1'+counter+'">\
        <option value="">Caste</option>\
        <option value="brahman">Brahman</option>\
        <option value="kshatriya">Kshatriya</option>\
        <option value="Vaishya">Vaishya</option>\
        <option value="Harijans">Harijans</option>\
        <option value="other">Other</option>\
        </select>\
    </p>\
    <p>\
        <select id="martialstatus" name="maritalstatus1'+counter+'">\
        <option value="">Martial status</option>\
        <option value="Single">Single</option>\
        <option value="Married">Married</option>\
        <option value="Widow">Widow</option>\
        <option value="Divorced">Divorced</option>\
        </select>\
    </p>\
    <p>\
        <label for="vehicle">Vehicle</label>\
        <input type="text" id="vehicle" name="vehicel1'+counter+'" placeholder="2wheeler, 4 wheeler ,tractor, none,..." required>\
    </p>\
    <p>\
         <label for="Annualincome">Annual Income</label>\
        <input type="number" id="Annualincome" name="annuincom1'+counter+'" placeholder="100000,50000,..." required>\
    </p>\
   </p>'
var from =  document.getElementById('product_form')
from.innerHTML+=html
}