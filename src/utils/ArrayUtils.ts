export const distinct = (stringArr: string[]) => {
    var seen: any = {};
    return stringArr.filter(item =>
        seen.hasOwnProperty(item) ? false : (seen[item] = true)
    );
}