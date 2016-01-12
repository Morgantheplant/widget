define(['utils', 'namespace' ], function(utils, namespace) {

  //--- keep track of embeds 
  if(!namespace.foundEls) namespace.foundEls = [];
  var foundEls = namespace.foundEls;

  // RE used to identify widgets, note that scripts must have the src
  //
  //   //anything/widget.load(anything).js
  //
  // Since this is how they are identified. The reason for not using a class
  // name, etc. is that embed tags might be "mangled" by blog tools, e.g.
  // Tumblr.

  //--- regEx used to identify a widget
  var re = /.*widget\.load\.([^/]+\.)?js/;

  return function(loadOne) {
    var els = document.getElementsByTagName('script'),
        nEls = els.length;

    for(var i = 0; i < nEls; i++) {
      var el = els[i];
      
      //--- see if there is a match against regExp
      //--- //nope: covered below // possibly add foundEls.indexOf(el) to check if it has already been added
      if(el.src.match(re)) {
        
        //--- grab params out of query string 
        var paramsEmbed = utils.parseQueryString(el.src),
        //--- number of params passed in
        nParams = utils.keys(paramsEmbed).length;

        // Skip script inclusion that have no params specified, and script
        // elements already found.
        if(nParams > 0 && foundEls.indexOf(el) < 0) {
          foundEls.push(el);

          utils.extend(paramsEmbed, {
            element: el,
            element_id: utils.makeUniqueId()
          });
          
          var div = document.createElement('div'),
              script_tag = paramsEmbed.element;

          div.id = paramsEmbed.element_id;
          script_tag.parentNode.insertBefore(div, script_tag);
          paramsEmbed.el = div;

          loadOne(paramsEmbed);

        }
      }
    }
  };

});
