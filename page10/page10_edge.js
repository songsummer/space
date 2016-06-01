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
                id: 'bgss',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bgss.png",'0px','0px']
            },
            {
                id: 'Symbol_1eyes',
                type: 'rect',
                rect: ['277', '450','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_weyes',
                type: 'rect',
                rect: ['340', '491','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_bmoth',
                type: 'rect',
                rect: ['749', '222','auto','auto','auto', 'auto']
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
                id: 'Symbol_1eyes',
                symbolName: 'Symbol_1eyes',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_bmoth',
                symbolName: 'Symbol_bmoth',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_weyes',
                symbolName: 'Symbol_weyes',
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
            "${_Symbol_turns}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bgss}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Symbol_turnsCopy}": [
                ["transform", "scaleX", '0.5'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '1140px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '742px'],
                ["style", "width", '1200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_bmoth": {
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
                    id: 'bmoth2',
                    type: 'image',
                    rect: ['8px', '-2px', '42px', '55px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bmoth2.png', '0px', '0px']
                },
                {
                    id: 'bmoth1',
                    type: 'image',
                    rect: ['1px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bmoth1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bmoth2}": [
                ["style", "top", '-2px'],
                ["style", "-webkit-transform-origin", [64.29,17.45], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [64.29,17.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [64.29,17.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [64.29,17.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [64.29,17.45],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_bmoth1}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [65.6,12.8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [65.6,12.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [65.6,12.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [65.6,12.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [65.6,12.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
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
                { id: "eid5", tween: [ "transform", "${_bmoth1}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid9", tween: [ "transform", "${_bmoth1}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 250, duration: 250 },
                { id: "eid13", tween: [ "transform", "${_bmoth1}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid17", tween: [ "transform", "${_bmoth1}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 750, duration: 250 },
                { id: "eid6", tween: [ "transform", "${_bmoth2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid10", tween: [ "transform", "${_bmoth2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 250, duration: 250 },
                { id: "eid14", tween: [ "transform", "${_bmoth2}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 500, duration: 250 },
                { id: "eid18", tween: [ "transform", "${_bmoth2}", "rotateZ", '0deg', { fromValue: '1deg'}], position: 750, duration: 250 }            ]
        }
    }
},
"Symbol_1eyes": {
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
                    type: 'image',
                    id: 'eyes1',
                    rect: ['0px', '0px', '26px', '24px', 'auto', 'auto'],
                    clip: ['rect(0px 26px 24px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyes1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,26,24,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid25", tween: [ "style", "${_eyes1}", "clip", [0,26,24,26], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26,24,0]}], position: 1000, duration: 250 },
                { id: "eid28", tween: [ "style", "${_eyes1}", "clip", [0,26,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26,24,26]}], position: 1310, duration: 190 }            ]
        }
    }
},
"Symbol_weyes": {
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
                    type: 'image',
                    id: 'eyes12',
                    rect: ['0px', '0px', '26px', '24px', 'auto', 'auto'],
                    clip: ['rect(0px 26px 24px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '26px']
            ],
            "${_eyes12}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,26,24,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "style", "${_eyes12}", "clip", [0,26,24,26], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26,24,0]}], position: 1000, duration: 250 },
                { id: "eid34", tween: [ "style", "${_eyes12}", "clip", [0,26,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26,24,26]}], position: 1310, duration: 190 }            ]
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
