$(function()
{
	// doShowYydt();
	// doShowZxzj1();
	doShowDl();

})
// 戴礼 罗兰珍切换
function doShowDl()
{
	doToggle2("block","none");

}

function doShowLlz()
{
	doToggle2("none","block");
}

function doToggle2(dlDisplay,llzDisplay)
{
	var dl=document.getElementsByName("dl");
	var llz=document.getElementsByName("llz");
	for(var i=0;i<dl.length;i++)
	{
		dl[i].style.display=dlDisplay;
		llz[i].style.display=llzDisplay;
	};
}


// 医院新闻切换方法一
// function doShowYydt()
// {
// 	doToggle1("block","none","none");
// }

// function doShowMtbd()
// {
// 	doToggle1("none","block","none");
// }

// function doShowZxwd()
// {
// 	doToggle1("none","none","block");
// }

// function doToggle1(yydtDisplay,mtbdDisplay,zxwdDisplay)
// {
// 	var yydt=document.getElementsByName("yydt");
// 	var mtbd=document.getElementsByName("mtbd");
// 	var zxwd=document.getElementsByName("zxwd");
// 	for(var i=0;i<yydt.length;i++)
// 	{
// 		yydt[i].style.display=yydtDisplay;
// 		mtbd[i].style.display=mtbdDisplay;
// 		zxwd[i].style.display=zxwdDisplay;

// 	};

// }

// 医院动态 媒体报道 在线问答的切换
$(function()
{
	$(".nl2-first").find("span").each(function(index)
	{
		$(this).click(function()
		{
			$(".nl2-first").find("span").removeClass("bg").eq(index).addClass("bg");
			$(".dtshow").hide().eq(index).show();
		})
	})
})



// 名医堂的切换
$(function()
{
	$(".zxcolor").find("span").each(function(index)
	{
		$(this).mouseover(function()
		{
			$(".zxcolor").find("span").removeClass('on').eq(index).addClass('on');
		})
	})
})


// 康复案例切换
$(function()
{
	$(".tog").hide();
	$(".kfS2").click(function()
	{
		$(".tog").toggle(500);
	})

})


// 文章页和列表页的动态-------------------
$(function()
{
	$(".li2bhide").hide();
	$(".li2c").find("input").each(function(index)
		{
				$(this).mouseover(function()
				{
					$(".li2b").hide().eq(index).show();
				})
		});
})

// 规范化
$(function()
{
	$(".gfh3b").find("li").each(function(index)
	{
		$(this).mouseover(function()
		{
			$(".gfh3b").find("li").removeClass("on1").addClass("old").eq(index).removeClass("old").addClass("on1");
			$(".gfh3a").hide().eq(index).show();
		})
	})
})



