// Dilerseniz props şeklinde bilgileri öğrenebilirsiniz. function Button(props) <button>{props.text}</button>
// Distiraction şeklinde kullanım tavsiye edilir. Button({text , variant})   <button>{text} {variant} </button>

function Button({text , variant}) {
    return (
        <>
            <button>
                {text} {variant}
            </button>
        </>
       
    ) 
}

export default Button