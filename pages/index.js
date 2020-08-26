"use strict";
let fs = require("fs");
let utils = Editor.require("packages://cocos-services/panel/utils/utils.js");
var agoraVue = Vue.extend({
  template: fs.readFileSync(Editor.remote.App.home + "/services/agora/pages/index.html", "utf-8"),
  props: {
    params: {
      type: Object
    }
  },
  data() {
    return {
      paramList: this.params,
    };
  },
  created() {},
  methods: {
    utils_t: function (key, ...args) {
      return utils.t(key, ...args);
    }
  }
});
// 注册Vue组件，组件名由Service后台返回，不可随意命名
Vue.component("service-agora", agoraVue);