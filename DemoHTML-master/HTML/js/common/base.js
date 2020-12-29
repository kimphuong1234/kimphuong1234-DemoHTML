class BaseJS {
    constructor() {
        this.getDataUrl = null;
        this.setDataUrl();
        this.loadData();
        this.test();
    }

    setDataUrl() {

    }
    /**
     * Load dữ liệu
     * CreatedBy: abc (29/12/2020)
     * */
    loadData() {
        // lấy thông tin các cột data:
        try {
            var columns = $('table thead th');
            var getDataUrl = this.getDataUrl;
            $.ajax({
                url: getDataUrl,
                method: "GET",

            }).done(function (res) {
                $.each(res, function (index, obj) {
                    var tr = $(`<tr></tr>`);
                    //lấy thông tin dữ liệu sẽ map tương ứng vs các cột
                    $.each(columns, function (index, th) {
                        var td = $(`<td><div><span></span></div></td>`);
                        var fieldName = $(th).attr('fieldname');
                        var value = obj[fieldName];
                        var formatType = $(th).attr('formatType');
                        switch (formatType) {
                            case "ddmmyyyy":
                                td.addClass("text-align-center");
                                value = formatDate(value);
                                break;
                            case "Money":
                                td.addClass("text-align-right");
                                value = formatMoney(value);
                                break;
                            default:
                        }
                        td.append(value);
                        $(tr).append(td);
                    })
                    //debugger;
                    $('table tbody').append(tr);

                })
            }).fail(function (res) {

            })
        } catch (e) 
        {
            //ghi log lỗi:
            console.log(e);
        }
        
    }
}

