import {css} from "uebersicht";
import keywords from "./keywords.json"

// styles
const quote = css({
    fontSize: "24px",
});
const chapter = css({
    fontSize: "18px",
    fontStyle: "italic",
});
export const className = {
    position: "fixed",
    top:    "auto",
    bottom: "20%",
    left:   "20%",
    right:  "auto",
    width:  "60%",
    textAlign: "center",
    lineHeight: 1.5,
    fontFamily: "YuKyokasyo, Helvetica Neue",
    fontWeight: "medium",
    fontSmoothing: "antialiased",
    color:  "#ffffff",
    textShadow: "2px 2px 2px rgba(64, 64, 64, 0.8)",
};

// refresh frequency
export const refreshFrequency = 10000; // 1 day

// random quote

export const command = () => {
    const randomIndex = Math.floor(Math.random() * keywords.keywords.length);
    console.log(keywords.keywords)
    return keywords.keywords[randomIndex];
}

// invoked every `refreshFrequency` milliseconds.
// the return value is passed to the `updateState` function.

// initialState
// SKIP

// updateState
// SKIP

// render
export const render = ({output}) => {
    return (
        <div>
        <span className={quote}>{output.keyword}: {output.definition}</span>
        <br/>
        <span className={chapter}>Chapter: {output.chapter}</span>
        </div>
    );
};
