$(document).ready(function () {
    var deviceW = $(window).width();
    var deviceH = $(window).height();
    var footerH = $("#weFaxFooter").height();
    $(".index-old-header").addClass("que-header");
    $(".footerOut").addClass("index-footer");
    $(".service").addClass("index-service");
    function setWH() {
        if (deviceH >= 900) {
            var top = (deviceH - 370 - $("#infoList").height()) / 2;
            $("#infoList").css("margin-top", top);
        }
        if (deviceW <= 1024 || deviceH <= 670) {
            $(".show-footer").show();
            $("#weFaxFooter").stop(true, false).animate({ marginBottom: -footerH }, 1000, "easeOutCubic");
            $(".show-footer").mouseover(function () {
                $("#weFaxFooter").stop(true, false).animate({ marginBottom: 0 }, 1000, "easeOutCubic");
            });
            $("#weFaxFooter").mouseleave(function () {
                if ($(".show-footer").css("display") == "block") {
                    $("#weFaxFooter").stop(true, false).animate({ marginBottom: -footerH }, 1000, "easeOutCubic");
                }
            });
        } else {
            $(".show-footer").hide();
            $("#weFaxFooter").stop(true, false).animate({ marginBottom: 0 }, 1000, "easeOutCubic");
        }
    }

    var $animateNum = $(".animateNum");
    //动画队列
    var animateFUNC = [
		function () { $(".people-list").fadeIn(1000, aniCB) },
		function () { $("#infoList > div:eq(0)").fadeIn(200).animate({ marginTop: "0", opacity: 1 }, 1000, "easeOutCubic", aniCB) },
		function () { $("#infoList > div:eq(1)").fadeIn(200).animate({ marginTop: "0", opacity: 1 }, 1000, "easeOutCubic", NumStartAM) },
        function () { $("#infoList > div:eq(2)").fadeIn(200).animate({ marginTop: "0", opacity: 1 }, 1000, "easeOutCubic", aniCB) },
		function () { $("#infoList > div:eq(3)").fadeIn(200).animate({ marginTop: "0", opacity: 1 }, 1000, "easeOutCubic", aniCB) },
		function () { $("#weFaxFooter").animate({ marginBottom: 0 }, 1000, "easeOutCubic") }
	 ]
    function aniCB() {
        $(document).dequeue("myAnimate")
    }
    $(document).queue("myAnimate", animateFUNC)

    $('#dowebok').fullpage({
        sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
        'navigation': true, 	//是否显示导航
        'navigationPosition': 'left', //导航定位
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {
                $("#weFaxFooter").hide();
            }
            if (index == 2) {
                $("#amimate_2").delay(500).animate({ opacity: 1 }, 1500, "easeInOutQuad");
                $("#weFaxFooter").hide();
            }
            if (index == 3) {
                $("#amimate_3").delay(500).animate({ opacity: 1 }, 1500, "easeInOutQuad");
                $("#weFaxFooter").hide();
            }
            if (index == 4) {
                $("#amimate_4").delay(500).animate({ opacity: 1 }, 1500, "easeInOutQuad");
                $("#weFaxFooter").hide();
            }
            if (index == 5) {
                $("#amimate_5").delay(500).animate({ opacity: 1 }, 1500, "easeInOutQuad");
                $("#weFaxFooter").hide();
            }
            if (index == 6) {
                $("#weFaxFooter").show();
                //                $(".index-right-qd").hide();
                aniCB()
                //$("#weFaxFooter").animate({marginBottom:0},1000,"easeOutCubic");
                setWH();
                $(window).resize(function () {
                    deviceW = $(window).width();
                    deviceH = $(window).height();
                    setWH();
                });
            }
        },
        "onLeave": function (index, nextIndex, direction) {
            if (index == 6) {
                //                $(".index-right-qd").show();
                $("#weFaxFooter").animate({ marginBottom: -footerH }, 1000, "easeOutCubic");
            }
        }
    });
    //动态数字效果
    function NumStartAM() {
        aniCB()
        $animateNum.each(function () {
            var targetNum = $(this).attr("action-data");
            alert(1);
            new AnimateNum({
                obj: $(this),
                target: targetNum,
                totalTime: 1000
            })
        })//over
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        var totalAmount = $("#countUp").val();
        var demo = new countUp("myTargetElement", 0, totalAmount, 0, 2.5, options);
        demo.start();
    }
});

