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

function ioAccess() {
    enableFld("szrclof_ioassd");
    enableFld("process_decision");
    enableFld("back");
    enableFld("add_notes_only");

    enableFld("szrclof_school");
    enableFld("szrclof_schdecision");
    enableFld("altprogramme");
    enableFld("szrclof_altcampus");
    enableFld("altmode_altentry");
    enableFld("altmonth_year")/* EB 29/6/2017 9286  */
    enableFld("send_school");
}

function collegeAccess() {
    //var val = $("#code").val();
    //alert(val);
    //alert(document.getElementById("szrclof_schdecision").value);
    if ((document.getElementById("szrclof_schdecision").value.length > 0) && (document.getElementById("szrclof_schdecision").value != "6")) {
        alert("Decision has already been made so no changes are allowed except adding notes!");
        enableFld("back");
        enableFld("add_notes_only");
    } else {
        enableFld("szrclof_school");
        enableFld("szrclof_schdecision");
        enableFld("altprogramme");
        enableFld("szrclof_altcampus");
        enableFld("altmode_altentry");
        enableFld("altmonth_year")/* EB 29/6/2017 9286 START */
        enableFld("process_decision");
        enableFld("back");
        enableFld("add_notes_only");
        enableFld("send_school");
    }
}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//var password = "TURNIP";
var actualPassword;

function getActualPassword() {
    var pathArray = window.location.pathname.split("/");
    var newPathname = "";
    for (i = 1; i < 3; i++) {
        newPathname += "/";
        newPathname += pathArray[i];
    };
    //alert(newPathname);

    var newURL = window.location.protocol + "//" + window.location.host + newPathname;
    //alert(newURL);

    $.ajax({
        url: newURL + "/hwzkclof.p_getPassword",
        async: false,
        success: function(result) {
            //alert("result.trim(): " + result.trim() + " " + result.trim().length);
            actualPassword = result.trim();
        }
    });
    return actualPassword;
}

var uniqueProgFlag;
function getUniqueProgFlag(thisForm) {
    var pathArray = window.location.pathname.split("/");
    var newPathname = "";
    for (i = 1; i < 3; i++) {
        newPathname += "/";
        newPathname += pathArray[i];
    };
    //alert(newPathname);

    var newURL = window.location.protocol + "//" + window.location.host + newPathname;
    //alert(newURL);

    var recid = thisForm.p_szrclof_recid.value; // TM AD-15
    var id = thisForm.p_szrclof_personalid.value;
   // var year = thisForm.p_szrclof_year.value;

   var yearInstr = thisForm.p_start_my.value.indexOf("/")
   var year = thisForm.p_start_my.value.substr(yearInstr+1,4);
   //alert("year "+year);
 
    var first = thisForm.p_programme.value.indexOf("|");
    var second = thisForm.p_programme.value.indexOf("|", first + 1) - 1;
    //alert(thisForm.p_programme.value.substr(first + 1,second - 1) );
    var prog = thisForm.p_programme.value.substr(first + 1,second - 1);


    var pos = thisForm.p_mode_entry.value.indexOf("/");
    var mode = thisForm.p_mode_entry.value.substr(0, pos);
    mode = mode.replace(/[\n\r]/g, '');
    //alert("mode length = " + mode.length);
    var entryYear = thisForm.p_mode_entry.value.substr(pos + 1);
    //alert("entryYear = " + entryYear);
    //alert(newURL + "/hwzkclof.p_getUniqueProgFlag?p_id=" + escape(id) + "&p_year=" + escape(year) + "&p_prog=" + escape(prog) + "&p_mode=" + escape(mode) + "&p_entry=" + escape(entryYear) + "&p_recid=" + escape(recid));

    $.ajax({
        url: newURL + "/hwzkclof.p_getUniqueProgFlag?p_id=" + escape(id) + "&p_year=" + escape(year) + "&p_prog=" + escape(prog) + "&p_mode=" + escape(mode) + "&p_entry=" + escape(entryYear) + "&p_recid=" + escape(recid),
        async: false,
        success: function(result) {
            //alert("result.trim(): " + result.trim() + " " + result.trim().length);
            uniqueProgFlag = result.trim();
        }
    });
    return uniqueProgFlag;
}

