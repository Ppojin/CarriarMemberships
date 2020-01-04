// function loadJQuery() {
//     var oScript = document.createElement("script");
//     oScript.type = "text/javascript";
//     oScript.charset = "utf-8";		  
//     oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";	
//     document.getElementsByTagName("head")[0].appendChild(oScript);
// }
// loadJQuery()

var result = []
var cateList = $("#cate > li > a").toArray();
cateList.shift();
for (var cateNum=0 ; cateNum<=cateList.length ; cateNum){
    $(cate[cateNum]).text();
    $(cate[cateNum]).click();
    var searchCnt = $("#searchCnt").text().split("개")[0]*1;
    var btnViewMore = $(".view-more");
    for(var i=0 ; i<=searchCnt/6 ; i++){
        console.log(i);
        btnViewMore.click();
    }
    var boxList = $(".sec-box");
    for(var boxNum=0 ; boxNum<=boxList.length ; boxNum++){
        var title = $(boxList[boxNum]).find(".sec-cont-tit").text();
        var benelist = $(boxList[boxNum]).find("li");
        for(var beneNum=0 ; beneNum=benelist.length ; beneNum++){
            var tier = $(benelist[beneNum]).find("em").text();
            var benefit = $(benelist[beneNum]).find("span").text();
        }
        result.append()
    }
    $().find(".sec-cont-tit").text()
}
