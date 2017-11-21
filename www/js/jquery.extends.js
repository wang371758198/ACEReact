$.tabClose=function(obj){
   var key=$(obj).parent().attr('href').replace('#','');
   var nextKey =$(obj).parent().parent().prev().find('a').attr('href').replace('#','');
   if(key){
       $('#'+key).remove();
       $(obj).parent().parent().prev().addClass("active");
       $(obj).parent().parent().remove();
       $('#'+nextKey).addClass('in active');
   }
};
$.tabReload=function(obj){
    var key=$(obj).parent().attr('href').replace('#','');
    if(key){
        var src =window.frames["iframeabout"].getAttribute("src");
        window.frames["iframeabout"].setAttribute("src",src);
    }
}
$.windowOpen=function(obj){
    var key=$(obj).parent().attr('href').replace('#','');
    if(key){
        var src =window.frames["iframeabout"].getAttribute("src");
       window.open(src,"_bank");
    }
}