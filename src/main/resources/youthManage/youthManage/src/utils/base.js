const base = {
    get() {
        return {
            url : "http://localhost:8080/newYouthHomePlatform/",
            name: "newYouthHomePlatform",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/newYouthHomePlatform/youthFront/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“新青年之家”平台"
        } 
    }
}
export default base
