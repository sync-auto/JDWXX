/*
赚钱大赢家提现
不会用加群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#赚钱大赢家提现
30,55 * * * * https://github.com/JDWXX/jd_job.git, tag=赚钱大赢家提现, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "30,55 * * * *" script-path=https://github.com/JDWXX/jd_job.git,tag=赚钱大赢家提现
===================================Surge================================
赚钱大赢家提现 = type=cron,cronexp="30,55 * * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job.git
====================================小火箭=============================
赚钱大赢家提现 = type=cron,script-path=https://github.com/JDWXX/jd_job.git, cronexpr="30,55 * * * *", timeout=3600, enable=true
 */
const $ = new Env('赚钱大赢家提现');
const notify = $.isNode() ? require('./sendNotify') : '';
let yc = true//是否开启延迟
let UA = '';
let listJe = []
let listJeud = []
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [],
    cookie = '', message;
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
// cookiesArr = []//建议直接在此处定义需要提现的号，读取全部号会影响速度
var _0xodr='jsjiami.com.v6',_0xodr_=['_0xodr'],_0xb394=[_0xodr,'\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x3a\x30\x30\x3a\x30\x30','\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x2a\x2f\x2a','\x63\x6f\x6d\x2e\x6a\x64\x2e\x6a\x64\x6c\x69\x74\x65','\x73\x61\x6d\x65\x2d\x73\x69\x74\x65','\x6e\x6f\x2d\x63\x6f\x72\x73','\x73\x63\x72\x69\x70\x74','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x73\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37','\x67\x65\x74','\x6c\x6f\x67','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x6d\x61\x74\x63\x68','\x6d\x73\x67','\x6c\x6f\x67\x45\x72\x72','\u8425\u4e1a\u91d1\u4f59\u989d\uff1a','\x64\x61\x74\x61','\x63\x61\x6e\x55\x73\x65\x43\x6f\x69\x6e\x41\x6d\x6f\x75\x6e\x74','\u5373\u5c06\u5230\u8d26\u91d1\uff1a','\x77\x61\x69\x74\x43\x6f\x69\x6e\x41\x6d\x6f\x75\x6e\x74','\x63\x61\x73\x68\x45\x78\x63\x68\x61\x6e\x67\x65\x52\x75\x6c\x65\x4c\x69\x73\x74','\x65\x78\x63\x68\x61\x6e\x67\x65\x53\x74\x61\x74\x75\x73','\u5fae\u4fe1\u63d0\u73b0\u3010','\x6e\x61\x6d\x65','\u3011\u6709\u4f59\u989d','\x70\x75\x73\x68','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x67\x65\x74\x54\x69\x6d\x65','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x0a\u5f00\u62a2\u65f6\u95f4\x3a\x20','\u8ddd\u79bb\u4e0b\u4e2a\u6574\u70b9\u5c0f\u4e8e\x35\u5206\u949f\uff0c\u7b49\u5f85\u6267\u884c\x0a','\x0a\u7b49\u5f85\x20','\x20\u79d2\u540e\u6267\u884c\u4ee3\u7801','\u8ddd\u79bb\u4e0b\u4e2a\u6574\u70b9\u5927\u4e8e\x35\u5206\u949f\uff0c\u76f4\u63a5\u6267\u884c\x0a','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u6267\u884c\u65f6\u95f4\x3a\x20','\u300a\u300a\u300a\u300a\u300a\u300a','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4d\x61\x63\x69\x6e\x74\x6f\x73\x68\x3b\x20\x49\x6e\x74\x65\x6c\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x20\x31\x30\x5f\x31\x35\x5f\x37\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39\x36\x2e\x30\x2e\x34\x36\x36\x34\x2e\x35\x35\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x69\x73\x4e\x6f\x64\x65','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x6d\x73\x63\x35\x38\x38\x64\x36\x64\x35','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x2f\x65\x78\x63\x68\x61\x6e\x67\x65\x71\x75\x65\x72\x79\x3f\x67\x5f\x74\x79\x3d\x68\x35\x26\x67\x5f\x74\x6b\x3d\x26\x61\x70\x70\x43\x6f\x64\x65\x3d','\x26\x61\x63\x74\x69\x76\x65\x49\x64\x3d\x36\x33\x35\x32\x36\x64\x38\x66\x35\x66\x65\x36\x31\x33\x61\x36\x61\x64\x62\x34\x38\x66\x30\x33\x26\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3d\x5f\x5f\x6a\x73\x6f\x6e\x70\x31\x36\x36\x38\x35\x38\x35\x30\x38\x31\x36\x31\x39','\x72\x65\x76\x65\x72\x73\x65','\u65e0\u53ef\u63d0\u73b0\u91d1\u989d','\u63d0\u73b0\x20\x2d\x3e\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x70\x72\x6d\x74\x5f\x65\x78\x63\x68\x61\x6e\x67\x65\x2f\x63\x6c\x69\x65\x6e\x74\x2f\x65\x78\x63\x68\x61\x6e\x67\x65\x3f\x67\x5f\x74\x79\x3d\x68\x35\x26\x67\x5f\x74\x6b\x3d\x26\x61\x70\x70\x43\x6f\x64\x65\x3d','\x26\x62\x69\x7a\x43\x6f\x64\x65\x3d\x6d\x61\x6b\x65\x6d\x6f\x6e\x65\x79\x73\x68\x6f\x70\x26\x72\x75\x6c\x65\x49\x64\x3d','\x26\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3d\x5f\x5f\x6a\x73\x6f\x6e\x70\x31\x36\x36\x37\x34\x35\x34\x32\x30\x37\x30\x32\x35','\x77\x61\x69\x74','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u7ed3\u675f\u65f6\u95f4\x3a\x20','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x45\x4e\x6a\x73\x6a\x69\x61\x64\x6d\x67\x69\x71\x2e\x54\x63\x6f\x65\x6d\x2e\x76\x36\x56\x54\x4d\x79\x66\x4b\x46\x50\x62\x71\x3d\x3d'];function _0x5661(_0x41d6d3,_0x509296){_0x41d6d3=~~'0x'['concat'](_0x41d6d3['slice'](0x0));var _0x59a589=_0xb394[_0x41d6d3];return _0x59a589;};(function(_0x47a42f,_0x3057f8){var _0x4892d5=0x0;for(_0x3057f8=_0x47a42f['shift'](_0x4892d5>>0x2);_0x3057f8&&_0x3057f8!==(_0x47a42f['pop'](_0x4892d5>>0x3)+'')['replace'](/[ENdgqTeVTMyfKFPbq=]/g,'');_0x4892d5++){_0x4892d5=_0x4892d5^0x114e75;}}(_0xb394,_0x5661));Date[_0x5661('0')][_0x5661('1')]=function(_0x69ded8){var _0x2de40b={'M+':this[_0x5661('2')]()+0x1,'d+':this[_0x5661('3')](),'h+':this[_0x5661('4')](),'m+':this[_0x5661('5')](),'s+':this[_0x5661('6')](),'S':this[_0x5661('7')]()};if(/(y+)/[_0x5661('8')](_0x69ded8))_0x69ded8=_0x69ded8[_0x5661('9')](RegExp['\x24\x31'],(this[_0x5661('a')]()+'')[_0x5661('b')](0x4-RegExp['\x24\x31'][_0x5661('c')]));for(var _0x572e3a in _0x2de40b)if(new RegExp('\x28'+_0x572e3a+'\x29')[_0x5661('8')](_0x69ded8))_0x69ded8=_0x69ded8[_0x5661('9')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0x5661('c')]==0x1?_0x2de40b[_0x572e3a]:('\x30\x30'+_0x2de40b[_0x572e3a])[_0x5661('b')]((''+_0x2de40b[_0x572e3a])[_0x5661('c')]));return _0x69ded8;};var date=new Date();function getCurrentDateTimeT(){var _0x28d141=new Date();var _0x2b9cbf=_0x28d141[_0x5661('a')]();var _0x108ea3=_0x28d141[_0x5661('2')]()+0x1;var _0x3b5cf5=_0x28d141[_0x5661('3')]();var _0x2ab1a0=_0x28d141[_0x5661('4')]();var _0x271e2c=_0x28d141[_0x5661('5')]();var _0x29287e=_0x28d141[_0x5661('6')]();return _0x2b9cbf+'\u5e74'+formatZero(_0x108ea3)+'\u6708'+formatZero(_0x3b5cf5)+'\u65e5\x20'+formatZero(_0x2ab1a0)+'\x3a'+formatZero(_0x271e2c)+'\x3a'+formatZero(_0x29287e);}function getCurrentDateTime(){var _0x358518=new Date();var _0x4a542b=_0x358518[_0x5661('a')]();var _0x38f685=_0x358518[_0x5661('2')]()+0x1;var _0x50f10e=_0x358518[_0x5661('3')]();var _0x547cb6=_0x358518[_0x5661('4')]();var _0xe65482=_0x358518[_0x5661('5')]();var _0x205ebc=_0x358518[_0x5661('6')]();return _0x4a542b+'\x2d'+formatZero(_0x38f685)+'\x2d'+formatZero(_0x50f10e)+'\x20'+formatZero(_0x547cb6)+'\x3a'+formatZero(_0xe65482)+'\x3a'+formatZero(_0x205ebc);}function getCurrentDateTimeZ(_0x3498ea){var _0x53e9ed=new Date();var _0x11ad8a=_0x53e9ed[_0x5661('a')]();var _0x38bc86=_0x53e9ed[_0x5661('2')]()+0x1;var _0x193398=_0x53e9ed[_0x5661('3')]();return _0x11ad8a+'\x2d'+formatZero(_0x38bc86)+'\x2d'+formatZero(_0x193398)+'\x20'+_0x3498ea+_0x5661('d');}function formatZero(_0x3513e6){if(_0x3513e6>=0x0&&_0x3513e6<=0x9){return'\x30'+_0x3513e6;}else{return _0x3513e6;}}function sleep(_0x54c773){return new Promise(_0x428852=>setTimeout(_0x428852,_0x54c773));}function taskUrl(_0x506467,_0x31047d){return{'\x75\x72\x6c':''+_0x506467,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5661('e'),'Connection':_0x5661('f'),'User-Agent':UA,'Accept':_0x5661('10'),'X-Requested-With':_0x5661('11'),'Sec-Fetch-Site':_0x5661('12'),'Sec-Fetch-Mode':_0x5661('13'),'Sec-Fetch-Dest':_0x5661('14'),'Referer':_0x5661('15'),'Accept-Encoding':_0x5661('16'),'Accept-Language':_0x5661('17'),'Cookie':_0x31047d}};}function tx(_0x5a90ed,_0x2a5a17){return new Promise(async _0x4604d9=>{$[_0x5661('18')](taskUrl(_0x5a90ed,_0x2a5a17),async(_0x39563d,_0x1d3afd,_0x1078ae)=>{try{if(_0x39563d){console[_0x5661('19')](''+JSON[_0x5661('1a')](_0x39563d));console[_0x5661('19')](_0x5661('1b'));}else{let _0x14c28f=_0x1078ae[_0x5661('1c')](/\((\{.*?\})\)/)[0x1];_0x1078ae=eval('\x28'+_0x14c28f+'\x29');console[_0x5661('19')](_0x1078ae[_0x5661('1d')]);}}catch(_0x3eacdd){$[_0x5661('1e')](_0x3eacdd,_0x1d3afd);}finally{_0x4604d9(_0x1078ae);}});});}function find(_0x3dc995,_0x1588b0){return new Promise(async _0xb9546=>{$[_0x5661('18')](taskUrl(_0x3dc995,_0x1588b0),async(_0x2e7679,_0xa096d2,_0x8d645b)=>{try{if(_0x2e7679){console[_0x5661('19')](''+JSON[_0x5661('1a')](_0x2e7679));console[_0x5661('19')](_0x5661('1b'));}else{let _0xc6b601=_0x8d645b[_0x5661('1c')](/\((\{.*?\})\)/)[0x1];_0x8d645b=eval('\x28'+_0xc6b601+'\x29');console[_0x5661('19')](_0x5661('1f')+_0x8d645b[_0x5661('20')][_0x5661('21')]);console[_0x5661('19')](_0x5661('22')+_0x8d645b[_0x5661('20')][_0x5661('23')]);let _0x2f2d35=_0x8d645b[_0x5661('20')][_0x5661('24')];for(var _0x3d207a in _0x2f2d35){if(_0x2f2d35[_0x3d207a][_0x5661('25')]==0x1){console[_0x5661('19')](_0x5661('26')+_0x2f2d35[_0x3d207a][_0x5661('27')]+_0x5661('28'));listJe[_0x5661('29')](_0x2f2d35[_0x3d207a][_0x5661('27')]);listJeud[_0x5661('29')](_0x2f2d35[_0x3d207a]['\x69\x64']);}}}}catch(_0x548925){$[_0x5661('1e')](_0x548925,_0xa096d2);}finally{_0xb9546(_0x8d645b);}});});}!(async()=>{if(!cookiesArr[0x0]){$[_0x5661('1d')]($[_0x5661('27')],_0x5661('2a'),_0x5661('2b'),{'open-url':_0x5661('2b')});return;}if(yc){let _0x1a9c84=getCurrentDateTime();let _0x23a0a5=parseInt(formatZero(date[_0x5661('4')]()));let _0x5a3016='';let _0x289412=0x0;_0x5a3016=_0x23a0a5+0x1;_0x289412=new Date(getCurrentDateTimeZ(_0x5a3016))[_0x5661('2c')]()-new Date(_0x1a9c84)[_0x5661('2c')]();console[_0x5661('19')](_0x5661('2d'));console[_0x5661('19')](_0x5661('2e')+getCurrentDateTimeZ(_0x5a3016));if(_0x289412<0x493e0){console[_0x5661('19')](_0x5661('2f'));console[_0x5661('19')](_0x5661('30')+_0x289412/0x3e8+_0x5661('31'));if(_0x289412>0x0)await sleep(_0x289412-0xc8);}else{console[_0x5661('19')](_0x5661('32'));}console[_0x5661('19')](_0x5661('33')+getCurrentDateTimeT()+_0x5661('34'));console[_0x5661('19')](_0x5661('2d'));}for(let _0x177ddc=0x0;_0x177ddc<cookiesArr[_0x5661('c')];_0x177ddc++){if(cookiesArr[_0x177ddc]){cookie=cookiesArr[_0x177ddc];$[_0x5661('35')]=decodeURIComponent(cookie[_0x5661('1c')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x5661('1c')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x5661('36')]=_0x177ddc+0x1;$[_0x5661('37')]=!![];$[_0x5661('38')]='';UA=_0x5661('39');message='';console[_0x5661('19')](_0x5661('3a')+$[_0x5661('36')]+'\u3011'+($[_0x5661('38')]||$[_0x5661('35')])+_0x5661('3b'));if(!$[_0x5661('37')]){$[_0x5661('1d')]($[_0x5661('27')],_0x5661('3c'),_0x5661('3d')+$[_0x5661('36')]+'\x20'+($[_0x5661('38')]||$[_0x5661('35')])+_0x5661('3e'),{'open-url':_0x5661('2b')});if($[_0x5661('3f')]()){await notify[_0x5661('40')]($[_0x5661('27')]+_0x5661('41')+$[_0x5661('35')],_0x5661('3d')+$[_0x5661('36')]+'\x20'+$[_0x5661('35')]+_0x5661('42'));}continue;}try{let _0x464c82=_0x5661('43');if(listJe[_0x5661('c')]==0x0&&$[_0x5661('36')]==0x1){await find(_0x5661('44')+_0x464c82+_0x5661('45'),cookie);listJe[_0x5661('46')]();listJeud[_0x5661('46')]();}if(listJe[_0x5661('c')]==0x0){console[_0x5661('19')](_0x5661('47'));break;}console[_0x5661('19')](_0x5661('48')+listJe[0x0]);await tx(_0x5661('49')+_0x464c82+_0x5661('4a')+listJeud[0x0]+_0x5661('4b'),cookie);await $[_0x5661('4c')](0x32);}catch(_0x1e4adb){}await $[_0x5661('4c')](0x32);}}console[_0x5661('19')](_0x5661('4d')+getCurrentDateTimeT()+_0x5661('34'));})()[_0x5661('4e')](_0x4fd3f6=>{$[_0x5661('19')]('','\u274c\x20'+$[_0x5661('27')]+_0x5661('4f')+_0x4fd3f6+'\x21','');})[_0x5661('50')](()=>{$[_0x5661('51')]();});;_0xodr='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}