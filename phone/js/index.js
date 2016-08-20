
// 监听浏览器,针对不同分辨率计算font-size
// 然后根据设计稿比如尺寸是640尺寸 rem = 设计稿的字体大小 / 100 ; 16px —> 0.16rem

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth<=320){
                docEl.style.fontSize = '50px';
            }
            else if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }
            else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// 我的
$(function()
{
    // 切换的导航和轮播图
    $(".tt1").find(".tt1a").each(function(index)
    {
        $(this).click(function()
        {
            $(".tt1").find(".tt1a").removeClass("show").eq(index).addClass("show");
            $(".banner").hide().eq(index).show();
        })
    });

// 更多下拉菜单
    $(".xiala").hide();
    $(".gdxl").click(function()
    {   
        
        $(".xiala").slideToggle(200);
    });

// 留言
    // $(".liuyan").hide();
    $(".liuyan2").click(function()
    {
        $(".hzly").hide();
        $(".liuyan").show();
    })


// 侧边栏
    $(".top1").click(function()
    {
        $(".aside").animate({left:"0rem"},1000);
        $(".con").animate({left:"3.75rem"},1000);
        $(".conall").show();
        $(".conall").bind('touchmove', function(event) {
             event.preventDefault();
         });
    });

    $(".conall").click(function(){
        $(".aside").animate({left:"-3.75rem"},1000);
        $(".con").animate({left:"0rem"},1000);
        $(".conall").hide();
        $(".conall").bind('touchmove', function(event) {
             event.preventDefault();
         });
    });


    // 专家轮播图
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    //  表单的验证
    function doVal(event)
    {
        var rx=/[请输入]/g;
        if(rx.test($(event).val()))
        {   
            $(event).val("");
            $(event).css("color","black");
        }
    }

        function doCheckName()
    {
        var name=$("#name").val();
        var rx=/^[a-z\u4e00-\u9fa5]{2,10}$/i;
        if(rx.test(name))
        {
            $("#name").css("color","green");
            return true;
        }
        $("#name").val("请输入正确的姓名").css("color","red");
    }

    function doCheckTel()
    {
        var tel=$("#tel").val();
        var rx=/^[0-9]{11}$/i;
        if(rx.test(tel))
        {
            $("#tel").css("color","green");
            return true;
        }
        $("#tel").val("请输入正确的号码").css("color","red");
    }


    function doCheckDate()
    {
        var day=$("#date").val();
        day=day.split("-");
        var now= new Date();
        var year=getFullYear();
        var month=getMonth()+1;
        vardate=now.getDate();
        if(day[0]>=year&&day[1]>=month&&day[2])
        {
            return true;
            $("#date").val("");
        }
    }

    $("#name").blur(doCheckName);
    $("#name").focus(function()
    {
        doVal("#name");
    });

     $("#tel").blur(doCheckTel);
    $("#tel").focus(function()
    {
        doVal("#tel");
    });

    $("#date").change(doCheckDate);





    // 返回按钮
    $(".gotop").hide();
    $(window).scroll(function(event) 
    {
        
        $(window).scrollTop()>400? $(".gotop").show():$(".gotop").hide()
    });

     $(".gotop").click(function()
    {   
        $("html,body").animate({"scrollTop":"0"},1000);
        
    });

 

})





