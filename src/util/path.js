const normalisePath = path => {
    const regexRemoveFilename = /[^\/]*$/;
    path = path.replace(regexRemoveFilename, '');

    const clean = (path) => {
        if (path.charAt(0) == '.') {
            path = path.substr(1);
            return clean(path);
        } else if (path.charAt(0) == '/') {
            path = path.substr(1);
            return clean(path);
        } else if (path.charAt(path.length - 1) == '/') {
            path = path.substr(0, path.length - 1);
            return clean(path);
        }

        return path;
    }

    return clean(path);
}

const getLastOfPath = path => {
    return path.substring(path.lastIndexOf('/') + 1);
}

export { normalisePath, getLastOfPath };