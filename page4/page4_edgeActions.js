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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         if (sym.getSymbol("Symbol_mother_moth").isPlaying()) {
         	sym.getSymbol("Symbol_mother_moth").stop();
         } else {
         	sym.getSymbol("Symbol_mother_moth").play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_turns}", "click", function(sym, e) {
         window.open("../page3/page3.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Symbol_turnsCopy}", "click", function(sym, e) {
         window.open("../page5/page5.html", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_arm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_arm");
   //Edge symbol end:'Symbol_arm'

   //=========================================================
   
   //Edge symbol: 'Symbol_eye1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_eye1");
   //Edge symbol end:'Symbol_eye1'

   //=========================================================
   
   //Edge symbol: 'Symbol_eye2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_eye2");
   //Edge symbol end:'Symbol_eye2'

   //=========================================================
   
   //Edge symbol: 'Symbol_leis'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1126, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_leis");
   //Edge symbol end:'Symbol_leis'

   //=========================================================
   
   //Edge symbol: 'Symbol_mother_eyes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1909, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Symbol_mother_eyes");
   //Edge symbol end:'Symbol_mother_eyes'

   //=========================================================
   
   //Edge symbol: 'Symbol_mother_moth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symbol_mother_moth");
   //Edge symbol end:'Symbol_mother_moth'

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