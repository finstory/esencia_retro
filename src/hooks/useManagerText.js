
export const useManagerText = () => {
    const compiler = {};

    compiler.upperCaseList = (list) => {
        return list.map((string) => string[0].toUpperCase() + string.substring(1));
    };

    compiler.firsUpperCase = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    };


    compiler.limitString = (string, limit) => {
        if (string && string.length > limit) return string.substring(0, limit) + "...";
        return string;
    };

    compiler.allFirstUpperCase = (list, split = " ") => {
        return list
            .split(split)
            .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
            .toString()
            .replace(/,/g, split);
    };


    return { ...compiler };

}
