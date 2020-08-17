
export const paginator = (totalResults, currentPage) => {
    const totalPages = Math.ceil(totalResults / 10);
    let Pages = [];
    if (totalPages > 10) {
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
            if (i >= 2 && (i <= totalPages - 1)) {
                Pages.push(i);
            }
        }
        Pages = [1, ...Pages, totalPages];
    } else {
        for (let i = 0; i < totalPages; i++) {
            Pages.push(i + 1);
        }
    }
    return Pages;
}