$(function() {

var $menuNational = $('#menu-national');//search button

var $nationalList = $('#national-list');

template: _.template($('#team-template').html());

 $menuNational.on('submit', function(event) {
  event.preventDefault();
  
 }































//---------Post Controller-----------//
// var postController = {

// template: _.template($('#team-template').html()),

// //---------Render Post to HTML thru Template----------// 
//  render: function (teamObj) {
//   var $teamHTML = $(postController.template(teamObj));
//   $('#national-list').append($teamHTML);
//  },

// //-------------GET Blog Posts from API------//
// //---------iterate thru EACH blogpost-------//
// //----Event-listeners 4 UPDATE & DELETE ----//

//  all: function () {
//   $.get('/national/100', function (data) {
//     var teamData = data;
//     _.each(teamData, function (laxteam) {
//     postController.render(laxteam);
//   });
//     postController.addEventHandlers();
//   });
//  };

// postController.setupView();

  });