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
                id: 'bg8',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg8.png",'0px','0px']
            },
            {
                id: 'Symbol_eyes2',
                type: 'rect',
                rect: ['846', '276','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_eyes1',
                type: 'rect',
                rect: ['765', '266','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_cry',
                type: 'rect',
                rect: ['123', '112','auto','auto','auto', 'auto']
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
                id: 'Symbol_turns',
                symbolName: 'Symbol_turns',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_eyes1',
                symbolName: 'Symbol_eyes1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_eyes2',
                symbolName: 'Symbol_eyes2',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_cry',
                symbolName: 'Symbol_cry',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg8}": [
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
                ["style", "min-width", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '742px'],
                ["style", "width", '1200px']
            ],
            "${_Symbol_turnsCopy}": [
                ["transform", "scaleX", '0.5'],
                ["style", "left", '1140px'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleY", '0.5']
            ],
            "${_Symbol_cry}": [
                ["style", "top", '495px'],
                ["style", "left", '729px'],
                ["transform", "rotateZ", '259deg']
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
"Symbol_eyes1": {
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
                    rect: ['0px', '0px', '31px', '29px', 'auto', 'auto'],
                    id: 'eyes8',
                    type: 'image',
                    clip: ['rect(0px 31px 29px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes8.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyes8}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,31,29,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '31px']
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
                { id: "eid11", tween: [ "style", "${_eyes8}", "clip", [27,31,29,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,31,29,0]}], position: 500, duration: 125 },
                { id: "eid14", tween: [ "style", "${_eyes8}", "clip", [0,31,29,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [27,31,29,0]}], position: 650, duration: 100 },
                { id: "eid15", tween: [ "style", "${_eyes8}", "clip", [0,31,29,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,31,29,0]}], position: 2250, duration: 0 }            ]
        }
    }
},
"Symbol_eyes2": {
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
                    rect: ['0px', '0px', '38px', '31px', 'auto', 'auto'],
                    id: 'eyes7',
                    type: 'image',
                    clip: ['rect(0px 38px 31px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyes7}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,38,31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '38px']
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
                { id: "eid18", tween: [ "style", "${_eyes7}", "clip", [29,38,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,38,31,0]}], position: 500, duration: 125 },
                { id: "eid21", tween: [ "style", "${_eyes7}", "clip", [0,38,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [29,38,31,0]}], position: 647, duration: 103 }            ]
        }
    }
},
"Symbol_cry": {
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
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'block',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0001',
                    fill: ['rgba(0,0,0,0)', 'images/cry0001.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'none',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0002',
                    fill: ['rgba(0,0,0,0)', 'images/cry0002.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'none',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0003',
                    fill: ['rgba(0,0,0,0)', 'images/cry0003.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'none',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0004',
                    fill: ['rgba(0,0,0,0)', 'images/cry0004.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'none',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0005',
                    fill: ['rgba(0,0,0,0)', 'images/cry0005.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    display: 'none',
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    id: 'cry0006',
                    fill: ['rgba(0,0,0,0)', 'images/cry0006.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cry0003}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
            ],
            "${_cry0004}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '45px']
            ],
            "${_cry0006}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
            ],
            "${_cry0002}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
            ],
            "${_cry0005}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
            ],
            "${_cry0001}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'block']
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
                { id: "eid63", tween: [ "style", "${_cry0001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_cry0001}", "display", 'none', { fromValue: 'block'}], position: 126, duration: 0 },
                { id: "eid75", tween: [ "style", "${_cry0001}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid61", tween: [ "style", "${_cry0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_cry0003}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid68", tween: [ "style", "${_cry0003}", "display", 'none', { fromValue: 'block'}], position: 377, duration: 0 },
                { id: "eid59", tween: [ "style", "${_cry0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_cry0005}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_cry0005}", "display", 'none', { fromValue: 'block'}], position: 629, duration: 0 },
                { id: "eid62", tween: [ "style", "${_cry0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_cry0002}", "display", 'block', { fromValue: 'none'}], position: 126, duration: 0 },
                { id: "eid66", tween: [ "style", "${_cry0002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid60", tween: [ "style", "${_cry0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_cry0004}", "display", 'block', { fromValue: 'none'}], position: 377, duration: 0 },
                { id: "eid70", tween: [ "style", "${_cry0004}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid58", tween: [ "style", "${_cry0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_cry0006}", "display", 'block', { fromValue: 'none'}], position: 629, duration: 0 },
                { id: "eid74", tween: [ "style", "${_cry0006}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 }            ]
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
