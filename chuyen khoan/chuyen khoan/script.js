<script language='javascript'>
                    var myVar=setInterval(function(){Clock()},1000);
                    function Clock() {
                    a=new Date();
                    w=Array("Chủ Nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy");
                    n=Array("일요일","월요일","화요일","수요일","목요일","금요일","토요일");
                    var a=n[a.getDay()],
                    n=new Date,
                    d=n.getDate();
                    m=n.getMonth()+1;
                    y=n.getFullYear();
                    h=n.getHours();
                    mi=n.getMinutes();
                    se=n.getSeconds();
                    if(10>d){d="0"+d}
                    if(10>m){m="0"+m}
                    if(10>h){h="0"+h}
                    if(10>mi){mi="0"+mi}
                    if(10>se){se="0"+se}
                    document.getElementById("clockDiv").innerHTML=""+a+ ","+m+"월 "+d+" 일 "+y+" ==> "+h+":"+mi+":"+se+"s";
                   }
                    </script>
                    