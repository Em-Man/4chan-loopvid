//--- place this at the top of the script

//gfycat embed script
var gfyScript = document.createElement( "script" );
    gfyScript.type = "text/javascript";
    gfyScript.src = "http://assets.gfycat.com/js/gfyajax-0.517d.js";
    document.body.appendChild(gfyScript);
    

//--- place this in the function 'insertvid'

switch (vidtype) {
case 'gfy':
            var gfyElem = $('<img>', {class: 'gfyitem', 'data-id': btn.attr('vidid')});
            gfyElem.insertBefore(btn); //inserts a <img> that later gets converted
            var gfyNode = btn.prev().get(0);
            var myGfyObj = new gfyObject(gfyNode);
            myGfyObj.init(); //converts the <img> element to a gfycat
            finish();
            break;
}

//reasons to not use this
/*
*the gfycat embed script was originally created to support all devices (bloats the script with lots of unused code)
*/

//reasons to use this
/*
*neat gfycat UI
*/
