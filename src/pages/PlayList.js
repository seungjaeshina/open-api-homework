import {useEffect, useState} from "react";
import {getPlayList} from "../api/PlayAPI";
import playItem from "../components/PlayItem";
import PlayItem from "../components/PlayItem";

function PlayList () {

    const [playList , setPlayList] = useState();

    useEffect(() => {
        getPlayList('20231220', '20240101',1,10).then(data => setPlayList(data));

    }, []);





    return(
        <div className="content-row">
            {playList && playList.map(play => <PlayItem key={play.mt20id} play={play}/>)}
        </div>
    );
}
export default PlayList;