function validateClearing(thisForm) {  
    //getActualPassword();
    //alert(actualPassword);
    //alert(thisForm.name);

    
    thisForm.p_szrclof_notes.style.background = "White";

    thisForm.p_actual_school.value = thisForm.p_szrclof_school.value;
    thisForm.p_actual_szrclof_apply_source.value = thisForm.p_szrclof_apply_source.value;
    thisForm.p_actual_personalid.value = thisForm.p_szrclof_personalid.value;
    thisForm.p_actual_firstname.value = thisForm.p_szrclof_firstname.value;
    thisForm.p_actual_lastname.value = thisForm.p_szrclof_lastname.value;
    thisForm.p_actual_programme.value = thisForm.p_programme.value;
    thisForm.p_actual_campus.value = thisForm.p_szrclof_campus.value;
    thisForm.p_actual_mode_entry.value = thisForm.p_mode_entry.value;
    thisForm.p_actual_email.value = thisForm.p_szrclof_email.value;
    thisForm.p_actual_telno.value = thisForm.p_szrclof_telno.value;
    thisForm.p_actual_mobno.value = thisForm.p_szrclof_mobno.value;
    thisForm.p_actual_tariff.value = thisForm.p_szrclof_tariff.value;
    thisForm.p_actual_nationality.value = thisForm.p_szrclof_nationality.value;

    thisForm.p_actual_transcripts.value = thisForm.p_szrclof_transcripts.value;
	thisForm.p_actual_visa_req.value = thisForm.p_szrclof_visa_req.value;
    
    if (thisForm.p_szrclof_ioassd.checked == true) {
        thisForm.p_actual_ioassd.value = "Y";
    } else {
        thisForm.p_actual_ioassd.value = "N";
    }
    thisForm.p_actual_decision.value = thisForm.p_szrclof_decision.value;
    thisForm.p_actual_schdecision.value = thisForm.p_szrclof_schdecision.value;
    thisForm.p_actual_altprogramme.value = thisForm.p_altprogramme.value;
    thisForm.p_actual_altcampus.value = thisForm.p_szrclof_altcampus.value;
    thisForm.p_actual_altmode_altentry.value = thisForm.p_altmode_altentry.value;
    thisForm.p_actual_start_my.value = thisForm.p_start_my.value;
    thisForm.p_actual_altmonth_year.value = thisForm.p_altmonth_year.value;

    if (thisForm.p_btn_value.value == "New Search") {
        return true;
    } else if (thisForm.p_btn_value.value == "Back") {
        unLockRecord();
        return false;
    } else if (thisForm.p_btn_value.value == "Resend Email") {
        if (thisForm.p_szrclof_email_sent.value.length == 0) {
            alert("No email to resend!");
            return false;
        }

        if ((thisForm.p_szrclof_email_sent.value.length > 0) && (thisForm.p_szrclof_schdecision.value == "2")) {
            alert("You cannot resend a rejection email!");
            return false;
        }

        //check Supervisor Password
        if ((thisForm.p_szrclof_decision.value == "1") || (thisForm.p_szrclof_schdecision.value == "1") || (thisForm.p_szrclof_schdecision.value == "4")) {
            if (thisForm.p_password.value.length == 0) {
                alert("Please enter the Supervisor Password");
                thisForm.p_password.focus();
                return false;
            }

            if (thisForm.p_password.value.length > 0) {
                getActualPassword();
                //alert(actualPassword + " " + actualPassword.length);

                if (thisForm.p_password.value.toUpperCase() != actualPassword) {
                    alert("Supervisor Password is incorrect!");
                    thisForm.p_password.focus();
                    return false;
                }
            }



            return true;
        }
    } else if (thisForm.p_btn_value.value == "Process Decision") {
        //alert("Process Decision 3");
   
	// check that personal ID and decision are compatible TM AD-15 - 9999999999 must have decision code 7
        //alert (thisForm.p_szrclof_personalid.value);
        //alert (thisForm.p_szrclof_decision.value);
	if ((thisForm.p_szrclof_personalid.value == "9999999999") && (thisForm.p_szrclof_decision.value != "7")) {   
		alert("The Personal ID and Decision are not compatible!");
               	thisForm.p_szrclof_personalid.focus();
                return false;
        }

	// check that personal ID and decision are compatible TM AD-15 - only 9999999999 can have decision code 7
        //alert (thisForm.p_szrclof_personalid.value);
        //alert (thisForm.p_szrclof_decision.value);
	if ((thisForm.p_szrclof_personalid.value != "9999999999") && (thisForm.p_szrclof_decision.value == "7")) {   
		alert("The Personal ID and Decision are not compatible!");
               	thisForm.p_szrclof_personalid.focus();
                return false;
        }
	
       //check if programme has been applied for or offered already
	//if (thisForm.p_programme.value.length > 0 && ((thisForm.p_szrprxy_szrusrg_code.value == "CO") || (thisForm.p_szrprxy_szrusrg_code.value == "COS"))) {
        // TM AD-15 added 9999999999 check
       if (thisForm.p_programme.value.length > 0 && (thisForm.p_szrprxy_szrusrg_code.value == "CO" || thisForm.p_szrprxy_szrusrg_code.value == "COS") && thisForm.p_szrclof_personalid.value != "9999999999") {
		getUniqueProgFlag(thisForm);
		//alert("uniqueProgFlag = " + uniqueProgFlag);
		if (uniqueProgFlag == 'NOT UNIQUE') {
              	alert("The applicant has already applied for or been offered this course!");
                    	thisForm.p_programme.focus();
                    	return false;
            	}
	}

        // check that IO have assessed the application
        if (thisForm.p_szrprxy_szrusrg_code.value == "IO" && thisForm.p_actual_ioassd.value == "N") {
            alert("Please indicate that this application has been IO Assessed.");
            return false;
        }

        //if (thisForm.p_szrprxy_szrusrg_code.value == "IO") {
        //alert ("IO");
        //	return true;
        //}
        //else {


        //if (thisForm.p_szrclof_email_sent.value.length > 0) {
        //	alert("Email has already been sent so no changes are allowed!");
        //	return false;
        //}

        //check if school/partner user has made a decision
        if ((thisForm.p_szrusrg_type.value == "SCHOOL" || thisForm.p_szrusrg_type.value == "PARTNER") && thisForm.p_szrclof_schdecision.value.length == 0) {
            alert("Please enter a Faculty Decision.");
            return false;
        }

        //check if Decision and School Decision are compatible
        if ((thisForm.p_szrclof_decision.value == 1) && (thisForm.p_szrclof_schdecision.value.length > 0)) {
            alert("Decision and Faculty Decision are incompatible!");
            return false;
        }

        //check if School Decision and Alternative UCAS Course are compatible
        if (thisForm.p_altprogramme.value.length > 0 && ((thisForm.p_szrclof_schdecision.value.length == 0) || (thisForm.p_szrclof_schdecision.value != "4"))) {
            alert("Only a Faculty Decision of \"Alternative Offer\" can have an Alternative UCAS Course!");
            return false;
        }

        var reason = "";
        reason += validateSource(thisForm.p_szrclof_apply_source);
        reason += validateID(thisForm.p_szrclof_personalid);
        reason += validateName(thisForm.p_szrclof_firstname);
        reason += validateName(thisForm.p_szrclof_lastname);
        reason += validateProg(thisForm.p_programme);
        reason += validateProg(thisForm.p_szrclof_campus);
        reason += validateEmail(thisForm.p_szrclof_email);
        reason += validateNat(thisForm.p_szrclof_nationality);
        reason += validateTrans(thisForm.p_szrclof_transcripts);
        reason += validateProg(thisForm.p_szrclof_decision);
        reason += validateProg(thisForm.p_mode_entry);
        reason += validateSchool(thisForm.p_szrclof_decision, thisForm.p_szrclof_school);
        reason += validateSchDecision(thisForm.p_szrclof_schdecision, thisForm.p_altprogramme);
        reason += validateSchDecision(thisForm.p_szrclof_schdecision, thisForm.p_szrclof_altcampus);
        reason += validateSchDecision(thisForm.p_szrclof_schdecision, thisForm.p_altmode_altentry);

        if (reason != "") {
            alert("Some fields need correction:\n\n" + reason);
            thisForm.p_szrclof_personalid.focus();
            return false;
        }

        //check Supervisor Password
        //if Decision = Accept (1) and group = CO or COS 
        if ((thisForm.p_szrclof_decision.value == "1") && ((thisForm.p_szrprxy_szrusrg_code.value == "CO") || (thisForm.p_szrprxy_szrusrg_code.value == "COS"))) {
            if (thisForm.p_password.value.length == 0) {
                alert("Please enter the Supervisor Password");
                thisForm.p_password.focus();
                return false;
            }

            if (thisForm.p_password.value.length > 0) {
                getActualPassword();
                //alert(actualPassword + " " + actualPassword.length);

                if (thisForm.p_password.value.toUpperCase() != actualPassword) {
                    alert("Supervisor Password is incorrect!");
                    thisForm.p_password.focus();
                    return false;
                }
            }

            //if ((thisForm.p_password.value.length > 0) && (thisForm.p_password.value.toUpperCase() != password)) {
            //alert("Supervisor Password is incorrect!");
            //thisForm.p_password.focus();
            //return false;
            //}
        }

        //if School Decision = Accept (1) or Alternative Offer (4) and group = COS
        if (((thisForm.p_szrclof_schdecision.value == "1") || (thisForm.p_szrclof_schdecision.value == "4")) && (thisForm.p_szrprxy_szrusrg_code.value == "COS")) {
            if (thisForm.p_password.value.length == 0) {
                alert("Please enter the Supervisor Password");
                thisForm.p_password.focus();
                return false;
            }

            if (thisForm.p_password.value.length > 0) {
                getActualPassword();
                //alert(actualPassword + " " + actualPassword.length);

                if (thisForm.p_password.value.toUpperCase() != actualPassword) {
                    alert("Supervisor Password is incorrect!");
                    thisForm.p_password.focus();
                    return false;
                }
            }

            //if ((thisForm.p_password.value.length > 0) && (thisForm.p_password.value.toUpperCase() != actualPassword)) {
            //alert("Supervisor Password is incorrect!");
            //thisForm.p_password.focus();
            //return false;
            //}
        }

        return true;
        //}
    } else if (thisForm.p_btn_value.value == "Add Notes Only") {

        var reason = "";
        reason += validateSource(thisForm.p_szrclof_apply_source);
        reason += validateID(thisForm.p_szrclof_personalid);
        reason += validateName(thisForm.p_szrclof_firstname);
        reason += validateName(thisForm.p_szrclof_lastname);
        reason += validateProg(thisForm.p_programme);
        reason += validateProg(thisForm.p_szrclof_campus);
        reason += validateEmail(thisForm.p_szrclof_email);
        reason += validateNat(thisForm.p_szrclof_nationality);
        reason += validateTrans(thisForm.p_szrclof_transcripts);
        reason += validateProg(thisForm.p_mode_entry);
        reason += validateSchool(thisForm.p_szrclof_decision, thisForm.p_szrclof_school);
        reason += validateNotes(thisForm.p_szrclof_notes, thisForm.p_szrclof_notes);
        if (reason != "") {
            alert("Some fields need correction:\n\n" + reason);
            thisForm.p_szrclof_notes.focus();
            return false;
        }

        return true;
    } else if (thisForm.p_btn_value.value == "Send to Another Faculty") {

	// check that IO have assessed the application
	if (thisForm.p_szrprxy_szrusrg_code.value == "IO" && thisForm.p_actual_ioassd.value == "N") {
            alert("Please indicate that this application has been IO Assessed.");
            return false;
        }

        var reason = "";
        reason += validateSource(thisForm.p_szrclof_apply_source);
        reason += validateID(thisForm.p_szrclof_personalid);
        reason += validateName(thisForm.p_szrclof_firstname);
        reason += validateName(thisForm.p_szrclof_lastname);
        reason += validateProg(thisForm.p_programme);
        reason += validateProg(thisForm.p_szrclof_campus);
        reason += validateEmail(thisForm.p_szrclof_email);
        reason += validateNat(thisForm.p_szrclof_nationality);
        reason += validateTrans(thisForm.p_szrclof_transcripts);
        reason += validateProg(thisForm.p_mode_entry);
        reason += validateSchool(thisForm.p_szrclof_decision, thisForm.p_szrclof_school);
        reason += validateNotes(thisForm.p_szrclof_notes, thisForm.p_szrclof_notes);
        if (reason != "") {
            alert("Some fields need correction:\n\n" + reason);
            thisForm.p_szrclof_notes.focus();
            return false;
        }

        return true;
    }

}


