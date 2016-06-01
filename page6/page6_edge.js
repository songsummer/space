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
                id: 'bgs62',
                type: 'image',
                rect: ['0', '0','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bgs6.png",'0px','0px']
            },
            {
                id: 'Symbol_yeyes',
                type: 'rect',
                rect: ['886', '366','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_que',
                type: 'rect',
                rect: ['937', '230','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_formoth',
                type: 'rect',
                rect: ['323', '197','auto','auto','auto', 'auto']
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
                id: 'Symbol_que',
                symbolName: 'Symbol_que',
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
                id: 'Symbol_formoth',
                symbolName: 'Symbol_formoth',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_yeyes',
                symbolName: 'Symbol_yeyes',
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
            "${_Symbol_cry}": [
                ["style", "top", '190px'],
                ["style", "left", '306px']
            ],
            "${_Symbol_formoth}": [
                ["style", "left", '323px'],
                ["style", "top", '196px']
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
            "${_Symbol_turns}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_yeyes": {
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
                    id: 'eyes5',
                    rect: ['0px', '0px', '43px', '40px', 'auto', 'auto'],
                    clip: ['rect(0px 43px 40px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyes5}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,43,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '43px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "style", "${_eyes5}", "clip", [38,43,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,43,40,0]}], position: 1000, duration: 125 },
                { id: "eid6", tween: [ "style", "${_eyes5}", "clip", [0,43,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [38,43,40,0]}], position: 1172, duration: 78 },
                { id: "eid7", tween: [ "style", "${_eyes5}", "clip", [0,43,40,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,43,40,0]}], position: 1750, duration: 0 }            ]
        }
    }
},
"Symbol_que": {
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
                    id: 'que',
                    type: 'image',
                    rect: ['0px', '0px', '59px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/que.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_que}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '59px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.12'],
                ["style", "height", '80px']
            ],
            "${symbolSelector}": [
                ["style", "height", '80px'],
                ["style", "width", '59px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "transform", "${_que}", "scaleY", '1', { fromValue: '0.12'}], position: 126, duration: 124 },
                { id: "eid24", tween: [ "style", "${_que}", "opacity", '1', { fromValue: '0'}], position: 126, duration: 124 },
                { id: "eid31", tween: [ "transform", "${_que}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 500, duration: 500 },
                { id: "eid33", tween: [ "transform", "${_que}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1000, duration: 500 }            ]
        }
    }
},
"Symbol_formoth": {
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
                    transform: [[0, 0], ['-30']],
                    rect: ['0px', '0px', '6px', '4px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(0,0,0,0.93)']
                },
                {
                    transform: [[0, 0], ['-30']],
                    rect: ['1px', '1px', '4px', '2px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    display: 'block',
                    fill: ['rgba(0,0,0,0.9333)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "top", '1px'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "height", '2px'],
                ["style", "display", 'block'],
                ["style", "left", '1px'],
                ["style", "width", '4px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(0,0,0,0.93)'],
                ["transform", "rotateZ", '-30deg'],
                ["style", "display", 'none'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 376,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 128, duration: 0 },
                { id: "eid53", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid54", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 376, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 128, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid46", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 376, duration: 0 }            ]
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
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'block',
                    id: 'cry0001',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cry0001.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'none',
                    id: 'cry0002',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cry0002.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'none',
                    id: 'cry0003',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cry0003.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'none',
                    id: 'cry0004',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cry0004.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'none',
                    id: 'cry0005',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/cry0005.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['156'], [], ['0.1', '0.1']],
                    rect: ['-184px', '-71px', '412px', '175px', 'auto', 'auto'],
                    display: 'none',
                    id: 'cry0006',
                    type: 'image',
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
            "${_cry0001}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'block']
            ],
            "${_cry0005}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "rotateZ", '156deg'],
                ["transform", "scaleX", '0.1'],
                ["style", "left", '-184px'],
                ["style", "display", 'none']
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
                { id: "eid58", tween: [ "style", "${_cry0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_cry0006}", "display", 'block', { fromValue: 'none'}], position: 629, duration: 0 },
                { id: "eid74", tween: [ "style", "${_cry0006}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid60", tween: [ "style", "${_cry0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_cry0004}", "display", 'block', { fromValue: 'none'}], position: 377, duration: 0 },
                { id: "eid70", tween: [ "style", "${_cry0004}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid62", tween: [ "style", "${_cry0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_cry0002}", "display", 'block', { fromValue: 'none'}], position: 126, duration: 0 },
                { id: "eid66", tween: [ "style", "${_cry0002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid59", tween: [ "style", "${_cry0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_cry0005}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid72", tween: [ "style", "${_cry0005}", "display", 'none', { fromValue: 'block'}], position: 629, duration: 0 }            ]
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
