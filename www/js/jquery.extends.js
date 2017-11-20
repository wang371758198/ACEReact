$.tabClose=function(obj){
   var key=$(obj).parent().attr('href').replace('#','');
   var nextKey =$(obj).parent().parent().prev().find('a').attr('href').replace('#','');
   if(key){
       $('#'+key).remove();
       $(obj).parent().parent().prev().addClass("active");
       $(obj).parent().parent().remove();
       $('#'+nextKey).addClass('in active');
   }
}