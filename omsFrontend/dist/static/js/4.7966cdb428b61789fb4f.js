webpackJsonp([4,20],{"74A8":function(e,t,r){var s=r("YSO2");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("1498a56a",s,!0)},"CH+q":function(e,t,r){"use strict";function s(e){r("rx9Q")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),l=r.n(a),i=r("ZTLr"),n=r("QmSG"),o=r("Guws"),c=r("NYxO"),u={components:{addWorkticket:o.default},data:function(){return{radio:"",tableData:[],tabletotal:0,currentPage:1,ticket_status:"",pagesize:n.pagesize,rowdata:{ticket_status:0,action_user:localStorage.getItem("username")},TICKET_STATUS_TEXT:{0:"未接收",1:"正在处理",2:"已解决"},TICKET_STATUS_TYPE:{0:"danger",1:"success",2:"info"},listQuery:{limit:n.LIMIT,offset:"",pid:"",ticket_status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},workticketlist_btn_add:!1,workticketlist_btn_change_status:!1,btnstatus:!0,select_status:1,show_status:!1}},computed:l()({},Object(c.b)(["role","elements"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["工单列表-新建工单按钮"],this.workticketlist_btn_change_status=this.elements["工单列表-更改工单状态按钮"]},methods:{fetchData:function(){var e=this;Object(i.f)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*n.LIMIT,this.fetchData()},changeStatus:function(e){this.listQuery.ticket_status=e,this.fetchData()},showMeCreate:function(){this.listQuery.create_user__username=localStorage.getItem("username"),this.listQuery.action_user__username="",this.fetchData()},showMeAction:function(){this.listQuery.action_user__username=localStorage.getItem("username"),this.listQuery.create_user__username="",this.fetchData()},showAllTicket:function(){this.listQuery.create_user__username="",this.listQuery.action_user__username="",this.listQuery.search="",this.listQuery.ticket_status="",this.fetchData()},handleSelectionChange:function(e){this.selectId=[];for(var t=0,r=e.length;t<r;t++)this.selectId.push(e[t].id);this.selectId.length>0?this.btnstatus=!1:this.btnstatus=!0},changeForm:function(){for(var e=this,t=0,r=this.selectId.length;t<r;t++)this.rowdata.ticket_status=this.select_status,Object(i.g)(this.selectId[t],this.rowdata).then(function(r){delete e.selectId[t]});setTimeout(this.fetchData,2e3),this.show_status=!1},handleSortChange:function(e){"ascending"===e.order?this.listQuery.ordering=e.prop:"descending"===e.order?this.listQuery.ordering="-"+e.prop:this.listQuery.ordering="",this.fetchData()}}},p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("div",{staticClass:"head-lavel"},[r("div",{staticClass:"table-button"},["super"===e.role||e.workticketlist_btn_add?r("router-link",{attrs:{to:"addworkticket"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[e._v("新建工单")])],1):e._e(),e._v(" "),e.workticketlist_btn_change_status||"super"===e.role?r("el-button",{attrs:{type:"danger",disabled:e.btnstatus},on:{click:function(t){e.show_status=!0}}},[e._v("更改状态\n        ")]):e._e(),e._v(" "),r("el-button-group",[r("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:e.showAllTicket}},[e._v("全部")]),e._v(" "),r("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:e.showMeCreate}},[e._v("我创建的工单")]),e._v(" "),r("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:e.showMeAction}},[e._v("我处理的工单")])],1),e._v(" "),r("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:e.changeStatus},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:"0"}},[e._v("未接收")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("正在处理")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("已完成")])],1)],1),e._v(" "),r("div",{staticClass:"table-search"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.create_user__username,callback:function(t){e.$set(e.listQuery,"create_user__username",t)},expression:"listQuery.create_user__username"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.pid,callback:function(t){e.$set(e.listQuery,"pid",t)},expression:"listQuery.pid"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{placeholder:"工单标题、内容或类型"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}}),e._v(" "),r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange,"sort-change":e.handleSortChange}},[e.workticketlist_btn_change_status||"super"===e.role?r("el-table-column",{attrs:{type:"selection"}}):e._e(),e._v(" "),r("el-table-column",{attrs:{prop:"pid",label:"工单编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("router-link",{attrs:{to:"editworkticket/"+t.row.pid}},[r("a",{staticStyle:{color:"#257cff"}},[e._v(e._s(t.row.pid))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"标题"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",label:"工单类型"}}),e._v(" "),r("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.row.level,callback:function(r){e.$set(t.row,"level",r)},expression:"scope.row.level"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("el-tag",{attrs:{type:e.TICKET_STATUS_TYPE[t.row.ticket_status]}},[e._v("\n                "+e._s(e.TICKET_STATUS_TEXT[t.row.ticket_status])+"\n              ")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),e._v(" "),r("el-table-column",{attrs:{prop:"create_time",label:"工单创建时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"update_time",label:"工单更新时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[r("span",[e._v(e._s(e._f("parseDate")(t.row.update_time)))])])]}}])})],1)],1),e._v(" "),r("div",{staticClass:"table-footer"},[r("div",{staticClass:"table-button"}),e._v(" "),r("div",{staticClass:"table-pagination"},[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),r("el-dialog",{attrs:{title:"更改状态",visible:e.show_status},on:{"update:visible":function(t){e.show_status=t}}},[r("el-radio-group",{model:{value:e.select_status,callback:function(t){e.select_status=t},expression:"select_status"}},[r("el-radio",{attrs:{label:0}},[e._v("未接收")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("正在处理")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("已关闭")])],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.show_status=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.changeForm}},[e._v("确 定")])],1)],1)],1)},d=[],_={render:p,staticRenderFns:d},h=_,m=r("VU/8"),f=s,v=m(u,h,!1,f,null,null);t.default=v.exports},Guws:function(e,t,r){"use strict";function s(e){r("74A8")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("BO1k"),l=r.n(a),i=r("Dd8w"),n=r.n(i),o=r("ZTLr"),c=r("nSkA"),u=r("vMJZ"),p=r("QmSG"),d=r("NYxO"),_=r("0xDb"),h={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",type:"",content:"",create_user:localStorage.getItem("username"),level:2,action_user:"itsupport",edit_user:"",create_group:[],pid:""},rules:{name:[{required:!0,message:"请输入工单标题",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],type:[{required:!0,message:"请选择工单类型",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:[],enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},img_file:{},formDataList:[],to_list:"",cc_list:"",uploadurl:p.uploadurl,types:[]}},computed:n()({},Object(d.b)(["groups"])),created:function(){this.getTicketUsers(),this.getTicketType()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.pid=Object(_.a)(),t.ruleForm.create_group=t.groups,Object(o.k)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,s=!1,a=void 0;try{for(var i,n=l()(t.fileList);!(r=(i=n.next()).done);r=!0){var u=i.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",u),p.append("create_time",Object(_.a)(u.uid)),p.append("type",u.type),p.append("archive",t.route_path[1]),Object(c.i)(p).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.ticket=e.data.id,Object(o.i)(t.enclosureForm)})}}catch(e){s=!0,a=e}finally{try{!r&&n.return&&n.return()}finally{if(s)throw a}}var d={action_user:t.ruleForm.action_user,title:"【新工单】"+t.ruleForm.name,message:"提交人: "+t.ruleForm.create_user+"\n指派人: "+t.ruleForm.action_user+"\n工单地址: http://"+window.location.host+"/#/worktickets/editworkticket/"+t.ruleForm.pid};Object(c.h)(d),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(u.f)().then(function(t){e.users=t.data})},getTicketType:function(){var e=this;Object(o.e)().then(function(t){e.types=t.data})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1},imgAdd:function(e,t){var r=this.$refs.md,s=new FormData;s.append("username",this.enclosureForm.create_user),s.append("file",t),s.append("create_time",Object(_.a)(t.lastModified)),s.append("type",t.type),s.append("archive",this.route_path[1]),Object(c.i)(s).then(function(t){r.$imglst2Url([[e,t.data.file]])})}}},m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择工单类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到工单内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),r("el-form-item",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>2},slot:"trigger"},[e._v("\n            上传文件\n          ")]),e._v("\n          (可以不用上传)\n          "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传3个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},f=[],v={render:m,staticRenderFns:f},b=v,g=r("VU/8"),y=s,k=g(h,b,!1,y,null,null);t.default=k.exports},YSO2:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])},rx9Q:function(e,t,r){var s=r("wvkR");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("rjj0")("4fffae60",s,!0)},wvkR:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])}});