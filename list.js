var bodyTemplate = "";
$(function () {

    //clicking a list item event
    $('.list-group-item').on('click', function (e) {
        $(e.target).toggleClass('active'); // activated list-item
    });


    //Hand Email Function
    $(".dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });


});

//Click Reset Form
function clearForm() {
    var companyName = $("#companyName").val("");
    var contact1 = $("#contact1").val("");
    var contact2 = $("#contact2").val("");
    var contact3 = $("#contact3").val("");
    var notes = $("#notes").val("");

    //get all active list items and remove active class
    // var items = $(".list-group");
    // var listNodeArray = [];
    // for (var i = 0; i < items.length; i++) {
    //     listNodeArray = items[i].children;

    //     for (var j = 0; j < listNodeArray.length; j++) {
    //         listNodeArray[j].className = "list-group-item";
    //     }

    // }
    bodyTemplate = "";
    $("input").val("");

    var dropDownValue = $("#dropdownMenu1");
    dropDownValue[0].innerHTML = "Email To....";



}
//Send Email
function sendEmail() {
    var companyName = $("#companyName").val();
    if (companyName === "" || companyName === " " || companyName === null) {
        companyName = "Make Up New York 2018";
    }
    var contacts = " ";
    var contact1 = $("#contact1").val();
    if (contact1) {
        contact1 = contact1 + ',';
        contacts = contacts.concat(contact1);
    }
    var contact2 = $("#contact2").val();
    if (contact2) {
        contact2 = contact2 + ',';
        contacts = contacts.concat(contact2);
    }
    var contact3 = $("#contact3").val();
    if (contact3) {
        contact3 = contact3 + ',';
        contacts = contacts.concat(contact3);
    }


    var dropDownValue = $("#dropdownMenu1");
    dropDownValue = dropDownValue[0];
    dropDownValue = dropDownValue.innerText;

    var notes = $("#notes").val();

    //get all active list items and remove active class
    var sections = $(".section");
    var listArray = [];
    var items = [];
    var label; 
    var title;
    var value;
    var html;
    var com1;
    
    var nodeNames = [];
    
    for (var i = 0; i < sections.length; i++) {
        var sectionTitle = sections[i].children[0].innerHTML;
        listArray = sections[i].children[1];
        items = listArray.children;
        
       
        for (var j = 0; j < items.length; j++) {
          value =  items[j].children[1].value;
          console.log(items[j].children[1]);
            if (value > 0) {bodyTemplate = bodyTemplate  + sectionTitle + '%0A' ;}
            if(value > 0) {
                label = items[j].children[0].innerHTML;
                com1 = items[j].children[2].value;
               // title = items[j].parentElement.previousElementSibling
                bodyTemplate = bodyTemplate  +"Quantity: "+ value + "          "+"Product: " + label +"                     " +"Comments: "+ com1 +'%0A';
            }
        }
         bodyTemplate = bodyTemplate  +'%0A';
        
    }
   
    // listArray = $('input[name="quantity"]');
    // for (var i = 0; i < listArray.length; i++) {
    //     console.log(listArray[i]);
    //     bodyTemplate = bodyTemplate + listArray[i] + '%0A';
    // }

      bodyTemplate = bodyTemplate  +'%0A' + "Contacts: "  + '%0A' + contacts   +'%0A';
      bodyTemplate = bodyTemplate  +'%0A' + "Notes: "  + '%0A' + notes;
     // console.log(bodyTemplate);
      //strip white space out of dropdown value
      dropDownValue = dropDownValue.replace(/\s/g, '');
       
   // window.location.href = "mailto:" + dropDownValue + "?subject=" + companyName + "&cc=" + contacts + "&body=message%20goes%20here";
     window.location.href = "mailto:" + dropDownValue + "?subject=" + companyName  + "&body=" + bodyTemplate;

     bodyTemplate = "";
}
