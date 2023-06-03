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






