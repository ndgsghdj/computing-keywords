import {css} from "uebersicht";

// styles
export const className = `
    top:    20px;
    left:   20px;
    width:  80px;
    height: 80px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    filter: drop-shadow(3px 3px 3px rgba(64, 64, 64, 0.8));
`;

// refresh frequency
export const refreshFrequency = 1000; // 1 second

// command
export const command = "true";
// SKIP

// initialState
// SKIP

// updateState
// SKIP

// render
export const render = ({output}) => {
    // parameter
    var color = "white";
    var size = 80;
    var hwid = 4;  // width of hour hand
    var mwid = 3;  // width of minute hand
    var iwid = 2;  // width of index
    var hlen = 25; // length of hour hand
    var mlen = 30; // length of minute hand
    var ilen = 3;  // length of index
    // calc length
    var cent = size / 2;
    var hoff = cent - hlen;
    var moff = cent - mlen;
    var ioff = iwid / 2;
    var iset = ioff + ilen;
    // calc degree
    var now = new Date();
    var hour = now.getHours();
    if (hour >= 12) {
        hour -= 12;
    }
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var hdeg = ((hour * 3600) + (minute * 60) + second) / 120;
    var mdeg = ((minute * 60) + second) / 10;
    var hrot = "rotate(" + hdeg + "," + cent + "," + cent + ")";
    var mrot = "rotate(" + mdeg + "," + cent + "," + cent + ")";
    var irot = [];
    for (let i = 0; i < 12; i++) {
        var tdeg = i * 30;
        irot.push("rotate(" + tdeg + "," + cent + "," + cent + ")");
    }
    return (
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <line x1={cent} y1={cent} x2={cent} y2={hoff} stroke={color} strokeWidth={hwid} strokeLinecap="round" shapeRendering="crispEdges" transform={hrot}/>
        <line x1={cent} y1={cent} x2={cent} y2={moff} stroke={color} strokeWidth={mwid} strokeLinecap="round" shapeRendering="crispEdges" transform={mrot}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[0]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[1]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[2]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[3]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[4]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[5]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[6]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[7]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[8]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[9]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[10]}/>
        <line x1={cent} y1={ioff} x2={cent} y2={iset} stroke={color} strokeWidth={iwid} strokeLinecap="square" shapeRendering="crispEdges" transform={irot[11]}/>
        </svg>
        </div>
    );
};
