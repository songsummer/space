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
                id: 'thands2',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"thands2.png",'0px','0px']
            },
            {
                id: 'Symbol_hands',
                type: 'rect',
                rect: ['632', '308','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_handsCopy',
                type: 'rect',
                rect: ['632', '308','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_mtoud',
                type: 'rect',
                rect: ['539', '601','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_sshand',
                type: 'rect',
                rect: ['730', '156','auto','auto','auto', 'auto']
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
                id: 'Symbol_sshand',
                symbolName: 'Symbol_sshand',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_handsCopy',
                symbolName: 'Symbol_hands',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_mtoud',
                symbolName: 'Symbol_mtoud',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_hands',
                symbolName: 'Symbol_hands',
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
            "${_thands2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Symbol_turns}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Symbol_sshand}": [
                ["style", "left", '748px'],
                ["style", "top", '130px']
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
            "${_Symbol_handsCopy}": [
                ["style", "top", '336px'],
                ["style", "left", '206px'],
                ["transform", "scaleX", '-1']
            ],
            "${_Symbol_hands}": [
                ["style", "top", '336px'],
                ["style", "left", '648px']
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
"Symbol_hands": {
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
                    rect: ['125px', '7px', '191px', '420px', 'auto', 'auto'],
                    id: 'thands1',
                    transform: [[0, 0], ['-18']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/thands1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '458px'],
                ["style", "width", '311px']
            ],
            "${_thands1}": [
                ["style", "top", '7px'],
                ["style", "-webkit-transform-origin", [53.4,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.4,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.4,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.4,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.4,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '125px'],
                ["transform", "rotateZ", '-18deg']
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
                { id: "eid3", tween: [ "transform", "${_thands1}", "rotateZ", '-15deg', { fromValue: '-18deg'}], position: 0, duration: 250 },
                { id: "eid5", tween: [ "transform", "${_thands1}", "rotateZ", '-18deg', { fromValue: '-15deg'}], position: 250, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_thands1}", "rotateZ", '-15deg', { fromValue: '-18deg'}], position: 500, duration: 250 },
                { id: "eid7", tween: [ "transform", "${_thands1}", "rotateZ", '-18deg', { fromValue: '-15deg'}], position: 750, duration: 250 }            ]
        }
    }
},
"Symbol_mtoud": {
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
                    id: 'moths',
                    type: 'image',
                    rect: ['0px', '0px', '23px', '17px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/moths.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_moths}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '17px'],
                ["style", "width", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "transform", "${_moths}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 125 },
                { id: "eid30", tween: [ "transform", "${_moths}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 125, duration: 125 },
                { id: "eid31", tween: [ "transform", "${_moths}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 250, duration: 126 },
                { id: "eid32", tween: [ "transform", "${_moths}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 376, duration: 124 }            ]
        }
    }
},
"Symbol_sshand": {
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
                    id: 'hands2',
                    type: 'image',
                    rect: ['0px', '0px', '87px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/hands.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hands2}": [
                ["style", "-webkit-transform-origin", [90.11,33.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [90.11,33.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [90.11,33.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [90.11,33.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [90.11,33.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '38px'],
                ["style", "width", '87px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 625,
            autoPlay: true,
            timeline: [
                { id: "eid43", tween: [ "transform", "${_hands2}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid44", tween: [ "transform", "${_hands2}", "rotateZ", '-2deg', { fromValue: '5deg'}], position: 250, duration: 250 },
                { id: "eid46", tween: [ "transform", "${_hands2}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 500, duration: 125 }            ]
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
