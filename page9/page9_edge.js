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
                id: 'bg8s',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg8s.png",'0px','0px']
            },
            {
                id: 'Symbol_1eye',
                type: 'rect',
                rect: ['884', '409','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_2eye',
                type: 'rect',
                rect: ['914', '441','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_beyes',
                type: 'rect',
                rect: ['283', '201','auto','auto','auto', 'auto']
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
                id: 'Symbol_2eye',
                symbolName: 'Symbol_2eye',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_beyes',
                symbolName: 'Symbol_beyes',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_turns',
                symbolName: 'Symbol_turns',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_1eye',
                symbolName: 'Symbol_1eye',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg8s}": [
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
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '50%'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '742px'],
                ["style", "width", '1200px']
            ],
            "${_Symbol_turnsCopy}": [
                ["transform", "scaleX", '0.5'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '1140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_beyes": {
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
                    id: 'beyes',
                    rect: ['0px', '0px', '24px', '23px', 'auto', 'auto'],
                    clip: ['rect(0px 24px 23px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/beyes.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_beyes}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,24,23,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_beyes}", "clip", [13,24,13,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,23,0]}], position: 500, duration: 126 },
                { id: "eid6", tween: [ "style", "${_beyes}", "clip", [0,24,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [13,24,13,0]}], position: 658, duration: 92 },
                { id: "eid7", tween: [ "style", "${_beyes}", "clip", [0,24,23,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,23,0]}], position: 3000, duration: 0 }            ]
        }
    }
},
"Symbol_1eye": {
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
                    id: 'eye1s',
                    rect: ['0px', '0px', '24px', '25px', 'auto', 'auto'],
                    clip: ['rect(0px 24px 25px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eye1s.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye1s}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,24,25,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '24px']
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
                { id: "eid11", tween: [ "style", "${_eye1s}", "clip", [24,24,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,24,25,0]}], position: 1000, duration: 126 },
                { id: "eid13", tween: [ "style", "${_eye1s}", "clip", [0,24,25,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [24,24,25,0]}], position: 1144, duration: 106 }            ]
        }
    }
},
"Symbol_2eye": {
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
                    id: 'eye2s',
                    rect: ['0px', '0px', '23px', '24px', 'auto', 'auto'],
                    clip: ['rect(0px 23px 24px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eye2s.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '23px']
            ],
            "${_eye2s}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,23,24,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid17", tween: [ "style", "${_eye2s}", "clip", [23,23,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,23,24,0]}], position: 1000, duration: 125 },
                { id: "eid19", tween: [ "style", "${_eye2s}", "clip", [0,23,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [23,23,24,0]}], position: 1148, duration: 102 },
                { id: "eid20", tween: [ "style", "${_eye2s}", "clip", [0,23,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,23,24,0]}], position: 2250, duration: 0 }            ]
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
