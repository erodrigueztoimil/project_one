$(document).ready(function() {

  var cuisineChoices = ["italian"];

  var apiKey = "e81687065e9f4a2fbbd8244edf86bffd";

  cuisineChoices.forEach(function(cuisine) {
    var queryURL = "https://api.spoonacular.com/recipes/search?apiKey="+apiKey+"&cuisine="+cuisine+"&number=5";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(object) {
      var recepies = object.results;
      recepies.forEach(function(recepie) {
        var recepieId = recepie.id;

        getRecepieInformation(recepieId);
      })
    })
  })


  function getRecepieInformation(id) {
    $.ajax({
      url:
        "https://api.spoonacular.com/recipes/"+id+"/information?apiKey="+apiKey+"",
      method: "GET"
    }).then(function(object) {
      var recepieTitle = object.title;
      var recepieReadyTime = object.readyInMinutes;
      var recepieLink = object.sourceUrl;

      $(".recepies").append("<h1>"+recepieTitle+"</h1><h3>Ready in "+recepieReadyTime+" minutes.</h3><a href='"+recepieLink+"' target='_blank'>"+recepieLink+"</a>")
    });
  }




















  // // food recepies api

  // var cuisineChoices = ["Spanish", "Italian", "Greek"];

  // // cuisineChoices.forEach(function(cuisine, index) {
  //   // var userKey = '95f5bf5fbc0849908c157c0e5f786a3f';
  //   // var queryURL = "https://api.spoonacular.com/recipes/search?apiKey="+ userKey +"?&query="+cuisine+"";

  //   $.ajax({
  //     url: "https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=chicken%20soup&start=0&maxResult=18",
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "yummly2.p.rapidapi.com",
  //       "x-rapidapi-key": "f51812f028mshdd8f09e40c06160p1de823jsn3d73c11857ef"
  //     }
  //   }).then(function(object) {
  //     console.log(object);
  //   })
  // // })




   //restaurant search api
  //  var city = 'miami';

  //  var restApi = 'bc6a01f25d2bf75572f717781b034f8c';
  //  var restURL = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=291';


  //  $.ajax({
  //    url: restURL,
  //    method: 'GET',
  //    headers:{
  //     'user-key': restApi
  //    }
  //  }).then(function(object) {
  //    console.log(object);
  //  })
});
