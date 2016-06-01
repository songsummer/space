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
                id: 'bg3',
                type: 'image',
                rect: ['0', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg3.png",'0px','0px']
            },
            {
                id: 'Symbol_eye1',
                type: 'rect',
                rect: ['318', '463','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_eye2',
                type: 'rect',
                rect: ['386', '505','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_leis',
                type: 'rect',
                rect: ['386', '534','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_arm',
                type: 'rect',
                rect: ['341', '534px','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_mother_eyes',
                type: 'rect',
                rect: ['164', '90','auto','auto','auto', 'auto']
            },
            {
                id: 'Symbol_mother_moth',
                type: 'rect',
                rect: ['277', '309','auto','auto','auto', 'auto']
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['35px', '41px','433px','344px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],[],['0','7']]
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
                id: 'Symbol_mother_moth',
                symbolName: 'Symbol_mother_moth',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_leis',
                symbolName: 'Symbol_leis',
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
                id: 'Symbol_eye1',
                symbolName: 'Symbol_eye1',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_turnsCopy',
                symbolName: 'Symbol_turns',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_eye2',
                symbolName: 'Symbol_eye2',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_mother_eyes',
                symbolName: 'Symbol_mother_eyes',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_arm',
                symbolName: 'Symbol_arm',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "skewY", '6.89deg'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '35px'],
                ["style", "top", '41px']
            ],
            "${_Symbol_mother_eyes}": [
                ["style", "left", '163px']
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
            ],
            "${_Symbol_arm}": [
                ["style", "top", '534px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_Symbol_arm}", "top", '534px', { fromValue: '534px'}], position: 0, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Symbol_mother_eyes}", "left", '163px', { fromValue: '163px'}], position: 2500, duration: 0 }            ]
        }
    }
},
"Symbol_arm": {
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
                    id: 'arms2',
                    type: 'image',
                    rect: ['0px', '0px', '170px', '185px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arms.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arms2}": [
                ["style", "-webkit-transform-origin", [82,80], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [82,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [82,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [82,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [82,80],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '185px'],
                ["style", "width", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "transform", "${_arms2}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "transform", "${_arms2}", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 1000, duration: 1000 }            ]
        }
    }
},
"Symbol_eye1": {
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
                    id: 'eye12',
                    rect: ['0px', '0px', '36px', '34px', 'auto', 'auto'],
                    clip: ['rect(0px 36px 34px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/eye1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye12}": [
                ["style", "top", '0px'],
                ["subproperty", "filter.invert", '0'],
                ["style", "left", '0px'],
                ["style", "clip", [0,36,34,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["subproperty", "filter.drop-shadow.color", 'rgba(62,62,62,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '36px']
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
                { id: "eid12", tween: [ "style", "${_eye12}", "clip", [21.839416503906,36,26,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,36,34,0]}], position: 500, duration: 123, easing: "swing" },
                { id: "eid14", tween: [ "style", "${_eye12}", "clip", [0,36,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [22,36,28,0]}], position: 642, duration: 108, easing: "swing" },
                { id: "eid15", tween: [ "style", "${_eye12}", "clip", [0,36,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [21.839416503906,36,26,0]}], position: 2250, duration: 0 }            ]
        }
    }
},
"Symbol_eye2": {
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
                    fill: ['rgba(0,0,0,0)', 'images/eye2.png', '0px', '0px'],
                    id: 'eye22',
                    rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                    clip: ['rect(0px 35px 35px 0px)'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_eye22}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(47,47,47,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '0px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "filter.invert", '0'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "clip", [0,35,35,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '35px']
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
                { id: "eid19", tween: [ "style", "${_eye22}", "clip", [26,35,30,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,35,35,0]}], position: 500, duration: 125, easing: "swing" },
                { id: "eid20", tween: [ "style", "${_eye22}", "clip", [0,35,35,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [26,35,30,0]}], position: 647, duration: 103, easing: "swing" },
                { id: "eid21", tween: [ "style", "${_eye22}", "clip", [0,35,35,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,35,35,0]}], position: 2250, duration: 0, easing: "swing" }            ]
        }
    }
},
"Symbol_leis": {
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
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0001',
                    fill: ['rgba(0,0,0,0)', 'images/lei0001.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0002',
                    fill: ['rgba(0,0,0,0)', 'images/lei0002.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0003',
                    fill: ['rgba(0,0,0,0)', 'images/lei0003.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0004',
                    fill: ['rgba(0,0,0,0)', 'images/lei0004.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0005',
                    fill: ['rgba(0,0,0,0)', 'images/lei0005.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0006',
                    fill: ['rgba(0,0,0,0)', 'images/lei0006.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0007',
                    fill: ['rgba(0,0,0,0)', 'images/lei0007.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0008',
                    fill: ['rgba(0,0,0,0)', 'images/lei0008.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '38px', '120px', 'auto', 'auto'],
                    id: 'lei0009',
                    fill: ['rgba(0,0,0,0)', 'images/lei0009.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_lei0001}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_lei0002}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0005}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0009}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0004}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0007}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0003}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '38px']
            ],
            "${_lei0006}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_lei0008}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1126,
            autoPlay: true,
            timeline: [
                { id: "eid48", tween: [ "style", "${_lei0007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid69", tween: [ "style", "${_lei0007}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "swing" },
                { id: "eid70", tween: [ "style", "${_lei0007}", "display", 'none', { fromValue: 'block'}], position: 876, duration: 0, easing: "swing" },
                { id: "eid43", tween: [ "style", "${_lei0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid52", tween: [ "style", "${_lei0002}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0, easing: "swing" },
                { id: "eid60", tween: [ "style", "${_lei0002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid49", tween: [ "style", "${_lei0008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid71", tween: [ "style", "${_lei0008}", "display", 'block', { fromValue: 'none'}], position: 876, duration: 0, easing: "swing" },
                { id: "eid72", tween: [ "style", "${_lei0008}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid47", tween: [ "style", "${_lei0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid67", tween: [ "style", "${_lei0006}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0, easing: "swing" },
                { id: "eid68", tween: [ "style", "${_lei0006}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "swing" },
                { id: "eid46", tween: [ "style", "${_lei0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid65", tween: [ "style", "${_lei0005}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "swing" },
                { id: "eid66", tween: [ "style", "${_lei0005}", "display", 'none', { fromValue: 'block'}], position: 625, duration: 0, easing: "swing" },
                { id: "eid45", tween: [ "style", "${_lei0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid63", tween: [ "style", "${_lei0004}", "display", 'block', { fromValue: 'none'}], position: 375, duration: 0, easing: "swing" },
                { id: "eid64", tween: [ "style", "${_lei0004}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "swing" },
                { id: "eid42", tween: [ "style", "${_lei0001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid51", tween: [ "style", "${_lei0001}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0, easing: "swing" },
                { id: "eid75", tween: [ "style", "${_lei0001}", "display", 'block', { fromValue: 'none'}], position: 1126, duration: 0, easing: "swing" },
                { id: "eid50", tween: [ "style", "${_lei0009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid73", tween: [ "style", "${_lei0009}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "swing" },
                { id: "eid74", tween: [ "style", "${_lei0009}", "display", 'none', { fromValue: 'block'}], position: 1126, duration: 0, easing: "swing" },
                { id: "eid44", tween: [ "style", "${_lei0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid61", tween: [ "style", "${_lei0003}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "swing" },
                { id: "eid62", tween: [ "style", "${_lei0003}", "display", 'none', { fromValue: 'block'}], position: 375, duration: 0, easing: "swing" }            ]
        }
    }
},
"Symbol_mother_eyes": {
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
                    rect: ['0px', '0px', '285px', '132px', 'auto', 'auto'],
                    id: 'meye1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/meye1.png', '0px', '0px']
                },
                {
                    rect: ['0px', '25px', '285px', '106px', 'auto', 'auto'],
                    id: 'meye2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/meye2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '25px', '285px', '106px', 'auto', 'auto'],
                    id: 'meye3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/meye3.png', '0px', '0px']
                },
                {
                    rect: ['5px', '25px', '285px', '106px', 'auto', 'auto'],
                    id: 'meye4',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/meye4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_meye1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.92047'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.92047']
            ],
            "${_meye4}": [
                ["style", "top", '25px'],
                ["style", "left", '5px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '285px']
            ],
            "${_meye3}": [
                ["style", "top", '25px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_meye2}": [
                ["style", "top", '25px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1909,
            autoPlay: true,
            timeline: [
                { id: "eid98", tween: [ "transform", "${_meye1}", "scaleY", '0.92047', { fromValue: '0.92047'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_meye1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_meye1}", "display", 'none', { fromValue: 'block'}], position: 562, duration: 0 },
                { id: "eid93", tween: [ "style", "${_meye1}", "display", 'block', { fromValue: 'none'}], position: 1116, duration: 0 },
                { id: "eid95", tween: [ "style", "${_meye1}", "display", 'block', { fromValue: 'block'}], position: 1235, duration: 0 },
                { id: "eid96", tween: [ "style", "${_meye1}", "display", 'block', { fromValue: 'block'}], position: 1909, duration: 0 },
                { id: "eid79", tween: [ "style", "${_meye2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_meye2}", "display", 'block', { fromValue: 'none'}], position: 562, duration: 0 },
                { id: "eid84", tween: [ "style", "${_meye2}", "display", 'none', { fromValue: 'block'}], position: 699, duration: 0 },
                { id: "eid90", tween: [ "style", "${_meye2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_meye2}", "display", 'none', { fromValue: 'block'}], position: 1116, duration: 0 },
                { id: "eid94", tween: [ "style", "${_meye2}", "display", 'none', { fromValue: 'none'}], position: 1235, duration: 0 },
                { id: "eid81", tween: [ "style", "${_meye4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_meye4}", "display", 'block', { fromValue: 'none'}], position: 799, duration: 0 },
                { id: "eid88", tween: [ "style", "${_meye4}", "display", 'none', { fromValue: 'block'}], position: 904, duration: 0 },
                { id: "eid80", tween: [ "style", "${_meye3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_meye3}", "display", 'block', { fromValue: 'none'}], position: 699, duration: 0 },
                { id: "eid86", tween: [ "style", "${_meye3}", "display", 'none', { fromValue: 'block'}], position: 799, duration: 0 },
                { id: "eid89", tween: [ "style", "${_meye3}", "display", 'block', { fromValue: 'none'}], position: 904, duration: 0 },
                { id: "eid91", tween: [ "style", "${_meye3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid97", tween: [ "transform", "${_meye1}", "scaleX", '0.92047', { fromValue: '0.92047'}], position: 0, duration: 0 }            ]
        }
    }
},
"Symbol_mother_moth": {
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
                    rect: ['-20px', '-25px', '81px', '102px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'moue1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/moue1.png', '0px', '0px']
                },
                {
                    rect: ['-71px', '-44px', '194px', '140px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.35', '0.35']],
                    id: 'moue2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/moue2.png', '0px', '0px']
                },
                {
                    rect: ['-47px', '-4px', '146px', '60px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.46507', '0.46507']],
                    id: 'moue3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/moue3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_moue1}": [
                ["style", "top", '-25px'],
                ["transform", "scaleY", '0.5'],
                ["style", "height", '102px'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-20px'],
                ["style", "width", '81px']
            ],
            "${_moue3}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.46507'],
                ["transform", "scaleX", '0.46507'],
                ["style", "left", '-47px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '51px'],
                ["style", "width", '41px']
            ],
            "${_moue2}": [
                ["style", "top", '-44px'],
                ["transform", "scaleY", '0.35'],
                ["transform", "scaleX", '0.35'],
                ["style", "left", '-71px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid112", tween: [ "style", "${_moue1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid113", tween: [ "style", "${_moue1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid120", tween: [ "style", "${_moue1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid121", tween: [ "style", "${_moue1}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid110", tween: [ "style", "${_moue2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid111", tween: [ "style", "${_moue2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid114", tween: [ "style", "${_moue2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid116", tween: [ "style", "${_moue2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid118", tween: [ "style", "${_moue2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid119", tween: [ "style", "${_moue2}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid122", tween: [ "style", "${_moue2}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid123", tween: [ "style", "${_moue2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_moue3}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid115", tween: [ "style", "${_moue3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid117", tween: [ "style", "${_moue3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid124", tween: [ "style", "${_moue3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
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
