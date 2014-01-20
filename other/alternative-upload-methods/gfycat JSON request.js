//--- place this in the function 'insertvid'

//GFYCAT --- JSON request -> generates video with JSON object -> inserts video
switch (vidtype) {
case 'gfy':
            apiURL = 'http://gfycat.com/cajax/get/' + btn.attr('vidid');
            $.getJSON(apiURL, function(jsonstring) {
                var data = jsonstring.gfyItem;
                genVid(vidtype, data).insertBefore(btn);
                finish();
            }).fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                finish('no responce');
            });
            break;
}

//reasons to not use this
/*
*AJAX request takes more time than no AJAX request
*/

//reasons to use this
/*
*Lots of cool JSON data
*pretty fast
*/
