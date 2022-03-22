import { useParams } from "react-router-dom";

const ThirdComponent = () => {
    const {param1, param2, blabla} = useParams();
    console.log("blabla: ", blabla)
    return (
        <>
        <p> third component: {param1} | {param2} </p>
        </>
    )
}

export default ThirdComponent;