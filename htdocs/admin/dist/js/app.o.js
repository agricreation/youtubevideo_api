// obfuscated with grunt-contrib-obfuscator.
var _0x48ebd7=_0x225d;(function(_0x15ec54,_0x5165b8){var _0x11794b=_0x225d,_0xd420f5=_0x15ec54();while(!![]){try{var _0x5b2480=-parseInt(_0x11794b(0xbf))/0x1*(parseInt(_0x11794b(0xc5))/0x2)+parseInt(_0x11794b(0x87))/0x3*(parseInt(_0x11794b(0xde))/0x4)+-parseInt(_0x11794b(0xce))/0x5+parseInt(_0x11794b(0xf7))/0x6+-parseInt(_0x11794b(0xd8))/0x7+-parseInt(_0x11794b(0xe6))/0x8*(-parseInt(_0x11794b(0x74))/0x9)+parseInt(_0x11794b(0xfd))/0xa;if(_0x5b2480===_0x5165b8)break;else _0xd420f5['push'](_0xd420f5['shift']());}catch(_0x51d0a6){_0xd420f5['push'](_0xd420f5['shift']());}}}(_0x36bf,0x47ce1));const admin=_0x48ebd7(0x133),BASE_URI=_0x48ebd7(0xc7);var visitorsInfo=BASE_URI+_0x48ebd7(0xd6),visitorsInfoArray=[],emailsubscribers=[],contactMessage=[];function createVisitorTableRow(_0x2b5495){var _0x55c04f=_0x48ebd7;return _0x55c04f(0x124)+_0x2b5495['region']+_0x55c04f(0xa9)+_0x2b5495[_0x55c04f(0x134)]+_0x55c04f(0x113)+_0x2b5495[_0x55c04f(0xf0)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x2b5495[_0x55c04f(0x94)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x2b5495['ip']+_0x55c04f(0xf4);}function createEmailTable(_0xd6a727){var _0x2268b6=_0x48ebd7;return _0x2268b6(0xec)+_0xd6a727[_0x2268b6(0x9f)]+_0x2268b6(0x105);}function createMessageTable(_0x40ccef){var _0x3e350b=_0x48ebd7;return'<tr>\x0a\x20\x20\x20\x20<td>'+_0x40ccef[_0x3e350b(0x122)]+_0x3e350b(0x93)+_0x40ccef['telegram_link']+'</td>\x0a\x20\x20\x20\x20<td>'+_0x40ccef[_0x3e350b(0x126)]+_0x3e350b(0xb0);}class VisitorInfo{constructor({city:_0x2b7236,country:_0x1726c0,id:_0x4004dd,ip:_0x4a2706,loc:_0x9c32ce,region:_0x22dcf8,time:_0xf0f85c,timezone:_0xe0acc5,user_agent:_0x101e60}){var _0x4e356e=_0x48ebd7;this[_0x4e356e(0xf8)]=_0x2b7236,this[_0x4e356e(0xf0)]=_0x1726c0,this['id']=_0x4004dd,this['ip']=_0x4a2706,this[_0x4e356e(0x103)]=_0x9c32ce,this[_0x4e356e(0xfe)]=_0x22dcf8,this[_0x4e356e(0x134)]=_0xf0f85c,this['timezone']=_0xe0acc5,this[_0x4e356e(0xd5)]=_0x101e60;}}$[_0x48ebd7(0x125)]({'url':visitorsInfo,'method':_0x48ebd7(0xc8),'dataType':'json','success':function(_0x2b4d3e){var _0x59e2d7=_0x48ebd7;$[_0x59e2d7(0xfa)](_0x2b4d3e['visitor'],function(_0xabce65,_0x10b59b){var _0x567af2=_0x59e2d7;let _0x45f2df={'city':_0x10b59b[_0x567af2(0xf8)],'country':_0x10b59b[_0x567af2(0xf0)],'id':_0x10b59b['id'],'ip':_0x10b59b['ip'],'loc':_0x10b59b['loc'],'region':_0x10b59b[_0x567af2(0xfe)],'time':_0x10b59b[_0x567af2(0x134)],'timezone':_0x10b59b[_0x567af2(0x94)],'user_agent':_0x10b59b[_0x567af2(0xd5)]};visitorsInfoArray[_0x567af2(0xc4)](_0x45f2df),$('#visitorTable')['append'](createVisitorTableRow(_0x45f2df));}),$[_0x59e2d7(0xfa)](_0x2b4d3e[_0x59e2d7(0xa7)],function(_0x51420d,_0x235a54){var _0x443b2a=_0x59e2d7;emailsubscribers['push'](_0x235a54),$(_0x443b2a(0xcd))[_0x443b2a(0x123)](createEmailTable(_0x235a54));}),$[_0x59e2d7(0xfa)](_0x2b4d3e[_0x59e2d7(0xb5)],function(_0x3db009,_0x296af4){var _0x3bf29c=_0x59e2d7;contactMessage['push'](_0x296af4),$(_0x3bf29c(0xcb))[_0x3bf29c(0x123)](createMessageTable(_0x296af4));}),$('.dashbordTotalSubscribers')[_0x59e2d7(0x121)](emailsubscribers[_0x59e2d7(0xf5)]),$(_0x59e2d7(0x8a))[_0x59e2d7(0x121)](visitorsInfoArray[_0x59e2d7(0xf5)]);},'error':function(_0xa4ba1,_0x40e1e9,_0x47a3f7){var _0x185837=_0x48ebd7;console[_0x185837(0x90)](_0x185837(0x112),_0x47a3f7);}});var updateAjaxCall=document['querySelector']('.updateAjaxCall'),updateVideoDetailsAjaxCall=document['querySelector'](_0x48ebd7(0x10e));function _0x225d(_0x25111a,_0x2d7993){var _0x36bf46=_0x36bf();return _0x225d=function(_0x225d78,_0xd0b928){_0x225d78=_0x225d78-0x74;var _0x19d298=_0x36bf46[_0x225d78];return _0x19d298;},_0x225d(_0x25111a,_0x2d7993);}updateVideoDetailsAjaxCall[_0x48ebd7(0x99)](_0x48ebd7(0x11d),_0x16278d=>{var _0x3ae9f8=_0x48ebd7;_0x16278d['preventDefault']();var _0x273340=document['querySelector'](_0x3ae9f8(0xab))[_0x3ae9f8(0x7a)],_0x29e923=document['querySelector']('.modalImage')['value'],_0x350038=document[_0x3ae9f8(0x9d)]('.modalTitle')['value'],_0x23b68e=document[_0x3ae9f8(0x9d)](_0x3ae9f8(0x11f))[_0x3ae9f8(0xa4)],_0xce3728=document[_0x3ae9f8(0x9d)](_0x3ae9f8(0xc6))['selectedIndex'],_0x4076ce=document[_0x3ae9f8(0x9d)](_0x3ae9f8(0x77))['selectedIndex'],_0x262c7c=document[_0x3ae9f8(0x9d)](_0x3ae9f8(0x92))[_0x3ae9f8(0x12d)],_0x3ac87e=document[_0x3ae9f8(0x9d)](_0x3ae9f8(0xe1))[_0x3ae9f8(0x10a)];if(_0x273340==''&&_0x29e923==''&&_0x350038==''&&_0x23b68e==''){createALertButton(_0x3ae9f8(0xa2),'danger');return;}let _0x16d4c5=0x1;!_0x3ac87e&&(_0x16d4c5=0x0);var _0x46c88f=new FormData();_0x46c88f[_0x3ae9f8(0x123)](_0x3ae9f8(0x85),_0x273340),_0x46c88f[_0x3ae9f8(0x123)](_0x3ae9f8(0xf1),_0x29e923),_0x46c88f[_0x3ae9f8(0x123)](_0x3ae9f8(0x120),_0x350038),_0x46c88f['append'](_0x3ae9f8(0x88),_0x23b68e),_0x46c88f[_0x3ae9f8(0x123)]('channel',_0xce3728+0x1),_0x46c88f[_0x3ae9f8(0x123)]('catogries',_0x4076ce+0x1),_0x46c88f[_0x3ae9f8(0x123)](_0x3ae9f8(0x127),_0x262c7c+0x1),_0x46c88f[_0x3ae9f8(0x123)](_0x3ae9f8(0xef),_0x16d4c5);var _0x57e069=new XMLHttpRequest(),_0x5197f4=BASE_URI+_0x3ae9f8(0xee);_0x57e069[_0x3ae9f8(0xe9)](_0x3ae9f8(0xa3),_0x5197f4,!![]),_0x57e069[_0x3ae9f8(0x80)]=function(){var _0x221d55=_0x3ae9f8;if(_0x57e069['status']===0xc8){var _0x382e50=JSON[_0x221d55(0x118)](_0x57e069[_0x221d55(0x11b)]);_0x382e50[_0x221d55(0xa5)]=='success'?(createALertButton(_0x382e50[_0x221d55(0x126)],_0x221d55(0xad)),updateUpdatedDatataInUI(_0x273340,_0x29e923,_0x350038,_0x23b68e,channelIdArray[_0xce3728],categoriesArray[_0x4076ce],videoTypeId[_0x262c7c],_0x16d4c5)):createALertButton(_0x382e50['message'],_0x221d55(0x11c)),console[_0x221d55(0x12f)](_0x382e50);}else console[_0x221d55(0x90)]('Error:\x20'+_0x57e069['status']);},_0x57e069[_0x3ae9f8(0x8e)]=function(){var _0x4c1f8d=_0x3ae9f8;createALertButton(_0x4c1f8d(0xe7),_0x4c1f8d(0x11c));},_0x57e069[_0x3ae9f8(0x9b)](_0x46c88f);}),updateAjaxCall[_0x48ebd7(0x99)](_0x48ebd7(0x11d),_0x56be79=>{var _0x47d330=_0x48ebd7;_0x56be79[_0x47d330(0xc2)]();var _0x112e9c=document['querySelector'](_0x47d330(0x115))[_0x47d330(0xa4)],_0x5f160f=document[_0x47d330(0x9d)](_0x47d330(0x81))[_0x47d330(0xa4)],_0x251d21=document[_0x47d330(0x9d)](_0x47d330(0x84))[_0x47d330(0xa4)],_0x19c31c=document[_0x47d330(0x9d)](_0x47d330(0x9c))['value'],_0x4e37d6=document[_0x47d330(0x9d)](_0x47d330(0x10c))[_0x47d330(0x12d)],_0x51f748=document[_0x47d330(0x9d)](_0x47d330(0xda))[_0x47d330(0x12d)],_0x1a8cce=document[_0x47d330(0x9d)]('.videoTypess')[_0x47d330(0x12d)],_0x106bc2=document[_0x47d330(0x9d)](_0x47d330(0xe5))['checked'];if(_0x112e9c==''&&_0x5f160f==''&&_0x251d21==''&&_0x19c31c==''){createALertButton(_0x47d330(0xa2),_0x47d330(0x11c));return;}let _0x276458=0x1;!_0x106bc2&&(_0x276458=0x0);var _0x488549=new FormData();_0x488549[_0x47d330(0x123)](_0x47d330(0x85),_0x112e9c),_0x488549[_0x47d330(0x123)](_0x47d330(0xf1),_0x5f160f),_0x488549['append'](_0x47d330(0x120),_0x251d21),_0x488549[_0x47d330(0x123)]('videoInfo',_0x19c31c),_0x488549['append'](_0x47d330(0x10b),_0x4e37d6),_0x488549[_0x47d330(0x123)](_0x47d330(0x130),_0x51f748),_0x488549[_0x47d330(0x123)](_0x47d330(0x127),_0x1a8cce),_0x488549[_0x47d330(0x123)]('isLive',_0x276458);var _0x477680=new XMLHttpRequest(),_0x5c33e1=BASE_URI+_0x47d330(0x12a);_0x477680[_0x47d330(0xe9)]('POST',_0x5c33e1,!![]),_0x477680[_0x47d330(0x80)]=function(){var _0x3f1f85=_0x47d330;if(_0x477680['status']===0xc8){var _0x38f17b=JSON[_0x3f1f85(0x118)](_0x477680[_0x3f1f85(0x11b)]);_0x38f17b[_0x3f1f85(0xa5)]==_0x3f1f85(0xad)?(createALertButton(_0x38f17b['message'],_0x3f1f85(0xad)),document['querySelector'](_0x3f1f85(0x115))[_0x3f1f85(0xa4)]='',document[_0x3f1f85(0x9d)](_0x3f1f85(0x81))[_0x3f1f85(0xa4)]='',document[_0x3f1f85(0x9d)](_0x3f1f85(0x84))['value']='',document[_0x3f1f85(0x9d)]('.getVideoDescription')[_0x3f1f85(0xa4)]='',document[_0x3f1f85(0x9d)](_0x3f1f85(0xb4))['selectedIndex']=0x1,document['querySelector'](_0x3f1f85(0x97))[_0x3f1f85(0x12d)]=0x1,document['querySelector']('.videoType')['selectedIndex']=0x1,document['querySelector'](_0x3f1f85(0x7f))[_0x3f1f85(0xa4)]=0x1):createALertButton(_0x38f17b[_0x3f1f85(0x126)],_0x3f1f85(0x11c)),console[_0x3f1f85(0x12f)](_0x38f17b);}else console[_0x3f1f85(0x90)](_0x3f1f85(0x108)+_0x477680['status']);},_0x477680[_0x47d330(0x8e)]=function(){var _0x4790ba=_0x47d330;createALertButton(_0x4790ba(0xe7),_0x4790ba(0x11c));},_0x477680[_0x47d330(0x9b)](_0x488549);});function getVideoDetailsByUrl(){var _0x297c7a=_0x48ebd7,_0x114960=$(_0x297c7a(0xd7))[_0x297c7a(0xeb)](),_0x2bb6ba=_0x114960[_0x297c7a(0xb3)](/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);if(_0x2bb6ba&&_0x2bb6ba[0x1]){_0x2bb6ba=_0x2bb6ba[0x1];var _0x151893=_0x297c7a(0xd0)+_0x2bb6ba+_0x297c7a(0x11a);$['getJSON'](_0x151893,function(_0x4a4c1d){var _0x277f64=_0x297c7a;if(_0x4a4c1d[_0x277f64(0xd1)]&&_0x4a4c1d[_0x277f64(0xd1)][0x0]&&_0x4a4c1d['items'][0x0]['snippet']){var _0x357783=_0x4a4c1d[_0x277f64(0xd1)][0x0]['snippet'];$(_0x277f64(0x115))[_0x277f64(0xeb)](_0x2bb6ba),$(_0x277f64(0x84))[_0x277f64(0xeb)](_0x357783[_0x277f64(0xa1)]),$('.getVideoImage')[_0x277f64(0xeb)](_0x357783[_0x277f64(0xff)][_0x277f64(0xb1)][_0x277f64(0x98)]),$(_0x277f64(0x9c))[_0x277f64(0xeb)](_0x357783[_0x277f64(0x75)]);}else $(_0x277f64(0x96))['html'](_0x277f64(0xd4));});}else $('#result')[_0x297c7a(0x116)]('Invalid\x20YouTube\x20URL.\x20Couldn\x27t\x20extract\x20video\x20ID.');}var burgerMenu=document[_0x48ebd7(0x132)](_0x48ebd7(0xd2)),closeBurgerMenu=document[_0x48ebd7(0x132)](_0x48ebd7(0xbd));closeBurgerMenu[_0x48ebd7(0x7e)](_0x58fc59=>{var _0x3d5eb4=_0x48ebd7,_0x3b8177=document[_0x3d5eb4(0x9d)](_0x3d5eb4(0x110));_0x58fc59['addEventListener'](_0x3d5eb4(0x11d),()=>{var _0x3d205f=_0x3d5eb4;_0x3b8177['classList'][_0x3d205f(0xf9)](_0x3d205f(0xc3));});}),burgerMenu[_0x48ebd7(0x7e)](_0x3dc8e2=>{var _0x7c0cfd=_0x48ebd7;_0x3dc8e2['addEventListener'](_0x7c0cfd(0x11d),()=>{var _0xd11c7d=_0x7c0cfd,_0xbc2ae5=document[_0xd11c7d(0x9d)](_0xd11c7d(0x110));_0xbc2ae5['classList'][_0xd11c7d(0x117)](_0xd11c7d(0xc3))?_0xbc2ae5[_0xd11c7d(0xac)][_0xd11c7d(0xf9)]('left_div_open'):_0xbc2ae5[_0xd11c7d(0xac)][_0xd11c7d(0xd3)]('left_div_open');});}),document[_0x48ebd7(0x99)](_0x48ebd7(0xa6),function(){var _0x455994=_0x48ebd7;const _0x29832f=document[_0x455994(0x132)]('.tab'),_0x5aea19=document[_0x455994(0x132)](_0x455994(0x109));_0x29832f['forEach']((_0x14911b,_0x3cd684)=>{var _0x25f34a=_0x455994;_0x14911b[_0x25f34a(0x99)](_0x25f34a(0x11d),()=>{var _0x3bf8c1=_0x25f34a;_0x5aea19['forEach'](_0x1f2077=>_0x1f2077[_0x3bf8c1(0xac)][_0x3bf8c1(0xf9)](_0x3bf8c1(0xe0))),_0x29832f[_0x3bf8c1(0x7e)](_0x4ea40f=>_0x4ea40f[_0x3bf8c1(0xac)][_0x3bf8c1(0xf9)](_0x3bf8c1(0xaf))),_0x5aea19[_0x3cd684][_0x3bf8c1(0xac)][_0x3bf8c1(0xd3)](_0x3bf8c1(0xe0)),_0x29832f[_0x3cd684][_0x3bf8c1(0xac)]['add'](_0x3bf8c1(0xaf));});});});function createALertButton(_0x15cd48,_0x481d83){var _0x486b56=_0x48ebd7;const _0x24695e=document['getElementById'](_0x486b56(0xe2)),_0x59e718=(_0x483217,_0x161eda)=>{var _0x553cd8=_0x486b56;const _0x32ae97=document['createElement'](_0x553cd8(0x12e));_0x32ae97[_0x553cd8(0x8f)]=[_0x553cd8(0x135)+_0x161eda+_0x553cd8(0xbc),'\x20\x20\x20<div>'+_0x483217+'</div>',_0x553cd8(0x102),'</div>']['join'](''),_0x24695e[_0x553cd8(0x123)](_0x32ae97);};_0x59e718(_0x15cd48,_0x481d83),RemoveToast();}let categoriesArray=[],channelIdArray=[],videoTypeId=[],apiResponce;function appendCategoriesToDOM(_0x1c101d){var _0x4f8a4b=_0x48ebd7;let _0x1206bc=document[_0x4f8a4b(0x9d)](_0x4f8a4b(0xc0));_0x1206bc[_0x4f8a4b(0x8f)]='',_0x1c101d[_0x4f8a4b(0x7e)](_0x4a7472=>{var _0xb1ca4=_0x4f8a4b;let _0x69ecef=document['createElement']('p');_0x69ecef[_0xb1ca4(0x10f)]=_0x4a7472,_0x1206bc[_0xb1ca4(0x136)](_0x69ecef);});}appendCategoriesToDOM(categoriesArray);function appendChannelToDOM(_0x382f33){var _0x408316=_0x48ebd7;let _0x575ebe=document[_0x408316(0x9d)](_0x408316(0xf3));_0x575ebe[_0x408316(0x8f)]='',console[_0x408316(0x12f)](_0x408316(0x95)+_0x382f33),_0x382f33[_0x408316(0x7e)](_0x15934f=>{var _0xaf4500=_0x408316;let _0x2dafbe=document['createElement']('p');_0x2dafbe['textContent']=_0x15934f,_0x575ebe[_0xaf4500(0x136)](_0x2dafbe);});}function _0x36bf(){var _0x58aa1b=['\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>','btn-danger','?updatedata','isLive','country','videoImage','islive','.catogriesContent','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>','length','img','3420360MTfwoJ','city','remove','each','m-2','mb-0','1367840rimsjM','region','thumbnails','rounded','snippet','\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22alert\x22\x20aria-label=\x22Close\x22></button>','loc','getModel','</td>\x0a\x20\x20\x20\x20</tr>','.modalTitle','Request\x20Failed','Error:\x20','.tab-content','checked','channel','.videoSelectss','setAttribute','.updateVideoDetails','textContent','.left_div','info','Error:','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','map','.getVideoId','html','contains','parse','.typeContent','&key=AIzaSyBG7YBeYmcINh0XGBJ52IFOHHfse9cXFrg','responseText','danger','click','text-truncate','.modalDes','videoTitle','text','email','append','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','ajax','message','type','lastChild','src','?update','indexOf','.dashbordTotalCatogries','selectedIndex','div','log','catogries','cells','querySelectorAll','Techey\x20Guys','time','<div\x20class=\x22alert\x20bg-','appendChild','https://www.googleapis.com/youtube/v3/channels','27arkMrq','description','statistics,snippet','.modelVideoCatogries','image','btn','innerText','selected','toLowerCase','img-fluid','forEach','#flexSwitchCheckChecked','onload','.getVideoImage','.dashbordTotalVideos','channelId','.getVideoTitle','videoId','.getModel','912633arbFjw','videoInfo','p-2','.dashbordTotalVisitors','https://www.googleapis.com/youtube/v3/search','thumnail','.dashbordTotalLive','onerror','innerHTML','error','videoinfo','.modelVideoType','</td>\x0a\x20\x20\x20\x20<td>','timezone','channel\x20array1\x20','#result','.videoCatogries','url','addEventListener','Recent\x20Subscribers:','send','.getVideoDescriptionInfo','querySelector','json','email_details','target','title','Please\x20fill\x20required\x20fields','POST','value','status','DOMContentLoaded','emailsubscribers','Error\x20fetching\x20data:','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><i\x20class=\x22fa-brands\x20fa-firefox-browser\x22></i></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','#editModel','.modalId','classList','success','parentElement','activeBar','</td>\x0a\x20\x20</tr>','high','<i\x20class=\x22fa-solid\x20fa-pen-to-square\x20\x22></i>\x20Edit\x20','match','.videoSelects','contactmessage','Network\x20response\x20was\x20not\x20ok','button','video\x20type\x20array1\x20','options','childNodes','visually-hidden','\x20alert-dismissible\x22\x20role=\x22alert\x22>','.closeBugermenu','includes','53rEluRO','.channelContent','category','preventDefault','left_div_open','push','7188LHsrHe','.modelVideoSelects','http://localhost/htdocs/','GET','videoSelects','createElement','#contactTable','AIzaSyAvDMW8O-oJJd2iIP7ATyj8EgfmB7YZjHE','#subscribersTable','507255fVexEv','channelTitle','https://www.googleapis.com/youtube/v3/videos?part=snippet&id=','items','.burgerMenu','add','Video\x20details\x20not\x20found.','user_agent','?getvisitorsinfo','.getVideoDetaialByUrl','3319736RWZpXW','UC79ikm9mQLz_I53CKOBeXKA','.videoCatogriess','.modalImage','.spinner','ready','4DhMQaC','option','active','.modalChecked','liveAlertPlaceholder','getchannelinfo','getvideoinfo','.updateVideo\x20#flexSwitchCheckCheckedAddNew','131304qNOzTA','Check\x20Your\x20Network','row','open','card-hover','val'];_0x36bf=function(){return _0x58aa1b;};return _0x36bf();}appendChannelToDOM(categoriesArray);function appendTpeToDOM(_0x3eb592){var _0x54a9f5=_0x48ebd7;let _0x5c24e4=document['querySelector'](_0x54a9f5(0x119));_0x5c24e4['innerHTML']='',console['log'](_0x54a9f5(0xb8)+_0x3eb592),_0x3eb592[_0x54a9f5(0x7e)](_0x55aba5=>{var _0xd19cb6=_0x54a9f5;let _0x4c6648=document[_0xd19cb6(0xca)]('p');_0x4c6648[_0xd19cb6(0x10f)]=_0x55aba5,_0x5c24e4[_0xd19cb6(0x136)](_0x4c6648);});}appendTpeToDOM(categoriesArray);function createSelect(_0x2b08d8,_0xd173e8){var _0x52c929=_0x48ebd7,_0x201328=document['querySelectorAll']('.'+_0x2b08d8);_0x201328[_0x52c929(0x7e)](function(_0x3b77fd){var _0x269ebd=_0x52c929;_0xd173e8[_0x269ebd(0x7e)](function(_0x2a042d){var _0x76668a=_0x269ebd,_0x1fbd26=document[_0x76668a(0xca)](_0x76668a(0xdf));_0x1fbd26[_0x76668a(0xa4)]=_0x2a042d,_0x1fbd26[_0x76668a(0x121)]=_0x2a042d,_0x3b77fd['appendChild'](_0x1fbd26);}),_0x3b77fd[_0x269ebd(0xb9)][0x1][_0x269ebd(0x7b)]=!![];});}document[_0x48ebd7(0x99)](_0x48ebd7(0xa6),async function(){async function _0x34180b(_0x2b8243){var _0x267b9d=_0x225d;try{const _0x195f45=await fetch(BASE_URI+'?'+_0x2b8243),_0x5f0633=await _0x195f45[_0x267b9d(0x9e)]();categoriesArray=_0x5f0633[_0x267b9d(0x130)][_0x267b9d(0x114)](function(_0xb98e56){var _0x5b5ae1=_0x267b9d;return _0xb98e56[_0x5b5ae1(0x7c)]();});}catch(_0x1dd625){console[_0x267b9d(0x90)]('Error\x20fetching\x20data:',_0x1dd625);}}await _0x34180b('getcatogriesinfo'),await createSelect('videoCatogries',categoriesArray),await createSelect('videoCatogriess',categoriesArray),await appendCategoriesToDOM(categoriesArray);}),document[_0x48ebd7(0x99)]('DOMContentLoaded',async function(){var _0xc6e594=_0x48ebd7;async function _0x29de15(_0x734014){var _0x3a45fc=_0x225d;try{const _0x1a880e=await fetch(BASE_URI+'?'+_0x734014);apiResponce=_0x1a880e;const _0x48b4da=await _0x1a880e[_0x3a45fc(0x9e)]();channelIdArray=_0x48b4da['channel'][_0x3a45fc(0x114)](function(_0x4562c0){return _0x4562c0['toLowerCase']();}),console['log'](channelIdArray);}catch(_0x497b34){console[_0x3a45fc(0x90)](_0x3a45fc(0xa8),_0x497b34);}}await _0x29de15(_0xc6e594(0xe3)),await createSelect(_0xc6e594(0xc9),channelIdArray),await createSelect('videoSelectss',channelIdArray),await appendChannelToDOM(channelIdArray);}),document['addEventListener']('DOMContentLoaded',async function(){var _0x7f9c7=_0x48ebd7;async function _0x546af3(_0x189b62){var _0x220c1a=_0x225d;try{const _0x345dcf=await fetch(BASE_URI+'?'+_0x189b62),_0xb9d7b2=await _0x345dcf[_0x220c1a(0x9e)]();videoTypeId=_0xb9d7b2[_0x220c1a(0x91)][_0x220c1a(0x114)](function(_0x38ee69){var _0x208e4b=_0x220c1a;return _0x38ee69[_0x208e4b(0x7c)]();}),console[_0x220c1a(0x12f)](videoTypeId);}catch(_0x32db53){console[_0x220c1a(0x90)](_0x220c1a(0xa8),_0x32db53);}}await _0x546af3(_0x7f9c7(0xe4)),await createSelect('videoType',videoTypeId),await createSelect('videoTypess',videoTypeId),await appendTpeToDOM(videoTypeId);});function updateDashbord(_0x23c05c){var _0x23ed56=_0x48ebd7;console[_0x23ed56(0x12f)](_0x23ed56(0xf5),_0x23c05c),document[_0x23ed56(0x9d)](_0x23ed56(0x82))[_0x23ed56(0x7a)]=_0x23c05c,document[_0x23ed56(0x9d)](_0x23ed56(0x8d))[_0x23ed56(0x7a)]=_0x23c05c,document[_0x23ed56(0x9d)](_0x23ed56(0x12c))[_0x23ed56(0x7a)]=categoriesArray['length'];}async function fetchData(){var _0x4dadd9=_0x48ebd7;try{const _0x1b0c70=await fetch(BASE_URI);if(!_0x1b0c70['ok'])throw new Error(_0x4dadd9(0xb6));const _0x260397=await _0x1b0c70['json']();var _0x514560=mapApiResponseToDataObject(_0x260397);for(var _0x4452da=0x0;_0x4452da<_0x514560[_0x4dadd9(0xf5)];_0x4452da++){createTableRow(_0x514560[_0x4452da]);}return updateDashbord(_0x260397[_0x4dadd9(0xf5)]),console[_0x4dadd9(0x12f)](_0x260397),_0x260397;}catch(_0x4a4559){console[_0x4dadd9(0x90)](_0x4dadd9(0xa8),_0x4a4559);}}fetchData();function mapApiResponseToDataObject(_0x5e3467){var _0x31ccf9=_0x48ebd7,_0x19e523=_0x5e3467[_0x31ccf9(0x114)](_0x567d66=>{var _0x5bf90a=_0x31ccf9;return _0x567d66['snippet'][_0x5bf90a(0xc1)]&&!categoriesArray[_0x5bf90a(0xbe)](_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0xc1)])&&categoriesArray[_0x5bf90a(0xc4)](_0x567d66[_0x5bf90a(0x101)]['category']),_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0x83)]&&!channelIdArray[_0x5bf90a(0xbe)](_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0x83)])&&channelIdArray[_0x5bf90a(0xc4)](_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0x83)]),_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0x127)]&&!videoTypeId['includes'](_0x567d66[_0x5bf90a(0x101)]['type'])&&videoTypeId[_0x5bf90a(0xc4)](_0x567d66[_0x5bf90a(0x101)]['type']),{'id':_0x567d66['id'][_0x5bf90a(0x85)]||'','image':_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0xff)]['high']['url']||'','title':_0x567d66[_0x5bf90a(0x101)]['title']||'','info':_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0x75)]||'','channelId':_0x567d66['snippet'][_0x5bf90a(0xcf)]||'','catogries':_0x567d66[_0x5bf90a(0x101)]['category']||'','type':_0x567d66['snippet'][_0x5bf90a(0x127)]||'','islive':_0x567d66[_0x5bf90a(0x101)][_0x5bf90a(0xf2)]||''};});return _0x19e523;}function createTableRow(_0x26c91a){var _0x4ac8b4=_0x48ebd7,_0x546a64=document['createElement']('tr'),_0x1b2325=document[_0x4ac8b4(0xca)]('td'),_0xf15c4c=document[_0x4ac8b4(0xca)](_0x4ac8b4(0xb7));_0xf15c4c[_0x4ac8b4(0xac)][_0x4ac8b4(0xd3)](_0x4ac8b4(0x79),_0x4ac8b4(0xed),_0x4ac8b4(0x104),_0x4ac8b4(0xfb)),_0xf15c4c[_0x4ac8b4(0x10d)]('id',_0x26c91a['id']),_0xf15c4c[_0x4ac8b4(0x10d)]('data-bs-toggle','modal'),_0xf15c4c['setAttribute']('data-bs-target',_0x4ac8b4(0xaa)),_0xf15c4c[_0x4ac8b4(0x8f)]=_0x4ac8b4(0xb2),_0x1b2325[_0x4ac8b4(0x123)](_0xf15c4c),_0x546a64[_0x4ac8b4(0xac)][_0x4ac8b4(0xd3)](_0x4ac8b4(0xea)),_0x546a64[_0x4ac8b4(0x136)](_0x1b2325);var _0x1b2325=document[_0x4ac8b4(0xca)]('th');_0x1b2325[_0x4ac8b4(0x10d)]('scope',_0x4ac8b4(0xe8)),_0x1b2325[_0x4ac8b4(0xac)][_0x4ac8b4(0xd3)]('display-none'),_0x1b2325[_0x4ac8b4(0x10f)]=_0x26c91a['id'],_0x546a64[_0x4ac8b4(0x136)](_0x1b2325);var _0x1a01d9=document[_0x4ac8b4(0xca)]('td'),_0x5395ad=document[_0x4ac8b4(0xca)](_0x4ac8b4(0xf6));_0x5395ad['classList']['add'](_0x4ac8b4(0x7d),_0x4ac8b4(0x8c),_0x4ac8b4(0x89),_0x4ac8b4(0x100),_0x4ac8b4(0xfc)),_0x5395ad['setAttribute'](_0x4ac8b4(0x129),_0x26c91a[_0x4ac8b4(0x78)]),_0x5395ad[_0x4ac8b4(0x10d)]('alt',''),_0x1a01d9[_0x4ac8b4(0x136)](_0x5395ad),_0x546a64[_0x4ac8b4(0x136)](_0x1a01d9);var _0x12f71e=[_0x26c91a[_0x4ac8b4(0xa1)],_0x26c91a[_0x4ac8b4(0x111)],_0x26c91a[_0x4ac8b4(0x83)],_0x26c91a[_0x4ac8b4(0x130)],_0x26c91a[_0x4ac8b4(0x127)],_0x26c91a[_0x4ac8b4(0xf2)]];for(var _0x5c08a3=0x0;_0x5c08a3<_0x12f71e[_0x4ac8b4(0xf5)];_0x5c08a3++){var _0x5e5e61=document[_0x4ac8b4(0xca)]('td');_0x5e5e61[_0x4ac8b4(0xac)][_0x4ac8b4(0xd3)](_0x4ac8b4(0x11e)),_0x5e5e61[_0x4ac8b4(0x10f)]=_0x12f71e[_0x5c08a3],_0x546a64[_0x4ac8b4(0x136)](_0x5e5e61);}var _0x8b08e3=document[_0x4ac8b4(0x9d)]('tbody');if(_0x8b08e3['childElementCount']>=0x0){var _0x37e3e9=document[_0x4ac8b4(0x9d)](_0x4ac8b4(0xdc));_0x37e3e9[_0x4ac8b4(0xac)][_0x4ac8b4(0xd3)](_0x4ac8b4(0xbb));}_0x8b08e3[_0x4ac8b4(0x136)](_0x546a64);}function updateUpdatedDatataInUI(_0x4f0e52,_0x32e541,_0xcee57a,_0x347c4d,_0x25a4ed,_0x47185d,_0x31e2b4,_0x371c14){var _0x108c46=_0x48ebd7,_0x5a6b3a=document[_0x108c46(0x9d)]('#'+_0x4f0e52)[_0x108c46(0xae)]['parentElement'];_0x5a6b3a[_0x108c46(0xba)][0x2]['childNodes'][0x0]['src']=_0x32e541,_0x5a6b3a[_0x108c46(0xba)][0x3][_0x108c46(0x7a)]=_0xcee57a,_0x5a6b3a[_0x108c46(0xba)][0x4][_0x108c46(0x7a)]=_0x347c4d,_0x5a6b3a[_0x108c46(0xba)][0x5][_0x108c46(0x7a)]=_0x25a4ed,_0x5a6b3a['childNodes'][0x6][_0x108c46(0x7a)]=_0x47185d,_0x5a6b3a['childNodes'][0x7][_0x108c46(0x7a)]=_0x31e2b4,_0x5a6b3a['childNodes'][0x8][_0x108c46(0x7a)]=_0x371c14;}document[_0x48ebd7(0x99)](_0x48ebd7(0x11d),function(_0x1b4ff5){var _0x1a5cb4=_0x48ebd7;if(_0x1b4ff5[_0x1a5cb4(0xa0)]['classList'][_0x1a5cb4(0x117)](_0x1a5cb4(0x104))){var _0x4e3720=_0x1b4ff5['target']['parentElement'][_0x1a5cb4(0xae)][_0x1a5cb4(0x131)][0x1][_0x1a5cb4(0x7a)],_0x330c95=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)]['cells'][0x2][_0x1a5cb4(0x128)][_0x1a5cb4(0x129)],_0x5cf2a3=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)][_0x1a5cb4(0x131)][0x3]['innerText'],_0x222eca=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)][_0x1a5cb4(0x131)][0x4][_0x1a5cb4(0x7a)],_0x2701b5=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)][_0x1a5cb4(0x131)][0x5][_0x1a5cb4(0x7a)],_0x48580c=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)]['cells'][0x6][_0x1a5cb4(0x7a)],_0x2954c5=_0x1b4ff5['target'][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)]['cells'][0x7]['innerText'],_0x1f03f1=_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)]['cells'][0x8][_0x1a5cb4(0x7a)];console['log'](_0x1b4ff5[_0x1a5cb4(0xa0)][_0x1a5cb4(0xae)][_0x1a5cb4(0xae)][_0x1a5cb4(0x131)][0x5][_0x1a5cb4(0x7a)]);var _0x4b4acb=channelIdArray[_0x1a5cb4(0x12b)](_0x2701b5),_0x2def76=categoriesArray['indexOf'](_0x48580c),_0x341e23=videoTypeId['indexOf'](_0x2954c5);console[_0x1a5cb4(0x12f)](channelIdArray),console[_0x1a5cb4(0x12f)](categoriesArray),console['log'](_0x341e23,_0x2954c5),console[_0x1a5cb4(0x12f)](_0x2def76,_0x48580c),console[_0x1a5cb4(0x12f)](_0x4b4acb,_0x2701b5),document[_0x1a5cb4(0x9d)]('.modalId')[_0x1a5cb4(0x7a)]=_0x4e3720,document[_0x1a5cb4(0x9d)](_0x1a5cb4(0x106))[_0x1a5cb4(0xa4)]=_0x5cf2a3,document[_0x1a5cb4(0x9d)](_0x1a5cb4(0xdb))[_0x1a5cb4(0xa4)]=_0x330c95,document['querySelector'](_0x1a5cb4(0x11f))[_0x1a5cb4(0xa4)]=_0x222eca,document['querySelector']('.modalChecked')[_0x1a5cb4(0x10a)]=_0x1f03f1==0x1?!![]:![],document['querySelector'](_0x1a5cb4(0xc6))[_0x1a5cb4(0x12d)]=_0x4b4acb,document[_0x1a5cb4(0x9d)]('.modelVideoCatogries')[_0x1a5cb4(0x12d)]=_0x2def76,document['querySelector']('.modelVideoType')[_0x1a5cb4(0x12d)]=_0x341e23,console[_0x1a5cb4(0x12f)](_0x330c95+'\x20'+_0x5cf2a3+'\x20'+_0x222eca+',\x20'+_0x2701b5+',\x20'+_0x48580c+'\x20'+_0x2954c5+'\x20'+_0x1f03f1);}}),document[_0x48ebd7(0x99)](_0x48ebd7(0xa6),()=>{var _0x106d6f=_0x48ebd7,_0x168e77=document[_0x106d6f(0x132)](_0x106d6f(0x86));_0x168e77['forEach'](function(_0xa1feb6){var _0x1adaa0=_0x106d6f;console['log'](_0xa1feb6),_0xa1feb6[_0x1adaa0(0x99)]('click',function(_0x1c9c4f){var _0x61b104=_0x1adaa0;console['log'](_0x1c9c4f);var _0x1ef0b0=_0xa1feb6['parentElement']['parentElement'][_0x61b104(0x131)][0x1][_0x61b104(0x7a)],_0xcaff61=_0xa1feb6[_0x61b104(0xae)]['parentElement']['cells'][0x2][_0x61b104(0x128)][_0x61b104(0x129)],_0x436739=_0xa1feb6[_0x61b104(0xae)]['parentElement'][_0x61b104(0x131)][0x3][_0x61b104(0x7a)],_0x914604=_0xa1feb6[_0x61b104(0xae)]['parentElement'][_0x61b104(0x131)][0x4]['innerText'],_0xa5d50f=_0xa1feb6[_0x61b104(0xae)][_0x61b104(0xae)][_0x61b104(0x131)][0x5][_0x61b104(0x7a)],_0x48853a=_0xa1feb6[_0x61b104(0xae)][_0x61b104(0xae)][_0x61b104(0x131)][0x6][_0x61b104(0x7a)],_0x178b17=_0xa1feb6[_0x61b104(0xae)]['parentElement'][_0x61b104(0x131)][0x7][_0x61b104(0x7a)],_0x13c2a6=_0xa1feb6[_0x61b104(0xae)][_0x61b104(0xae)][_0x61b104(0x131)][0x8][_0x61b104(0x7a)];document[_0x61b104(0x9d)](_0x61b104(0xab))[_0x61b104(0x7a)]=_0x1ef0b0;var _0x5713bb=document[_0x61b104(0x9d)](_0x61b104(0x106))[_0x61b104(0xa4)]=_0x436739,_0x1fbae7=document['querySelector'](_0x61b104(0x11f))[_0x61b104(0xa4)]=_0x914604,_0x5c1bc7=document[_0x61b104(0x9d)](_0x61b104(0xe1))[_0x61b104(0x10a)]=_0x13c2a6==0x1?!![]:![];console[_0x61b104(0x12f)]('\x20'+_0xcaff61+'\x20'+_0x436739+'\x20'+_0x914604+',\x20'+_0xa5d50f+',\x20'+_0x48853a+'\x20'+_0x178b17+'\x20'+_0x13c2a6);});});var _0xc24f55=document['querySelectorAll'](_0x106d6f(0x86))[0x0];console[_0x106d6f(0x12f)](_0xc24f55);}),$(document)[_0x48ebd7(0xdd)](function(){var _0x48c3ef=_0x48ebd7;const _0x415323=_0x48c3ef(0xcc);function _0x22146b(_0xa50e45){}function _0x37597(){var _0x4346e1=_0x48c3ef;$[_0x4346e1(0x125)]({'type':_0x4346e1(0xc8),'url':_0x4346e1(0x8b),'data':{'key':_0x415323,'part':_0x4346e1(0x101),'maxResults':0x1,'type':'video','videoEmbeddable':!![]},'success':function(_0x1daa42){_0x22146b(_0x1daa42);},'error':function(_0x49f445){var _0x184c4a=_0x4346e1;console[_0x184c4a(0x12f)](_0x184c4a(0x107));}});}function _0x2a64cb(_0x100174){var _0x449b2e=_0x48c3ef;$(document)[_0x449b2e(0xdd)](function(){var _0xddaa91=_0x449b2e;$[_0xddaa91(0x125)]({'url':_0xddaa91(0x137),'method':'GET','data':{'part':_0xddaa91(0x76),'id':_0x100174,'key':_0x415323},'success':function(_0x8baf2d){var _0x240649=_0xddaa91,_0x5a2559=_0x8baf2d['items'][0x0]['statistics'],_0x1f25d9=_0x8baf2d[_0x240649(0xd1)][0x0][_0x240649(0x101)],_0x4737b7=_0x5a2559['subscriberCount'],_0x3000ca=_0x1f25d9['title'];console['log'](_0x8baf2d['items'][0x0]),console[_0x240649(0x12f)](_0x240649(0x9a),_0x4737b7),console[_0x240649(0x12f)]('Channel\x20Title:',_0x3000ca);}});});}_0x37597(),_0x2a64cb(_0x48c3ef(0xd9));});