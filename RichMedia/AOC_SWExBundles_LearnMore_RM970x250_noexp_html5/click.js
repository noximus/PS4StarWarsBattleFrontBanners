var myFT=new FT,container=FT.query("#container"),vidHolder=FT.query("#vidHolder");myFT.applyClickTag(container,1);var vid=myFT.insertVideo({parent:vidHolder,video:"video1",controls:true,autoplay:false,width:"445",height:"250"});myFT.addEventListener("instantads",function(){myFT.videos.video1=myFT.instantAds.youtubeTextVariable});