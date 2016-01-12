define(['underscore', 'jquery', 'list_globals', 'backbone'], function(_, $, listGlobals, Backbone) {

  var Widget = function(params) {
    var config = config || {};
    config.API_URL = "http://www.staance.com/api/headlines/tag/trending?mode=date&sort=desc&limit=4&offset=4"; 

    var $el = $(params.el);
    
      var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "../app/css/styles.css";
    document.getElementsByTagName("head")[0].appendChild(link);
   

    var globals = listGlobals();
    var fragment = _.reduce(globals, function(html, global) {
      return html + '<li><code>' + global + '</code></li>\n';
    }, '');
    
    

    $el
      .append('This is a widget made by <strong>'+ params.user +'</strong>')
      .append("<p>Assertion Number: <strong>"+params.parameter +'</strong>' )
      .append("test number is " + params.parameter + "DIV name is " + params.element_id);

//     $.ajax({
//       url: config.API_URL,
//       'Access-Control-Allow-Origin': '*', 
//       "x-auth-token":"4428966849cfcdc616a8d3eb711c1ca17242b1c09f2cc4b5592d41caf3431bd5896e51f5fc47c200d62e14746b2eb43aa281f6c031589169d68f197d194d8c0d3d64dce9508a1a6e6fcc8afd4f87108534e4d191b241bc7803b548498d7dd126b739371e7a8275678f0c494a15480e1c",
//       success: function(data){
//             var $elDiv = $('<div></div>').html(data)
//             $el.append($elDiv)
//             console.log("elsssss")
//       },
//       accept:"application/json, text/javascript, */*; q=0.01",
//      "Accept-Encoding":"gzip, deflate, sdch",
// Cookie:"fbm_444602048960825=base_domain=.staance.com; fblo_444602048960825=y; mp_e62a719e813205e3d483ac9359ebdda9_mixpanel=%7B%22distinct_id%22%3A%20%22301684%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; connect.sess=s%3Aj%3A%7B%22visited%22%3Atrue%2C%22cu%22%3A%7B%22id%22%3A%22301684%22%2C%22e%22%3A%22morgan%40staance.com%22%2C%22fnm%22%3A%22Morgan%22%2C%22lnm%22%3A%22Plant%22%2C%22dnm%22%3A%22Morgan%20P%22%2C%22gndr%22%3A%22%22%2C%22intr%22%3A%5B%22sports%22%2C%22politics%22%2C%22gaming%22%2C%22music%22%2C%22lifestyle%22%2C%22movies%22%2C%22fashion%22%2C%22world%22%2C%22religion%22%2C%22science%22%2C%22technology%22%2C%22business%22%5D%2C%22about%22%3A%22%22%2C%22loc%22%3A%7B%22country_code%22%3A%22US%22%2C%22country_name%22%3A%22United%20States%22%2C%22region_name%22%3A%22California%22%2C%22city%22%3A%22San%20Francisco%22%2C%22zipcode%22%3A%2294110%22%7D%2C%22tz%22%3A%22%22%2C%22status%22%3A%22P%22%2C%22startdt%22%3A1444332864804%2C%22groups%22%3A%5B%5D%2C%22accts%22%3A%5B%5D%2C%22unm%22%3A%22301684%3Amorgan%3Ap%22%2C%22ac%22%3A%22%22%2C%22tags%22%3A%5B%5D%2C%22access_token%22%3A%224428966849cfcdc616a8d3eb711c1ca17242b1c09f2cc4b5592d41caf3431bd5896e51f5fc47c200d62e14746b2eb43aa281f6c031589169d68f197d194d8c0d3d64dce9508a1a6e6fcc8afd4f87108534e4d191b241bc7803b548498d7dd126b739371e7a8275678f0c494a15480e1c%22%2C%22did%22%3A%221cd1d3b36c8ea85580%22%7D%2C%22did%22%3A%221cd1d3b36c8ea85580%22%7D.Hex7YcpFRtrcCuy%2B1FJ7bKYUJ6yZpC%2Bub2NQIOnYxK4; pnctest=1; mp_7500c6afa5b229d0458247dc17898378_mixpanel=%7B%22distinct_id%22%3A%20%22301684%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24search_engine%22%3A%20%22google%22%7D"
//     })

  };

  return Widget;

});
