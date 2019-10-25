export const env = {
    Api(appId: number) {
        const host = window.location.host;
        if (host.startsWith("localhost"))
            return "/app/data/api/" + appId;
        else if (!host)
            return "https://moa.lunan.com.cn/client/app/data/api/" + appId;
        else
            return "/app/data/api/" + appId;
    },
    ApiFull(url: string) {
        const host = window.location.host;
        // console.log("host"+host);
        // console.log(host.startsWith);
        if (host.startsWith("localhost"))
            return url;
        else if (!host)
            return "https://moa.lunan.com.cn/client" + url;
        else
            return "http://www.lunan" + url;
    }
}