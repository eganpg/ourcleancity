Router.configure({
  layoutTemplate:'layout'
   // trackPageView: true
});

Router.map(function () {
  this.route('Home', {path:'/'});
  this.route('Photo', {path:'/photo'});
  });