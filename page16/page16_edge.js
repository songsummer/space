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
                id: 'bgsss',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bgsss.png",'0px','0px']
            },
            {
                id: 'Symbol_wbs',
                type: 'rect',
                rect: ['232', '3','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_for1',
                type: 'rect',
                rect: ['448', '536','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_for1Copy',
                type: 'rect',
                rect: ['448', '536','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_for1Copy2',
                type: 'rect',
                rect: ['448', '536','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_turnsCopy',
                type: 'rect',
                rect: ['1138', '324','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Symbol_turns',
                type: 'rect',
                rect: ['1138', '324','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Symbol_turnsCopy',
                symbolName: 'Symbol_turns',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_wbs',
                symbolName: 'Symbol_wbs',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_for1Copy',
                symbolName: 'Symbol_for1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_for1Copy2',
                symbolName: 'Symbol_for1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_for1',
                symbolName: 'Symbol_for1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_turns',
                symbolName: 'Symbol_turns',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bgsss}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Symbol_for1Copy}": [
                ["style", "-webkit-transform-origin", [1.5,56.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.86886'],
                ["transform", "rotateZ", '25deg'],
                ["transform", "scaleX", '-0.86887'],
                ["style", "left", '787px'],
                ["style", "top", '235px']
            ],
            "${_Symbol_turns}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Symbol_for1Copy2}": [
                ["style", "-webkit-transform-origin", [1.5,56.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [1.5,56.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.72308'],
                ["transform", "rotateZ", '25deg'],
                ["transform", "scaleX", '-0.72309'],
                ["style", "left", '909px'],
                ["style", "top", '109px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '742px'],
                ["style", "width", '1200px']
            ],
            "${_Symbol_turnsCopy}": [
                ["transform", "scaleX", '0.5'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '1140px']
            ],
            "${_Symbol_for1}": [
                ["style", "-webkit-transform-origin", [7.5,71.54], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [7.5,71.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [7.5,71.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [7.5,71.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [7.5,71.54],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '12deg'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '591px'],
                ["style", "top", '390px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_wbs": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '200px', '157px', 'auto', 'auto'],
                    id: 'wb',
                    transform: [[0, 0], [], [], [], ['23.1999%', '96.433%']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/wb.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wb}": [
                ["style", "-webkit-transform-origin", [23.2,96.43], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [23.2,96.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [23.2,96.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [23.2,96.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [23.2,96.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '157px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_wb}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid4", tween: [ "transform", "${_wb}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 250, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_wb}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid8", tween: [ "transform", "${_wb}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 750, duration: 250 }            ]
        }
    }
},
"Symbol_for1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'somke2',
                    type: 'image',
                    rect: ['0px', '0px', '200px', '130px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/somke.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_somke2}": [
                ["style", "-webkit-transform-origin", [2,70], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2,70],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2,70],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2,70],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2,70],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["transform", "rotateZ", '47deg'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0.15'],
                ["style", "left", '-135px'],
                ["style", "top", '-4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '130px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_somke2}", "top", '0px', { fromValue: '-4px'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid32", tween: [ "transform", "${_somke2}", "scaleY", '1', { fromValue: '0.05'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid24", tween: [ "style", "${_somke2}", "left", '0px', { fromValue: '-135px'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid34", tween: [ "transform", "${_somke2}", "rotateZ", '0deg', { fromValue: '47deg'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid30", tween: [ "style", "${_somke2}", "opacity", '1', { fromValue: '0.15'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid31", tween: [ "transform", "${_somke2}", "scaleX", '1', { fromValue: '0.05'}], position: 500, duration: 500, easing: "swing" }            ]
        }
    }
},
"Symbol_turns": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-78px', '30px', '96px', '37px', 'auto', 'auto'],
                    transform: [[0, 0], ['90']],
                    id: 'turn',
                    opacity: 0.2,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/turn.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_turn}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0.05'],
                ["style", "left", '-78px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '96px'],
                ["style", "width", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid106", tween: [ "style", "${_turn}", "opacity", '1', { fromValue: '0.05'}], position: 0, duration: 500 },
                { id: "eid110", tween: [ "style", "${_turn}", "opacity", '0.1', { fromValue: '1'}], position: 500, duration: 500 },
                { id: "eid107", tween: [ "style", "${_turn}", "left", '-29px', { fromValue: '-78px'}], position: 0, duration: 500 },
                { id: "eid111", tween: [ "style", "${_turn}", "left", '14px', { fromValue: '-29px'}], position: 500, duration: 500 }            ]
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
