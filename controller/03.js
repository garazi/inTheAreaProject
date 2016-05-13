({
    doInit: function(component, event, helper) {
        helper.getLocalList(component);
    },
    updateSearch: function(component, event, helper) {
        helper.getLocalList(component);
    },
    showDetails: function (component, event, helper) {
        // var closeItem = component.get('v.openItem');
        // $A.util.addClass(closeItem, 'slds-hide');
        // var selectedItem = event.currentTarget;
        // var recID = selectedItem.dataset.record;
        // var showItem = component.find('item-details-' + recID);
        // $A.util.removeClass(showItem, 'slds-hide');
        // component.set('v.openItem', showItem);
    }
})