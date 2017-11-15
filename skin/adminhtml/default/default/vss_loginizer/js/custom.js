$$("input[type=radio]").each(function(el) {
    if (el.up("label")) {
        el.up("label").addClassName("custom-radio-label").down("input[type=radio]").insert({
            after: "<span class='custom-tick'></span>"
        });
    }
});

$$("input[type=checkbox]").each(function(el) {
    if (el.up("label")) {
        el.up("label").addClassName("custom-checkbox-label").down("input[type=checkbox]").insert({
            after: "<span class='custom-tick'></span>"
        });
    }
});

//document.observe('dom:loaded', function() {
//    $$('i[data-toggle="tooltip"]').each(function(element) {
//        $(element).setAttribute('title', $(element).readAttribute('data-original-title'));
//        new Tooltip(element, {
//            backgroundColor: "#333",
//            borderColor: "#000",
//            textColor: "#fff",
//            textShadowColor: "",
//            mouseFollow: false,
//            opacity: .90
//        });
//    });
//});

document.observe('dom:loaded', function(evt) {
    var config = {
        '.chosen-select': {
            disable_search_threshold: 20,
            width: "25%"
        },
        '#idDepartmentsDropDown, #idGroupsDropDown, #idStaffUsers, #idTopicsDropDown, #ticketSource, #idDropDownStaffUsers, #postreplystatus, #postreplystatus, #post_note_status, #ticketStatusDropdown'
        : {
            disable_search_threshold: 20,
            width: "100%"
        },
        '#action'
        : {
            disable_search_threshold: 20,
            width: "93%"
        }
    }
    var results = [];
    for (var selector in config) {
        var elements = $$(selector);
        for (var i = 0; i < elements.length; i++) {
            results.push(new Chosen(elements[i], config[selector]));
        }
    }
    return results;
});


//use &&
if ((typeof jQuery === 'undefined') && !window.jQuery) {
    //document.write(unescape("%3Cscript type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'%3E%3C/script%3E"));
} else {
    if ((typeof jQuery === 'undefined') && window.jQuery) {
        jQuery = window.jQuery;
    } else if ((typeof jQuery !== 'undefined') && !window.jQuery) {
        window.jQuery = jQuery;
    }
}

//document.observe("dom:loaded", function() {
//    new iPhoneStyle('.on_off input[type=checkbox]');
//    new iPhoneStyle('.yes_no input[type=checkbox]', {'checkedLabel': 'YES', 'uncheckedLabel': 'NO', 'statusChange': function(ev) {
//            tabOptions(ev);
//        }});
//    new iPhoneStyle('.on_off2 input[type=checkbox]', {'statusChange': function(ev) {
//            tabOptions(ev);
//        }});
//});

function tabOptions(ev) {
    if (ev.checked) {
        $("custom_deskoid_button").show();
    } else {
        $("custom_deskoid_button").hide();
    }
}

document.observe("dom:loaded", function() {
    var window = document.viewport.getDimensions();
    $$(".vss-ticket-subject").each(function(e){
        $(e).down('a').observe('mouseover', function(){
            var $elemOffset = $(e).viewportOffset();
            var $hiddenOffset = $(e).down(".vss-last-reply");
            var height = $elemOffset.top + $hiddenOffset.clientHeight+40;
            console.log(window.height+"<"+height);
            if(window.height < height){
                $(e).down(".vss-last-reply").down('.arrow').addClassName("bottom");
                $(e).down(".vss-last-reply").setStyle({'top':'-'+($hiddenOffset.clientHeight+38)+'px'});
            }else{
                $(e).down(".vss-last-reply").down('.arrow').removeClassName("bottom");
                $(e).down(".vss-last-reply").setStyle({'top':'0px'});
            }
            $(e).down(".vss-last-reply").setStyle({'visibility':'visible'});
        });
        $(e).down('a').observe('mouseout', function(){
            $(e).down(".vss-last-reply").setStyle({'visibility':'hidden'});
        });
    });
    
});