function validateID(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length < 10) {
        fldname = "Personal ID";
        error = "*" + fldname + " must be 10 digits.\n"
        fld.style.background = "Yellow";
    } else {
        fld.style.background = "White";
    }
    return error;
}

function checkIDold(thisForm) {
    if (thisForm.p_szrclof_personalid.value.length < 10) {
        alert("Personal ID must be 10 digits in length.");
        document.getElementById("szrclof_personalid").focus();
        return false;
    } else {
        return true;
    }
}

function checkID(thisForm) {
	var numbers = /^[0-9]+$/;
	if (!numbers.test(thisForm.p_szrclof_personalid.value)) {
    		alert('Please input 10 numeric characters only');
    		return false;
  	}
	else {
		if (thisForm.p_szrclof_personalid.value.length < 10) {
        		alert("Personal ID must be 10 digits in length.");
        		document.getElementById("szrclof_personalid").focus();
        		return false;
    		} 
		else {
       		 return true;
    		}
	}
}

//////////////////////////

function validateName(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        switch (fld.name) {
            case "p_szrclof_firstname":
                fldname = "Forename";
                break;
            case "p_szrclof_lastname":
                fldname = "Surname";
                break;
        }

        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateSource(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        fldname = "Application Source";
        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateNat(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        fldname = "Nationality";
        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}
//////////////////////////

function validateTrans(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        fldname = "Transcripts Required";
        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateNotes(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        fldname = "New Notes";
        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateProg(fld) {
    var error = "";
    var fldname = "";
    if (fld.value.length == 0) {
        switch (fld.name) {
            case "p_programme":
                fldname = "UCAS Course";
                break;
            case "p_szrclof_campus":
                fldname = "Campus";
                break;
            case "p_mode_entry":
                fldname = "Mode / Point of Entry";
                break;
            case "p_szrclof_decision":
                fldname = "Decision";
                break;
        }

        fld.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateSchDecision(dec, fld) {
    var error = "";
    var fldname = "";
    if (dec.value == "4") {
        if (fld.value.length == 0) {
            switch (fld.name) {
                case "p_altprogramme":
                    fldname = "Alt UCAS Course";
                    break;
                case "p_szrclof_altcampus":
                    fldname = "Alt Campus";
                    break;
                case "p_altmode_altentry":
                    fldname = "Alt Mode / Point of Entry";
                    break;
            }

            fld.style.background = "Yellow";
            error = "*" + fldname + " is missing.\n"
        }
    } else {
        fld.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateSchool(dec, sch) {
    var error = "";
    var fldname = "Sent to Faculty";
    if ((dec.value == "3") && (sch.value.length == 0)) {
        sch.style.background = "Yellow";
        error = "*" + fldname + " is missing.\n"
    } else {
        sch.style.background = "White";
    }
    return error;
}

//////////////////////////

function validateEmail(fld) {
    var error = "";
    if (fld.value.length == 0) {
        fld.style.background = "Yellow";
        error = "*Email address is missing.\n"
    } else {
        fld.style.background = "White";
        var invalidChars = '\/\'\\ ";:?!()[]\{\}^|';
        for (i = 0; i < invalidChars.length; i++) {
            if (fld.value.indexOf(invalidChars.charAt(i), 0) > -1) {
                fld.style.background = "Yellow";
                error = "*Email address contains invalid characters.\n"
            }
        }

        for (i = 0; i < fld.length; i++) {
            if (fld.charCodeAt(i) > 127) {
                fld.style.background = "Yellow";
                error = "*Email address contains non ascii characters.\n"
            }
        }

        var atPos = fld.value.indexOf('@', 0);
        if (atPos == -1) {
            fld.style.background = "Yellow";
            error = "*Email address must contain an @\n"
        }
        if (atPos == 0) {
            fld.style.background = "Yellow";
            error = "*Email address must not start with @\n"
        }
        //next statement needs commenting out before formating all code
        //format next statement manually
        if (fld.value.indexOf('@', atPos + 1) > -1) {
            fld.style.background = "Yellow";
            error = "*Email address must contain only one @\n"
        }
        if (fld.value.indexOf('.', atPos) == -1) {
            fld.style.background = "Yellow";
            error = "*Email address must contain a period (.)in the domain name.\n"
        }
        if (fld.value.indexOf('@.', 0) != -1) {
            fld.style.background = "Yellow";
            error = "*Period (.) must not immediately follow @ in email address.\n"
        }

        if (fld.value.indexOf('.@', 0) != -1) {
            fld.style.background = "Yellow";
            error = "*Period (.) must not immediately precede @ in email address.\n"
        }

        if (fld.value.indexOf('..', 0) != -1) {
            fld.style.background = "Yellow";
            error = "*Two periods (..) must not be adjacent in email address.\n"
        }

        var dotpos = fld.value.lastIndexOf(".");
        if (dotpos + 2 >= fld.value.length) {
            fld.style.background = "Yellow";
            error = "*Something must follow the period (.) in the email address.\n"
        }

    }

    return error;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//AJAX
var complete;
var systemName;
var httpRequest;

function makeRequest(url, frmObj, requestFunction) {
    // This javascript function makes the connection
    // to the server to execute a script
    if (window.XMLHttpRequest) {
        // Mozilla, Safari, ...
        //alert("Create a new httpRequest for Mozilla");
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
        }
    } else
    if (window.ActiveXObject) {
        // IE
        //alert("Create a new httpRequest for IE");
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!httpRequest) {
        alert("Giving up :( Cannot create an XMLHTTP instance)");
        return false;
    }
    httpRequest.onreadystatechange = function() {
        switch (requestFunction) {
            case "retrieveOptions":
                retrieveOptions(frmObj, httpRequest);
                break;
            case "fillSchool":
                fillText(frmObj, httpRequest);
                break;
            case "fillDept":
                fillText(frmObj, httpRequest);
                break;
            case "fillSiteCode":
                fillText(frmObj, httpRequest);
                break;
            // TM AD-15
            case "fillRecruitmentCode":
                fillText(frmObj, httpRequest);
                break;
        }
    };
    httpRequest.open('GET', url, true);
    httpRequest.send(null);
}

function retrieveOptions(frmObj, resp) {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            while (frmObj.length > 0) {
                frmObj.remove(0);
            }
            var opt_array = resp.responseText.split(";");
            for (var i = 0; i < opt_array.length - 1; i++) {
                var option = document.createElement("option");
                var elem_arr = opt_array[i].split("|");
                option.value = elem_arr[0];
                var labelNode = document.createTextNode(elem_arr[1]);
                option.appendChild(labelNode);
                frmObj.appendChild(option);
            }
        }
    }
}
String.prototype.trim = function() {
    // Replace leading and trailing spaces with the empty string
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

function fillText(frmObj, resp) {
    //alert(frmObj.id);
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //alert(resp.responseText.trim());
            //document.getElementById(frmObj.name).value = resp.responseText.trim();
            document.getElementById(frmObj.id).value = resp.responseText.trim();
        }
    }
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var term = "";
var str = "";

function getSiteCode(thisForm, servicePath) {
    //alert('getSiteCode');
    if (thisForm.p_szrclof_decision.value == "3") {
        fillSiteCode(thisForm.p_szrclof_school, thisForm, servicePath);
    } else if (thisForm.p_szrclof_decision.value == "7" || thisForm.p_szrclof_decision.value == "8" || thisForm.p_szrclof_decision.value == "9") {
	//alert (thisForm.p_szrclof_decision.value);
        // TM AD-15
        fillRecruitmentCode(thisForm.p_szrclof_school, thisForm, servicePath);
    } else {
        thisForm.p_szrclof_school.value = '';
    }
}

function fillSiteCode(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    //alert('fillSiteCode');
    //alert(servicePath);
    term = thisForm.p_termcode.value;
    program = thisForm.p_programme.value;
    mode = thisForm.p_mode_entry.value;
    url = servicePath + 'hwzkclof.p_getSiteCode?pProg=' + escape(program) + '&pMode=' + escape(mode) + '&pTerm=' + escape(term);
    //alert(url);
    makeRequest(url, frmObj, 'fillSiteCode');
}

// TM AD-15
function fillRecruitmentCode(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    //alert('fillRecruitmentCode');
    //alert(servicePath);
    url = servicePath + 'hwzkclof.p_getRecruitmentCode';
    //alert(url);
    makeRequest(url, frmObj, 'fillRecruitmentCode');
}
////////////////////////////////////////
function getSchool(thisForm, servicePath) {
    //alert('getSchool');
    fillSchool(thisForm.display_school, thisForm, servicePath);
}

function fillSchool(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    //alert('fillSchool');
    program = thisForm.p_programme.value.substr(thisForm.p_programme.value.indexOf("|") + 1, thisForm.p_programme.value.lastIndexOf("|") - (thisForm.p_programme.value.indexOf("|") + 1));
    url = servicePath + 'hwzkclof.p_getSchool?pProgram=' + program;
    //alert(url);
    makeRequest(url, frmObj, 'fillSchool');
}
////////////////////////////////////////
function getDept(thisForm, servicePath) {
    //alert('getDept');
    fillDept(thisForm.display_dept, thisForm, servicePath);
}

function fillDept(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    //alert('fillDept');
    program = thisForm.p_programme.value.substr(thisForm.p_programme.value.indexOf("|") + 1, thisForm.p_programme.value.lastIndexOf("|") - (thisForm.p_programme.value.indexOf("|") + 1));
    term = thisForm.p_termcode.value;
    url = servicePath + 'hwzkclof.p_getDept?pProgram=' + program + '&pTerm=' + escape(term);
    //alert(url);
    makeRequest(url, frmObj, 'fillDept');
}
////////////////////////////////////////
function getModeEntry(thisForm, servicePath) {
    //alert('getModeEntry');
    fillModes(thisForm.p_mode_entry, thisForm, servicePath);
}

function fillModes(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    term = thisForm.p_termcode.value;
    program = thisForm.p_programme.value.substr(thisForm.p_programme.value.indexOf("|") + 1, thisForm.p_programme.value.lastIndexOf("|") - (thisForm.p_programme.value.indexOf("|") + 1));
    url = servicePath + 'hwzkclof.p_getModeEntry?pTerm=' + escape(term) + '&pProgram=' + program;
    //alert(url);
    makeRequest(url, frmObj, 'retrieveOptions');
}
////////////////////////////////////////
function getAltModeEntry(thisForm, servicePath) {
    //alert('getAltModeEntry');
    fillAltModes(thisForm.p_altmode_altentry, thisForm, servicePath);
}

function fillAltModes(frmObj, thisForm, servicePath) {
    // This function executes the makeRequest function that 
    // connects to the server via the URL.
    term = thisForm.p_termcode.value;
    program = thisForm.p_altprogramme.value.substr(thisForm.p_altprogramme.value.indexOf("|") + 1, thisForm.p_altprogramme.value.lastIndexOf("|") - (thisForm.p_altprogramme.value.indexOf("|") + 1));
    url = servicePath + 'hwzkclof.p_getModeEntry?pTerm=' + escape(term) + '&pProgram=' + program;
    //alert(url);
    makeRequest(url, frmObj, 'retrieveOptions');
}





