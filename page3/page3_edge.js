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
                id: 'N3_bg',
                type: 'image',
                rect: ['0px', '0px','1200px','742px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"N3_bg.png",'0px','0px']
            },
            {
                id: 'Symbol_for_songshu',
                type: 'rect',
                rect: ['42', '224','auto','auto','auto', 'auto']
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['132px', '452px','254px','152px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-117'],[],['0.83876']]
            },
            {
                id: 'Symbol_for1',
                type: 'rect',
                rect: ['448', '536','auto','auto','auto', 'auto']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['23px', '234px','240px','130px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-21'],[],['0.88768','1.42775']]
            },
            {
                id: 'Symbol_for_moths',
                type: 'rect',
                rect: ['624', '143','auto','auto','auto', 'auto']
            },
            {
                id: 'RoundRect2',
                type: 'rect',
                rect: ['542px', '86px','144px','175px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['-19']]
            },
            {
                id: 'Symbol_turns',
                type: 'rect',
                rect: ['1138', '324','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Symbol_turnsCopy',
                type: 'rect',
                rect: ['1138', '324','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Symbol_for_songshu',
                symbolName: 'Symbol_for_songshu',
                autoPlay: {

                }
            },
            {
                id: 'Symbol_for_moths',
                symbolName: 'Symbol_for_moths',
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
            "${_Ellipse}": [
                ["style", "top", '452px'],
                ["transform", "rotateZ", '-117deg'],
                ["transform", "scaleX", '0.83876'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '132px']
            ],
            "${_RoundRect}": [
                ["style", "top", '234px'],
                ["transform", "scaleY", '1.42775'],
                ["transform", "rotateZ", '-21deg'],
                ["transform", "scaleX", '0.88768'],
                ["style", "left", '23px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_Symbol_turns}": [
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1140px']
            ],
            "${_RoundRect2}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "cursor", 'pointer'],
                ["transform", "rotateZ", '-19deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '600px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '742px'],
                ["style", "width", '1200px']
            ],
            "${_Symbol_turnsCopy}": [
                ["style", "top", '323px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.5'],
                ["style", "left", '21px'],
                ["style", "cursor", 'pointer']
            ],
            "${_N3_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
            ]
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
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid27", tween: [ "style", "${_somke2}", "top", '0px', { fromValue: '-4px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid32", tween: [ "transform", "${_somke2}", "scaleY", '1', { fromValue: '0.05'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid24", tween: [ "style", "${_somke2}", "left", '0px', { fromValue: '-135px'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid34", tween: [ "transform", "${_somke2}", "rotateZ", '0deg', { fromValue: '47deg'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid30", tween: [ "style", "${_somke2}", "opacity", '1', { fromValue: '0.15'}], position: 0, duration: 1500, easing: "swing" },
                { id: "eid31", tween: [ "transform", "${_somke2}", "scaleX", '1', { fromValue: '0.05'}], position: 0, duration: 1500, easing: "swing" }            ]
        }
    }
},
"Symbol_for_songshu": {
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
                    transform: [[0, 0], [], [], [], ['29%', '94%']],
                    clip: ['rect(0px 217px 175px 0px)'],
                    id: 'songshu',
                    rect: ['7px', '-151px', '217px', '175px', 'auto', 'auto'],
                    autoOrient: false,
                    fill: ['rgba(0,0,0,0)', 'images/songshu.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_songshu}": [
                ["style", "-webkit-transform-origin", [29,94], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [29,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [29,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [29,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [29,94],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.8'],
                ["transform", "rotateZ", '-16deg'],
                ["motion", "location", '69.938125px 13.5px'],
                ["style", "clip", [124,217,175,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.8']
            ],
            "${symbolSelector}": [
                ["style", "height", '175px'],
                ["style", "width", '217px']
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
                { id: "eid51", tween: [ "transform", "${_songshu}", "scaleY", '0.92484', { fromValue: '0.8'}], position: 0, duration: 445, easing: "swing" },
                { id: "eid73", tween: [ "transform", "${_songshu}", "scaleY", '0.96958', { fromValue: '0.92484'}], position: 445, duration: 470, easing: "swing" },
                { id: "eid68", tween: [ "transform", "${_songshu}", "scaleY", '1', { fromValue: '0.96958'}], position: 915, duration: 585, easing: "swing" },
                { id: "eid62", tween: [ "transform", "${_songshu}", "rotateZ", '-17deg', { fromValue: '-16deg'}], position: 0, duration: 445, easing: "swing" },
                { id: "eid72", tween: [ "transform", "${_songshu}", "rotateZ", '-17deg', { fromValue: '-17deg'}], position: 445, duration: 305, easing: "swing" },
                { id: "eid63", tween: [ "transform", "${_songshu}", "rotateZ", '-17deg', { fromValue: '-17deg'}], position: 750, duration: 165, easing: "swing" },
                { id: "eid67", tween: [ "transform", "${_songshu}", "rotateZ", '-16deg', { fromValue: '-17deg'}], position: 915, duration: 585, easing: "swing" },
                { id: "eid50", tween: [ "transform", "${_songshu}", "scaleX", '0.92484', { fromValue: '0.8'}], position: 0, duration: 445, easing: "swing" },
                { id: "eid74", tween: [ "transform", "${_songshu}", "scaleX", '0.96958', { fromValue: '0.92484'}], position: 445, duration: 470, easing: "swing" },
                { id: "eid69", tween: [ "transform", "${_songshu}", "scaleX", '1', { fromValue: '0.96958'}], position: 915, duration: 585, easing: "swing" },
                { id: "eid45", tween: [ "motion", "${_songshu}", [[69.94, 13.5, 0, 0],[45.14, 83.32, -1.16, 24.96, -5.53, 119.2],[46.93, 111.32, 4.22, 29.5]]], position: 0, duration: 445, easing: "swing" },
                { id: "eid75", tween: [ "motion", "${_songshu}", [[46.93, 111.32, 5.72, 40.03],[54.87, 147.42, 8.85, 28.32]]], position: 445, duration: 470, easing: "swing" },
                { id: "eid70", tween: [ "motion", "${_songshu}", [[54.87, 147.42, 12.48, 39.93],[62.93, 164.5, 0, 0]]], position: 915, duration: 585, easing: "swing" },
                { id: "eid60", tween: [ "style", "${_songshu}", "clip", [64,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [124,217,175,0]}], position: 0, duration: 200 },
                { id: "eid76", tween: [ "style", "${_songshu}", "clip", [43,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [64,217,175,0]}], position: 200, duration: 100 },
                { id: "eid77", tween: [ "style", "${_songshu}", "clip", [37,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [43,217,175,0]}], position: 300, duration: 145 },
                { id: "eid71", tween: [ "style", "${_songshu}", "clip", [7,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [37,217,175,0]}], position: 445, duration: 305 },
                { id: "eid61", tween: [ "style", "${_songshu}", "clip", [-4.223683834075928,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [7,217,175,0]}], position: 750, duration: 165 },
                { id: "eid65", tween: [ "style", "${_songshu}", "clip", [-41,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-4.223683834075928,217,175,0]}], position: 915, duration: 215 },
                { id: "eid64", tween: [ "style", "${_songshu}", "clip", [0,217,175,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-41,217,175,0]}], position: 1130, duration: 370 }            ]
        }
    }
},
"Symbol_for_moths": {
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
                    display: 'none',
                    rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                    id: 'moth1',
                    fill: ['rgba(0,0,0,0)', 'images/moth1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0', '24px', '18px', 'auto', 'auto'],
                    id: 'moth2',
                    fill: ['rgba(0,0,0,0)', 'images/moth2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                    id: 'moth3',
                    fill: ['rgba(0,0,0,0)', 'images/moth3.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_moth1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_moth3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_moth2}": [
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3250,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "style", "${_moth1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid84", tween: [ "style", "${_moth1}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
                { id: "eid86", tween: [ "style", "${_moth1}", "display", 'none', { fromValue: 'block'}], position: 598, duration: 0 },
                { id: "eid98", tween: [ "style", "${_moth1}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid99", tween: [ "style", "${_moth1}", "display", 'block', { fromValue: 'none'}], position: 1648, duration: 0 },
                { id: "eid100", tween: [ "style", "${_moth1}", "display", 'none', { fromValue: 'block'}], position: 1848, duration: 0 },
                { id: "eid80", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_moth2}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
                { id: "eid85", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'block'}], position: 398, duration: 0 },
                { id: "eid87", tween: [ "style", "${_moth2}", "display", 'block', { fromValue: 'none'}], position: 598, duration: 0 },
                { id: "eid88", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'block'}], position: 799, duration: 0 },
                { id: "eid93", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid94", tween: [ "style", "${_moth2}", "display", 'block', { fromValue: 'none'}], position: 1460, duration: 0 },
                { id: "eid95", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'block'}], position: 1648, duration: 0 },
                { id: "eid96", tween: [ "style", "${_moth2}", "display", 'block', { fromValue: 'none'}], position: 1848, duration: 0 },
                { id: "eid97", tween: [ "style", "${_moth2}", "display", 'none', { fromValue: 'block'}], position: 2049, duration: 0 },
                { id: "eid79", tween: [ "style", "${_moth3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${_moth3}", "display", 'none', { fromValue: 'block'}], position: 210, duration: 0 },
                { id: "eid89", tween: [ "style", "${_moth3}", "display", 'block', { fromValue: 'none'}], position: 799, duration: 0 },
                { id: "eid90", tween: [ "style", "${_moth3}", "display", 'block', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid91", tween: [ "style", "${_moth3}", "display", 'none', { fromValue: 'block'}], position: 1460, duration: 0 },
                { id: "eid92", tween: [ "style", "${_moth3}", "display", 'block', { fromValue: 'none'}], position: 2049, duration: 0 }            ]
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
