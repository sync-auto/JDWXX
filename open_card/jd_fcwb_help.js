/*
发财挖宝
更新时间：2022-3-29
活动入口：极速版-发财挖宝
目前需要下一单才能通关，需要的自己玩下

如提示活动火爆，可尝试多次运行脚本

变量：
//export fcwbhelpnum="人数"
默认助力满111停止。

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#发财挖宝
40 6,17 * * * https://raw.githubusercontent.com/KingRan/KR/main/jd_fcwb_help.js, tag=发财挖宝, img-url=https://github.com/58xinian/icon/raw/master/jdgc.png, enabled=true

================Loon==============
[Script]
cron "40 6,17 * * *" script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_fcwb_help.js,tag=发财挖宝

===============Surge=================
发财挖宝 = type=cron,cronexp="40 6,17 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_fcwb_help.js

============小火箭=========
发财挖宝 = type=cron,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_fcwb_help.js, cronexpr="40 6,17 * * *", timeout=3600, enable=true
*/
const $ = new Env('发财挖宝助力-加密');
let fcwbhelpnum = $.isNode() ? (process.env.fcwbhelpnum ? process.env.fcwbhelpnum : 111) : ($.getdata("fcwbhelpnum") ? $.getdata("fcwbhelpnum") : 111);
var _0xoda = 'jsjiami.com.v6',_0xoda_ = ['_0xoda'], _0x585f = [_0xoda, 'isNode', './sendNotify', './jdCookie.js', 'https://api.m.jd.com', 'hasEnd', 'pTTvJeSTrpthgk9ASBVGsw', 'getTime', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', '【默认全部助力账号一，邀请满111自动停止】【加密脚本，不放心可禁用】', 'msg', 'name', '【提示】请先获取京东账号一cookie直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', 'length', 'UserName', 'match', 'index', 'isLogin', 'nickName', '    ******开始【京东账号', '*********', '【提示】cookie已失效', '京东账号', '请重新登录获取https://bean.m.jd.com/bean/signIndex.action', 'sendNotify', 'cookie已失效 - ', '    请重新登录获取cookie', 'catch', ', 失败! 原因: ', 'finally', 'done', 'personNum', 'helpCount', 'helpok', '【账号', '】已邀请人数：', ' 【账号1】已邀请人数：', 'get', 'happyDigHome', 'stringify', ' API请求失败，请检查网路重试', 'parse', 'success', 'data', 'curRound', 'inviteCode', 'markedPin', 'blood', '【当前助力】:', '抱歉，貌似账号已黑，跳过！', 'logErr', 'happyDigHelpList', '{"linkId":"pTTvJeSTrpthgk9ASBVGsw","inviter":"', '","inviteCode":"', '20220412164641157%3B197ee697d50ca316f3582488c7fa9d34%3B169f1%3Btk02wd9451deb18n1P31JunSGTfZhmebuivwsEwYWUQF1ZkpdtuSmKOES5DnIMFdyOvKikdguelIiBUnJbeCgoNlcEvv%3B6e090cbde337590b51a514718fee391d46fece6b953ed1084a052f6d76ffbd92%3B3.0%3B1649753201157', 'https://api.m.jd.com/?functionId=happyDigHelp&body=', '&t=', 'now', '&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', '【助力状态】：', 'errMsg', 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2', 'application/json,text/plain, */*', 'application/x-www-form-urlencoded', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2', 'JD_USER_AGENT', './USER_AGENTS', 'USER_AGENT', 'JDUA', 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'post', 'retcode', 'base', 'nickname', '京东服务器返回空数据', 'jdapp;iPhone;10.2.2;14.3;', ';M/5.0;network/wifi;ADID/;model/iPhone12,1;addressid/4199175193;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;', 'abcdef0123456789', 'charAt', 'floor', 'random', 'object', '京东服务器访问数据为空，请检查自身设备网络情况', 'string', '请勿随意在BoxJs输入框修改内容    建议通过脚本去获取cookie', '/?functionId=', '&body=', '&t=1635561607124&appid=activities_platform&client=H5&clientVersion=1.2.0', 'https://bnzf.jd.com', ' jdltapp;iPhone;3.7.6;', 'ddljEsjqSiami.coPFYqmTH.v6=='];
function _0x49e8(_0x2d8f05, _0x4b81bb) {
    _0x2d8f05 = ~~'0x' ['concat'](_0x2d8f05['slice'](0x0));
    var _0x34a12b = _0x585f[_0x2d8f05];
    return _0x34a12b;
};
(function(_0x36c6a6, _0x33748d) {
    var _0x3e4c21 = 0x0;
    for (_0x33748d = _0x36c6a6['shift'](_0x3e4c21 >> 0x2); _0x33748d && _0x33748d !== (_0x36c6a6['pop'](_0x3e4c21 >> 0x3) + '')['replace'](/[ddlEqSPFYqTH=]/g, ''); _0x3e4c21++) {
        _0x3e4c21 = _0x3e4c21 ^ 0xdf199;
    }
}(_0x585f, _0x49e8));
const notify = $[_0x49e8('0')]() ? require(_0x49e8('1')) : '';
const jdCookieNode = $[_0x49e8('0')]() ? require(_0x49e8('2')) : '';
const JD_API_HOST = _0x49e8('3');
let cookiesArr = [],
    cookie = '',
    message;
let inviteCodes = [];
$[_0x49e8('4')] = ![];
let link = _0x49e8('5');
var timestamp = new Date()[_0x49e8('6')]();
if ($[_0x49e8('0')]()) {
    Object[_0x49e8('7')](jdCookieNode)[_0x49e8('8')](_0x1c04d7 => {
        cookiesArr[_0x49e8('9')](jdCookieNode[_0x1c04d7]);
    });
    if (process[_0x49e8('a')][_0x49e8('b')] && process[_0x49e8('a')][_0x49e8('b')] === _0x49e8('c')) console[_0x49e8('d')] = () => {};
} else {
    cookiesArr = [$[_0x49e8('e')](_0x49e8('f')), $[_0x49e8('e')](_0x49e8('10')), ...jsonParse($[_0x49e8('e')](_0x49e8('11')) || '[]')[_0x49e8('12')](_0x15d467 => _0x15d467[_0x49e8('13')])][_0x49e8('14')](_0x121615 => !!_0x121615);
}!(async() => {
    console[_0x49e8('d')](_0x49e8('15'));
    if (!cookiesArr[0x0]) {
        $[_0x49e8('16')]($[_0x49e8('17')], _0x49e8('18'), _0x49e8('19'), {
            'open-url': _0x49e8('19')
        });
        return;
    }
    for (let _0x3f7b30 = 0x0; _0x3f7b30 < cookiesArr[_0x49e8('1a')]; _0x3f7b30++) {
        if (cookiesArr[_0x3f7b30]) {
            cookie = cookiesArr[_0x3f7b30];
            $[_0x49e8('1b')] = decodeURIComponent(cookie[_0x49e8('1c')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x49e8('1c')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x49e8('1d')] = _0x3f7b30 + 0x1;
            $[_0x49e8('1e')] = !![];
            $[_0x49e8('1f')] = '';
            message = '';
            await TotalBean();
            console[_0x49e8('d')](_0x49e8('20') + $[_0x49e8('1d')] + '】' + ($[_0x49e8('1f')] || $[_0x49e8('1b')]) + _0x49e8('21'));
            if (!$[_0x49e8('1e')]) {
                $[_0x49e8('16')]($[_0x49e8('17')], _0x49e8('22'), _0x49e8('23') + $[_0x49e8('1d')] + ' ' + ($[_0x49e8('1f')] || $[_0x49e8('1b')]) + _0x49e8('24'), {
                    'open-url': _0x49e8('19')
                });
                if ($[_0x49e8('0')]()) {
                    await notify[_0x49e8('25')]($[_0x49e8('17')] + _0x49e8('26') + $[_0x49e8('1b')], _0x49e8('23') + $[_0x49e8('1d')] + ' ' + $[_0x49e8('1b')] + _0x49e8('27'));
                }
                continue;
            }
            await getUA();
            await run();
            if ($[_0x49e8('4')]) break;
        }
    }
})()[_0x49e8('28')](_0x322a19 => {
    $[_0x49e8('d')]('', '❌ ' + $[_0x49e8('17')] + _0x49e8('29') + _0x322a19 + '!', '');
})[_0x49e8('2a')](() => {
    $[_0x49e8('2b')]();
});
async function run() {
    $[_0x49e8('2c')] = 0x0;
    try {
        await happyDigHome();
        let _0x18e692 = await help();
        await happyDigHelpList();
        if ($[_0x49e8('1d')] == 0x1) {
            $[_0x49e8('2d')] = $[_0x49e8('2c')];
        } else if ($[_0x49e8('2e')] == !![]) {
            $[_0x49e8('2d')]++;
        }
        console[_0x49e8('d')](_0x49e8('2f') + $[_0x49e8('1d')] + _0x49e8('30') + $[_0x49e8('2c')] + ($[_0x49e8('1d')] != 0x1 && _0x49e8('31') + $[_0x49e8('2d')] || ''));
        if ($[_0x49e8('2d')] >= fcwbhelpnum) $[_0x49e8('4')] = !![];
    } catch (_0x933d6a) {
        console[_0x49e8('d')](_0x933d6a);
    }
}

function happyDigHome() {
    return new Promise(_0x20e5bf => {
        let _0xbf752b = {
            'linkId': link
        };
        $[_0x49e8('32')](taskurl(_0x49e8('33'), _0xbf752b), async(_0x47107b, _0x16984e, _0x1761e9) => {
            try {
                if (_0x47107b) {
                    console[_0x49e8('d')]('' + JSON[_0x49e8('34')](_0x47107b));
                    console[_0x49e8('d')]($[_0x49e8('17')] + _0x49e8('35'));
                } else {
                    if (safeGet(_0x1761e9)) {
                        _0x1761e9 = JSON[_0x49e8('36')](_0x1761e9);
                        if ($[_0x49e8('1d')] === 0x1) {
                            if (_0x1761e9[_0x49e8('37')] == !![]) {
                                curRound = _0x1761e9[_0x49e8('38')][_0x49e8('39')];
                                inviteCode = _0x1761e9[_0x49e8('38')][_0x49e8('3a')];
                                inviter = _0x1761e9[_0x49e8('38')][_0x49e8('3b')];
                                blood = _0x1761e9[_0x49e8('38')][_0x49e8('3c')];
                                console[_0x49e8('d')](_0x49e8('3d') + _0x1761e9[_0x49e8('38')][_0x49e8('3a')]);
                                if (_0x1761e9[_0x49e8('38')] && _0x1761e9[_0x49e8('38')][_0x49e8('3a')] && inviteCodes[_0x49e8('1a')] === 0x0) {
                                    inviteCodes[_0x49e8('9')]({
                                        'user': $[_0x49e8('1b')],
                                        'fcwbinviteCode': _0x1761e9[_0x49e8('38')][_0x49e8('3a')],
                                        'fcwbinviter': _0x1761e9[_0x49e8('38')][_0x49e8('3b')]
                                    });
                                }
                            }
                        } else if (_0x1761e9[_0x49e8('37')] == ![]) {
                            console[_0x49e8('d')](_0x49e8('3e'));
                        }
                    }
                }
            } catch (_0x308f44) {
                $[_0x49e8('3f')](_0x308f44, _0x16984e);
            } finally {
                _0x20e5bf(_0x1761e9);
            }
        });
    });
}

function happyDigHelpList() {
    return new Promise(_0x113adb => {
        let _0x4b24a4 = {
            'pageNum': 0x1,
            'pageSize': 0x32,
            'linkId': link
        };
        $[_0x49e8('32')](taskurl(_0x49e8('112'), _0x4b24a4), async(_0xa99dec, _0x50313b, _0x2075fc) => {
            try {
                if (_0xa99dec) {
                    console[_0x49e8('d')]('' + JSON[_0x49e8('34')](_0xa99dec));
                    console[_0x49e8('d')]($[_0x49e8('17')] + _0x49e8('35'));
                } else {
                    if (safeGet(_0x2075fc)) {
                        _0x2075fc = JSON[_0x49e8('36')](_0x2075fc);
                        if (_0x2075fc[_0x49e8('37')] == !![]) {
                            $[_0x49e8('2c')] = _0x2075fc[_0x49e8('38')][_0x49e8('2c')];
                        } else if (_0x2075fc[_0x49e8('37')] == ![]) {
                            console[_0x49e8('d')](_0x49e8('3e'));
                        }
                    }
                }
            } catch (_0x39d81f) {
                $[_0x49e8('3f')](_0x39d81f, _0x50313b);
            } finally {
                _0x113adb(_0x2075fc);
            }
        });
    });
}

function help() {
    return new Promise(async _0x52a3aa => {
        let _0x16840e = inviteCode;
        let _0x19e198 = inviter;
        let _0x5eef66 = _0x49e8('41') + inviter + _0x49e8('42') + inviteCode + '"}';
        let _0x5d2275 = _0x49e8('43');
        let _0x7e6466 = {
            'url': _0x49e8('44') + _0x5eef66 + _0x49e8('45') + Date[_0x49e8('46')]() + _0x49e8('47') + _0x5d2275,
            'headers': {
                'Cookie': cookie,
                'Origin': _0x49e8('3'),
                'User-Agent': _0x49e8('48')
            }
        };
        $[_0x49e8('32')](_0x7e6466, async(_0x39eee7, _0x3f31fc, _0x3c30a1) => {
            try {
                if (_0x39eee7) {
                    console[_0x49e8('d')]('' + JSON[_0x49e8('34')](_0x39eee7));
                    console[_0x49e8('d')]($[_0x49e8('17')] + _0x49e8('35'));
                } else {
                    if (safeGet(_0x3c30a1)) {
                        _0x3c30a1 = JSON[_0x49e8('36')](_0x3c30a1);
                        $[_0x49e8('2e')] = _0x3c30a1[_0x49e8('37')];
                        if (_0x3c30a1[_0x49e8('37')] == !![]) {
                            console[_0x49e8('d')](_0x49e8('49') + _0x3c30a1[_0x49e8('4a')]);
                        } else if (_0x3c30a1[_0x49e8('37')] == ![]) {
                            console[_0x49e8('d')](_0x49e8('49') + _0x3c30a1[_0x49e8('4a')]);
                        }
                    }
                }
            } catch (_0x17a4cd) {
                $[_0x49e8('3f')](_0x17a4cd, _0x3f31fc);
            } finally {
                _0x52a3aa(_0x3c30a1);
            }
        });
    });
}

function TotalBean() {
    return new Promise(async _0x2ff925 => {
        const _0x4639ef = {
            'url': _0x49e8('4b'),
            'headers': {
                'Accept': _0x49e8('4c'),
                'Content-Type': _0x49e8('4d'),
                'Accept-Encoding': _0x49e8('4e'),
                'Accept-Language': _0x49e8('4f'),
                'Connection': _0x49e8('50'),
                'Cookie': cookie,
                'Referer': _0x49e8('51'),
                'User-Agent': $[_0x49e8('0')]() ? process[_0x49e8('a')][_0x49e8('52')] ? process[_0x49e8('a')][_0x49e8('52')] : require(_0x49e8('53'))[_0x49e8('54')] : $[_0x49e8('e')](_0x49e8('55')) ? $[_0x49e8('e')](_0x49e8('55')) : _0x49e8('56')
            }
        };
        $[_0x49e8('57')](_0x4639ef, (_0x177153, _0xec7363, _0x897e8) => {
            try {
                if (_0x177153) {
                    console[_0x49e8('d')]('' + JSON[_0x49e8('34')](_0x177153));
                    console[_0x49e8('d')]($[_0x49e8('17')] + _0x49e8('35'));
                } else {
                    if (_0x897e8) {
                        _0x897e8 = JSON[_0x49e8('36')](_0x897e8);
                        if (_0x897e8[_0x49e8('58')] === 0xd) {
                            $[_0x49e8('1e')] = ![];
                            return;
                        }
                        if (_0x897e8[_0x49e8('58')] === 0x0) {
                            $[_0x49e8('1f')] = _0x897e8[_0x49e8('59')] && _0x897e8[_0x49e8('59')][_0x49e8('5a')] || $[_0x49e8('1b')];
                        } else {
                            $[_0x49e8('1f')] = $[_0x49e8('1b')];
                        }
                    } else {
                        console[_0x49e8('d')](_0x49e8('5b'));
                    }
                }
            } catch (_0x5c13a1) {
                $[_0x49e8('3f')](_0x5c13a1, _0xec7363);
            } finally {
                _0x2ff925();
            }
        });
    });
}

function getUA() {
    $['UA'] = _0x49e8('5c') + randomString(0x28) + _0x49e8('5d');
}

function randomString(_0x2d2943) {
    _0x2d2943 = _0x2d2943 || 0x20;
    let _0x323439 = _0x49e8('5e'),
        _0x28976f = _0x323439[_0x49e8('1a')],
        _0x279841 = '';
    for (i = 0x0; i < _0x2d2943; i++) _0x279841 += _0x323439[_0x49e8('5f')](Math[_0x49e8('60')](Math[_0x49e8('61')]() * _0x28976f));
    return _0x279841;
}

function safeGet(_0x1ce2ce) {
    try {
        if (typeof JSON[_0x49e8('36')](_0x1ce2ce) == _0x49e8('62')) {
            return !![];
        }
    } catch (_0x34d1ca) {
        console[_0x49e8('d')](_0x34d1ca);
        console[_0x49e8('d')](_0x49e8('63'));
        return ![];
    }
}

function jsonParse(_0x49e261) {
    if (typeof _0x49e261 == _0x49e8('64')) {
        try {
            return JSON[_0x49e8('36')](_0x49e261);
        } catch (_0x54253e) {
            console[_0x49e8('d')](_0x54253e);
            $[_0x49e8('16')]($[_0x49e8('17')], '', _0x49e8('65'));
            return [];
        }
    }
}

function taskurl(_0x782dfd, _0x273e4e) {
    return {
        'url': JD_API_HOST + _0x49e8('66') + _0x782dfd + _0x49e8('67') + escape(JSON[_0x49e8('34')](_0x273e4e)) + _0x49e8('68'),
        'headers': {
            'Cookie': cookie,
            'Origin': _0x49e8('69'),
            'User-Agent': _0x49e8('6a')
        }
    };
};
_0xoda = 'jsjiami.com.v6';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

