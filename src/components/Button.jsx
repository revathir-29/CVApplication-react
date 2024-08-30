export default function Button({ text, backgroundColor, textColor, onClick}) {

    return(
        <button
        className={".btn"}
        style={{ color: textColor, backgroundColor: backgroundColor }}
        onClick={onClick}
        >
            {text}
        </button>
    );

}