/*
飞天茅台预约
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#飞天茅台预约
0 5 10 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, tag=飞天茅台预约, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 5 10 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js,tag=飞天茅台预约
===================================Surge================================
飞天茅台预约 = type=cron,cronexp="0 5 10 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js
====================================小火箭=============================
飞天茅台预约 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, cronexpr="0 5 10 * * *", timeout=3600, enable=true
 */
const $ = new Env('飞天茅台预约');
var _0xodS='jsjiami.com.v6',_0xodS_=['_0xodS'],_0x33b8=[_0xodS,'\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d','\x5f\x64\x65\x63\x6f\x64\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x77\x77\x77\x2e\x73\x6f\x6a\x73\x6f\x6e\x2e\x63\x6f\x6d\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6f\x62\x66\x75\x73\x63\x61\x74\x6f\x72\x2e\x68\x74\x6d\x6c','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x70\x75\x73\x68','\x66\x6f\x72\x45\x61\x63\x68','\x6b\x65\x79\x73','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x65\x6e\x76','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x66\x69\x6c\x74\x65\x72','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x70','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x64\x6f\x6e\x65','\x66\x69\x6e\x61\x6c\x6c\x79','\x6e\x61\x6d\x65','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x63\x61\x74\x63\x68','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x6d\x73\x67','\x6c\x65\x6e\x67\x74\x68','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x5c\x6e\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x5c\x6e','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x5c\x6e\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x5c\x6e\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x5c\x6e\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x61\x70\x70\x6f\x69\x6e\x74\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x30\x2e\x33\x2e\x30\x26\x62\x75\x69\x6c\x64\x3d\x39\x31\x37\x39\x35\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x70\x61\x72\x74\x6e\x65\x72\x3d\x74\x65\x6e\x63\x65\x6e\x74\x26\x6f\x61\x69\x64\x3d\x30\x36\x61\x64\x31\x65\x62\x37\x38\x35\x62\x35\x34\x61\x33\x37\x26\x65\x69\x64\x3d\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7a\x56\x6e\x70\x6c\x61\x6f\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4c\x4a\x73\x31\x5a\x36\x77\x2f\x51\x75\x59\x68\x67\x30\x73\x6d\x59\x6b\x64\x4f\x46\x37\x59\x79\x4c\x51\x79\x78\x78\x6f\x51\x75\x68\x54\x57\x56\x54\x6e\x71\x47\x50\x7a\x42\x65\x56\x2f\x63\x61\x50\x4e\x77\x71\x42\x57\x67\x5a\x53\x49\x64\x6b\x6d\x5a\x64\x63\x6f\x71\x52\x4d\x6b\x43\x5a\x47\x59\x39\x4f\x38\x42\x45\x46\x52\x50\x26\x73\x64\x6b\x56\x65\x72\x73\x69\x6f\x6e\x3d\x33\x30\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x5f\x43\x4e\x26\x68\x61\x72\x6d\x6f\x6e\x79\x4f\x73\x3d\x30\x26\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x3d\x55\x4e\x4b\x4e\x4f\x57\x4e\x26\x75\x74\x73\x3d\x30\x66\x33\x31\x54\x56\x52\x6a\x42\x53\x73\x71\x6e\x64\x75\x34\x25\x32\x46\x6a\x67\x55\x50\x7a\x36\x75\x79\x6d\x79\x35\x30\x4d\x51\x4a\x42\x44\x51\x6a\x7a\x41\x47\x25\x32\x46\x36\x35\x6d\x4b\x70\x61\x67\x46\x4a\x52\x51\x49\x41\x59\x79\x68\x50\x75\x76\x4e\x44\x43\x25\x32\x42\x68\x4a\x47\x61\x70\x61\x47\x4c\x71\x73\x31\x74\x57\x74\x52\x31\x43\x4a\x35\x47\x70\x65\x5a\x6f\x52\x35\x49\x6e\x6f\x54\x59\x50\x61\x77\x36\x70\x63\x36\x73\x44\x30\x49\x58\x6d\x6b\x42\x4c\x39\x71\x58\x77\x63\x75\x4e\x57\x79\x55\x45\x35\x66\x49\x78\x76\x4a\x4c\x4d\x52\x55\x75\x54\x6f\x72\x71\x56\x45\x36\x74\x76\x52\x68\x66\x74\x7a\x45\x31\x35\x76\x71\x6b\x51\x31\x49\x77\x30\x74\x59\x36\x48\x58\x25\x32\x46\x51\x38\x4e\x68\x62\x35\x68\x78\x6d\x55\x44\x78\x73\x25\x32\x42\x38\x44\x51\x61\x6f\x4e\x55\x4e\x45\x4b\x74\x6e\x49\x58\x47\x59\x56\x25\x32\x46\x30\x4a\x63\x51\x46\x59\x6a\x45\x6f\x59\x59\x43\x77\x78\x62\x62\x77\x37\x67\x25\x33\x44\x25\x33\x44\x26\x75\x65\x6d\x70\x73\x3d\x30\x2d\x30\x26\x65\x78\x74\x3d\x25\x37\x42\x25\x32\x32\x70\x72\x73\x74\x61\x74\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x37\x44\x26\x65\x66\x3d\x31\x26\x65\x70\x3d\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x33\x37\x39\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x61\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x56\x70\x43\x4a\x53\x6e\x43\x31\x38\x7a\x44\x4e\x4f\x6d\x58\x7a\x63\x6e\x44\x7a\x4f\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x64\x5f\x6d\x6f\x64\x65\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4a\x53\x6e\x43\x4e\x54\x42\x43\x55\x50\x4e\x25\x32\x32\x25\x32\x43\x25\x32\x32\x77\x69\x66\x69\x42\x73\x73\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x64\x57\x35\x68\x62\x77\x39\x33\x62\x71\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x4f\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x64\x5f\x62\x72\x61\x6e\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x57\x51\x76\x72\x62\x32\x31\x66\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x63\x72\x65\x65\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x7a\x4b\x6d\x44\x79\x65\x6e\x44\x4e\x47\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5a\x77\x59\x32\x43\x51\x4f\x7a\x45\x4e\x64\x77\x44\x77\x54\x72\x45\x4e\x75\x6d\x44\x4b\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5a\x77\x59\x32\x43\x51\x4f\x7a\x45\x4e\x64\x77\x44\x77\x54\x72\x45\x4e\x75\x6d\x44\x4b\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x70\x65\x6e\x75\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5a\x77\x59\x32\x43\x51\x4f\x7a\x45\x4e\x64\x77\x44\x77\x54\x72\x45\x4e\x75\x6d\x44\x4b\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x69\x6e\x67\x64\x6f\x6e\x67\x2e\x61\x70\x70\x2e\x6d\x61\x6c\x6c\x25\x32\x32\x25\x37\x44\x26\x73\x74\x3d\x31\x36\x34\x31\x32\x39\x35\x38\x37\x30\x39\x32\x36\x26\x73\x69\x67\x6e\x3d\x65\x33\x64\x64\x33\x61\x32\x66\x36\x31\x32\x37\x63\x65\x64\x33\x32\x30\x39\x32\x34\x65\x33\x34\x63\x38\x38\x34\x65\x38\x63\x63\x26\x73\x76\x3d\x31\x32\x32','\x77\x68\x77\x73\x77\x73\x77\x77\x73\x3d\x4a\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4a\x5a\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4c\x70\x36\x55\x74\x48\x4c\x6d\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4b\x68\x56\x63\x66\x77\x73\x4c\x4c\x5a\x43\x62\x64\x68\x6b\x43\x4e\x6b\x31\x71\x31\x63\x76\x62\x79\x7e\x6a\x63\x59\x66\x54\x59\x6c\x68\x74\x72\x53\x6a\x59\x34\x34\x79\x39\x6d\x32\x2b\x58\x76\x44\x49\x41\x4d\x37\x7a\x65\x41\x6b\x58\x50\x50\x57\x6e\x5a\x66\x52\x6c\x48\x78\x34\x59\x4e\x38\x71\x36\x54\x32\x66\x6d\x65\x72\x2b\x57\x4a\x56\x75\x70\x6d\x36\x52\x72\x66\x38\x71\x53\x6f\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7a\x6e\x68\x44\x4c\x6e\x67\x3d\x3d\x3b\x75\x6e\x69\x6f\x6e\x77\x73\x77\x73\x3d\x7b\x22\x64\x65\x76\x69\x63\x65\x66\x69\x6e\x67\x65\x72\x22\x3a\x22\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7a\x56\x6e\x70\x6c\x61\x6f\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4c\x4a\x73\x31\x5a\x36\x77\x2f\x51\x75\x59\x68\x67\x30\x73\x6d\x59\x6b\x64\x4f\x46\x37\x59\x79\x4c\x51\x79\x78\x78\x6f\x51\x75\x68\x54\x57\x56\x54\x6e\x71\x47\x50\x7a\x42\x65\x56\x2f\x63\x61\x50\x4e\x77\x71\x42\x57\x67\x5a\x53\x49\x64\x6b\x6d\x5a\x64\x63\x6f\x71\x52\x4d\x6b\x43\x5a\x47\x59\x39\x4f\x38\x42\x45\x46\x52\x50\x22\x2c\x22\x6a\x6d\x61\x66\x69\x6e\x67\x65\x72\x22\x3a\x22\x4a\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4a\x5a\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4c\x70\x36\x55\x74\x48\x4c\x6d\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4b\x68\x56\x63\x66\x77\x73\x4c\x4c\x5a\x43\x62\x64\x68\x6b\x43\x4e\x6b\x31\x71\x31\x63\x76\x62\x79\x7e\x6a\x63\x59\x66\x54\x59\x6c\x68\x74\x72\x53\x6a\x59\x34\x34\x79\x39\x6d\x32\x2b\x58\x76\x44\x49\x41\x4d\x37\x7a\x65\x41\x6b\x58\x50\x50\x57\x6e\x5a\x66\x52\x6c\x48\x78\x34\x59\x4e\x38\x71\x36\x54\x32\x66\x6d\x65\x72\x2b\x57\x4a\x56\x75\x70\x6d\x36\x52\x72\x66\x38\x71\x53\x6f\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7a\x6e\x68\x44\x4c\x6e\x67\x3d\x3d\x22\x7d\x3b','\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x34\x39\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x70\x69\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x54\x55\x55\x31\x54\x4a\x75\x30\x54\x4a\x75\x6d\x54\x55\x55\x32\x54\x4a\x76\x4e\x54\x4a\x75\x31\x54\x55\x55\x35\x54\x4a\x75\x30\x54\x4a\x72\x4d\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x69\x6e\x67\x64\x6f\x6e\x67\x2e\x61\x70\x70\x2e\x6d\x61\x6c\x6c\x25\x32\x32\x25\x37\x44','\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x34\x39\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x75\x73\x65\x72\x2d\x61\x67\x65\x6e\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x62\x32\x6a\x65\x64\x52\x48\x6d\x42\x7a\x43\x6b\x43\x4a\x53\x6b\x43\x4a\x6a\x67\x5a\x51\x31\x72\x62\x51\x6d\x37\x59\x57\x35\x75\x63\x77\x39\x66\x5a\x4e\x6a\x32\x5a\x58\x54\x7a\x61\x57\x39\x6b\x42\x7a\x4f\x6d\x42\x74\x43\x6b\x43\x4e\x6a\x73\x64\x57\x76\x69\x5a\x4d\x38\x35\x43\x4a\x63\x35\x44\x4a\x6a\x7a\x59\x33\x54\x76\x5a\x57\x34\x6c\x43\x4a\x47\x30\x43\x52\x71\x7a\x43\x4e\x4b\x33\x45\x32\x39\x7a\x42\x7a\x4f\x6e\x45\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x32\x2e\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x6a\x69\x6e\x67\x64\x6f\x6e\x67\x2e\x61\x70\x70\x2e\x6d\x61\x6c\x6c\x25\x32\x32\x25\x37\x44','\x77\x68\x77\x73\x77\x73\x77\x77\x73\x3d\x4a\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4a\x5a\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4c\x70\x36\x55\x74\x48\x4c\x6d\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4b\x68\x56\x63\x66\x77\x73\x4c\x4c\x5a\x43\x62\x64\x68\x6b\x43\x4e\x6b\x31\x71\x31\x63\x76\x62\x79\x7e\x6a\x63\x59\x66\x54\x59\x6c\x68\x74\x72\x53\x6a\x59\x34\x34\x79\x39\x6d\x32\x2b\x58\x76\x44\x49\x41\x4d\x37\x7a\x65\x41\x6b\x58\x50\x50\x57\x6e\x5a\x66\x52\x6c\x48\x78\x34\x59\x4e\x38\x71\x36\x54\x32\x66\x6d\x65\x72\x2b\x57\x4a\x56\x75\x70\x6d\x36\x52\x72\x66\x38\x71\x53\x6f\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7a\x6e\x68\x44\x4c\x6e\x67\x3d\x3d\x3b\x75\x6e\x69\x6f\x6e\x77\x73\x77\x73\x3d\x7b\x22\x64\x65\x76\x69\x63\x65\x66\x69\x6e\x67\x65\x72\x22\x3a\x22\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7a\x56\x6e\x70\x6c\x61\x6f\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4c\x4a\x73\x31\x5a\x36\x77\x2f\x51\x75\x59\x68\x67\x30\x73\x6d\x59\x6b\x64\x4f\x46\x37\x59\x79\x4c\x51\x79\x78\x78\x6f\x51\x75\x68\x54\x57\x56\x54\x6e\x71\x47\x50\x7a\x42\x65\x56\x2f\x63\x61\x50\x4e\x77\x71\x42\x57\x67\x5a\x53\x49\x64\x6b\x6d\x5a\x64\x63\x6f\x71\x52\x4d\x6b\x43\x5a\x47\x59\x39\x4f\x38\x42\x45\x46\x52\x50\x22\x2c\x22\x6a\x6d\x61\x66\x69\x6e\x67\x65\x72\x22\x3a\x22\x4a\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4a\x5a\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4c\x70\x36\x55\x74\x48\x4c\x6d\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4b\x68\x56\x63\x66\x77\x73\x4c\x4c\x5a\x43\x62\x64\x68\x6b\x43\x4e\x6b\x31\x71\x31\x63\x76\x62\x79\x7e\x6a\x63\x59\x66\x54\x59\x6c\x68\x74\x72\x53\x6a\x59\x34\x34\x79\x39\x6d\x32\x2b\x58\x76\x44\x49\x41\x4d\x37\x7a\x65\x41\x6b\x58\x50\x50\x57\x6e\x5a\x66\x52\x6c\x48\x78\x34\x59\x4e\x38\x71\x36\x54\x32\x66\x6d\x65\x72\x2b\x57\x4a\x56\x75\x70\x6d\x36\x52\x72\x66\x38\x71\x53\x6f\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7a\x6e\x68\x44\x4c\x6e\x67\x3d\x3d\x22\x7d\x3b\x22','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x55\x54\x46\x2d\x38','\x62\x72\x2c\x67\x7a\x69\x70\x2c\x64\x65\x66\x6c\x61\x74\x65','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x32\x2e\x31\x3b\x6a\x64\x6d\x61\x6c\x6c\x3b\x61\x6e\x64\x72\x6f\x69\x64\x3b\x76\x65\x72\x73\x69\x6f\x6e\x2f\x31\x30\x2e\x33\x2e\x30\x3b\x62\x75\x69\x6c\x64\x2f\x39\x31\x37\x39\x35\x3b','\x6e\x6f\x2d\x63\x61\x63\x68\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x32\x31\x37','\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x61\x75\x74\x6f\x41\x64\x64\x43\x61\x72\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x62\x73\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x65\x63\x6b\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x74\x65\x78\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x73\x53\x68\x6f\x77\x43\x6f\x64\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6d\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x6b\x75\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x37\x44\x26','\x50\x4f\x53\x54','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\u7248\u672c\u53f7\uff0c\x6a\x73\u4f1a\u5b9a','\u671f\u5f39\u7a97\uff0c','\u8fd8\u8bf7\u652f\u6301\u6211\u4eec\u7684\u5de5\u4f5c','\x6a\x73\x6a\x69\x61','\x6d\x69\x2e\x63\x6f\x6d','\x47\x79\x77\x68\x6a\x62\x73\x44\x6a\x67\x71\x69\x51\x61\x4e\x7a\x59\x6d\x45\x59\x69\x66\x53\x2e\x63\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x38ee(_0xf2e4e,_0x46f541){_0xf2e4e=~~'0x'['concat'](_0xf2e4e['slice'](0x0));var _0x3d00fd=_0x33b8[_0xf2e4e];return _0x3d00fd;};(function(_0x4eee7c,_0x2dbe75){var _0x43feb8=0x0;for(_0x2dbe75=_0x4eee7c['shift'](_0x43feb8>>0x2);_0x2dbe75&&_0x2dbe75!==(_0x4eee7c['pop'](_0x43feb8>>0x3)+'')['replace'](/[GywhbDgqQNzYEYfS=]/g,'');_0x43feb8++){_0x43feb8=_0x43feb8^0x10476c;}}(_0x33b8,_0x38ee));var __encode=_0x38ee('0'),_a={},_0xb483=[_0x38ee('1'),_0x38ee('2')];(function(_0x121629){_0x121629[_0xb483[0x0]]=_0xb483[0x1];}(_a));var __Oxebcf9=[_0x38ee('3'),_0x38ee('4'),'',_0x38ee('5'),_0x38ee('6'),_0x38ee('7'),_0x38ee('8'),_0x38ee('9'),_0x38ee('a'),_0x38ee('b'),_0x38ee('c'),_0x38ee('d'),_0x38ee('e'),_0x38ee('f'),_0x38ee('10'),_0x38ee('11'),_0x38ee('12'),_0x38ee('13'),_0x38ee('14'),'\x5b\x5d','\x30',_0x38ee('15'),_0x38ee('16'),_0x38ee('17'),_0x38ee('18'),_0x38ee('19'),_0x38ee('1a'),_0x38ee('1b'),_0x38ee('1c'),_0x38ee('1d'),_0x38ee('1e'),'\x21',_0x38ee('1f'),_0x38ee('20'),_0x38ee('21'),_0x38ee('22'),_0x38ee('23'),_0x38ee('24'),_0x38ee('25'),_0x38ee('26'),_0x38ee('27'),_0x38ee('28'),_0x38ee('29'),'\u3011',_0x38ee('2a'),_0x38ee('2b'),_0x38ee('2c'),'\x20',_0x38ee('2d'),_0x38ee('2e'),_0x38ee('2f'),_0x38ee('30'),_0x38ee('31'),_0x38ee('32'),_0x38ee('33'),_0x38ee('34'),_0x38ee('35'),_0x38ee('36'),_0x38ee('37'),_0x38ee('38'),_0x38ee('39'),_0x38ee('3a'),_0x38ee('3b'),_0x38ee('3c'),_0x38ee('3d'),_0x38ee('3e'),_0x38ee('3f'),_0x38ee('40'),_0x38ee('41'),_0x38ee('42'),'\u5220\u9664',_0x38ee('43'),_0x38ee('44'),_0x38ee('45'),_0x38ee('46'),_0x38ee('47')];const notify=$[__Oxebcf9[0x0]]()?require(__Oxebcf9[0x1]):__Oxebcf9[0x2];const jdCookieNode=$[__Oxebcf9[0x0]]()?require(__Oxebcf9[0x3]):__Oxebcf9[0x2];const fetch=require(__Oxebcf9[0x4]);let cookiesArr=[],cookie=__Oxebcf9[0x2],message;if($[__Oxebcf9[0x0]]()){Object[__Oxebcf9[0x7]](jdCookieNode)[__Oxebcf9[0x6]](_0x4e0388=>{cookiesArr[__Oxebcf9[0x5]](jdCookieNode[_0x4e0388]);});if(process[__Oxebcf9[0x9]][__Oxebcf9[0x8]]&&process[__Oxebcf9[0x9]][__Oxebcf9[0x8]]===__Oxebcf9[0xa]){console[__Oxebcf9[0xb]]=()=>{};}}else{cookiesArr=[$[__Oxebcf9[0xe]](__Oxebcf9[0xd]),$[__Oxebcf9[0xe]](__Oxebcf9[0xf]),...jsonParse($[__Oxebcf9[0xe]](__Oxebcf9[0x12])||__Oxebcf9[0x13])[__Oxebcf9[0x11]](_0x39e0dd=>{return _0x39e0dd[__Oxebcf9[0x10]];})][__Oxebcf9[0xc]](_0x57a945=>{return!!_0x57a945;});};function formatZero(_0x2214bc){if(_0x2214bc>=0x0&&_0x2214bc<=0x9){return __Oxebcf9[0x14]+_0x2214bc;}else{return _0x2214bc;}}function getCurrentDateTime(){var _0x5e7013=new Date();var _0xb9e0bb=_0x5e7013[__Oxebcf9[0x15]]();var _0x3295be=_0x5e7013[__Oxebcf9[0x16]]()+0x1;var _0x419343=_0x5e7013[__Oxebcf9[0x17]]();var _0x26d3f2=_0x5e7013[__Oxebcf9[0x18]]();var _0x4334c0=_0x5e7013[__Oxebcf9[0x19]]();var _0x1ec014=_0x5e7013[__Oxebcf9[0x1a]]();return _0xb9e0bb+formatZero(_0x3295be)+formatZero(_0x419343)+formatZero(_0x26d3f2)+formatZero(_0x4334c0)+formatZero(_0x1ec014);}!(async()=>{if(!cookiesArr[0x0]){$[__Oxebcf9[0x23]]($[__Oxebcf9[0x1d]],__Oxebcf9[0x21],__Oxebcf9[0x22],{'open-url':__Oxebcf9[0x22]});return;};for(let _0x3931ca=0x0;_0x3931ca<cookiesArr[__Oxebcf9[0x24]];_0x3931ca++){if(cookiesArr[_0x3931ca]){cookie=cookiesArr[_0x3931ca];$[__Oxebcf9[0x25]]=decodeURIComponent(cookie[__Oxebcf9[0x26]](/pt_pin=([^; ]+)(?=;?)/)&&cookie[__Oxebcf9[0x26]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxebcf9[0x27]]=_0x3931ca+0x1;$[__Oxebcf9[0x28]]=!![];$[__Oxebcf9[0x29]]=__Oxebcf9[0x2];message=__Oxebcf9[0x2];console[__Oxebcf9[0xb]](''+__Oxebcf9[0x2a]+$[__Oxebcf9[0x27]]+__Oxebcf9[0x2b]+($[__Oxebcf9[0x29]]||$[__Oxebcf9[0x25]])+__Oxebcf9[0x2c]);if(!$[__Oxebcf9[0x28]]){$[__Oxebcf9[0x23]]($[__Oxebcf9[0x1d]],''+__Oxebcf9[0x2d],''+__Oxebcf9[0x2e]+$[__Oxebcf9[0x27]]+__Oxebcf9[0x2f]+($[__Oxebcf9[0x29]]||$[__Oxebcf9[0x25]])+__Oxebcf9[0x30],{'open-url':__Oxebcf9[0x22]});if($[__Oxebcf9[0x0]]()){await notify[__Oxebcf9[0x33]](''+__Oxebcf9[0x2]+$[__Oxebcf9[0x1d]]+__Oxebcf9[0x31]+$[__Oxebcf9[0x25]]+__Oxebcf9[0x2],''+__Oxebcf9[0x2e]+$[__Oxebcf9[0x27]]+__Oxebcf9[0x2f]+$[__Oxebcf9[0x25]]+__Oxebcf9[0x32]);};continue;};await fetch(__Oxebcf9[0x36],{'headers':{'Cookie':cookie+__Oxebcf9[0x37],'J-E-C':__Oxebcf9[0x38],'J-E-H':__Oxebcf9[0x39],'jdc-backup':cookie+__Oxebcf9[0x3a],'Connection':__Oxebcf9[0x3b],'host':__Oxebcf9[0x3c],'Charset':__Oxebcf9[0x3d],'Accept-Encoding':__Oxebcf9[0x3e],'user-agent':__Oxebcf9[0x3f],'Cache-Control':__Oxebcf9[0x40],'Content-Type':__Oxebcf9[0x41],'Content-Length':__Oxebcf9[0x42]},'body':__Oxebcf9[0x43],'method':__Oxebcf9[0x44]})[__Oxebcf9[0x34]](_0x451883=>{return _0x451883[__Oxebcf9[0x35]]();})[__Oxebcf9[0x34]](_0x2f4a99=>{console[__Oxebcf9[0xb]](_0x2f4a99);});}}})()[__Oxebcf9[0x20]](_0x445b7c=>{$[__Oxebcf9[0xb]](__Oxebcf9[0x2],''+__Oxebcf9[0x2]+$[__Oxebcf9[0x1d]]+__Oxebcf9[0x1e]+_0x445b7c+__Oxebcf9[0x1f],__Oxebcf9[0x2]);})[__Oxebcf9[0x1c]](()=>{$[__Oxebcf9[0x1b]]();});(function(_0x15c85d,_0x40bdba,_0x3a1905,_0x50a615,_0x53a606,_0x256c3e){_0x256c3e=__Oxebcf9[0x45];_0x50a615=function(_0xa01804){if(typeof alert!==_0x256c3e){alert(_0xa01804);};if(typeof console!==_0x256c3e){console[__Oxebcf9[0xb]](_0xa01804);}};_0x3a1905=function(_0x223b61,_0x15c85d){return _0x223b61+_0x15c85d;};_0x53a606=_0x3a1905(__Oxebcf9[0x46],_0x3a1905(_0x3a1905(__Oxebcf9[0x47],__Oxebcf9[0x48]),__Oxebcf9[0x49]));try{_0x15c85d=__encode;if(!(typeof _0x15c85d!==_0x256c3e&&_0x15c85d===_0x3a1905(__Oxebcf9[0x4a],__Oxebcf9[0x4b]))){_0x50a615(_0x53a606);}}catch(_0x5ee506){_0x50a615(_0x53a606);}}({}));;_0xodS='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}