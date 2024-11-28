sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
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
        },

        onShowHello: function () {
            // Show a native or vanilla JS alert
            MessageToast.show("HELLO!!!!")
        }
    })
})