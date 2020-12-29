/**
 * format dữ liệu theo kiểu ngày tháng sang ngay/thang/nam
 * @param {any} date ({date} date) tham số có kiểu dữ liệu bất kỳ 
 * CreatedBy: abc (26/12/2020)
 */
//function formatdate(date) {
//    var date = new date(date);
//    if (number.isnan(date.gettime())) {
//        return "";
//    }
//    else {
//        var day = date.getdate(),
//            month = date.getmonth() + 1,
//            year = date.getfullyear();
//        day = day < 10 ? "0" + day : day; //trc dấu "?" là if sau dấu ":" là else. nếu day <10 thì 0 + day và ..
//        month = month < 10 ? "0" + month : month;
//        return day + '/' + month + '/' + year;
//    }
//}

function formatDate(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return " ";
    }
    else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? "0" + day : day; //trc dấu "?" là if sau dấu ":" là else. nếu day <10 thì 0 + day và ..
        month = month < 10 ? "0" + month : month;
        return day + '/' + month + '/' + year;
    }
}

/**
 * Hàm định dạng hiển thị tiền tệ
 * @param {any} money số tiền
 * CreatedBy: abc (26/12/2020)
 */
function formatMoney(money) {
    if (money == null)
        return " ";
    var num = money.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '1,');
    return num;
}