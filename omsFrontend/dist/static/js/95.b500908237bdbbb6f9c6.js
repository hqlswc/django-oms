webpackJsonp([95],{ChfA:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("3tto"),o=t("vMJZ"),u=t("zp1X"),l={components:{sesectDatas:s.default},data:function(){return{ruleForm:{usergroups:"",objs:[]},rules:{usergroups:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},groups:[],allwikis:[]}},created:function(){this.getGroups()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(u.i)(r.ruleForm).then(function(e){r.$message({message:"恭喜你，添加成功",type:"success"}),r.ruleForm={usergroups:"",objs:[]},r.$emit("DialogStatus",!1)}).catch(function(e){r.$message.error("添加失败"),console.log(e)})})},getWikis:function(e){this.ruleForm.objs=e},getGroups:function(){var e=this;Object(o.d)().then(function(r){e.groups=r.data})}}},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户组",prop:"usergroups"}},[t("el-select",{attrs:{placeholder:"请选择用户组"},model:{value:e.ruleForm.usergroups,callback:function(r){e.$set(e.ruleForm,"usergroups",r)},expression:"ruleForm.usergroups"}},e._l(e.groups,function(e){return t("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"选择文档",prop:"hosts"}},[t("sesect-datas",{attrs:{selectdata:e.ruleForm.objs},on:{getDatas:e.getWikis}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")])],1)],1)},a=[],i={render:n,staticRenderFns:a},c=i,m=t("VU/8"),p=m(l,c,!1,null,null,null);r.default=p.exports}});