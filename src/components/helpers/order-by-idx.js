export default function orderByIdx(ranking) {

    return ranking.sort(function (a, b) {
        if (a.idx_general < b.idx_general) {
            return 1;
        }
        if (a.idx_general > b.idx_general) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

}