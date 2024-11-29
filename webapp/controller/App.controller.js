sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App", {

        onInit: function () {
            // set the data model on the view
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            // set u18n model on view
            let i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n",
                supportedLocales: ["en"],
                fallbacklocale: "en"
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello: function () {
            // read msg from i18n model
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // Show a native or vanilla JS alert
            // MessageToast.show("HELLO!!!!")
            // Show mwssage
            MessageToast.show(sMsg);
        }
    })
})