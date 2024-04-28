import Article from "../components/Article/Article";
import {useParams} from "react-router-dom";

function SingleNews() {

    let {id} = useParams();


    return (
        <Article id={id} />
    );
}

export default SingleNews;