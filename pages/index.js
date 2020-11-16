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
            isEncrypt: this.params.isEncrypt || false,
            sdkType: this.params.sdkType || "audio",
        };
    },
    created() {},
    methods: {
        utils_t: function (key, ...args) {
            return utils.t(key, ...args);
        },
        saveParam: function () {
            this.paramList.sdkType = this.sdkType;
            this.paramList.isEncrypt = this.isEncrypt;
            this.$emit('save-param', this.paramList);
            utils.printToCreatorConsole('info', this.utils_t("agora.save_param_success"));
        },
        enableEncrypt: function (e) {
            this.isEncrypt = e.target.checked;
        }
    }
});
// 注册Vue组件，组件名由Service后台返回，不可随意命名
Vue.component("service-agora", agoraVue);