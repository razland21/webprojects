/**written by razland**/


function parse_verse(my_verse, type) {
    var source = "- "
    var full_verse = ""

    if (type=="votd") {
        full_verse += "<h1>Verse of the Day</h1>";
    }

    for(var i=0; i<my_verse.length; i++) {
        full_verse += "<p>" + my_verse[i].text + " </p>";
        if (i==0) {
            source += my_verse[i].bookname + " " + my_verse[i].chapter + ":" + my_verse[i].verse;
        } else if (i==(my_verse.length-1)) {
            source += "-" + my_verse[i].verse;
        } 
    }

    $("#vtext").html(full_verse);
    $("#vloc").html(source);
}


function get_verse(type) {
    $.ajax({
        url: "https://labs.bible.org/api/?",
        dataType:"jsonp",
        data: "passage="+type+"&type=json&callback=?",
        success: function(my_verse) {
            parse_verse(my_verse, type);
        }
    });
}


$("document").ready(function(){
    get_verse("votd");

    $("#votd").click(function(){
        get_verse("votd");
    });

    $("#random").click(function(){
        get_verse("random");
    });
});

