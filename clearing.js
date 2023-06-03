/**
 * @author Tony Miller CIS 28/05/2009
 */
function dummy() {}

function hello() {
    alert("hello");
}

function putCursor(fld) {
    document.getElementById(fld).focus();
}

//puts cursor in first field on form
function putFocus(formInst, elementInst) {
    if (document.forms.length > 0) {
        document.forms[formInst].elements[elementInst].focus();
    }
}

//converts text to uppercase
function upperMe(field) {
    field.value = field.value.toUpperCase();
}

//clears a form
//function clearForm(form){
//    form.reset();
//    putFocus(0, 0);
//}

function putFocus(frm) {
    var elem = document.getElementById(frm).elements;
    for (var i = 0; i < elem.length; i++) {
        if ((elem[i].getAttribute("type") != "hidden") && (elem[i].disabled != true)) {
            //alert(elem[i].name);
            elem[i].focus();
            return;
        }
    }
}

//////////////////////////////////////////////////////////////
function InitcapCase(frmObj) {
    var index;
    var tmpStr;
    var tmpChar;
    var preString;
    var postString;
    var strlen;
    tmpStr = frmObj.value.toLowerCase();
    strLen = tmpStr.length;
    if (strLen > 0) {
        for (index = 0; index < strLen; index++) {
            if (index == 0) {
                tmpChar = tmpStr.substring(0, 1).toUpperCase();
                postString = tmpStr.substring(1, strLen);
                tmpStr = tmpChar + postString;
            } else {
                tmpChar = tmpStr.substring(index, index + 1);
                if (tmpChar == " " && index < (strLen - 1)) {
                    tmpChar = tmpStr.substring(index + 1, index + 2).toUpperCase();
                    preString = tmpStr.substring(0, index + 1);
                    postString = tmpStr.substring(index + 2, strLen);
                    tmpStr = preString + tmpChar + postString;
                }
            }
        }
    }
    frmObj.value = tmpStr;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//allows return key to be used to move from field to field
function handleEnter(field, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        if (field.id == "szrclof_apply_source") {
            putCursor("szrclof_firstname");
            return false;
        }

        if (field.id == "programme") {
            putCursor("mode_entry");
            return false;
        }

        if (field.id == "szrclof_email") {
            putCursor("szrclof_telno");
            return false;
        }

        if (field.id == "altprogramme") {
            putCursor("altmode_altentry");
            return false;
        }

        if (field.id == "szrclof_tariff") {
            putCursor("szrclof_decision");
            return false;
        }

        if (field.id == "szrclof_decision") {
            putCursor("szrclof_notes");
            return false;
        }

        var i;
        for (i = 0; i < field.form.elements.length; i++)
            if (field == field.form.elements[i])
                break;
        i = (i + 1) % field.form.elements.length;
        field.form.elements[i].focus();
        return false;
    } else
        return true;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
function readonlyFld(fld) {
    document.getElementById(fld).readOnly = true;
}

function disableFld(fld) {
    //alert(fld);
    //document.getElementById(fld).setAttribute("disabled", true);
    document.getElementById(fld).setAttribute("disabled", "disabled");
}

function enableFld(fld) {
    //alert(fld);
    //document.getElementById(fld).setAttribute("disabled", false);
    document.getElementById(fld).removeAttribute("disabled");
}

function conditionalAccess(fld) {
    if (document.getElementById(fld).value.length == 0) {
        enableFld(fld);
    }
}

function loadPageRO() {
    //alert("loadPageRO");
    disableFld("szrclof_apply_source");
    disableFld("display_personalid");
    disableFld("szrclof_firstname");
    disableFld("szrclof_lastname");
    disableFld("programme");
    disableFld("szrclof_campus");
    disableFld("display_school");
    disableFld("display_dept");
    disableFld("mode_entry");
    disableFld("start_my")/* EB 29/6/2017 9286 */
    disableFld("altmonth_year")/* EB 29/6/2017 9286 */
    disableFld("szrclof_email");
    disableFld("szrclof_telno");
    disableFld("szrclof_mobno");
    disableFld("szrclof_tariff");
    //disableFld("qual");
    //disableFld("szrclof_other_quals");
    disableFld("szrclof_nationality");
    disableFld("szrclof_transcripts");
	disableFld("szrclof_visa_req");
    //disableFld("szrclof_intlass");
    disableFld("szrclof_ioassd");
    disableFld("szrclof_decision");
    disableFld("szrclof_school");
    readonlyFld("prevnotes");
    disableFld("szrclof_schdecision");
    disableFld("altprogramme");
    disableFld("szrclof_altcampus");
    disableFld("altmode_altentry");
    //disableFld("szrclof_schemail_sent");
    disableFld("szrclof_email_sent");
    disableFld("password");
    //disableFld("new_search");
    //disableFld("process_decision");
    //disableFld("back");
    //disableFld("resend_email");
    //disableFld("add_notes_only");
    //disableFld("send_school");

    //setUserAccess();
    //emailSentMessage();
    //putFocus("myform");
}

function loadPage() {
    //alert("loadPage");
    disableFld("szrclof_apply_source");
    disableFld("szrclof_personalid");
    disableFld("szrclof_firstname");
    disableFld("szrclof_lastname");
    disableFld("programme");
    disableFld("szrclof_campus");
    disableFld("display_school");
    disableFld("display_dept");
    disableFld("mode_entry");
    disableFld("start_my")/* EB 29/6/2017 9286 */
    disableFld("altmonth_year")/* EB 29/6/2017 9286 */
    disableFld("szrclof_email");
    disableFld("szrclof_telno");
    disableFld("szrclof_mobno");
    disableFld("szrclof_tariff");
    //disableFld("qual");
    //disableFld("szrclof_other_quals");
    disableFld("szrclof_nationality");
    disableFld("szrclof_transcripts");
	disableFld("szrclof_visa_req");
    //disableFld("szrclof_intlass");
    disableFld("szrclof_ioassd");
    disableFld("szrclof_decision");
    disableFld("szrclof_school");
    readonlyFld("prevnotes");
    disableFld("szrclof_schdecision");
    disableFld("altprogramme");
    disableFld("szrclof_altcampus");
    disableFld("altmode_altentry");
    //disableFld("szrclof_schemail_sent");
    disableFld("szrclof_email_sent");
    disableFld("password");
    disableFld("new_search");
    disableFld("process_decision");
    disableFld("back");
    disableFld("resend_email");
    disableFld("add_notes_only");
    disableFld("send_school");

    setUserAccess();
    //emailSentMessage();
    putFocus("myform");
}

function setUserAccess() {
    var str = $("#code").val();
    //alert(str);
    switch (str) {
        case "CO":
            //alert(str);
            operatorAccess();
            break;
        case "COS":
            //alert(str);
            superuserAccess();
            break;
        case "IO":
            //alert(str);
            ioAccess();
            break;
        default:
            var str = $("#type").val();
            switch (str) {
                case "SCHOOL":
                    //alert(str);
                    collegeAccess();
                    break;
                case "PARTNER":
                    //alert(str);
                    collegeAccess();
                    break;
                default:
                    collegeAccess();
            }
    }
}

function operatorAccess() {
    var val = $("#code").val();
    //alert(val);
    if ((document.getElementById("szrclof_decision").value.length > 0) && ((document.getElementById("szrclof_decision").value == "1") || 
        	document.getElementById("szrclof_decision").value == "3")) {
        alert("Decision has already been made so no changes are allowed except adding notes!");
        enableFld("new_search");
        enableFld("back");
        enableFld("add_notes_only");
        //enableFld("start_my")/* EB 29/6/2017 9286 */ // commented out by TM as didn't appear to be logical

    } else {
        enableFld("szrclof_apply_source");
        enableFld("szrclof_personalid");
        enableFld("szrclof_firstname");
        enableFld("szrclof_lastname");
        enableFld("programme");
        enableFld("mode_entry");
        enableFld("start_my")/* EB 29/6/2017 9286 */
        enableFld("szrclof_email");
        enableFld("szrclof_telno");
        enableFld("szrclof_mobno");
        enableFld("szrclof_tariff");
        //enableFld("qual");
        //enableFld("szrclof_other_quals");
        enableFld("szrclof_nationality");
        enableFld("szrclof_transcripts");
	    enableFld("szrclof_visa_req");
        //enableFld("szrclof_intlass");
        enableFld("szrclof_decision");
        enableFld("password");
        enableFld("new_search");
        enableFld("process_decision");
        enableFld("back");
        enableFld("add_notes_only");
    }
}

function superuserAccess() {
    //conditionalAccess("szrclof_personalid");
    enableFld("szrclof_apply_source");
    enableFld("szrclof_personalid");
    enableFld("szrclof_firstname");
    enableFld("szrclof_lastname");
    enableFld("programme");
    enableFld("mode_entry");
    enableFld("start_my")/* EB 29/6/2017 9286 */
    enableFld("szrclof_email");
    enableFld("szrclof_telno");
    enableFld("szrclof_mobno");
    enableFld("szrclof_tariff");
    //enableFld("qual");
    //enableFld("szrclof_other_quals");
    enableFld("szrclof_nationality");
    enableFld("szrclof_transcripts");
	enableFld("szrclof_visa_req");
    //enableFld("szrclof_intlass");
    enableFld("szrclof_ioassd");
    enableFld("szrclof_decision");
    enableFld("szrclof_school");
    readonlyFld("prevnotes");
    enableFld("szrclof_schdecision");
    enableFld("altprogramme");
    enableFld("szrclof_altcampus");
    enableFld("altmode_altentry");
    enableFld("altmonth_year")/* EB 29/6/2017 9286  */
    enableFld("password");
    enableFld("new_search");
    enableFld("process_decision");
    enableFld("back");
    enableFld("resend_email");
    enableFld("add_notes_only");
    enableFld("send_school");
}




