

import{ marked } from 'marked';
marked.parse(markdownString ,[option], [callback])




 document.getElementById('content').innerHTML =
 marked.parse('# Marked in the browser\n\nRendered by **marked**.');








var f = form;

var xmlhttp;

if (window.XMLHttpRequest)
{
    xmlhttp=new XMLHttpRequest();
}
else
{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

}

xmlhttp.onreadystatechange=function()
{
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("content").innerHTML=marked(xmlhttp.responseText);

    }

}

xmlhttp.open("GET" , f.q.value,true);
xmlhttp.send();
