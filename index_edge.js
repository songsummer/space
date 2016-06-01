/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Imageindex',
                type: 'image',
                rect: ['300px', '0px','600px','742px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Imageindex.png",'0px','0px']
            },
            {
                id: 'SLOGO',
                type: 'image',
                rect: ['12px', '12px','200px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"SLOGO.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Imageindex}": [
                ["style", "top", '0px'],
                ["style", "left", '300px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(75,60,224,1.00)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'auto'],
                ["style", "height", '742px'],
                ["gradient", "background-image", [270,[['rgba(124,73,202,0.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "width", '1200px']
            ],
            "${_SLOGO}": [
                ["style", "left", '12px'],
                ["style", "top", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15642222");
