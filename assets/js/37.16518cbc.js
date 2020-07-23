(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{470:function(v,_,e){"use strict";e.r(_);var t=e(29),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"计划任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计划任务"}},[v._v("#")]),v._v(" 计划任务")]),v._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#通用任务命令"}},[v._v("通用任务命令")]),e("ul",[e("li",[e("a",{attrs:{href:"#可用命令"}},[v._v("可用命令")])]),e("li",[e("a",{attrs:{href:"#追加参数"}},[v._v("追加参数")])]),e("li",[e("a",{attrs:{href:"#内部变量"}},[v._v("内部变量")])]),e("li",[e("a",{attrs:{href:"#使用示例"}},[v._v("使用示例")])])])]),e("li",[e("a",{attrs:{href:"#触发器附加参数"}},[v._v("触发器附加参数")]),e("ul",[e("li",[e("a",{attrs:{href:"#使用前言"}},[v._v("使用前言")])]),e("li",[e("a",{attrs:{href:"#参数要求"}},[v._v("参数要求")])]),e("li",[e("a",{attrs:{href:"#可用参数"}},[v._v("可用参数")])]),e("li",[e("a",{attrs:{href:"#使用实例"}},[v._v("使用实例")])])])]),e("li",[e("a",{attrs:{href:"#疑难解答"}},[v._v("疑难解答")])])])]),e("p"),v._v(" "),e("h2",{attrs:{id:"通用任务命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用任务命令"}},[v._v("#")]),v._v(" 通用任务命令")]),v._v(" "),e("h3",{attrs:{id:"可用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可用命令"}},[v._v("#")]),v._v(" 可用命令")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("okff")]),v._v(" ：一键冻结。")]),v._v(" "),e("li",[e("code",[v._v("okuf")]),v._v(" ：一键解冻。")]),v._v(" "),e("li",[e("code",[v._v("ff")]),v._v(" ：冻结。")]),v._v(" "),e("li",[e("code",[v._v("uf")]),v._v(" ：解冻。")]),v._v(" "),e("li",[e("code",[v._v("es")]),v._v(" ：启用某设置项"),e("small",[e("em",[v._v("（自6.2版本可用 "),e("code",[v._v("wifi")]),v._v(" ；自7.1版本可用 "),e("code",[v._v("cd")]),v._v(" （蜂窝移动数据网络）；自7.3版本可用 "),e("code",[v._v("bluetooth")]),v._v(" ）")])]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("ds")]),v._v(" ：关闭某设置项"),e("small",[e("em",[v._v("（自6.2版本可用 "),e("code",[v._v("wifi")]),v._v(" ；自7.1版本可用 "),e("code",[v._v("cd")]),v._v(" （蜂窝移动数据网络）；自7.3版本可用 "),e("code",[v._v("bluetooth")]),v._v(" ）")])]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("st")]),v._v(" ：显示一条提示。")]),v._v(" "),e("li",[e("code",[v._v("sn")]),v._v(" "),e("Badge",{attrs:{text:"8.6+",type:"tip"}}),v._v("：在通知栏显示一条通知。")],1),v._v(" "),e("li",[e("code",[v._v("sp")]),v._v(" ：打开指定应用。")]),v._v(" "),e("li",[e("code",[v._v("su")]),v._v(" ：根据 Uri 打开指定应用。")]),v._v(" "),e("li",[e("code",[v._v("lg")]),v._v(" "),e("Badge",{attrs:{text:"7.2+",type:"tip"}}),v._v("：打印一条 ERROR 级别的 LOG ，一般情况下无使用需求。")],1),v._v(" "),e("li",[e("code",[v._v("ls")]),v._v(" "),e("Badge",{attrs:{text:"8.7+",type:"tip"}}),v._v("：锁定屏幕。")],1)]),v._v(" "),e("h3",{attrs:{id:"追加参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追加参数"}},[v._v("#")]),v._v(" 追加参数")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("-d")]),v._v(" "),e("Badge",{attrs:{text:"7.2+",type:"tip"}}),v._v("：延时执行，单位为 "),e("code",[v._v("秒")]),v._v(" 。")],1)]),v._v(" "),e("h3",{attrs:{id:"内部变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内部变量"}},[v._v("#")]),v._v(" 内部变量")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("[ppkgn]")]),v._v(" "),e("Badge",{attrs:{text:"7.4+",type:"tip"}}),v._v("：先前应用程序包名，仅 触发器为 离开应用时、打开应用时 时可使用，正式使用前可在相关任务中，使用 "),e("code",[v._v("st [ppkgn]")]),v._v(" 了解相关内容，减小意外冻结的可能。")],1),v._v(" "),e("li",[e("code",[v._v("[cpkgn]")]),v._v(" "),e("Badge",{attrs:{text:"7.4+",type:"tip"}}),v._v("：当前应用程序包名，仅 触发器为 离开应用时、打开应用时、解冻应用时、冻结应用时 时可使用，正式使用前可在相关任务中，使用 "),e("code",[v._v("st [cpkgn]")]),v._v(" 了解相关内容，减小意外冻结的可能。")],1)]),v._v(" "),e("h3",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[v._v("#")]),v._v(" 使用示例")]),v._v(" "),e("h4",{attrs:{id:"okff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#okff"}},[v._v("#")]),v._v(" okff")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("okff")]),v._v(" ：立即执行一键冻结。")])]),v._v(" "),e("h4",{attrs:{id:"okuf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#okuf"}},[v._v("#")]),v._v(" okuf")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("okuf")]),v._v(" ：立即执行一键解冻。")]),v._v(" "),e("li",[e("code",[v._v("okuf -d 10")]),v._v(" ：延后 10秒 执行一键解冻。")])]),v._v(" "),e("h4",{attrs:{id:"ff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ff"}},[v._v("#")]),v._v(" ff")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ff com.tencent.mobileqq")]),v._v(" ：冻结包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("ff com.tencent.mobileqq,@5oiR55qE5YiX6KGo")]),v._v(" ：冻结包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的")]),v._v(" 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("ff com.tencent.mobileqq,com.tencent.mm")]),v._v(" ：冻结包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("com.tencent.mm")]),v._v(" (微信) 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("ff com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao")]),v._v(" ：冻结包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("com.tencent.mm")]),v._v(" (微信) 和 "),e("code",[v._v("com.taobao.taobao")]),v._v(" (淘宝) 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("ff -d 3600 com.tencent.mobileqq")]),v._v(" ：延后 3600秒 冻结包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 的应用程序。")])]),v._v(" "),e("h4",{attrs:{id:"uf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uf"}},[v._v("#")]),v._v(" uf")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("uf com.tencent.mobileqq")]),v._v(" ：解冻包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("uf com.tencent.mobileqq,com.tencent.mm")]),v._v(" ：解冻包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("com.tencent.mm")]),v._v(" (微信) 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("uf com.tencent.mobileqq,@5oiR55qE5YiX6KGo")]),v._v(" ：解冻包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("存在于别名为 5oiR55qE5YiX6KGo 的我的自选中的")]),v._v(" 的应用程序。")]),v._v(" "),e("li",[e("code",[v._v("uf com.tencent.mobileqq,com.tencent.mm,com.taobao.taobao")]),v._v(" ：解冻包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 和 "),e("code",[v._v("com.tencent.mm")]),v._v(" (微信) 和 "),e("code",[v._v("com.taobao.taobao")]),v._v(" (淘宝) 的应用程序。")])]),v._v(" "),e("h4",{attrs:{id:"es"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es"}},[v._v("#")]),v._v(" es")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("es wifi")]),v._v(" ：启用 WiFi 。")]),v._v(" "),e("li",[e("code",[v._v("es -d 20 wifi")]),v._v(" ：延后 20秒 启用 WiFi 。")]),v._v(" "),e("li",[e("code",[v._v("es wifi,cd")]),v._v(" ：启用 WiFi 和 蜂窝移动数据网络 。")]),v._v(" "),e("li",[e("code",[v._v("es wifi;okuf;uf com.tencent.mobileqq")]),v._v(" ：启用 WiFi 、执行 一键解冻 并 解冻包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" (QQ) 的应用程序。")])]),v._v(" "),e("h4",{attrs:{id:"ds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ds"}},[v._v("#")]),v._v(" ds")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ds wifi")]),v._v(" ：关闭 WiFi 。")]),v._v(" "),e("li",[e("code",[v._v("ds cd")]),v._v(" ：关闭 蜂窝移动数据网络 。")]),v._v(" "),e("li",[e("code",[v._v("ds wifi;okff")]),v._v(" ：关闭 WiFi 并执行 一键冻结。")]),v._v(" "),e("li",[e("code",[v._v("ds -d 15 wifi;okff")]),v._v(" ：延后 15秒 关闭 WiFi 并 立即执行 一键冻结。")])]),v._v(" "),e("h4",{attrs:{id:"st"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#st"}},[v._v("#")]),v._v(" st")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("st 这是一条提示")]),v._v(" ：显示一条 Toast 提示，内容为"),e("code",[v._v("这是一条提示")]),v._v("。")])]),v._v(" "),e("h4",{attrs:{id:"sn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sn"}},[v._v("#")]),v._v(" sn")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("sn 通知标题,通知内容")]),v._v(" ：在通知栏显示一条通知。")])]),v._v(" "),e("h4",{attrs:{id:"sp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sp"}},[v._v("#")]),v._v(" sp")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("sp com.tencent.mobileqq")]),v._v(" ：打开 QQ （包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" ）。")]),v._v(" "),e("li",[e("code",[v._v("sp com.tencent.mobileqq,com.tencent.mm")]),v._v(" ：打开 QQ 和 微信 （包名为 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" 和 "),e("code",[v._v("com.tencent.mm")]),v._v(" ）。")])]),v._v(" "),e("h4",{attrs:{id:"su"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[v._v("#")]),v._v(" su")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("su [Uri]")]),v._v(" ：尝试打开指定的 Uri。（可参考："),e("a",{attrs:{href:"//www.urischeme.com"}},[v._v("各应用 URL Scheme")]),v._v("）")]),v._v(" "),e("li",[e("code",[v._v("su alipayqr://platformapi/startapp?saId=20000056")]),v._v(" ：打开 支付宝 付款码。")])]),v._v(" "),e("h4",{attrs:{id:"lg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lg"}},[v._v("#")]),v._v(" lg")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("lg 10086")]),v._v(" ：输出一条 ERROR 级别的 LOG ，内容为 10086 。")])]),v._v(" "),e("h4",{attrs:{id:"ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[v._v("#")]),v._v(" ls")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ls")]),v._v(" ：锁定屏幕。")])]),v._v(" "),e("h2",{attrs:{id:"触发器附加参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发器附加参数"}},[v._v("#")]),v._v(" 触发器附加参数")]),v._v(" "),e("h3",{attrs:{id:"使用前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用前言"}},[v._v("#")]),v._v(" 使用前言")]),v._v(" "),e("ul",[e("li",[v._v("部分触发器无须附加参数（如果填写会被忽略）。")]),v._v(" "),e("li",[v._v("部分触发器可以填写附加参数（非必须）。")]),v._v(" "),e("li",[v._v("部分触发器必须提供符合条件的附加参数，否则无法正常执行。")])]),v._v(" "),e("h3",{attrs:{id:"参数要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数要求"}},[v._v("#")]),v._v(" 参数要求")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("打开屏幕时")]),v._v(" ：目前无附加参数。")]),v._v(" "),e("li",[e("code",[v._v("关闭屏幕时")]),v._v(" ：目前无附加参数。")]),v._v(" "),e("li",[e("code",[v._v("打开应用时")]),v._v(" ："),e("em",[e("small",[e("code",[v._v("7.0及以前版本")])]),e("em",[v._v("必须附加 "),e("code",[v._v("应用包名")]),v._v(" ；")]),e("small",[e("code",[v._v("自 7.0")])]),e("em",[v._v("可附加 "),e("code",[v._v("应用包名")]),v._v(" 、 "),e("code",[v._v("我的列表")])]),e("small",[e("code",[v._v("(V9.2)")])])]),v._v("，如无附加，则打开任意应用程序均执行。"),e("em",[v._v("在附加了应用包名的情况下，正常情况下，打开XX应用时会取消所有属于离开XX应用时已部署但尚未执行的延时任务。")])]),v._v(" "),e("li",[e("code",[v._v("离开应用时")]),v._v(" ：可附加 "),e("code",[v._v("应用包名")]),v._v(" 、 "),e("code",[v._v("我的列表")]),v._v(" "),e("small",[e("em",[e("code",[v._v("(V9.2)")])])]),v._v("，如无附加，则离开任意应用程序均执行。"),e("em",[v._v("在附加了应用包名的情况下，正常情况下，离开XX应用时会取消所有属于打开XX应用时已部署但尚未执行的延时任务。")])]),v._v(" "),e("li",[e("code",[v._v("解冻应用时")]),v._v(" ：可附加 "),e("code",[v._v("应用包名")]),v._v(" ，如无附加，则解冻任意应用程序均执行。")]),v._v(" "),e("li",[e("code",[v._v("冻结应用时")]),v._v(" ：可附加 "),e("code",[v._v("应用包名")]),v._v(" ，如无附加，则冻结任意应用程序均执行。")])]),v._v(" "),e("h3",{attrs:{id:"可用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可用参数"}},[v._v("#")]),v._v(" 可用参数")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("应用包名")]),v._v(" ：例如 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" 。")]),v._v(" "),e("li",[e("code",[v._v("我的列表")]),v._v(" ：例如 "),e("code",[v._v("@5oiR55qE5YiX6KGo")]),v._v(" 。")])]),v._v(" "),e("h3",{attrs:{id:"使用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用实例"}},[v._v("#")]),v._v(" 使用实例")]),v._v(" "),e("ul",[e("li",[v._v("选择 "),e("code",[v._v("打开应用时")]),v._v(" ，附加参数填写 "),e("code",[v._v("com.tencent.mobileqq")]),v._v(" ，则会在运行 "),e("code",[v._v("QQ")]),v._v(" 时执行预设置的 "),e("code",[v._v("任务")]),v._v(" 。")]),v._v(" "),e("li",[v._v("选择 "),e("code",[v._v("打开应用时")]),v._v(" ，附加参数填写 "),e("code",[v._v("com.tencent.mobileqq,com.tencent.mm")]),v._v(" ，则会在运行 "),e("code",[v._v("QQ")]),v._v(" 或 "),e("code",[v._v("微信")]),v._v(" 时执行预设置的 "),e("code",[v._v("任务")]),v._v(" 。")]),v._v(" "),e("li",[v._v("选择 "),e("code",[v._v("打开应用时")]),v._v(" ，附加参数填写 "),e("code",[v._v("com.tencent.mobileqq,@5oiR55qE5YiX6KGo")]),v._v(" ，则会在运行 "),e("code",[v._v("QQ")]),v._v(" 或 "),e("code",[v._v("存在于别名为 5oiR55qE5YiX6KGo 的列表中的应用程序")]),v._v(" 时执行预设置的 "),e("code",[v._v("任务")]),v._v(" 。")]),v._v(" "),e("li",[v._v("选择 "),e("code",[v._v("打开应用时")]),v._v(" ，附加参数填写 "),e("code",[v._v("当前使用的桌面的包名")]),v._v(" ，则会在 "),e("strong",[v._v("返回桌面")]),v._v(" 时执行预设置的 "),e("code",[v._v("任务")]),v._v(" 。")]),v._v(" "),e("li",[v._v("选择 "),e("code",[v._v("离开应用时")]),v._v(" ，附加参数不填写任何内容，则会在 "),e("strong",[v._v("离开任意应用程序")]),v._v(" 时执行预设置的 "),e("code",[v._v("任务")]),v._v(" 。")])]),v._v(" "),e("h2",{attrs:{id:"疑难解答"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#疑难解答"}},[v._v("#")]),v._v(" 疑难解答")]),v._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh-CN/faq/"}},[v._v("疑难解答")])],1)])])}),[],!1,null,null,null);_.default=o.exports}}]);