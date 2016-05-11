({
    getLocalList: function(component) {
        var searchTerm = component.get("v.defaultSearch");
        var location = component.get("v.location");
        var action = component.get("c.getLocal");
        action.setParams({
            "searchTerm": searchTerm,
            "lat": location.coords.latitude,
            "lon": location.coords.longitude
        });
        action.setCallback(this, function(response) {
            this.doLayout(response, component);
        });
        $A.enqueueAction(action);
    }
})