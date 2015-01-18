var Photos = new Meteor.Collection("photos");
Template.home.events({
  'click .photo': function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });

    }
});

Template.home.helpers({
  photo: function () {
      var pho = Session.get("photo");
      console.log(pho);
      var exists = Photos.findOne({
        photo: pho
      });
      console.log(exists);
      var loc_b = Geolocation.latLng();
      console.log(loc_b)
      if(pho && (exists == undefined)){
      Photos.insert({
        location_b: loc_b,
        photo: pho
        
      });}
      
    },
    loc: function () {
      // return 0, 0 if the location isn't ready
      var loc_a = Geolocation.latLng() || { lat: 0, lng: 0 };
      
      return loc_a
      

    },
    error: Geolocation.error
    
  });
Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
 
  $('.down_arrow').click(function(){
    $('.content').goTo();
  });
  $('.up_arrow').click(function(){
    $("html, body").animate({ scrollTop: "-500px" });
  });
  (function($) {
      $.fn.goTo = function() {
          $('html, body').animate({
              scrollTop: $(this).offset().top + 'px'
          }, 'slow');
          return this; // for chaining...
      }
  })(jQuery);
   (function($) {
      $.fn.goUp = function() {
          $('html, body').animate({
              scrollTop: $(this).offset().bottom + 'px'
          }, 'slow');
          return this; // for chaining...
      }
  })(jQuery);

  }
