
var CNMessage="We use cookies to improve your browsing experience and no personal information is stored. If you keep browsing we understand that you agree with our";
var CNPolicy="Cookies Policy";

function setCookie(){var e=180,o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3);var t="expires="+o.toUTCString();document.cookie="CNCookie=1; "+t}function getCookie(){for(var e="CNCookie=",o=document.cookie.split(";"),t=0;t<o.length;t++){for(var n=o[t];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}function checkCookie(){var e=getCookie();return e}function CNAgree(){setCookie(),document.getElementById("CN").style.display="none"}

$( document ).ready(function() {
if (checkCookie() != "1") {		
	$( "body" ).prepend("<style>#policyLink{cursor:pointer; z-index:1001; color:#555; font-weight:bold; text-decoration:none; font-family: Arial, Helvetica, sans-serif; font-size:14px;} #CN{cursor:pointer; position: fixed; width: 100%; height: 18px; margin: 0px; right: 0px; bottom: 0px; padding: 3px 3px 6px 3px;  z-index: 1000; text-align: center; background-color: #EEE; color: #555; line-height: 17px; border-top:1px #CCC solid;} #CNMessage{color:#555;font-weight:normal; font-family: Arial, Helvetica, sans-serif; font-size:14px; } #CNAgree{ font-weight:normal; background-color: #555; border: #555555 1px solid; border-radius: 5px; margin:0px 5px 0px 7px; padding: 1px 5px; color: #EEE; float:left; font-family: Arial, Helvetica, sans-serif; font-size:14px;} @media (max-width: 1200px) {#CN{height:35px;} @media (max-width: 625px) {#CN{height:52px;} @media (max-width: 450px) {#CN{height:69px;} @media (max-width: 350px) {#CN{height:86px;}</style> <div id='CN'><span id='CNAgree' onClick='CNAgree()'> X </span> <span id='CNMessage' onClick='CNAgree()'>"+CNMessage+" </span> <a id='policyLink' target='_blank' rel='nofollow' href='http://www.ocigrup.com/cookies.html'>"+CNPolicy+"</a>.</div>");
}

});