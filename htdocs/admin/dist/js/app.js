const admin="Techey Guys",BASE_URI="http://localhost/htdocs/";var visitorsInfo=BASE_URI+"?getvisitorsinfo",visitorsInfoArray=[],emailsubscribers=[],contactMessage=[];function createVisitorTableRow(e){return`
        <tr>
            <td>${e.region}</td>
            <td><i class="fa-brands fa-firefox-browser"></i></td>
            <td>${e.time}</td>
            <td>${e.country}</td>
            <td>${e.timezone}</td>
            <td>${e.ip}</td>
        </tr>`}function createEmailTable(e){return`
    <tr>
        <td>${e.email_details}</td>
    </tr>`}function createMessageTable(e){return`<tr>
    <td>${e.email}</td>
    <td>${e.telegram_link}</td>
    <td>${e.message}</td>
  </tr>`}class VisitorInfo{constructor({city:e,country:t,id:n,ip:o,loc:a,region:r,time:c,timezone:l,user_agent:d}){this.city=e,this.country=t,this.id=n,this.ip=o,this.loc=a,this.region=r,this.time=c,this.timezone=l,this.user_agent=d}}$.ajax({url:visitorsInfo,method:"GET",dataType:"json",success:function(e){$.each(e.visitor,function(e,t){t={city:t.city,country:t.country,id:t.id,ip:t.ip,loc:t.loc,region:t.region,time:t.time,timezone:t.timezone,user_agent:t.user_agent};visitorsInfoArray.push(t),$("#visitorTable").append(createVisitorTableRow(t))}),$.each(e.emailsubscribers,function(e,t){emailsubscribers.push(t),$("#subscribersTable").append(createEmailTable(t))}),$.each(e.contactmessage,function(e,t){contactMessage.push(t),$("#contactTable").append(createMessageTable(t))}),$(".dashbordTotalSubscribers").text(emailsubscribers.length),$(".dashbordTotalVisitors").text(visitorsInfoArray.length)},error:function(e,t,n){console.error("Error:",n)}});var updateAjaxCall=document.querySelector(".updateAjaxCall"),updateVideoDetailsAjaxCall=document.querySelector(".updateVideoDetails");function getVideoDetailsByUrl(){var t=$(".getVideoDetaialByUrl").val().match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);t&&t[1]?(t=t[1],$.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+t+"&key=AIzaSyBG7YBeYmcINh0XGBJ52IFOHHfse9cXFrg",function(e){e.items&&e.items[0]&&e.items[0].snippet?(e=e.items[0].snippet,$(".getVideoId").val(t),$(".getVideoTitle").val(e.title),$(".getVideoImage").val(e.thumbnails.high.url),$(".getVideoDescriptionInfo").val(e.description)):$("#result").html("Video details not found.")})):$("#result").html("Invalid YouTube URL. Couldn't extract video ID.")}updateVideoDetailsAjaxCall.addEventListener("click",e=>{e.preventDefault();var n=document.querySelector(".modalId").innerText,o=document.querySelector(".modalImage").value,a=document.querySelector(".modalTitle").value,r=document.querySelector(".modalDes").value,c=document.querySelector(".modelVideoSelects").selectedIndex,l=document.querySelector(".modelVideoCatogries").selectedIndex,d=document.querySelector(".modelVideoType").selectedIndex,e=document.querySelector(".modalChecked").checked;if(""==n&&""==o&&""==a&&""==r)createALertButton("Please fill required fields","danger");else{let t=1;e||(t=0);var e=new FormData,i=(e.append("videoId",n),e.append("videoImage",o),e.append("videoTitle",a),e.append("videoInfo",r),e.append("channel",c+1),e.append("catogries",l+1),e.append("type",d+1),e.append("isLive",t),new XMLHttpRequest),s=BASE_URI+"?updatedata";i.open("POST",s,!0),i.onload=function(){var e;200===i.status?("success"==(e=JSON.parse(i.responseText)).status?(createALertButton(e.message,"success"),updateUpdatedDatataInUI(n,o,a,r,channelIdArray[c],categoriesArray[l],videoTypeId[d],t)):createALertButton(e.message,"danger"),console.log(e)):console.error("Error: "+i.status)},i.onerror=function(){createALertButton("Check Your Network","danger")},i.send(e)}}),updateAjaxCall.addEventListener("click",t=>{t.preventDefault();var t=document.querySelector(".getVideoId").value,n=document.querySelector(".getVideoImage").value,o=document.querySelector(".getVideoTitle").value,a=document.querySelector(".getVideoDescriptionInfo").value,r=document.querySelector(".videoSelectss").selectedIndex,c=document.querySelector(".videoCatogriess").selectedIndex,l=document.querySelector(".videoTypess").selectedIndex,d=document.querySelector(".updateVideo #flexSwitchCheckCheckedAddNew").checked;if(""==t&&""==n&&""==o&&""==a)createALertButton("Please fill required fields","danger");else{let e=1;d||(e=0);var d=new FormData,i=(d.append("videoId",t),d.append("videoImage",n),d.append("videoTitle",o),d.append("videoInfo",a),d.append("channel",r),d.append("catogries",c),d.append("type",l),d.append("isLive",e),new XMLHttpRequest),t=BASE_URI+"?update";i.open("POST",t,!0),i.onload=function(){var e;200===i.status?("success"==(e=JSON.parse(i.responseText)).status?(createALertButton(e.message,"success"),document.querySelector(".getVideoId").value="",document.querySelector(".getVideoImage").value="",document.querySelector(".getVideoTitle").value="",document.querySelector(".getVideoDescription").value="",document.querySelector(".videoSelects").selectedIndex=1,document.querySelector(".videoCatogries").selectedIndex=1,document.querySelector(".videoType").selectedIndex=1,document.querySelector("#flexSwitchCheckChecked").value=1):createALertButton(e.message,"danger"),console.log(e)):console.error("Error: "+i.status)},i.onerror=function(){createALertButton("Check Your Network","danger")},i.send(d)}});var burgerMenu=document.querySelectorAll(".burgerMenu"),closeBurgerMenu=document.querySelectorAll(".closeBugermenu");function createALertButton(e,t){const n=document.getElementById("liveAlertPlaceholder");var o;e=e,t=t,(o=document.createElement("div")).innerHTML=[`<div class="alert bg-${t} alert-dismissible" role="alert">`,`   <div>${e}</div>`,'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),n.append(o),RemoveToast()}closeBurgerMenu.forEach(e=>{var t=document.querySelector(".left_div");e.addEventListener("click",()=>{t.classList.remove("left_div_open")})}),burgerMenu.forEach(e=>{e.addEventListener("click",()=>{var e=document.querySelector(".left_div");e.classList.contains("left_div_open")?e.classList.remove("left_div_open"):e.classList.add("left_div_open")})}),document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".tab"),o=document.querySelectorAll(".tab-content");n.forEach((e,t)=>{e.addEventListener("click",()=>{o.forEach(e=>e.classList.remove("active")),n.forEach(e=>e.classList.remove("activeBar")),o[t].classList.add("active"),n[t].classList.add("activeBar")})})});let categoriesArray=[],channelIdArray=[],videoTypeId=[],apiResponce;function appendCategoriesToDOM(e){let n=document.querySelector(".channelContent");n.innerHTML="",e.forEach(e=>{var t=document.createElement("p");t.textContent=e,n.appendChild(t)})}function appendChannelToDOM(e){let n=document.querySelector(".catogriesContent");n.innerHTML="",console.log("channel array1 "+e),e.forEach(e=>{var t=document.createElement("p");t.textContent=e,n.appendChild(t)})}function appendTpeToDOM(e){let n=document.querySelector(".typeContent");n.innerHTML="",console.log("video type array1 "+e),e.forEach(e=>{var t=document.createElement("p");t.textContent=e,n.appendChild(t)})}function createSelect(e,t){document.querySelectorAll("."+e).forEach(function(n){t.forEach(function(e){var t=document.createElement("option");t.value=e,t.text=e,n.appendChild(t)}),n.options[1].selected=!0})}function updateDashbord(e){console.log("length",e),document.querySelector(".dashbordTotalVideos").innerText=e,document.querySelector(".dashbordTotalLive").innerText=e,document.querySelector(".dashbordTotalCatogries").innerText=categoriesArray.length}async function fetchData(){try{var e=await fetch(BASE_URI);if(!e.ok)throw new Error("Network response was not ok");for(var t=await e.json(),n=mapApiResponseToDataObject(t),o=0;o<n.length;o++)createTableRow(n[o]);return updateDashbord(t.length),console.log(t),t}catch(e){console.error("Error fetching data:",e)}}function mapApiResponseToDataObject(e){return e.map(e=>(e.snippet.category&&!categoriesArray.includes(e.snippet.category)&&categoriesArray.push(e.snippet.category),e.snippet.channelId&&!channelIdArray.includes(e.snippet.channelId)&&channelIdArray.push(e.snippet.channelId),e.snippet.type&&!videoTypeId.includes(e.snippet.type)&&videoTypeId.push(e.snippet.type),{id:e.id.videoId||"",image:e.snippet.thumbnails.high.url||"",title:e.snippet.title||"",info:e.snippet.description||"",channelId:e.snippet.channelTitle||"",catogries:e.snippet.category||"",type:e.snippet.type||"",islive:e.snippet.islive||""}))}function createTableRow(e){var t=document.createElement("tr"),n=document.createElement("td"),o=document.createElement("button");o.classList.add("btn","btn-danger","getModel","m-2"),o.setAttribute("id",e.id),o.setAttribute("data-bs-toggle","modal"),o.setAttribute("data-bs-target","#editModel"),o.innerHTML='<i class="fa-solid fa-pen-to-square "></i> Edit ',n.append(o),t.classList.add("card-hover"),t.appendChild(n);(n=document.createElement("th")).setAttribute("scope","row"),n.classList.add("display-none"),n.textContent=e.id,t.appendChild(n);for(var o=document.createElement("td"),n=document.createElement("img"),a=(n.classList.add("img-fluid","thumnail","p-2","rounded","mb-0"),n.setAttribute("src",e.image),n.setAttribute("alt",""),o.appendChild(n),t.appendChild(o),[e.title,e.info,e.channelId,e.catogries,e.type,e.islive]),r=0;r<a.length;r++){var c=document.createElement("td");c.classList.add("text-truncate"),c.textContent=a[r],t.appendChild(c)}n=document.querySelector("tbody");0<=n.childElementCount&&document.querySelector(".spinner").classList.add("visually-hidden"),n.appendChild(t)}function updateUpdatedDatataInUI(e,t,n,o,a,r,c,l){e=document.querySelector("#"+e).parentElement.parentElement;e.childNodes[2].childNodes[0].src=t,e.childNodes[3].innerText=n,e.childNodes[4].innerText=o,e.childNodes[5].innerText=a,e.childNodes[6].innerText=r,e.childNodes[7].innerText=c,e.childNodes[8].innerText=l}appendCategoriesToDOM(categoriesArray),appendChannelToDOM(categoriesArray),appendTpeToDOM(categoriesArray),document.addEventListener("DOMContentLoaded",async function(){var e="getcatogriesinfo";try{var t=await(await fetch(BASE_URI+"?"+e)).json();categoriesArray=t.catogries.map(function(e){return e.toLowerCase()})}catch(e){console.error("Error fetching data:",e)}await 0,await createSelect("videoCatogries",categoriesArray),await createSelect("videoCatogriess",categoriesArray),await appendCategoriesToDOM(categoriesArray)}),document.addEventListener("DOMContentLoaded",async function(){var e="getchannelinfo";try{var t=await fetch(BASE_URI+"?"+e),n=await(apiResponce=t).json();channelIdArray=n.channel.map(function(e){return e.toLowerCase()}),console.log(channelIdArray)}catch(e){console.error("Error fetching data:",e)}await 0,await createSelect("videoSelects",channelIdArray),await createSelect("videoSelectss",channelIdArray),await appendChannelToDOM(channelIdArray)}),document.addEventListener("DOMContentLoaded",async function(){var e="getvideoinfo";try{var t=await(await fetch(BASE_URI+"?"+e)).json();videoTypeId=t.videoinfo.map(function(e){return e.toLowerCase()}),console.log(videoTypeId)}catch(e){console.error("Error fetching data:",e)}await 0,await createSelect("videoType",videoTypeId),await createSelect("videoTypess",videoTypeId),await appendTpeToDOM(videoTypeId)}),fetchData(),document.addEventListener("click",function(e){var t,n,o,a,r,c,l,d,i,s;e.target.classList.contains("getModel")&&(t=e.target.parentElement.parentElement.cells[1].innerText,n=e.target.parentElement.parentElement.cells[2].lastChild.src,o=e.target.parentElement.parentElement.cells[3].innerText,a=e.target.parentElement.parentElement.cells[4].innerText,r=e.target.parentElement.parentElement.cells[5].innerText,c=e.target.parentElement.parentElement.cells[6].innerText,l=e.target.parentElement.parentElement.cells[7].innerText,d=e.target.parentElement.parentElement.cells[8].innerText,console.log(e.target.parentElement.parentElement.cells[5].innerText),e=channelIdArray.indexOf(r),i=categoriesArray.indexOf(c),s=videoTypeId.indexOf(l),console.log(channelIdArray),console.log(categoriesArray),console.log(s,l),console.log(i,c),console.log(e,r),document.querySelector(".modalId").innerText=t,document.querySelector(".modalTitle").value=o,document.querySelector(".modalImage").value=n,document.querySelector(".modalDes").value=a,document.querySelector(".modalChecked").checked=1==d,document.querySelector(".modelVideoSelects").selectedIndex=e,document.querySelector(".modelVideoCatogries").selectedIndex=i,document.querySelector(".modelVideoType").selectedIndex=s,console.log(n+` ${o} ${a}, ${r}, ${c} ${l} `+d))}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".getModel").forEach(function(d){console.log(d),d.addEventListener("click",function(e){console.log(e);var e=d.parentElement.parentElement.cells[1].innerText,t=d.parentElement.parentElement.cells[2].lastChild.src,n=d.parentElement.parentElement.cells[3].innerText,o=d.parentElement.parentElement.cells[4].innerText,a=d.parentElement.parentElement.cells[5].innerText,r=d.parentElement.parentElement.cells[6].innerText,c=d.parentElement.parentElement.cells[7].innerText,l=d.parentElement.parentElement.cells[8].innerText;document.querySelector(".modalId").innerText=e,document.querySelector(".modalTitle").value=n,document.querySelector(".modalDes").value=o,document.querySelector(".modalChecked").checked=1==l;console.log(` ${t} ${n} ${o}, ${a}, ${r} ${c} `+l)})});var e=document.querySelectorAll(".getModel")[0];console.log(e)}),$(document).ready(function(){const e="AIzaSyAvDMW8O-oJJd2iIP7ATyj8EgfmB7YZjHE";var t;$.ajax({type:"GET",url:"https://www.googleapis.com/youtube/v3/search",data:{key:e,part:"snippet",maxResults:1,type:"video",videoEmbeddable:!0},success:function(e){},error:function(e){console.log("Request Failed")}}),t="UC79ikm9mQLz_I53CKOBeXKA",$(document).ready(function(){$.ajax({url:"https://www.googleapis.com/youtube/v3/channels",method:"GET",data:{part:"statistics,snippet",id:t,key:e},success:function(e){var t=e.items[0].statistics,n=e.items[0].snippet,t=t.subscriberCount,n=n.title;console.log(e.items[0]),console.log("Recent Subscribers:",t),console.log("Channel Title:",n)}})})});
//# sourceMappingURL=app.js.map