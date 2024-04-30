import {useParams,Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPlayDetail} from "../api/PlayAPI";



function PlayDetail() {

    const {mt20id} = useParams();

    const [play, setPlay] = useState();

    useEffect(() => {
        getPlayDetail(mt20id).then(data => setPlay(data));
    }, []);

    return (
        <div className="content-col">
            {play &&
            <>
            <h1>{play.prfnm}</h1>
                <div>상영 시작일 : {play.prfpdfrom}</div>
                <div>상영 종료일 : {play.prfpdto}</div>
                <div>주체 : {play.entrpsnmH} </div>
                <div>가격 : {play.pcseguidance}</div>
                <div>장소 : {play.fcltynm}</div>
                <div>권장 시청 연령 : {play.prfage}</div>
                <div>
                    <span className='actor'>출연 : {play.prfcast}></span>
                </div>
                <br/>
                <br/>
               <Link to="/play">
                   <h1>목록으로</h1></Link>
            </>
            }
        </div>
    );
}

export default PlayDetail;