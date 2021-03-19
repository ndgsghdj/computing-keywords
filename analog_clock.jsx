// parameter
const color = "white";
const size = 80; // size of clock
const hwid = 4;  // width of hour hand
const mwid = 3;  // width of minute hand
const hlen = 25; // length of hour hand
const mlen = 33; // length of minute hand

// styles
export const className = `
    top:    20px;
    left:   20px;
    width:  80px;
    height: 80px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    var cent = Math.floor(size / 2);
    var irad = 1;  // radius of index
    // get time
    var now = new Date();
    var hour = now.getHours();
    if (hour >= 12) {
        hour -= 12;
    }
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // hour hand
    var hrad = ((hour * 3600) + (minute * 60) + second) * Math.PI / 21600;
    var hx = Math.round((hlen * Math.sin(hrad)) + cent);
    var hy = Math.round(cent - (hlen * Math.cos(hrad)));
    var hhand = <line x1={cent} y1={cent} x2={hx} y2={hy} stroke={color} strokeWidth={hwid} strokeLinecap="round" shapeRendering="crispEdges"/>;
    // minute hand
    var mrad = ((minute * 60) + second) * Math.PI / 1800;
    var mx = Math.round((mlen * Math.sin(mrad)) + cent);
    var my = Math.round(cent - (mlen * Math.cos(mrad)));
    var mhand = <line x1={cent} y1={cent} x2={mx} y2={my} stroke={color} strokeWidth={mwid} strokeLinecap="round" shapeRendering="crispEdges"/>;
    // indexes
    var indexes = [];
    for (let i = 0; i < 12; i++) {
        var trad = i * Math.PI / 6;
        var cx = Math.round(((cent - irad) * Math.sin(trad)) + cent);
        var cy = Math.round(cent - ((cent - irad) * Math.cos(trad)));
        indexes.push(<circle cx={cx} cy={cy} r={irad} fill={color} stroke={color} shapeRendering="crispEdges"/>);
    }
    return (
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewbox="0 0 {size} {size}">
        {mhand}
        {hhand}
        {indexes}
        </svg>
        </div>
    );
};
