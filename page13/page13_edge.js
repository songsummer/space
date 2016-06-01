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
                id: 'Symbol_yuns',
                type: 'rect',
                rect: ['325', '40','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_eyesfor',
                type: 'rect',
                rect: ['959', '565','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_eyesforCopy',
                type: 'rect',
                rect: ['959', '565','auto','auto','auto', 'auto']
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
                id: 'Symbol_eyesfor',
                symbolName: 'Symbol_eyesfor',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_eyesforCopy',
                symbolName: 'Symbol_eyesfor',
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
                id: 'Symbol_yuns',
                symbolName: 'Symbol_yuns',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Symbol_yuns}": [
                ["style", "top", '88px'],
                ["style", "left", '361px'],
                ["transform", "rotateZ", '46deg']
            ],
            "${_Symbol_turns}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Symbol_eyesforCopy}": [
                ["style", "left", '1001px'],
                ["style", "top", '575px']
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
            "${_bgss}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
"Symbol_eyesfor": {
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
                    id: 'eyes',
                    rect: ['0px', '0px', '20px', '24px', 'auto', 'auto'],
                    clip: ['rect(0px 20px 24px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eyes.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eyes}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,20,24,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '20px']
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
                { id: "eid1", tween: [ "style", "${_eyes}", "clip", [0,20,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,20,24,0]}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_eyes}", "clip", [24,20,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,20,24,0]}], position: 750, duration: 126 },
                { id: "eid7", tween: [ "style", "${_eyes}", "clip", [0,20,24,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [24,20,24,0]}], position: 903, duration: 97 }            ]
        }
    }
},
"Symbol_yuns": {
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
                    display: 'block',
                    rect: ['0px', '0px', '250px', '75px', 'auto', 'auto'],
                    id: 'yun0001',
                    fill: ['rgba(0,0,0,0)', 'images/yun0001.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '250px', '75px', 'auto', 'auto'],
                    id: 'yun0002',
                    fill: ['rgba(0,0,0,0)', 'images/yun0002.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '250px', '75px', 'auto', 'auto'],
                    id: 'yun0003',
                    fill: ['rgba(0,0,0,0)', 'images/yun0003.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yun0003}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_yun0002}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_yun0001}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 378,
            autoPlay: true,
            timeline: [
                { id: "eid19", tween: [ "style", "${_yun0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_yun0003}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid26", tween: [ "style", "${_yun0003}", "display", 'none', { fromValue: 'block'}], position: 378, duration: 0 },
                { id: "eid20", tween: [ "style", "${_yun0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_yun0002}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid24", tween: [ "style", "${_yun0002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid21", tween: [ "style", "${_yun0001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_yun0001}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
                { id: "eid27", tween: [ "style", "${_yun0001}", "display", 'block', { fromValue: 'none'}], position: 378, duration: 0 }            ]
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
