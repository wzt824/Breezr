$(function(){
    showmenu();
    changenav();
    clickmenu();
    language();
    changelanguage();
     messagesides();
    showdescmess();
    showusersta();

})

function showmenu() {
    $(".uls").children("li").click(function () {
        $(this).find("ul").slideToggle();
    })
}
//点击后的nav
function changenav(){
    var lis=document.getElementsByClassName("ulstwo")[0].children;
    var subnav=document.getElementsByClassName("subnav");
    for(let i=1;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            var index=i;
            for(let j=0;j<subnav.length;j++){
                subnav[j].style.display="none";
                subnav[index-1].style.display="block";
            }
        }
        lis[i].onmouseleave=function(){
            var index=i;
            for(let j=0;j<subnav.length;j++){
                subnav[index-1].style.display="none";
            }
        }
    }
}
// 点击菜单图标
function clickmenu(){
var menu=document.getElementsByClassName("menu")[0];
var changelog=document.getElementsByClassName("changelog")[0];
var headerleft=document.getElementsByClassName("header-left")[0];
var headerright=document.getElementsByClassName("header-right")[0];
var sectionleft=document.getElementsByClassName("section-left")[0];
var changeleft=document.getElementById("changeleft");
var sectionleftid=document.getElementById("section-left");

var num=0;
var seewidth=document.body.clientWidth || document.documentElement.clientWidth;
if(seewidth>=1000){
    sectionleftid.style.display="block";
    headerright.style.paddingLeft="285px";
    menu.onclick=function(){
        num++;
        if(num%2==1){
            headerleft.style.display="none";
            changelog.style.display="block";

            headerright.style.paddingLeft="85px";
            sectionleft.style.display="none";
            changeleft.style.display="block";
        }else{
            headerleft.style.display="block";
            changelog.style.display="none";
            headerright.style.paddingLeft="285px";
            sectionleft.style.display="block";
            changeleft.style.display="none";
        }

    }
}
    if(seewidth<1000){

        sectionleft.style.display="none";
        changeleft.style.display="none";
        changelog.style.display="none";
        var count=0;
        menu.onclick=function(){
            count++;
            if(count%2==1){
                sectionleftid.style.display="block";
                headerright.style.paddingLeft="0px";
            }else{
                sectionleftid.style.display="none";
            }


        }
    }


}
//显示语言
function language() {
    var num = 0;
    $(".secondli").click(function () {
        num++;
        console.log(num)
        if (num % 2 == 1) {
            $(".language").animate({
                "top": "56px",
                opacity: 1
            },800)
        }else if(num % 2 == 0){
            $(".language").animate({
                "top": "150px",
                opacity: 0
            },800)
        }

    })
}
//替换语言
function changelanguage(){
    var qi=document.getElementsByClassName("qi")[0];
    var country=document.getElementsByClassName("country")[0];
    var language=document.getElementsByClassName("language")[0];
    var lans=$(".language").children("p");
    for(let i=0;i<lans.length;i++){
        lans[i].onclick=function(){
            qi.src=this.firstElementChild.src;
            country.innerHTML=this.lastElementChild.innerHTML;
        }
    }
}
//显示message
function messagesides(){
    let  num = 0;
    $(".messageside").click(function () {
        num++;
        console.log(num)
        if (num % 2 == 1) {
            $(".meaasgesone").css({
                "display":"block"
            });
            $(".meaasgesone").animate({
                "top": "58px",
                opacity: 1
            },800)
        }else if(num % 2 == 0){
            $(".meaasgesone").css({
                "display":"none"
            })
            $(".meaasgesone").animate({
                "top": "150px",
                opacity: 0
            },800)
        }
    })
}
function showdescmess(){
    let  num = 0;
    $(".descmess").click(function () {
        num++;
        console.log(num)
        if (num % 2 == 1) {
            $(".meaasgestwo").css({
                "display":"block"
            })
            $(".meaasgestwo").animate({
                "top": "58px",
                opacity: 1
            },800)
        }else if(num % 2 == 0){
            $(".meaasgestwo").css({
                "display":"none"
            })
            $(".meaasgestwo").animate({
                "top": "150px",
                opacity: 0
            },800)
        }
    })
}
function showusersta(){
    let  num = 0;
    $(".userdesc").click(function () {
        num++;
        console.log(num)
        if (num % 2 == 1) {
            $(".usersta").css({
                "display":"block"
            })
            $(".usersta").animate({
                "top": "58px",
                opacity: 1
            },800)
        }else if(num % 2 == 0){
            $(".usersta").css({
                "display":"none"
            })
            $(".usersta").animate({
                "top": "150px",
                opacity: 0
            },800)
        }
    })
}
//1000px;



