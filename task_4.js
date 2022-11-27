function daysBetween(start, end){
    const startDate = new Date(start);
    const endDate = new Date(end);

    const time = endDate.getTime() - startDate.getTime();
    const days = time / (1000 * 3600 * 24);

    return Math.abs(days);
}
