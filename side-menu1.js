<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="http://yandex.st/highlightjs/6.2/highlight.min.js"></script>
 
 
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript">
 $(document).ready(function(){
      $("h2,h3,h4,h5,h6").each(function(i,item){
        var tag = $(item).get(0).localName;
        $(item).attr("id","wow"+i);
        $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
        $(".newh2").css("margin-left",0);
        $(".newh3").css("margin-left",20);
        $(".newh4").css("margin-left",40);
        $(".newh5").css("margin-left",60);
        $(".newh6").css("margin-left",80);
      });
     
       $(".book-body").html($(".book-body").nextAll())
 });
</script>
<style type="text/css">
 
@media (max-width: 1600px) {
    .book-body {
       padding-left:200px;
    }
}
 
@media (max-width: 1400px) {
    .book-body {
       padding-left:200px;
    }
}
 
@media (max-width: 1200px) {
    .book-body {
       padding-left:300px;
    }
}
@media (max-width: 700px) {
    .book-body {
       padding-left:0px;
    }
}
@media (min-width: 700px) {
	#category{
	    position: fixed;
	    left: 20px;
	    top:0;
	    height: 100%;
	    overflow-y: scroll;
	}
}
 
@media (-webkit-max-device-pixel-ratio: 1) {
    ::-webkit-scrollbar-track-piece {
        background-color:#FFF
    }
 
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px
    }
 
    ::-webkit-scrollbar-thumb {
        background-color: #c2c2c2;
        background-clip: padding-box;
        min-height: 28px
    }
 
    ::-webkit-scrollbar-thumb:hover {
        background-color: #A0A0A0
    }
}
</style>
<a href="javascript:scroll(0,0)" style="position:fixed;float:right;right:32px;top:30%">返回顶部</a> 
<div id="category" class="book-summary"></div>
<div class="book-body">
</div>
