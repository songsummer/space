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
                id: 'bgs',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bgs.png",'0px','0px']
            },
            {
                id: 'Symbol_paoxiao',
                type: 'rect',
                rect: ['536', '440','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_xia',
                type: 'rect',
                rect: ['154', '433','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_for1',
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
                id: 'Symbol_xia',
                symbolName: 'Symbol_xia',
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
                id: 'Symbol_paoxiao',
                symbolName: 'Symbol_paoxiao',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_for1',
                symbolName: 'Symbol_for1',
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
            "${_Symbol_paoxiao}": [
                ["transform", "scaleX", '1.25'],
                ["style", "top", '447px'],
                ["style", "left", '500px'],
                ["transform", "scaleY", '1.25']
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
                ["style", "left", '413px'],
                ["style", "top", '595px']
            ],
            "${_bgs}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"Symbol_paoxiao": {
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
                    rect: ['0px', '0px', '108px', '165px', 'auto', 'auto'],
                    id: 'houhou0001',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/houhou0001.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '108px', '165px', 'auto', 'auto'],
                    id: 'houhou0002',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/houhou0002.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_houhou0002}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_houhou0001}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '165px'],
                ["style", "width", '108px']
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
                { id: "eid2", tween: [ "style", "${_houhou0001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_houhou0001}", "display", 'none', { fromValue: 'block'}], position: 120, duration: 0 },
                { id: "eid7", tween: [ "style", "${_houhou0001}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid8", tween: [ "style", "${_houhou0001}", "display", 'none', { fromValue: 'block'}], position: 370, duration: 0 },
                { id: "eid14", tween: [ "style", "${_houhou0001}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid15", tween: [ "style", "${_houhou0001}", "display", 'none', { fromValue: 'block'}], position: 620, duration: 0 },
                { id: "eid16", tween: [ "style", "${_houhou0001}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid13", tween: [ "style", "${_houhou0001}", "display", 'none', { fromValue: 'block'}], position: 870, duration: 0 },
                { id: "eid63", tween: [ "style", "${_houhou0001}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid1", tween: [ "style", "${_houhou0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_houhou0002}", "display", 'block', { fromValue: 'none'}], position: 120, duration: 0 },
                { id: "eid5", tween: [ "style", "${_houhou0002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_houhou0002}", "display", 'block', { fromValue: 'none'}], position: 370, duration: 0 },
                { id: "eid9", tween: [ "style", "${_houhou0002}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid12", tween: [ "style", "${_houhou0002}", "display", 'block', { fromValue: 'none'}], position: 620, duration: 0 },
                { id: "eid11", tween: [ "style", "${_houhou0002}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid10", tween: [ "style", "${_houhou0002}", "display", 'block', { fromValue: 'none'}], position: 870, duration: 0 },
                { id: "eid62", tween: [ "style", "${_houhou0002}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "swing" }            ]
        }
    }
},
"Symbol_xia": {
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
                    rect: ['0px', '0px', '35px', '70px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], [], ['50%', '100%']],
                    id: 'song',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/song.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_song}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '9px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '61px']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid47", tween: [ "style", "${_song}", "height", '70px', { fromValue: '9px'}], position: 250, duration: 110 },
                { id: "eid52", tween: [ "style", "${_song}", "height", '80px', { fromValue: '70px'}], position: 360, duration: 140 },
                { id: "eid55", tween: [ "style", "${_song}", "height", '80px', { fromValue: '80px'}], position: 750, duration: 0 },
                { id: "eid44", tween: [ "style", "${_song}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 110 },
                { id: "eid57", tween: [ "style", "${_song}", "opacity", '0', { fromValue: '1'}], position: 624, duration: 126 },
                { id: "eid48", tween: [ "style", "${_song}", "top", '0px', { fromValue: '61px'}], position: 250, duration: 110 },
                { id: "eid53", tween: [ "style", "${_song}", "top", '-10px', { fromValue: '0px'}], position: 360, duration: 140 },
                { id: "eid54", tween: [ "style", "${_song}", "top", '-10px', { fromValue: '-10px'}], position: 750, duration: 0 }            ]
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
                { id: "eid31", tween: [ "transform", "${_somke2}", "scaleX", '1', { fromValue: '0.05'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid30", tween: [ "style", "${_somke2}", "opacity", '1', { fromValue: '0.15'}], position: 500, duration: 500, easing: "swing" }            ]
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
                    transform: [[0, 0], ['90']],
                    rect: ['-78px', '30px', '96px', '37px', 'auto', 'auto'],
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
