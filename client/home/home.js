var Photos = new Meteor.Collection("photos");
var CityRequest = new Meteor.Collection("cityrequest");


Template.photo.helpers({
  my_photos: function () {
    // this helper returns a cursor of
    // all of the posts in the collection
    var photos = Photos.find({},{sort:{counter: -1}});
    console.log(photos);
    return photos
  }
  

});
Template.photo.events({
  'click .downVote': function(){
    Photos.update(
      {_id: this._id},
      {$inc:{counter: -1}}
    );
  },
  'click .upVote': function(){
    Photos.update(
      {_id: this._id},
      {$inc:{counter: 1}}
    );
  }
});
Template.home.events({
  'submit form': function(){
    var name = event.target.name.value;
    var email = event.target.email.value;
    var city = event.target.password.value;
      CityRequest.insert({
        name: name,
        email: email,
        city: city
      });

      //Sending email
      
      Meteor.call('sendEmail',
            'eganpg@gmail.com',
            'eganpg@gmail.com',
            'New City Request',
            city );
      console.log('sucess');
    },
  // 'click .photo': function () {
  //   $('.photo').fadeOut();
  //   Session.set('watchButton', true);
  //   fadeIn();
  //   function fadeIn(){
  //     $('.animated').addClass('fadeInUp');
  //   }
  // },
  'click .hide_icons': function(){
    $('.photo').fadeIn();
    Session.set('watchButton', false); 
  },

  'click .photo': function(){

     var cameraOptions = {
      width: 800,
      height: 600
    };
    var city = 'Los Angeles';
    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      Session.set("photo", data);
      
    });
  }
});

Template.home.helpers({
  watchButton: function(){
    return Session.get('watchButton', false);
  },
  photo: function () {
      var pho = Session.get("photo");
      var exists = Photos.findOne({
        photo: pho
      });
      var newDate = new Date();
      console.log(newDate);
      
      Location.locate(function(pos){
         
        if(pho && (exists == undefined)){
        Photos.insert({
          counter: 0,
          lat: pos.latitude,
          lng: pos.longitude,
          photo: pho,
          createdAt: newDate
        });
      
      // if((loc_b.lat <= 34.13412) && (loc_b.lat >= 33.89393) && (loc_b.lng <= -118.01023) && (loc_b.lng >= -118.61447)){
        Meteor.call('sendEmail',
            'eganpg@gmail.com',
            'eganpg@gmail.com',
            'LA Clean Up Request',
            'cleanup has been requested in your city' );
        sweetAlert("You request has been sent to your local Department of Public Works");

      // }
      // else{
      //   Meteor.call('sendEmail',
      //       'eganpg@gmail.com',
      //       'eganpg@gmail.com',
      //       'Another City has Reqested Clean Up',
      //       'cleanup has been requested in another city' );
      //   sweetAlert("Sorry! Our Clean City hasn't made it to your city, please submit a request @ www.ourcleancity.com");
      // }
        }
      });
    },
    loc: function () {
      // return 0, 0 if the location isn't ready
      var loc_a = Geolocation.latLng() || { lat: 0, lng: 0 };
      var location = Location.locate(function(pos){
        // console.log(pos);
      });

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
  $('.catagory').click(function(){
     var catagory = $('.catagory').value();
      console.log(catagory);
  });
  $('.down_arrow').click(function(){
    $('.content').goTo();
  });
  $('.up_arrow').click(function(){
    $("html, body").animate({ scrollTop: "-500px" });
  });
  $('.up_arrow_mobile').click(function(){
    $("html, body").animate({ scrollTop: "-500px" });
  });
   $('.click_above').click(function(){
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

// Selection type is hidden on startup


// Upon Closing the app the geolocation backgroup process is suspended

Meteor.startup(function(){

  // document.getElementsByClassName('selection_type').hide();


  document.addEventListener("pause", onPause, false);
  var stopWatchingPosition = function () {
    geolocation.clearWatch();
  };
  function onPause(){
    stopWatchingPosition();
  }
})
