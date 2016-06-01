/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Symbol_turns}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("../page12/page12.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_turnsCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("../page14/page14.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_eyesfor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_eyesfor");
   //Edge symbol end:'Symbol_eyesfor'

   //=========================================================
   
   //Edge symbol: 'Symbol_yuns'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 378, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_yuns");
   //Edge symbol end:'Symbol_yuns'

   //=========================================================
   
   //Edge symbol: 'Symbol_turns'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_turns");
   //Edge symbol end:'Symbol_turns'

})(jQuery, AdobeEdge, "EDGE-15642222");