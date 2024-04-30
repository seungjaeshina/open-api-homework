const BASE_URL = `/openApi/restful/`;
const API_SERVICE = 'a3cafbd9dc244b1c9fba975d6e322218';

// stdate 공연 시작일자
// eddate 공연 종료일자
// cpage 현재 페이지
// rows 페이지당 목록 수

const getDateFormat = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    const date = today.getDate() - 1 < 10 ? '0' + (today.getDate() - 1) : today.getDate() - 1;
    return `${year}${month}${date}`;
}

export async function getPlayList(stdate, eddate, cpage, rows) {
    const newsql = 'Y';
    const url = `${BASE_URL}pblprfr?service=${API_SERVICE}&stdate=${stdate}&eddate=${eddate}&cpage=${cpage}&rows=${rows}&newsql=${newsql}`;

    const response = await fetch(url);
    const data = await response.text();
    let xmlNode = new DOMParser().parseFromString(data, "text/xml");
    const json = xmlToJson(xmlNode);
    console.log(json);

    return json.dbs.db;
}

export async function getPlayDetail(mt20id) {
    const newsql = 'Y';

    const url = `${BASE_URL}pblprfr/${mt20id}?service=${API_SERVICE}&newsql=${newsql}`;
    const response = await fetch(url);
    const data = await response.text();
    let xmlNode = new DOMParser().parseFromString(data, "text/xml");
    const json = xmlToJson(xmlNode);
    console.log(json);
    console.log(data);
    return json.dbs.db;
}


function xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) {
        // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) {
        // text
        obj = xml.nodeValue;
    }

    // do children
    // If all text nodes inside, get concatenated text from them.
    var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
        return node.nodeType === 3;
    });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
        obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue;
        }, "");
    } else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof obj[nodeName].push == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}