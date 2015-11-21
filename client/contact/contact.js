if(Meteor.isClient){
   Template.contact.rendered = function() {
        $('.modal-trigger').leanModal();
   }
}