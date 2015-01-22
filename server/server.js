Houston.add_collection(Meteor.users);
// Houston.add_collection(Meteor.cityrequest);

Houston.add_collection(Houston._admins);


var Photos = new Meteor.Collection("photos");
var CityRequest = new Meteor.Collection("cityrequest");

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    console.log(text);
    // check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});