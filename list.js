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
    var items = $(".list-group");
    var listNodeArray = [];
    for (var i = 0; i < items.length; i++) {
        listNodeArray = items[i].children;

        for (var j = 0; j < listNodeArray.length; j++) {
            listNodeArray[j].className = "list-group-item";
        }

    }


    var dropDownValue = $("#dropdownMenu1");
    dropDownValue[0].innerHTML = "Email To....";


}
//Send Email
function sendEmail() {
    var companyName = $("#companyName").val();
    if (companyName === "" || companyName === " " || companyName === null) {
        companyName = "Make up List (LA 2017)";
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
    var selectedItem; 
    var html;
    var bodyTemplate = "";
    var nodeNames = [];
    
    for (var i = 0; i < sections.length; i++) {
        var sectionTitle = sections[i].children[0].innerHTML;
        listArray = sections[i].children[1];
        items = listArray.children;
        
        bodyTemplate = bodyTemplate  + sectionTitle + '%0A' ;
        for (var j = 0; j < items.length; j++) {
            if (items[j].className === "list-group-item active") {
                selectedItem =  items[j].innerHTML;
                bodyTemplate = bodyTemplate + selectedItem +'%0A';
            }else{
               
            }
            
        }
         bodyTemplate = bodyTemplate  +'%0A';
        

    }
   
      bodyTemplate = bodyTemplate  +'%0A%0A' + "Contacts: "  + '%0A' + contacts   +'%0A%0A';
      bodyTemplate = bodyTemplate  +'%0A%0A' + "Notes: "  + '%0A' + notes;

      //strip white space out of dropdown value
      dropDownValue = dropDownValue.replace(/\s/g, '');
       
   // window.location.href = "mailto:" + dropDownValue + "?subject=" + companyName + "&cc=" + contacts + "&body=message%20goes%20here";
     window.location.href = "mailto:" + dropDownValue + "?subject=" + companyName  + "&body=" + bodyTemplate;

}