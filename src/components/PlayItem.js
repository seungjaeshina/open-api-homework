import {Link} from "react-router-dom";
function PlayItem ({play}) {

    return (
        <Link to={`/play/${play.mt20id}`}>
        <div className="item">
            <h3>{play.prfnm}</h3>
            <h3>시작일지 : {play.prfpdfrom}</h3>
            <h3>종료일지 : {play.prfpdto}</h3>
            <h3>장소 : {play.area}<br/>
                {play.fcltynm}</h3>
            <h3>장르 :{play.genrenm} </h3>
            <h3>상탸 :{play.prfstate}</h3>
        </div>
        </Link>
    );
}
export default PlayItem;