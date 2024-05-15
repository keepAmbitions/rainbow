// version 传入数组调用
function compareVersions (version1, version2) {
    if (version1.length === 1 && version2.length === 1) {
        return version1.shift() - version2.shift()
    } else {
        if (version1.shift() === version2.shift()) {
            compareVersions()
        } else {
            return version1.shift() - version2.shift()
        }
    }
}

// let version1 = ["1", "2", "3"]
