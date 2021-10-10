import {WagerData} from "../global/types";
import {SortOrder} from "../global/constants";

export function sortByCreateDate(wagerArr: WagerData[], order: SortOrder) {
    if (order === SortOrder.ASC) {
        wagerArr.sort((w1, w2) =>
            new Date(w1.createDate).getDate() - new Date(w2.createDate).getDate()
        )
    } else {
        wagerArr.sort((w1, w2) =>
            new Date(w2.createDate).getDate() - new Date(w1.createDate).getDate()
        )
    }
}
