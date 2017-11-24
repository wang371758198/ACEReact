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
        var src =window.frames["iframe"+key].getAttribute("src");
        window.frames["iframe"+key].setAttribute("src",src);
    }
}
$.windowOpen=function(obj){
    var key=$(obj).parent().attr('href').replace('#','');
    if(key){
        var src =window.frames["iframe"+key].getAttribute("src");
       window.open(src,"_bank");
    }
}
$.openTab=function(){
   $('#sidebar li').removeClass("active");
   $(this).parent().addClass("active");
    var Key = $(this).data("key");
    var Title = $(this).data("title");
    var Uri = $(this).data("url");
    // this.setState({
    // 	Title:"About",
    // 	Key:"about",
    // 	Uri:"/Home/About"
    // });
    var mainTabs = $("#mainTabs");
    var isExist = false;
    var existNode = null;
    mainTabs.children().each(function() {
      var key = $(this)
        .find("a")
        .attr("href")
        .replace("#", "");
      if (key == Key) {
        isExist = true;
        existNode = $(this);
      }
    });
    var tab = `<li class="active">
					<a data-toggle="tab" href="#${Key}">
          <i class="green ace-icon fa fa-home bigger-120" />
          <span>${Title}</span>
          <i class="ace-icon fa fa-expand" onClick="$.windowOpen(this)"></i>
          <i class="ace-icon fa fa-refresh" onClick="$.tabReload(this)"></i>
					<i class="ace-icon fa fa-times"  onClick="$.tabClose(this)"/>
					</a>
				</li>`;
    mainTabs.children().each(function() {
      $(this).removeClass("active");
    });

    var mainContent = $("#mainContent");
    var tabContent = `<div id="${Key}" class="tab-pane fade in active">
						<iframe
						id="iframe${Key}"
						src="${Uri}"
						style="border: 0"
						width="100%"
						/>
					</div>`;
    mainContent.children().each(function() {
      $(this).removeClass("in active");
    });
    if (!isExist) {
      mainTabs.append(tab);
      mainContent.append(tabContent);
    } else {
      existNode.addClass("active");
      $("#" + Key).addClass("in active");
    }

}