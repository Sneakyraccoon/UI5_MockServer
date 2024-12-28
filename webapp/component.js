sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            rootView: {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            } 
        },
        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            let i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n",
                supportedLocales: ["en"],
                fallbackLocale: "en"
            });
            this.setModel(i18nModel, "i18n");

        }
    })
})