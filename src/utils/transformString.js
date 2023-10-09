


const transFormString = function (heading) {
    const words = heading.split(' ');
    const transformedString = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    return transformedString;
}

export default transFormString;