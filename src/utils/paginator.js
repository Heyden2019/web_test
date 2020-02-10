
export const paginator = (totalResults, currentPage) => {
    let Totalpages = totalResults / 10;
    if (Totalpages !== parseInt(Totalpages)) {
        Totalpages = parseInt(Totalpages) + 1;
    }

    let Pages = [];
    if (Totalpages > 10) {
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
            if (i < 2) {
                continue;
            } else if (i > Totalpages - 1) {
                continue;
            } else {
                Pages.push(i);
            }
        }
        Pages = [1, ...Pages, parseInt(Totalpages)];
    } else {
        for (let i = 0; i < Totalpages; i++) {
            Pages.push(i + 1);
        }
    }

    return Pages;
}