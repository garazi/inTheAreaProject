({
    getLocalList: function(component) {
        var spinner = component.find('spinner');
        $A.util.removeClass(spinner, "slds-hide");
        var objectType = component.get("v.sObjectName");
        var recID = component.get("v.recordId");
        var location = component.get("v.location");        
        var searchTerm = component.find("searchTerm").get("v.value");
        if (searchTerm == null) {
            searchTerm = component.get("v.defaultSearch");
        }
        searchTerm = encodeURI(searchTerm);
        location = JSON.parse(location);
        var action = component.get("c.getListByAddress");
        action.setParams({
            "recordId": recID,
            "objectType": objectType,
            "searchQuery": searchTerm
        });
        action.setCallback(this, function(response) {
            this.doLayout(response, component);
        });
        $A.enqueueAction(action);
    },
    doLayout: function(response, component) {
        var data = JSON.parse(response.getReturnValue());
        if (data.error) {
            component.set("v.errorMessage", data.error);
            var warning = component.find('warning');
            $A.util.removeClass(warning, 'slds-hide');
        }
        component.set("v.restaurantList", data.bizArray);
        var spinner = component.find('spinner');
        $A.util.addClass(spinner, "slds-hide");
        console.log("The Data: ", data);
    },
    closeItem: function(component, closeItem) {
        var closeElement = component.find(closeItem);
        $A.addClass(closeItem, "slds-hide");
        
    }
})