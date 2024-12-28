sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            manifest: "json"

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

             

        }
    })
})