import { useState } from "react"

export default function Info(props) {
    const [toggleImage, setToggleImage] = useState(false);

    const toggleFunction = () => {
            setToggleImage(prevState => !prevState)
    }

    return (
       <div className="mb-10 w-3/4 ml-auto mr-auto">
            <div className='flex item-center justify-center'>
                {props.question && <h5 className="font-bold inline-block text-center mr-auto">{props.question}</h5>}
                <button onClick={toggleFunction}>{toggleImage ? '⏫' : '⏬'}</button>
            </div>
            <p>{toggleImage && props.answer}</p>
            <hr className="mt-3"/>
       </div>
    )
}