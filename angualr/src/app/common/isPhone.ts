
declare var plus;
declare var mui;
export const Phone = {
    // isPhone() {
    //     if (mui.os.plus) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },
    isPhone() {
        let $window = window;
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    }
}
