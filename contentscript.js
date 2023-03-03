var clientPhone;
var clientEmail;
var clientName;
var checkIcountError = 0;





   let interval = setInterval(function() {
       if ($('.form_vip').length) {
          clearInterval(interval);
          $('.form_vip').html('<iframe style="border: none; width: 380px;" src="https://api.marina-kogan.co.il/demo/vip-form.php"></iframe>');
          return;
        }
  
       $('.y-timetable-controls-date-buttons').append(`
          <div class="form_vip" style="margin-top: -21px; margin-left: 25px;"></div>
       `);
    }, 10);
  






setInterval(function(){
    $('[data-client-phones-access="1"]').hide();
    $('.y-timetable-record-preview__protected_phone').hide();
    
    $('a.y-timetable-controls-finances-container__footer__sell').css('backgroundColor', '#f3fff6');
    //$('a.y-timetable-controls-finances-container__footer__sell').css('position', 'absolute');
    $('a.y-timetable-controls-finances-container__footer__sell').css('marginBottom', '10px');
    $('a.y-timetable-controls-finances-container__footer__sell').css('marginTop', '-10px');   
    $('a.y-timetable-controls-finances-container__footer__sell').css('color', '#1ab394');
    $('a.y-timetable-controls-finances-container__footer__sell').css('padding', '9px 30px');
    $('a.y-timetable-controls-finances-container__footer__sell').css('fontSize', '18px');
    $('a.y-timetable-controls-finances-container__footer__sell').css('border', '1px solid #1ab394');

    $('[dir] .y-timetable-controls-finances-container-link .y-timetable-controls-finances-container-link__item__title').css('textAlign', 'left');

    $('[dir] .y-timetable-controls-finances-container .y-timetable-controls-finances-container__body').css('paddingBottom', '20px');

    $('.y-timetable-controls-finances .y-clients__action-button-container.y-timetable-controls-action-button .y-button.y-button__size-medium.y-button__type-bs-white.y-clients__action-button.y-clients__action-button').css('letterSpacing', '2px');
    $('.y-timetable-controls-finances .y-clients__action-button-container.y-timetable-controls-action-button .y-button.y-button__size-medium.y-button__type-bs-white.y-clients__action-button.y-clients__action-button').css('width', '300px');

    $('.y-timetable-controls-finances .y-timetable-controls-action-button .y-button.y-button__size-medium.y-button__type-bs-white.y-clients__action-button.y-clients__action-button').css('backgroundColor', '#9ee5d7 important');
    $('.y-timetable-controls-finances .y-clients__action-button-container.y-timetable-controls-action-button .y-button.y-button__size-medium.y-button__type-bs-white.y-clients__action-button.y-clients__action-button').css('border', '1px solid #139b7f');
    $('.y-timetable-controls-finances .y-clients__action-button-container.y-timetable-controls-action-button .y-button.y-button__size-medium.y-button__type-bs-white.y-clients__action-button.y-clients__action-button').css('color', '#139b7f');

    if($('.v-payment__clients-info__client-row__item:nth-child(1)').length) {
        clientName = $('.v-payment__clients-info__client-row__item:nth-child(1)').text();
    }
    
    if($('.v-payment__clients-info__client-row__item:nth-child(3)').length) {
        clientEmail = $('.v-payment__clients-info__client-row__item:nth-child(3)').text();
        $('.v-payment__clients-info__client-row__item:nth-child(3)').remove();
    }
                
    if($('.v-payment__clients-info__client-row__item:nth-child(2)').length) {
        clientPhone = $('.v-payment__clients-info__client-row__item:nth-child(2)').text();
        $('.v-payment__clients-info__client-row__item:nth-child(2)').remove();
    }
    

}, 10);

$(document).ready(function() {
setInterval(function(){
    if($('#app_pay_load:visible').length) checkIcountError = checkIcountError + 1;
    else checkIcountError = 0;
    console.log(checkIcountError);
    if(checkIcountError == 10) {
        $('#app_pay_load').hide();
        $('#app_pay_load_error').show();
    }
}, 1000)
});

$(document).ready(function(){
    if(location.host == 'secure5.tranzila.com'){
        var trim = function(text){
            text = text + '';
            return text.replace(/^\s+|\s+$/g, '');
        }
        
        if($('pre').html().indexOf('Response=000') != -1){
            //$('#app_pay_load').show();
            //$('#app_pay_iframe').hide();
            
            var paymentId = location.href + '';
            paymentId = explode('paymentId=', paymentId);
            paymentId = paymentId[1]
            
            var sendData = new Object;
            sendData['action'] = 'ccPaymentOK';
            sendData['data'] = trim($('pre').html());
            
            chrome.runtime.sendMessage(sendData);
        } else {
            $('pre').html('Произошла ошибка при оплате. Закройте окно и попробуйте еще раз.');
        }
    }
    
    var lll = location.href + '';
    if(lll.indexOf('terminal2.php') != -1){
        var trim = function(text){
            text = text + '';
            return text.replace(/^\s+|\s+$/g, '');
        }
        
        if($('pre').html().indexOf('Response=000') != -1){
            
            var sendData = new Object;
            sendData['action'] = 'ccPaymentOK';
            sendData['data'] = trim($('pre').html());
            
            chrome.runtime.sendMessage(sendData);
        } else {
            $('pre').html('Произошла ошибка при оплате. Закройте окно и попробуйте еще раз.');
        }
    }
    
    
    if(location.host == 'direct.tranzila.com' && location.href.indexOf('&data=') != -1){
        var trim = function(text){
            text = text + '';
            return text.replace(/^\s+|\s+$/g, '');
        }
        
        var data = location.href + '';
        data = explode('&data=', data);
        data = data[1];
        data = decodeURIComponent(data.replace(/\+/g, ' '));
        /*
        var card = explode('?;', data);
        card = card[1];
        card = explode('=', card);
        var date = card[1];
        card = trim(card[0]);
        */
        
        /*
        var card = explode('*', data);
        card = card[card.length - 1];
        card = explode('=', card);
        var date = card[1];
        card = trim(card[0]);
        */
        
        var card = explode('=', data);
        var date = card[1];
        card = card[0];
        /*
        var l = card.length - 4;
        card = card.substr(l, 4);
        */
        
        
        setTimeout(function(){
            $('#cardNumber').val(card);
            $('#expmonth').val(date.substr(2, 2));
            $('#expyear').val(date.substr(0, 2) * 1);
        }, 500);
        
        /*
        $('#expyear option').each(function(){
            if($(this).attr('value') == date.substr(0, 2)) $(this).attr('selected', 'selected');
            else $(this).removeAttr('selected');
        });
        */
        
    }
});

chrome.storage.sync.get(['kassirInfo'], function(result) {
    var kassirInfo = result['kassirInfo'];
    
    if(kassirInfo != undefined && kassirInfo != 0 && location.host == 'app.alteg.io'){
        var yclientsId, recordId, paymentData, loadedDoc = 0, ccInterval, addedGoods = new Array;

        yclientsId = location.pathname + '';
        if(yclientsId.indexOf('/timetable/') != -1){
            yclientsId = explode('/timetable/', yclientsId);
            yclientsId = yclientsId[1];
        }
        if(yclientsId.indexOf('/dashboard_records/') != -1){
            yclientsId = explode('/dashboard_records/', yclientsId);
            yclientsId = yclientsId[1];
        }
        yclientsId = yclientsId.replace('/', '');
        yclientsId = yclientsId * 1;
        
        if(kassirInfo.yclientsId == yclientsId){    
            // Добавление popupов
            $(document).ready(function(){
                $(document).on('click', '.goods-table-footer__add-button a', function(){
                    $('.goods-table__goods-item-autocomplete input:last').focus();
                });
                
                // При удалении записи чистим данные
                //$(document).on('click', '#record_delete', function(){
                //    paymentData = undefined;
                //});
                
                // Обновление данных по оплатам
                $(document).on('click', '.xotchot', function(){
                    //window.open('https://api.marina-kogan.co.il/api/otchot.php?type=' + $(this).attr('class') + '&kassaId=' + $(this).data('kassa') + '&authKey=' + kassirInfo.authKey);
                    $('#app_pay_1_popup').hide();
                    $('#app_pay_2_popup').hide();
                    $('#app_pay_3_popup').hide();
                    $('#app_pay_4_popup').hide();
                    $('#app_pay_load').hide();
                    $('#app_pay_load_error').hide();
                    $('#app_pay_iframe').hide();
                    $('#app_chek_iframe').show();
                    $('#appButtonsPopup').show();
                    $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=' + $(this).attr('class') + '&kassaId=' + $(this).data('kassa') + '&authKey=' + kassirInfo.authKey);
                    
                    $('.y-timetable-controls-finances .y-clients__action-button-container').click();
                });
                
                $(document).on('click', '.zotchot', function(){
                    if(sum = prompt('Остаток наличных в кассе в конце дня')){
                        //window.open('https://api.marina-kogan.co.il/api/otchot.php?type=' + $(this).attr('class') + '&kassaId=' + $(this).data('kassa') + '&endsum=' + sum + '&authKey=' + kassirInfo.authKey);
                        
                        $('#app_pay_1_popup').hide();
                        $('#app_pay_2_popup').hide();
                        $('#app_pay_3_popup').hide();
                        $('#app_pay_4_popup').hide();
                        $('#app_pay_load').hide();
                        $('#app_pay_load_error').hide();
                        $('#app_pay_iframe').hide();
                        $('#app_chek_iframe').show();
                        $('#appButtonsPopup').show();
                        $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=' + $(this).attr('class') + '&kassaId=' + $(this).data('kassa') + '&endsum=' + sum + '&authKey=' + kassirInfo.authKey);
                        
                        $('.y-timetable-controls-finances .y-clients__action-button-container').click();    
                    }
                });
                
                $(document).on('click', '.potchot', function(){
                    window.open('https://api.marina-kogan.co.il/api/potchot.php?kassaId=' + $(this).data('kassa') + '&authKey=' + kassirInfo.authKey);
                    
                    $('.y-timetable-controls-finances .y-clients__action-button-container').click();
                });

                $(document).on('mousedown', '.y-timetable-record, .y-timetable-record-header', function(){
                    recordId = $(this).data('locator');
                    recordId = explode('_', recordId);
                    recordId = recordId[1] * 1;
                    loadedDoc = 0;
                    var sendData = new Object;
                    sendData['action'] = 'getDoc';
                    sendData['data'] = new Object;
                    sendData['data']['yclientsId'] = yclientsId;
                    sendData['data']['recordId'] = recordId;
                    chrome.runtime.sendMessage(sendData);
                });
                
                
                $(document).on('click', '.view-record-popup', function(){
                    recordId = $(this).data('rec-id');
                    
                    loadedDoc = 0;
                    var sendData = new Object;
                    sendData['action'] = 'getDoc';
                    sendData['data'] = new Object;
                    sendData['data']['yclientsId'] = yclientsId;
                    sendData['data']['recordId'] = recordId;
                    chrome.runtime.sendMessage(sendData);
                });
                
                $(document).on('click', '#btn_open_check', function(){
                    //openCheck(loadedDoc);
                    //window.open('https://api.marina-kogan.co.il/api/otchot.php?type=payOpen&yclientsId=' + yclientsId + '&recordId=' + recordId + '&authKey=' + kassirInfo.authKey);
                    $('#app_pay_1_popup').hide();
                    $('#app_pay_2_popup').hide();
                    $('#app_pay_3_popup').hide();
                    $('#app_pay_4_popup').hide();
                    $('#app_pay_load').hide();
                    $('#app_pay_load_error').hide();
                    $('#app_pay_iframe').hide();
                    $('#app_chek_iframe').show();
                    $('#appButtonsPopup').show();
                    $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=payOpen&yclientsId=' + yclientsId + '&recordId=' + recordId + '&authKey=' + kassirInfo.authKey);
                });
                
                $(document).on('click', '#btn_remove_doc', function(){
                    if(reason = prompt('Укажите причину отмены')){
                        var sendData = new Object;
                        sendData['action'] = 'removeDoc';
                        sendData['docnum'] = loadedDoc.docnum;
                        sendData['id'] = loadedDoc.id;
                        sendData['yclientsId'] = yclientsId;
                        sendData['recordId'] = recordId;
                        sendData['reason'] = reason;
                        chrome.runtime.sendMessage(sendData);
                    }
                });
                
                $(document).on('click', '.goods-selling-modal .save_trans_button', function(){
                    addedGoods = new Array;
                    
                    $('.goods-selling-modal .goods-selling__goods-table-row').each(function(){
                        var item = new Object;
                        item['description'] = trim($(this).find('.goods-selling__goods-table-row__good-item input').val());
                        item['unitprice_incvat'] = trim($(this).find('.goods-selling__goods-table-row__total input').val()) / trim($(this).find('.goods-selling__goods-table-row__quantity input').val());
                        item['sum0'] = trim($(this).find('.goods-selling__goods-table-row__price input').val()) * trim($(this).find('.goods-selling__goods-table-row__quantity input').val()); 
                        item['quantity'] = trim($(this).find('.goods-selling__goods-table-row__quantity input').val()) * 1;
                        item['discount'] = trim($(this).find('.goods-selling__goods-table-row__discount input').val()) * 1;
                        item['id'] = 0;
                        
                        addedGoods.push(item);
                    });
                });
                
                var block = '\
                <div id="appButtonsPopup" style="display:none; position:fixed; width:100%; height:100%; top:0; left:0; z-index:999999; background:rgba(0, 0, 0, 0.8);">\
                    <div id="app_pay_1_popup" class="app_pay_popup" style="width: 800px; position: fixed; top: 90px;  left: 30%; background: #ffffff; border: 1px solid rgb(77 158 45); border-radius: 25px; box-shadow: 0 0 10px 0px #4d9e2d, 0 0 0px 10px #ffffff; padding: 25px 20px 15px; font-size: 15px; letter-spacing: 1px;">\
                        <div class="inner">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:30px; line-height:40px; margin-left:20px; font-size: 20px; color: #4d9e2d; font-weight: 400;">Оплата наличными</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:30px; height:30px; border:solid 1px #666; border-radius:25px; margin-top:0; margin-right:15px; cursor:pointer; text-align:center; padding-top:4px; color: #4d9e2d; font-size: 22px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px; text-align:center; display: flex; align-items: center;">\
                                <div style="text-align:left; margin-left:auto; display:inline-block; vertical-align:top; width:300px;">\
                                    <div style="font-size:1.6em; font-weight:bold letter-spacing: 2px; border-bottom: 1px solid #4d9e2d;">К оплате: <span style="color:#4d9e2d"><span class="summ">50</span> ₪</span></div>\
                                    <label style="display:block; margin-top:18px; margin-bottom:5px; color:#aaa; font-weight:400; font-size:1em; ">Внесено:</label>\
                                    <input class="pay" style="font-weight:bold; border:0; border:solid 1px #4d9e2d; border-radius: 5px; outline: 0; width:300px; font-size: 24px; color: black; padding: 6px; letter-spacing: 5px; text-align: center;" value="" />\
                                    <div style="margin-top:24px; font-size:1.2em; font-weight:bold;">Сдача: <span style="color:#4d9e2d"><span class="sdacha">0</span> ₪</span></div>\
                                    <button class="notDoc" style="display:inline-block; width:150px; height:40px; color:#3f51b5; border:solid 1px #4d9e2d; border-radius:5px; margin-top:25px; background: #4d9e2d; color:#fff">Оплатить</button>\
                                    <button style="display:inline-block; width:115px; height:40px; color:#000; border:solid 1px #ccc; border-radius:5px; margin-top:25px; float: right;">Оплачено..</button>\
                                </div>\
                                <div style="margin-right:auto; display:inline-block; vertical-align:top; width:250px; margin-left:80px; margin-bottom: -20px;">\
                                <div class="keyboard" data-key="1" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">1</div>\
                                <div class="keyboard" data-key="2" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">2</div>\
                                <div class="keyboard" data-key="3" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">3</div>\
                                <div class="keyboard" data-key="4" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">4</div>\
                                <div class="keyboard" data-key="5" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">5</div>\
                                <div class="keyboard" data-key="6" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">6</div>\
                                <div class="keyboard" data-key="7" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">7</div>\
                                <div class="keyboard" data-key="8" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">8</div>\
                                <div class="keyboard" data-key="9" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">9</div>\
                                <div class="keyboard" data-key="0" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">0</div>\
                                <div class="keyboard" data-key="00" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">00</div>\
                                <div class="keyboard" data-key="<" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;"><</div>\
                                </div>\
                            </div>\
                            <div style="border: 5px solid #d6e9cf; border-radius: 25px; width: 75%; margin-top: 70px; position: absolute; left: 90px; background: white; padding: 5px 30px 10px;">\
                                <div><img src="https://api.marina-kogan.co.il/public/images/Secure.jpg" alt="" style="width: 100%;  border-radius: 25px; padding: 5px 20px;"> </div>\
                                <div><h3 style="text-align: center; font-size: 14px; text-decoration: underline; "> Сертификация и безопасность платежей 100% обеспечено</h3> </div>\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_5_popup" class="app_pay_popup" style="width: 800px; position: fixed; top: 90px;  left: 30%; background: #ffffff; border: 1px solid rgb(77 158 45); border-radius: 25px; box-shadow: 0 0 10px 0px #4d9e2d, 0 0 0px 10px #ffffff; padding: 25px 20px 15px; font-size: 15px; letter-spacing: 1px;">\
                    <div class="inner">\
                        <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                            <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:30px; line-height:40px; margin-left:20px; font-size: 20px; color: #4d9e2d; font-weight: 400;">Оплата наличными</h4>\
                            <i style="display:inline-block; vertical-align:top; float:right; width:30px; height:30px; border:solid 1px #666; border-radius:25px; margin-top:0; margin-right:15px; cursor:pointer; text-align:center; padding-top:4px; color: #4d9e2d; font-size: 22px;" class="appButtonsPopupClose fa fa-close"></i>\
                        </div>\
                        <div style="width:100%; height:100%; padding:30px; text-align:center; display: flex; align-items: center;">\
                            <div style="text-align:left; margin-left:auto; display:inline-block; vertical-align:top; width:300px;">\
                                <div style="font-size:1.6em; font-weight:bold letter-spacing: 2px; border-bottom: 1px solid #4d9e2d;">К оплате: <span style="color:#4d9e2d"><span class="summ">50</span> ₪</span></div>\
                                <label style="display:block; margin-top:18px; margin-bottom:5px; color:#aaa; font-weight:400; font-size:1em; ">Внесено:</label>\
                                <input class="pay" style="font-weight:bold; border:0; border:solid 1px #4d9e2d; border-radius: 5px; outline: 0; width:300px; font-size: 24px; color: black; padding: 6px; letter-spacing: 5px; text-align: center;" value="" />\
                                <div style="margin-top:24px; font-size:1.2em; font-weight:bold;">Сдача: <span style="color:#4d9e2d"><span class="sdacha">0</span> ₪</span></div>\
                                <button class="notDoc" style="display:inline-block; width:150px; height:40px; color:#3f51b5; border:solid 1px #4d9e2d; border-radius:5px; margin-top:25px; background: #4d9e2d; color:#fff">Оплатить</button>\
                                <button style="display:inline-block; width:115px; height:40px; color:#000; border:solid 1px #ccc; border-radius:5px; margin-top:25px; float: right;">Оплачено..</button>\
                            </div>\
                            <div style="margin-right:auto; display:inline-block; vertical-align:top; width:250px; margin-left:80px; margin-bottom: -20px;">\
                            <div class="keyboard" data-key="1" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">1</div>\
                            <div class="keyboard" data-key="2" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">2</div>\
                            <div class="keyboard" data-key="3" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">3</div>\
                            <div class="keyboard" data-key="4" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">4</div>\
                            <div class="keyboard" data-key="5" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">5</div>\
                            <div class="keyboard" data-key="6" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">6</div>\
                            <div class="keyboard" data-key="7" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">7</div>\
                            <div class="keyboard" data-key="8" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">8</div>\
                            <div class="keyboard" data-key="9" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">9</div>\
                            <div class="keyboard" data-key="0" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">0</div>\
                            <div class="keyboard" data-key="00" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">00</div>\
                            <div class="keyboard" data-key="<" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;"><</div>\
                            </div>\
                        </div>\
                        <div style="border: 5px solid #d6e9cf; border-radius: 25px; width: 75%; margin-top: 70px; position: absolute; left: 90px; background: white; padding: 5px 30px 10px;">\
                            <div><img src="https://api.marina-kogan.co.il/public/images/Secure.jpg" alt="" style="width: 100%;  border-radius: 25px; padding: 5px 20px;"> </div>\
                            <div><h3 style="text-align: center; font-size: 14px; text-decoration: underline; "> Сертификация и безопасность платежей 100% обеспечено</h3> </div>\
                        </div>\
                    </div>\
                </div>\
                \
                \
                \
                \
                    <div id="app_pay_2_popup" class="app_pay_popup" style="width: 800px; position: fixed; top: 90px;  left: 30%; background: #ffffff; border: 1px solid rgb(77 158 45); border-radius: 25px; box-shadow: 0 0 10px 0px #4d9e2d, 0 0 0px 10px #ffffff; padding: 25px 20px 15px; font-size: 15px; letter-spacing: 1px;">\
                        <div class="inner">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:30px; line-height:40px; margin-left:20px; font-size: 20px; color: #4d9e2d; font-weight: 400;">Оплата картой</h4>\
                                <img src="https://api.marina-kogan.co.il/public/images/tranzila.jpg" alt="" style="width: 25%; margin-left: 73px; margin-top: -10px;">\
                                <i style="display:inline-block; vertical-align:top; float:right; width:30px; height:30px; border:solid 1px #666; border-radius:25px; margin-top:0; margin-right:15px; cursor:pointer; text-align:center; padding-top:4px; color: #4d9e2d; font-size: 22px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px; text-align:center; display: flex; align-items: center;">\
                                <div style="text-align:left; margin-left:auto; display:inline-block; vertical-align:top; width:300px;">\
                                <div style="font-size:1.6em; font-weight:bold letter-spacing: 2px; border-bottom: 1px solid;">К оплате: <span style="color:#4d9e2d"><span class="summ">50</span> ₪</span></div>\
                                    <label style="display:block; margin-top:25px; margin-bottom:5px; color:#aaa; font-weight:400; font-size:1em;">Внесено:</label>\
                                    <input class="pay" style=" margin-bottom: 10px; font-weight:bold; border:0; border:solid 1px #4d9e2d; border-radius: 5px; outline: 0; width:300px; font-size: 24px; color: black; padding: 6px; letter-spacing: 5px; text-align: center;" value="" />\
                                    <div style="margin-top:30px; font-size:1.2em; font-weight:bold;">Выбор платежей: <select class="count" style="width:41px; padding:2px 10px; margin-left: 10px; border-radius:5px;"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>\
                                    <button style="display:inline-block; width:140px; height:40px; color:#3f51b5; border:solid 1px #4d9e2d; border-radius:5px; margin-top:35px; background: #4d9e2d; color:#fff ">Оплатить</button>\
                                </div>\
                                <div style="margin-right:auto; display:inline-block; vertical-align:top; width:250px; margin-left:80px; margin-bottom: -20px;">\
                                <div class="keyboard" data-key="1" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">1</div>\
                                <div class="keyboard" data-key="2" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">2</div>\
                                <div class="keyboard" data-key="3" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">3</div>\
                                <div class="keyboard" data-key="4" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">4</div>\
                                <div class="keyboard" data-key="5" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">5</div>\
                                <div class="keyboard" data-key="6" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">6</div>\
                                <div class="keyboard" data-key="7" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">7</div>\
                                <div class="keyboard" data-key="8" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">8</div>\
                                <div class="keyboard" data-key="9" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">9</div>\
                                <div class="keyboard" data-key="0" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">0</div>\
                                <div class="keyboard" data-key="00" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">00</div>\
                                <div class="keyboard" data-key="<" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;"><</div>\
                                </div>\
                            </div>\
                            <div style="border: 5px solid #d6e9cf; border-radius: 25px; width: 75%; margin-top: 70px; position: absolute; left: 90px; background: white; padding: 5px 30px 10px;">\
                                <div><img src="https://api.marina-kogan.co.il/public/images/Secure.jpg" alt="" style="width: 100%;  border-radius: 25px; padding: 5px 20px;"> </div>\
                                <div><h3 style="text-align: center; font-size: 14px; text-decoration: underline; "> Сертификация и безопасность платежей 100% обеспечено</h3> </div>\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_3_popup" class="app_pay_popup" style=" overflow: auto; width: 900px; position: fixed; top: 90px;  left: 28%; background: #ffffff; border: 1px solid rgb(77 158 45); border-radius: 25px; box-shadow: 0 0 10px 0px #4d9e2d, 0 0 0px 10px #ffffff; padding: 25px 20px 15px; font-size: 15px; letter-spacing: 1px;">\
                        <div class="inner" style="overflow-y:auto">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:30px; line-height:40px; margin-left:20px; font-size: 20px; color: #4d9e2d; font-weight: 400;">Оплата чеком</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:26px; height:26px; border:solid 1px #666; border-radius:26px; margin-top:7px; margin-right:10px; cursor:pointer; text-align:center; padding-top:5px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px; text-align:center;">\
                                <div class="one" style=" border: 2px dashed #4d9e2d; margin-top: 10px; display: inline-flex; margin-bottom: 10px; text-align: left; padding: 0px 0px 0px 40px; color: #3343a4; background: #4d9e2d26; border-radius: 6px; box-shadow: -2px 2px 10px 0px rgb(0 0 0 / 20%); flex-wrap: wrap;">\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Дата</label>\
                                        <input placeholder="дд.мм.гггг" class="date" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" />\
                                    </div>\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Номер банка</label>\
                                        <input class="bank" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" value="" />\
                                    </div>\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Номер отделения</label>\
                                        <input class="otdelenie" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" value="" />\
                                    </div>\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Номер счета</label>\
                                        <input class="account" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" value="" />\
                                    </div>\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Номер чека</label>\
                                        <input class="check" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" value="" />\
                                    </div>\
                                    <div style="width:30%; display:inline-block; vertical-align:top">\
                                        <label style="display:block; margin-top:25px; margin-bottom:5px; color:#393939; font-weight:600; font-size:1em;">Сумма</label>\
                                        <input class="summ" style="background:transparent; font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:150px; background: #ffffff75; padding-top: 3px; text-align: center;" value="" />\
                                    </div>\
                                    <div style="width: 10%;  display: flex; vertical-align: top; flex-direction: column; align-items: center; padding: 15px 0px 0px 0px; border-left: 1px dashed #393939; height: 180px; margin-top: -77px; background: #f1f6f9;">\
                                        <span class="remove fa fa-trash" style="font-size:1.4em; margin-top: 23px; cursor:pointer; color: #25630d;"></span>\
                                        <span class="copy fa fa-file-o" style="float:right; font-size:1.4em; margin-top:71px; cursor:pointer; color: #25630d; "></span>\
                                    </div>\
                                </div>\
                                <div>\
                                   <button style="display:inline-block; width:140px; height:40px; color:#3f51b5; border:solid 1px #4d9e2d; border-radius:5px; margin-top:35px; background: #4d9e2d; color:#fff ">Оплатить</button>\
                                   <div><label style="margin-top: 70px; color: #fe0000;"> Пример положение номеров на банковском чеке </label></div>\
                                   <div><img src="https://api.marina-kogan.co.il/chek-demo.png" alt="" style="width: 750px !important; border: 2px solid #4d9e2d;"> </div>\
                                </div>\
                                <div style="border: 5px solid #d6e9cf; border-radius: 25px; width: 75%; margin-top: 100px; position: absolute; left: 90px; background: white; padding: 5px 30px 10px;">\
                                   <div><img src="https://api.marina-kogan.co.il/public/images/Secure.jpg" alt="" style="width: 100%;  border-radius: 25px; padding: 5px 20px;"> </div>\
                                   <div><h3 style="text-align: center; font-size: 14px; text-decoration: underline; "> Сертификация и безопасность платежей 100% обеспечено</h3> </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_4_popup" class="app_pay_popup" style="width: 800px; position: fixed; top: 90px;  left: 30%; background: #ffffff; border: 1px solid rgb(77 158 45); border-radius: 25px; box-shadow: 0 0 10px 0px #4d9e2d, 0 0 0px 10px #ffffff; padding: 25px 20px 15px; font-size: 15px; letter-spacing: 1px;">\
                        <div class="inner">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:30px; line-height:40px; margin-left:20px; font-size: 20px; color: #4d9e2d; font-weight: 400;">Оплата безналом</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:30px; height:30px; border:solid 1px #666; border-radius:25px; margin-top:0; margin-right:15px; cursor:pointer; text-align:center; padding-top:4px; color: #4d9e2d; font-size: 22px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px 0 0 0; text-align:center; display: flex;">\
                                <div style="text-align:left; margin-left:auto; display:inline-block; vertical-align:top; width:300px;">\
                                    <div style="font-size:1.6em; font-weight:bold letter-spacing: 2px; border-bottom: 1px solid;">К оплате: <span style="color:#4d9e2d"><span class="summ">50</span> ₪</span></div>\
                                    <label style="display:block; margin-top:16px; margin-bottom:5px; color:#aaa; font-weight:400; font-size:1em;">Внесено:</label>\
                                    <input class="pay" style="font-weight:bold; border:0; border:solid 1px #4d9e2d; outline: 0; width:300px; border-radius: 5px; letter-spacing: 3px; font-size: 22px; padding: 5px 15px;" value="" />\
                                    <label style="display:block; margin-top:16px; margin-bottom:5px; color:#4d9e2d; font-weight:400; font-size:1em;">Дата перевода:</label>\
                                    <input placeholder="дд.мм.гггг" class="date" style="font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:300px; padding-left: 10px;" value="" />\
                                    <label style="display:block; margin-top:16px; margin-bottom:5px; color:#4d9e2d; font-weight:400; font-size:1em;">Номер счета:</label>\
                                    <select class="schot" style="font-weight:bold; border:0; border-bottom:solid 1px #ccc; outline: 0; width:300px; padding-left: 10px;">\
                                        <option value="1101">bank mizrahi</option>\
                                        <option value="1102">bit</option>\
                                    </select>\
                                </div>\
                                <div style="margin-right:auto; display:inline-block; vertical-align:top; width:250px; margin-left:80px; margin-bottom: -20px;">\
                                <div class="keyboard" data-key="1" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">1</div>\
                                <div class="keyboard" data-key="2" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">2</div>\
                                <div class="keyboard" data-key="3" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">3</div>\
                                <div class="keyboard" data-key="4" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">4</div>\
                                <div class="keyboard" data-key="5" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">5</div>\
                                <div class="keyboard" data-key="6" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">6</div>\
                                <div class="keyboard" data-key="7" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">7</div>\
                                <div class="keyboard" data-key="8" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">8</div>\
                                <div class="keyboard" data-key="9" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">9</div>\
                                <div class="keyboard" data-key="0" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">0</div>\
                                <div class="keyboard" data-key="00" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;">00</div>\
                                <div class="keyboard" data-key="<" style="width:70px; height:50px; line-height:50px; text-align:center; border:solid 1px #ccc; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer; display:inline-block; box-shadow: inset 0 0 4px 3px #ededed, -2px 2px 5px 0px #4d9e2d5c; margin:0 0 16px 10px;"><</div>\
                                <div><img src="https://api.marina-kogan.co.il/public/images/mizrahi.jpg" alt="" style="width: 250px !important;  margin-left: 10px; "> </div>\
                                </div>\
                            </div>\
                            <div style="margin-top: -30px; margin-bottom: 10px;">\
                                <button style="display:inline-block; width:140px; height:40px; color:#3f51b5; border:solid 1px #4d9e2d; border-radius:5px; margin-bottom:25px; margin-left: 65px; background: #4d9e2d; color:#fff">Оплатить</button>\
                            </div>\
                            <div style="border: 5px solid #d6e9cf; border-radius: 25px; width: 75%; margin-top: 70px; position: absolute; left: 90px; background: white; padding: 5px 30px 10px;">\
                               <div><img src="https://api.marina-kogan.co.il/public/images/Secure.jpg" alt="" style="width: 100%;  border-radius: 25px; padding: 5px 20px;"> </div>\
                               <div><h3 style="text-align: center; font-size: 14px; text-decoration: underline; "> Сертификация и безопасность платежей 100% обеспечено</h3> </div>\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_load_error" style="display:none; width:800px; height:250px; position:fixed; top:0; left:50%; margin:50px 0 0 -400px; background:#fff; border:solid 2px #000; border-radius:5px;">\
                        <div class="inner">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:40px; line-height:40px; margin-left:20px;">Подождите</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:26px; height:26px; border:solid 1px #666; border-radius:26px; margin-top:7px; margin-right:10px; cursor:pointer; text-align:center; padding-top:5px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px; text-align:center;">\
                                Произошла ошибка при создании чека<br />\
                                Попробуйте еще раз\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_load" style="display:none; width:800px; height:250px; position:fixed; top:0; left:50%; margin:50px 0 0 -400px; background:#fff; border:solid 2px #000; border-radius:5px;">\
                        <div class="inner">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:40px; line-height:40px; margin-left:20px;">Подождите</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:26px; height:26px; border:solid 1px #666; border-radius:26px; margin-top:7px; margin-right:10px; cursor:pointer; text-align:center; padding-top:5px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <div style="width:100%; height:100%; padding:30px; text-align:center;">\
                                <img src="https://api.marina-kogan.co.il/public/images/load.gif" style="width:60px; display:block; margin:20px auto;">\
                                Идет отправка данных...\
                            </div>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_pay_iframe" style="display:none; width:800px; height:800px; position:fixed; top:0; left:50%; margin:50px 0 0 -400px; background:#fff; border:solid 2px #000; border-radius:5px;">\
                        <div class="inner" style="width:100%; height:100%;">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc;">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:40px; line-height:40px; margin-left:20px;">Оплата картой</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:26px; height:26px; border:solid 1px #666; border-radius:26px; margin-top:7px; margin-right:10px; cursor:pointer; text-align:center; padding-top:5px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <iframe style="width:100%; height:100%; border:0;"></iframe>\
                        </div>\
                    </div>\
                    \
                    \
                    \
                    \
                    <div id="app_chek_iframe" style="display:none; width:800px; height:800px; position:fixed; top:0; left:50%; margin:50px 0 0 -400px; background:#fff; border:solid 2px #000; border-radius:5px;">\
                        <div class="inner" style="width:100%; height:100%; ">\
                            <div style="height:40px; line-height:40px; border-bottom:solid 1px #ccc; margin:10px">\
                                <h4 style="margin:0; padding:0; display:inline-block; vertical-align:top; height:40px; line-height:40px; margin-left:20px;">Отчет</h4>\
                                <i style="display:inline-block; vertical-align:top; float:right; width:26px; height:26px; border:solid 1px #666; border-radius:26px; margin-top:7px; margin-right:10px; cursor:pointer; text-align:center; padding-top:5px;" class="appButtonsPopupClose fa fa-close"></i>\
                            </div>\
                            <iframe style="width:100%; height:100%; border:0;"></iframe>\
                        </div>\
                    </div>\
                </div>\
                <script>$(".date").datepicker();</script>\
                <style>.popup_datepicker{z-index: 1000000! important}</style>\
                ';
                $('body').append(block);
                
                // Закрытие popupов
                $('.appButtonsPopupClose').click(function(){
                    paymentData['banktransfer'] = undefined;
                    clearInterval(ccInterval);
                    $('#appButtonsPopup').hide();
                    $('#app_pay_1_popup').hide();
                    $('#app_pay_2_popup').hide();
                    $('#app_pay_3_popup').hide();
                    $('#app_pay_4_popup').hide();
                    $('#app_pay_load').hide();
                    $('#app_pay_load_error').hide();
                    $('#app_pay_iframe').hide();
                    $('#app_chek_iframe').hide();
                });
                $('#appButtonsPopup').click(function(event) {
                    if ($(event.target).closest("#appButtonsPopup .inner").length) return;
                    paymentData['banktransfer'] = undefined;
                    //if ($("#appButtonsPopup #app_pay_load:visible").length) return;
                    clearInterval(ccInterval);
                    $('#appButtonsPopup').hide();
                    $('#app_pay_1_popup').hide();
                    $('#app_pay_2_popup').hide();
                    $('#app_pay_3_popup').hide();
                    $('#app_pay_4_popup').hide();
                    $('#app_pay_load').hide();
                    $('#app_pay_load_error').hide();
                    $('#app_pay_iframe').hide();
                    $('#app_chek_iframe').hide();
                    event.stopPropagation();
                });
                
                
                var sdacha = function(){
                    var sdacha = $('#app_pay_1_popup .pay').val()*1 - $('#app_pay_1_popup .summ').html()*1;
                    if(sdacha < 0) sdacha = 0;
                    sdacha = round(sdacha, 2);
                    $('#app_pay_1_popup .sdacha').html(sdacha);
                    
                    if($('#app_pay_1_popup .pay').val() * 1 < $('#app_pay_1_popup .summ').html() * 1) $('#app_pay_1_popup .notDoc').attr('disabled', 'disables');
                    else $('#app_pay_1_popup .notDoc').removeAttr('disabled');
                }
                
                // События нажатия клавиатуры
                $('.app_pay_popup .keyboard').click(function(){
                    if($(this).data('key') == '<'){
                        $(this).parents('.app_pay_popup').find('.pay').val('');
                    } else {
                        $(this).parents('.app_pay_popup').find('.pay').val($(this).parents('.app_pay_popup').find('.pay').val() + '' + $(this).data('key'));
                    }
                    if($(this).parents('.app_pay_popup').attr('id') == 'app_pay_1_popup') sdacha();
                });
                
                // Событие ввода суммы
                $('#app_pay_1_popup .pay').keyup(function(){
                    sdacha();
                })
                
                // Клонирование чека
                $('body').on('click', '#app_pay_3_popup .one .copy', function(){
                    var clone = $(this).parents('.one').clone();
                    if($(clone).find('.date').val()){
                        var date = explode('.', $(clone).find('.date').val());
                        date[1] = date[1] * 1 + 1;
                        if(date[1] == 13){
                            date[1] = 1;
                            date[2] = date[2] * 1 + 1;
                        }
                        if(date[1] < 10) date[1] = '0' + date[1];
                        $(clone).find('.date').val(date[0] + '.' + date[1] + '.' + date[2]);
                        $(clone).find('.check').val($(clone).find('.check').val() * 1 + 1);
                    }
                    
                    
                    $(this).parents('.one').after(clone);
                });
                
                // Удаление чека
                $('body').on('click', '#app_pay_3_popup .one .remove', function(){
                    $(this).parents('.one').remove();
                });
            });
            
            
            
            // Проверка наличия стандартных кнопок, если есть - заменяем их на наши
              

                                    
                    
            setInterval(function(){
                $('#save_record_and_pay').hide();
                $('#save_record_and_pay_bank').hide();

                $('.v-payment__print-pdf-check-link').remove();
                $('.y-tabs').remove();
                $('.v-record-acquiring-payment').remove();

                $('.v-payment__payment-info__paid__caption').css('fontSize', '1.2em');
                $('.v-payment__payment-info__paid__caption').css('fontWeight', '700');
                $('.v-payment__payment-info__paid__price').css('fontSize', '1.2em');
                $('.v-payment__payment-info__paid').css('backgroundColor', '#ebf8f2');
                $('.v-payment__payment-info__paid').css('padding', '12px');
                $('.v-payment__payment-info__paid').css('border', '1px solid #d1d1d1');

                $('.v-payment__payment-info__paid__type').css('lineHeight', '3em');

                $('.payment__payment-info__paid__caption').css('color', '#000');

                $('.v-payment__payment-info__paid__price').css('color', '#f49b39');

                $('td').css('color', '#626262');
                $('td').css('width', '55%');

                $('.top-divider tr').css('fontSize', '1.8em');

                $('.v-payment__payments-list__table__service-name').css('color', '#1a7bb9');
                $('.v-payment__payments-list__table__service-name').css('fontSize', '1.1em');

                $('.v-payment').css('marginBottom', '0px');

                $('[dir] .v-payment .v-payment__summary').css('marginBottom', '0px');

                $('.v-payment__clients-info').css('flexDirection', 'row');
                $('.v-payment__clients-info').css('justifyContent', 'center');
                $('.v-payment__clients-info').css('alignItems', 'center');

                $('[dir] .v-payment__clients-info .v-payment__clients-info__title').css('fontSize', '1.8em');
                $('[dir] .v-payment__clients-info .v-payment__clients-info__title').css('marginBottom', '0px');
                $('[dir] .v-payment__clients-info .v-payment__clients-info__title').css('marginRigh', '20px');

                $('.v-payment__clients-info__client-row__item.v-payment__clients-info__client-row__item-name').css('marginLeft', '20px');
                $('.v-payment__clients-info__client-row__item.v-payment__clients-info__client-row__item-name').css('fontSize', '1.8em');
                $('.v-payment__clients-info__client-row__item.v-payment__clients-info__client-row__item-name').css('color', '#23c6c8');

                $('.v-payment__clients-info .v-payment__clients-info__client-row__item__icon').css('color', '#f8ac59');
                $('.v-payment__clients-info .v-payment__clients-info__client-row__item__icon').css('marginRight', '10px');


                $('#neo_payments_div_2').css('padding', '10px');
                $('#neo_payments_div_2').css('backgroundColor', '#ebf8f2');
                $('#neo_payments_div_2').css('marginTop', '-15px');
                $('#neo_payments_div_2').css('borderRadius', '10px');

                $('tfoot.top-divider').css('display', 'none');



                
                var btn1 = '\
                            <div class="col-sm-6 xs-m-b" style="margin-bottom:10px; margin-top: 10px;">\
                                <button id="app_pay_1" class="btn btn-success btn-sm btn-block btn-outline pay-btn " style="border-radius: 25px; border-right: 15px solid #1a7bb9; display: flex; align-items: center; padding-left: 30px; font-size: 16px;">\
                                    <i class="fa fa-money pull-left fa-fw"></i>\
                                    <div class="pay-btn-text">\
                                        Оплатить наличными<br>\
                                    </div>\
                                </button>\
                            </div>\
                        ';
                        
                var btn2 = '\
                            <div class="col-sm-6 xs-m-b" style="margin-bottom:10px; margin-top: 10px;">\
                                <button id="app_pay_2" class="btn btn-info btn-sm btn-block btn-outline pay-btn" style="border-radius: 25px; border-right: 15px solid #23c6c8; display: flex; align-items: center; padding-left: 30px; font-size: 16px;">\
                                    <i class="fa fa-credit-card pull-left fa-fw"></i>\
                                    <div class="pay-btn-text">\
                                        Оплатить картой<br>\
                                    </div>\
                                </button>\
                            </div>\
                        ';
                        
                 var btn3 = '\
                            <div class="col-sm-6 xs-m-b" style="margin-bottom:10px; margin-top: 10px;">\
                                <button id="app_pay_3" class="btn btn-danger btn-sm btn-block btn-outline pay-btn" style="border-radius: 25px; border-right: 15px solid #ec4758; display: flex; align-items: center; padding-left: 30px; font-size: 16px;">\
                                    <i class="fa fa-newspaper-o pull-left fa-fw"></i>\
                                    <div class="pay-btn-text">\
                                        Оплатить чеком<br>\
                                    </div>\
                                </button>\
                            </div>\
                        ';
                        
                var btn4 = '\
                            <div class="col-sm-6 xs-m-b" style="margin-bottom:10px; margin-top: 10px;">\
                                <button id="app_pay_4" class="btn btn-warning btn-sm btn-block btn-outline pay-btn" style="border-radius: 25px; border-right: 15px solid #f8ac59; display: flex; align-items: center; padding-left: 30px; font-size: 16px;">\
                                    <i class="fa fa-university pull-left fa-fw"></i>\
                                    <div class="pay-btn-text">\
                                        Оплатить безналом<br>\
                                    </div>\
                                </button>\
                            </div>\
                        ';
                var btn5 = '\
                            <div class="col-sm-8 xs-m-b" style=" border-bottom: 1px solid #c9c9c9; width: 100%; padding: 25px 100px 25px 100px; margin-bottom: 4px;">\
                               <button id="app_pay_5" class="btn btn-outline-dark" style="display: flex; font-size: 20px;  align-items: center;  justify-content: center; margin: auto; width: 50%; padding: 8px; border: 1px solid #989898; border-right: 15px solid; border-left: 15px solid; border-radius: 25px;">\
                                    <i class="fa fa-check-square-o" aria-hidden="true" style="margin: 2px 15px 0 0;"></i>\
                                    <div class="pay-btn-text">\
                                        Оплачено<br>\
                                    </div>\
                               </button>\
                           </div>\
                        '; 
                    
                if($('#save_visit_and_pay:visible').length && $('#save_visit_and_pay:visible').length){
                    var element = $('#save_visit_and_pay').parents('.payments-content');
                    
                    $('#save_visit_and_pay').css('display', 'none');
                    $('#save_visit_and_pay_bank').css('display', 'none');
                    

                    //document.getElementsByClassName('v-payment__payment-info__paid__caption')[0].style= "font-size: 18px; font-weight: 400; color: #000; margin-left: 25px;"

                    /*
                    $(element).append(btn1);
                    $(element).append(btn2);
                    $(element).append(btn3);
                    $(element).append(btn4);
                    $(element).append(btn5);
                    */ 
                }
                
                
                
                if($('.v-payment__cashbox-controls__accounts .v-payment__cashbox-button:visible').length){
                    
                    var element = $('.v-payment__cashbox-controls__accounts .v-payment__cashbox-button').parents('.v-payment__cashbox-controls__accounts');
                    
                    $('.v-payment__cashbox-controls__accounts .v-payment__cashbox-button').css('display', 'none');
                    $('.v-payment__section').css('overflow', 'hidden');
                    $('.v-payment__cashbox-controls__accounts').css('overflow', 'hidden');
                    
                    $(element).css('display', 'block');
                    
                    
                    if(in_array('cash', kassirInfo.btns)) $(element).append(btn1);
                    if(in_array('card', kassirInfo.btns)) $(element).append(btn2);
                    if(in_array('cheque', kassirInfo.btns)) $(element).append(btn3);
                    if(in_array('bank', kassirInfo.btns)) $(element).append(btn4);
                    if(in_array('cash', kassirInfo.btns)) $(element).append(btn5); 
                    
                }

                
                if(loadedDoc != 0 && $('.v-payment__result__buttons').length){
                    var element = $('.v-payment__result__buttons').parent();
                    $('.v-payment__result__buttons').remove();
                    var block = '\
                        <div>\
                            <button id="btn_open_check" type="button" class="y-button y-button__size-big y-button__type-azure" style="margin-top:20px; display:block; width:300px; border-color: #398e47 !important;  background: #16ba31 !important; font-weight: 700; letter-spacing: 1px; margin-bottom: 20px; padding: 10px; height: auto;">Открыть чек</button>\
                    ';
                    if(loadedDoc.remove == true) {
                        var text;
                        if(loadedDoc.docnum == 0) text = 'Перейти к оплате'; else text = 'Отменить платеж';
                        block += '\
                            <button id="btn_remove_doc" type="button" class="y-button y-button__size-big y-button__type-azure" style="background-color: #f44336 !important; border-color: #950b00 !important; margin-top: 10px; display: block; width: 300px; font-size: 17px; font-weight: 700; letter-spacing: 1px; margin-bottom: 20px; padding: 10px; height: auto;">'+text+'</button>\
                    ';
                    }
                    block += '\
                        </div>\
                    ';
                    
                    $(element).append(block);
                    
                    
                }

                
                if(loadedDoc != 0 && $('.v-payment-result__paid-category').length && $('.v-payment_result .v-payment_result_paid').length){
                    $('.v-payment-result__paid-category').remove();
                    
                    var pays = '<div>';
                    if(loadedDoc.data.cash != undefined && loadedDoc.data.cash.sum != undefined) pays = pays + '<div>Наличные: '+loadedDoc.data.cash.sum+'</div>';
                    if(loadedDoc.data.cheques != undefined){
                        for(var i = 0; i < loadedDoc.data.cheques.length; i++){
                            pays = pays + '<div>Чек: '+loadedDoc.data.cheques[i].sum+'</div>';        
                        }
                    }
                    if(loadedDoc.data.banktransfer != undefined && loadedDoc.data.banktransfer.sum != undefined) pays = pays + '<div>Банковский перевод: '+loadedDoc.data.banktransfer.sum+'</div>';
                    if(loadedDoc.data.cc != undefined && loadedDoc.data.cc.sum != undefined) pays = pays + '<div>Оплата картой: '+loadedDoc.data.cc.sum+'</div>';
                    
                    pays = pays + '</div>';
                    
                    $('.v-payment__result .v-payment__result__paid').after(pays);
                    
                }
                 
                
                $('.v-payment__payments-list__table tr th:nth-child(3), .v-payment__payments-list__table tr th:nth-child(4), .v-payment__payments-list__table tr td:nth-child(3), .v-payment__payments-list__table tr td:nth-child(4)').css('width', '0').hide();
                $('.v-payment__payments-list__table tr th:nth-child(2), .v-payment__payments-list__table tr td:nth-child(2)').css('width', '30%');
                $('.v-payment__payments-list__table tr th:nth-child(2), .v-payment__payments-list__table tr td:nth-child(2)').css('fontSize', '1em');
                $('.v-payment__explicit-payment .v-payment__section, .v-payment__cashbox-controls__settings-wrapper').remove();
                
                var vsegoKOplate = 0;
                var vsegoKOplate2 = 0;
                var ostalosOplatit = 0;
                
                //if($('.v-payment__payment-info__amount__price').html() != undefined) p = trim($('.v-payment__payment-info__amount__price').html().replace('₪', '').replace('&nbsp;', '').replace(' ', '').replace(' ', '').replace(' ', '')) * 1;
                
                
                if($('.v-payment__payments-list__table-container').length && !$('#vsegoKOplate').length) {
                    $('.v-payment__payments-list__table-container').append('\
                        <div id="vsegoKOplate3" style="width: 90%; background: #ebf8f2; margin-top: 30px;">\
                            <div class="" style="font-size: 1em; padding: 5px; padding-left: 80px; text-align: left; color: #535353; border: 1px solid #d1d1d1; letter-spacing: 1px; font-weight: 700;"> Общая стоимость без скидок: <span style="color:#1a7bb9; font-size:1.1em; font-weight:bold">0</span> ₪</div>\
                        </div>\
                        <div id="vsegoKOplate2" style="width: 90%; background: #ebf8f2; margin-top: 10px; margin-left: 5%;">\
                            <div class="" style="font-size: 1em; padding: 5px; padding-left: 80px; text-align: left; color: #535353; border: 1px solid #d1d1d1; letter-spacing: 1px; font-weight: 700;"> Итого с учетом предварительной скидки: <span style="color:#1a7bb9; font-size:1.1em; font-weight:bold">0</span> ₪</div>\
                        </div>\
                        <div id="vsegoKOplate4" style="width: 90%; background: #ebf8f2; margin-top: 10px; margin-left: 10%;">\
                            <div class="" style="font-size: 1em; padding: 5px; padding-left: 80px; text-align: left; color: #535353; border: 1px solid #d1d1d1; letter-spacing: 1px; font-weight: 700;"> Итого с учетом всех скидок и бонусов: <span style="color:#1a7bb9; font-size:1.1em; font-weight:bold">0</span> ₪</div>\
                        </div>\
                    ');
                }               


                if($('[data-locator="td-unpaid"]').length){
                    vsegoKOplate3 = trim($('[data-locator="td-unpaid"]').html());
                    if(vsegoKOplate3.indexOf('₪') != -1) vsegoKOplate3 = vsegoKOplate3.replace('₪', '');
                    if(vsegoKOplate3.indexOf('&nbsp;') != -1) vsegoKOplate3 = vsegoKOplate3.replace('&nbsp;', '');
                    if(vsegoKOplate3.indexOf(' ') != -1) vsegoKOplate3 = vsegoKOplate3.replace(' ', '');
                    if(vsegoKOplate3.indexOf(' ') != -1) vsegoKOplate3 = vsegoKOplate3.replace(' ', '');
                    if(vsegoKOplate3.indexOf(' ') != -1) vsegoKOplate3 = vsegoKOplate3.replace(' ', '');
                    vsegoKOplate3 = vsegoKOplate3 * 1;
                }

                if($('[data-locator="td-unpaid"]').length){
                    vsegoKOplate4 = trim($('[data-locator="td-unpaid"]').html());
                    if(vsegoKOplate4.indexOf('₪') != -1) vsegoKOplate4 = vsegoKOplate4.replace('₪', '');
                    if(vsegoKOplate4.indexOf('&nbsp;') != -1) vsegoKOplate4 = vsegoKOplate4.replace('&nbsp;', '');
                    if(vsegoKOplate4.indexOf(' ') != -1) vsegoKOplate4 = vsegoKOplate4.replace(' ', '');
                    if(vsegoKOplate4.indexOf(' ') != -1) vsegoKOplate4 = vsegoKOplate4.replace(' ', '');
                    if(vsegoKOplate4.indexOf(' ') != -1) vsegoKOplate4 = vsegoKOplate4.replace(' ', '');
                    vsegoKOplate4 = vsegoKOplate4 * 1;

                }
                 

                if($('[data-locator="td-cost"]').length){
                    vsegoKOplate2 = trim($('[data-locator="td-cost"]').html());
                    if(vsegoKOplate2.indexOf('₪') != -1) vsegoKOplate2 = vsegoKOplate2.replace('₪', '');
                    if(vsegoKOplate2.indexOf('&nbsp;') != -1) vsegoKOplate2 = vsegoKOplate2.replace('&nbsp;', '');
                    if(vsegoKOplate2.indexOf(' ') != -1) vsegoKOplate2 = vsegoKOplate2.replace(' ', '');
                    if(vsegoKOplate2.indexOf(' ') != -1) vsegoKOplate2 = vsegoKOplate2.replace(' ', '');
                    if(vsegoKOplate2.indexOf(' ') != -1) vsegoKOplate2 = vsegoKOplate2.replace(' ', '');
                    vsegoKOplate2 = vsegoKOplate2 * 1;
                } 

                
                if($('.v-payment__payments-list__table-container').length && !$('#vsegoKOplate').length) {
                    $('.v-payment__payments-list__table-container').append('\
                        <div class=="vsego" style="display: flex; align-items: center; margin-top:15px; margin-bottom: 15px; border-top: solid 1px #d1d1d1; border-bottom: solid 1px #d1d1d1; background: #e9f6ff;">\
                            <div id="vsegoKOplate" style="width: 10%;">\
                                <div class="" style="font-size: 0.9em; padding: 10px; text-align: center; color: #535353;  border-right: 1px solid #d1d1d1;  border-left: 1px solid #d1d1d1; ">    <span style="color:#535353; font-size:1em; font-weight:bold">0</span> ₪</div>\
                            </div>\
                            <div id="ostalosOplatit" style="width: 90%;">\
                                <div class="" style="font-size: 1.4em; padding: 10px; text-align: center; color: #535353; border-right: 1px solid #d1d1d1; letter-spacing: 1px; font-weight: 700;"> Осталось оплатить: <span style="color:#ec4758; font-size:1.3em; font-weight:bold ">0</span> ₪</div>\
                            </div>\
                        </div>\
                        <div id="ostalosOplatit2" style="width: 100%;">\
                        </div>\
                    ');
                }



                    
                    

                if($('[data-locator="td-unpaid"]').length){
                    vsegoKOplate = trim($('[data-locator="td-unpaid"]').html());
                    if(vsegoKOplate.indexOf('₪') != -1) vsegoKOplate = vsegoKOplate.replace('₪', '');
                    if(vsegoKOplate.indexOf('&nbsp;') != -1) vsegoKOplate = vsegoKOplate.replace('&nbsp;', '');
                    if(vsegoKOplate.indexOf(' ') != -1) vsegoKOplate = vsegoKOplate.replace(' ', '');
                    if(vsegoKOplate.indexOf(' ') != -1) vsegoKOplate = vsegoKOplate.replace(' ', '');
                    if(vsegoKOplate.indexOf(' ') != -1) vsegoKOplate = vsegoKOplate.replace(' ', '');
                    vsegoKOplate = vsegoKOplate * 1;
                    


                    ostalosOplatit = vsegoKOplate;

                     $('.v-payment__payment-info__paid__type').each(function(){
                         if(
                             $(this).find('.v-payment__payment-info__paid__price').html() > '0'
                         ) {
                           vsegoKOplate = vsegoKOplate + $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                           vsegoKOplate3 = vsegoKOplate3 + $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                           ostalosOplatit = ostalosOplatit + $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                           vsegoKOplate4 = vsegoKOplate4 + $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                         }
                        
                         ostalosOplatit = ostalosOplatit - $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                         vsegoKOplate4 = vsegoKOplate4 - $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                     });                    
                    
                    
                    ostalosOplatit = round(ostalosOplatit, 2);
                    vsegoKOplate2 = round(vsegoKOplate2, 2);
                    vsegoKOplate4 = round(vsegoKOplate4, 2);
                    
                    $('#vsegoKOplate span').html(vsegoKOplate);
                    $('#vsegoKOplate2 span').html(vsegoKOplate2);
                    $('#vsegoKOplate3 span').html(vsegoKOplate3);
                    $('#vsegoKOplate4 span').html(vsegoKOplate4);
                    $('#ostalosOplatit span').html(ostalosOplatit);
                }
                
                
                
                if(paymentData != undefined){
                    var sum = razdOpl();
                            
                    var oldSum = trim($('#vsegoKOplate span').text()) * 1;
                    
                    $('.v-payment__payment-info__paid__type').each(function(){
                        oldSum = oldSum - $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '');
                    });
                    
                    var newSum = oldSum - sum;
                    if(newSum < 0) newSum = 0;
                    newSum = round(newSum, 2);
                    $('#ostalosOplatit span').html(newSum);
                } 
                
                if(!$('.xotchot').length && $('.y-timetable-controls-finances-container__footer').length){
                    $('.y-timetable-controls-finances-container__footer').after('<div class="kassy" style="padding: 20px 10px 30px 10px; "></div>');
                    if(kassirInfo.kassy.length){
                        for(var i = 0; i < kassirInfo.kassy.length; i++){
                            $('.kassy').append('\
                                    <div style="text-align:center; font-weight:bold; margin-top:10px">\
                                        <div>\
                                            ' + kassirInfo.kassy[i]['name'] + '\
                                        </div>\
                                        <div style="margin-top:10px">\
                                            <button data-kassa="' + kassirInfo.kassy[i]['id'] + '" class="xotchot" style="display: none;">X-отчет</button>\
                                            <button data-kassa="' + kassirInfo.kassy[i]['id'] + '" class="zotchot" style="background: #fbc5a2; color: #520000; font-size: 21px; border: 1px solid #520000; border-radius: 10px; padding: 7px 5px;  width: 85%; margin: 15px 20px 25px 20px;">Z-отчет</button>\
                                        </div>\
                                        <div style="margin-top:10px">\
                                            <button data-kassa="' + kassirInfo.kassy[i]['id'] + '" class="potchot" style="background: #4094ae; color: #fff; font-size: 20px; border: 1px solid #570000; border-radius: 10px; padding: 10px 0px; width: 95%; margin: 10px 0px 15px 8px;">Подробный отчет</button>\
                                        </div>\
                            ');
                        }
                    }

                    
                    
                    while($('.y-timetable-controls-finances-container__body a').length > 4){
                        $('.y-timetable-controls-finances-container__body a:first').remove();
                    }
                    
                    $('.y-timetable-controls-finances-container__body').prepend('\
                        <div style="background: #fff2cd; border: solid 2px #e8c664; padding: 10px 20px; font-size: 14px; margin-bottom: 20px;">\
                        <a class="y-timetable-controls-finances-container-link"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Отложено</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_7" style=" margin-left: 5px;  ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link" style="font-weight:bold"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Поступлений в кассы</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_1" style=" margin-left: 5px;  color: #337ab7; ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Оплата наличными</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_2" style=" margin-left: 5px;  ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link" style="font-weight:bold"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Остаток наличных</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_3" style=" margin-left: 5px;  ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Оплата кред. картой</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_4" style=" margin-left: 5px;  color: #337ab7; ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Оплата чеками</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_5" style=" margin-left: 5px;  color: #337ab7; ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link"><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title">Оплата безналом</div><div class="y-timetable-controls-finances-container-link__item__info"></div><div class="y-timetable-controls-finances-container-link__item__value">₪<span class="pays_data_6" style=" margin-left: 5px;  color: #337ab7; ">0</span></div></div></a>\
                        <a class="y-timetable-controls-finances-container-link" style=" border: 1px solid #000; padding: 5px 0px;" ><div class="y-timetable-controls-finances-container-link__item"><div class="y-timetable-controls-finances-container-link__item__title" style="color: #b73388; padding-left: 10px; font-size: 1.1em; width: 60%;">Всего в кассе наличных</div><div class="y-timetable-controls-finances-container-link__item__info"></div><span class="pays_data_8" style=" margin-left: 25px;  color: #b73388; font-size: 1.2em; font-weight: 700;">0</span><span  class="y-timetable-controls-finances-container-link__item__value" style=" padding-left: 4px; font-size: 1.2em; font-weight: 400;  color: #b73388;">₪</span></div></a>\
                        </div>\
                    ');



                    var sendData = new Object;
                    sendData['action'] = 'paysData';
                    sendData['yclientsId'] = yclientsId;
                    chrome.runtime.sendMessage(sendData);
                }
                
                
                if(loadedDoc != undefined && loadedDoc != 0 && loadedDoc.docnum == 0){
                    $('.v-payment__payment-info, .v-payment__result .v-payment__result__success-icon, .v-payment__result .v-payment__result__title, .v-payment__result .v-payment__result__paid').hide();
                    $('.v-payment__result .v-payment__result__paid').next().hide();
                }
                
                if(paymentData == undefined){
                    $('#record_delete').show();
                } else {
                    $('#record_delete').hide();
                }
                
                
                
            }, 500);
                     

            
            // Ф-ция trim
            var trim = function(text){
                text = text + '';
                return text.replace(/^\s+|\s+$/g, '');
            }
            
            // Ф-ция сбора инфы со страницы
            var getData = function(type){
                if(paymentData == undefined) var data = new Object;
                else var data = paymentData;
                data['type'] = type;
                data[type] = 0;
                data['discount'] = 0;
                data['items'] = new Array;
                
                
                
                // Товары и услуги
                $('.v-payment__payments-list__table tbody').each(function(){
                    var item = new Object;
                    
                    item['description'] = trim($(this).find('td:nth-child(1)').text());
                    item['quantity'] = 1;
                    item['sum0'] = trim($(this).find('td:nth-child(5)').text()) * 1;
                    item['unitprice_incvat'] = item['sum0'];
                    item['discount'] = 0;
                    
                    if($(this).find('.fa-gear').length){
                        // Это услуга
                        item['id'] = 0;
                    }
                    
                    if($(this).find('.fa-cube').length){
                        // Это товар
                        item['id'] = 0 ; 
                    }
                    
                    data['items'].push(item);
                    
                    //data[type] += item['sum0'];
                    data['discount'] = 0;
                });
                
                if(data['items'].length == 0 && addedGoods.length != 0) data['items'] = addedGoods;
                
                var sum = data[type];
                data[type] = new Object;
                //data[type]["sum"] = sum;
                if(type == 'cash'){
                    data[type]["sum"] = $('#ostalosOplatit span').text() * 1 + $('.opl_cash').text() * 1;
                } else {
                    data[type]["sum"] = $('#ostalosOplatit span').text() * 1;
                }
                
                
                //data['client_name'] = trim($('#rec_clientname_filter').val());
                //if(data['client_name'] == "Введите имя клиента") data['client_name'] = 'Без имени';
                data['client_name'] = trim($('.v-payment__clients-info__client-row__item:nth-child(1)').text());
                
                //var num = $('#rec_clientphone_filter').val();
                //if(num != 'Введите телефон клиента') data['phone'] = trim($('#booking_country_val em').html() + num);
                //else data['phone'] = '';
                data['phone'] = trim(clientEmail);
                while(data['phone'].indexOf('-') != -1) data['phone'] = data['phone'].replace('-', '');
                while(data['phone'].indexOf(' ') != -1) data['phone'] = data['phone'].replace(' ', '');
                while(data['phone'].indexOf('(') != -1) data['phone'] = data['phone'].replace('(', '');
                while(data['phone'].indexOf(')') != -1) data['phone'] = data['phone'].replace(')', '');
                
                
                //data['email'] = trim($('#rec_clientemail_filter').val());
                //if(data['email'] == "Введите email клиента")  data['email'] = '';
                data['email'] = trim(clientEmail);
                data['name'] = trim(clientName);
                
                
                if(data['email'] == ''){
                    if(data['phone'] != '') data['email'] = data['phone'].replace('+', '') + '@api.marina-kogan.co.il';
                    else data['email'] = Math.floor(Math.random() * 10000000000) + '@api.marina-kogan.co.il';
                }
                
                data.date = date('d.m.Y', Math.floor((new Date()).getTime() / 1000))+' '+date('H:i:s', Math.floor((new Date()).getTime() / 1000));
                paymentData = data;
                paymentData.yclientsId = yclientsId;
                paymentData.recordId = recordId;
                paymentData.abonements = new Array;
                if($('.v-payment__payment-info__paid__type').length){
                    $('.v-payment__payment-info__paid__type').each(function(){
                         var ab = new Object;
                         ab.name = trim($(this).find('.v-payment__payment-info__paid__caption').html());
                         ab.sum = trim($(this).find('.v-payment__payment-info__paid__price').html().replace('₪', ''));
                         paymentData.abonements.push(ab);
                    });
                }
                paymentData.discount_incvat = 0;
            }
            
            // Нажатие на оплатить
            $(document).on('click', '#app_pay_1', function(){
                getData('cash');
                
                $('#app_pay_1_popup .summ').html(paymentData['cash']['sum']);
                $('#app_pay_1_popup .pay').val(paymentData['cash']['sum']);
                $('#app_pay_1_popup .sdacha').html(0);
                
                $('#app_pay_1_popup').show();
                $('#app_pay_2_popup').hide();
                $('#app_pay_3_popup').hide();
                $('#app_pay_4_popup').hide();
                $('#app_pay_load').hide();
                $('#app_pay_load_error').hide();
                $('#app_pay_iframe').hide();
                $('#app_chek_iframe').hide();
                $('#appButtonsPopup').show();
                
                if(paymentData['cc'] != undefined || paymentData['cheques'] != undefined || paymentData['banktransfer'] != undefined){
                    $('#app_pay_1_popup .notDoc').attr('disabled', 'disabled');
                } else {
                    $('#app_pay_1_popup .notDoc').removeAttr('disabled');
                }
            });
            $(document).on('click', '#app_pay_2', function(){
                console.log(paymentData);
                if(paymentData != undefined && paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] == paymentData['cc']['sum']) return false;
                
                getData('cc');
                $('#app_pay_2_popup .summ').html(paymentData['cc']['sum']);
                $('#app_pay_2_popup .pay').val(paymentData['cc']['sum']);
                $('#app_pay_2_popup .sdacha').html(0);
                
                $('#app_pay_1_popup').hide();
                $('#app_pay_2_popup').show();
                $('#app_pay_3_popup').hide();
                $('#app_pay_4_popup').hide();
                $('#app_pay_load').hide();
                $('#app_pay_load_error').hide();
                $('#app_pay_iframe').hide();
                $('#app_chek_iframe').hide();
                $('#appButtonsPopup').show();
                
                
            });
            $(document).on('click', '#app_pay_3', function(){
                getData('cheques');
                console.log(paymentData);
                $('#app_pay_3_popup .summ').val(paymentData['cheques']['sum']);
                $('#app_pay_3_popup .date').val(new Date().toLocaleDateString());
                $('#app_pay_3_popup .bank').val('');
                $('#app_pay_3_popup .otdelenie').val('');
                $('#app_pay_3_popup .account').val('');
                $('#app_pay_3_popup .check').val('');
                
                $('#app_pay_1_popup').hide();
                $('#app_pay_2_popup').hide();
                $('#app_pay_3_popup').show();
                $('#app_pay_4_popup').hide();
                $('#app_pay_load').hide();
                $('#app_pay_load_error').hide();
                $('#app_pay_iframe').hide();
                $('#app_chek_iframe').hide();
                $('#appButtonsPopup').show();
            });
            $(document).on('click', '#app_pay_4', function(){
                getData('banktransfer');
                $('#app_pay_4_popup .pay').val(paymentData['banktransfer']['sum']);
                $('#app_pay_4_popup .summ').html(paymentData['banktransfer']['sum']);
                $('#app_pay_4_popup .date').val(new Date().toLocaleDateString());
                $('#app_pay_4_popup .schot').val('');
                
                $('#app_pay_1_popup').hide();
                $('#app_pay_2_popup').hide();
                $('#app_pay_3_popup').hide();
                $('#app_pay_4_popup').show();
                $('#app_pay_load').hide();
                $('#app_pay_load_error').hide();
                $('#app_pay_iframe').hide();
                $('#app_chek_iframe').hide();
                $('#appButtonsPopup').show();
            });
            
            var openCheck = function(request){
                    var block = '\
                        <div id="applicationPopup" style="direction:rtl; position:fixed; width:100%; height:100%; top:0; left:0; z-index:999999; background:#fff; padding:5px;">\
                            <style>\
                            .rtl {direction:rtl; width:300px; float: right;}\
                            .ltr {direction:rtl;}\
                            .padding {height:30px;}\
                            .divTable{\
                            	display: table;\
                            	width: 100%;\
                            }\
                            .divTableRow {\
                            	display: table-row;\
                            }\
                            .divTableHeading {\
                            	background-color: #EEE;\
                            	display: table-header-group;\
                            }\
                            .divTableCell, .divTableHead {\
                            	border: 1px solid #999999;\
                            	display: table-cell;\
                            	padding: 3px 10px;\
                            }\
                            .divTableHeading {\
                            	background-color: #EEE;\
                            	display: table-header-group;\
                            	font-weight: bold;\
                            }\
                            .divTableFoot {\
                            	background-color: #EEE;\
                            	display: table-footer-group;\
                            	font-weight: bold;\
                            }\
                            .divTableBody {\
                            	display: table-row-group;\
                            }\
                            @media print{\
                                .rtl {direction:rtl; width:300px; float: right;}\
                                .ltr {direction:rtl;}\
                                .padding {height:30px;}\
                                .divTable{\
                                	display: table;\
                                	width: 100%;\
                                }\
                                .divTableRow {\
                                	display: table-row;\
                                }\
                                .divTableHeading {\
                                	background-color: #EEE;\
                                	display: table-header-group;\
                                }\
                                .divTableCell, .divTableHead {\
                                	border: 1px solid #999999;\
                                	display: table-cell;\
                                	padding: 3px 10px;\
                                }\
                                .divTableHeading {\
                                	background-color: #EEE;\
                                	display: table-header-group;\
                                	font-weight: bold;\
                                }\
                                .divTableFoot {\
                                	background-color: #EEE;\
                                	display: table-footer-group;\
                                	font-weight: bold;\
                                }\
                                .divTableBody {\
                                	display: table-row-group;\
                                }\
                            }\
                            </style>\
                            <div class="rtl">\
                            <div>Marina kogan מכון יופי</div>\
                            <div><span>ח.פ.:</span><span class="id">332568708</span></div>\
                            <div>קריית ביאליק חניתה, 10</div>\
                            <div class="ltr">0527863873</div>\
                            <div class="padding"></div>\
                            <div class="docname">חשבונית מס קבלה/העתק</div>\
                            <div>'+request.data.client_name+'</div>\
                            <div class="docnumber">'+request.docnum+'</div>\
                            <div class="date">'+request.data.date+'</div>\
                            <div class="padding"></div>\
                            <div class="list">פירות העסקה:</div>\
                            <hr>\
                            <div class="divTable">\
                            <div class="divTableBody">\
                            <div class="divTableRow">\
                            <div class="divTableCell">פריט</div>\
                            <div class="divTableCell">מחיר</div>\
                            <div class="divTableCell">הנחה</div>\
                            <div class="divTableCell">סה"כ</div>\
                            </div>\
                        ';
                        for(var i = 0; i < request.data.items.length; i++){    
                            block += '\
                            <div class="divTableRow">\
                            <div class="divTableCell">'+request.data.items[i].description+'</div>\
                            <div class="divTableCell">'+request.data.items[i].sum0+'</div>\
                            <div class="divTableCell">'+request.data.items[i].discount+'%</div>\
                            <div class="divTableCell">'+(request.data.items[i].unitprice_incvat * request.data.items[i].quantity)+'</div>\
                            </div>\
                            ';
                        }
                        var summabeznds = request.data[request.data.type]['sum'];
                        summabeznds = parseFloat(summabeznds / 1.17).toFixed(2);
                        var nds = parseFloat(request.data[request.data.type]['sum'] - summabeznds).toFixed(2);
                        block += '\
                            </div>\
                            </div>\
                            <div class="totalwhithoutvat">סה"כ ללא מע"מ: ' + summabeznds + '</div>\
                            <div class="vat"><span>מע"מ </span><span>17%: </span> ' + nds + '</div>\
                            <div class="total"><span>סה"כ: </span> ' + request.data[request.data.type]['sum'] + ' </div>\
                            <div class="payment"><span>שולם:</span>' + request.data[request.data.type]['sum'] + '</div>\
                            <div class="change"><span>עודף:</span>0</div>\
                            <div class="typeofpayment"><span>סוג תשלום:</span>Наличные</div>\
                            <div class="padding"></div>\
                            <div class="site">www.swagency.co.il</div>\
                            </div>\
                            <button class="checPrint">Распечатать</button><br /><br /><button class="checClose">Закрыть</button>\
                        </div>\
                    ';
                    $('body').append(block);
            }
            
            chrome.runtime.onMessage.addListener(request => {
                if(request.action == 'loadDoc'){
                    console.log(request);
                    loadedDoc = request;
                    loadedDoc.data = JSON.parse(request.data)
                    loadedDoc.docnum = request.docnum;
                    loadedDoc.id = request.id;
                }
                
                if(request.action == 'loadCCPayment'){
                    paymentData = new Object;
                    paymentData['cc'] = new Object;
                    paymentData['cc']['sum'] = request.summ;
                    paymentData['cc']['payment'] = paymentData['cc']['sum'];
                    paymentData['cc']['card_number'] = request.card;
                    paymentData['cc']['confirmation_code'] = request.confirmation_code;
                }
                
                if(request.action == 'clearCCPayment'){
                    paymentData = undefined;
                }
                
                if(request.action == 'docnum'){
                    //openCheck(request);
                    //window.open('https://api.marina-kogan.co.il/api/otchot.php?type=pay&id=' + request.id + '&authKey=' + kassirInfo.authKey);
                    
                    $('[data-target="body_record"]').click();
                    $('[data-engagement-hint-target-id="engagement-hint-manager-pay-record-set-arrival-status"]').eq(0).click();
                    $('#save_record_and_goto_payments').click();
                    setTimeout(function(){
                        $('#save_visit_and_pay').click();
                    }, 5000)
                    
                    $('#app_pay_1_popup').hide();
                    $('#app_pay_2_popup').hide();
                    $('#app_pay_3_popup').hide();
                    $('#app_pay_4_popup').hide();
                    $('#app_pay_load').hide();
                    $('#app_pay_load_error').hide();
                    $('#app_pay_iframe').hide();
                    $('#app_chek_iframe').show();
                    $('#appButtonsPopup').show();
                    
                    
                    
                    
                    /*
                    if(request.doc_url != undefined) {
                        $('#app_chek_iframe iframe').attr('src', request.doc_url);
                    } else {
                        $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=pay&id=' + request.id + '&authKey=' + kassirInfo.authKey);    
                    }
                    */
                    $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=pay&id=' + request.id + '&authKey=' + kassirInfo.authKey);
                    
                }
                
                if(request.action == 'clearPayments'){
                    //openCheck(request);
                    //window.open('https://api.marina-kogan.co.il/api/otchot.php?type=cansel&id=' + request.id + '&authKey=' + kassirInfo.authKey);
                    
                    //console.log(request);
                    $('.v-payment__payments-list__table .fa-caret-down').click();
                    setTimeout(function(){
                        $('.delete-transaction-cell__icon').click();
                    }, 500);
                    /*
                    $('.delete-transaction-cell__icon').click();
                    $('.delete-transaction-cell__icon').click();
                    $('.delete-transaction-cell__icon').click();
                    $('.delete-transaction-cell__icon').click();
                    $('.close[data-dismiss="modal"]:visible').click();
                    */
                    
                    if(request.docId != 0){
                        $('#app_pay_1_popup').hide();
                        $('#app_pay_2_popup').hide();
                        $('#app_pay_3_popup').hide();
                        $('#app_pay_4_popup').hide();
                        $('#app_pay_load').hide();
                        $('#app_pay_load_error').hide();
                        $('#app_pay_iframe').hide();
                        $('#app_chek_iframe').show();
                        $('#appButtonsPopup').show();
                               
                        /*
                        if(request.doc_url != undefined) {
                            $('#app_chek_iframe iframe').attr('src', request.doc_url);
                        } else {
                            $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=cansel&id=' + request.id + '&authKey=' + kassirInfo.authKey);       
                        }
                        */
                        $('#app_chek_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/api/otchot.php?type=cansel&id=' + request.id + '&authKey=' + kassirInfo.authKey);
                    }
                }
                
                if(request.action == 'ccPayment'){
                    // Оплата картой прошла
                    clearInterval(ccInterval);
                    paymentData['cc']['sum'] = request.summ;
                    paymentData['cc']['payment'] = paymentData['cc']['sum'];
                    paymentData['cc']['card_number'] = request.card;
                    paymentData['cc']['confirmation_code'] = request.confirmation_code;
                    $('#app_pay_iframe').attr('src', 'about:blank').hide();
                    $('#appButtonsPopup').hide();
                    
                    if(true){
                        // Раздельная оплата
                        goPay = 0;
                        var sum = razdOpl();
                        
                        var oldSum = trim($('#vsegoKOplate span').text()) * 1;
                        
                        var newSum = oldSum - sum;
                        if(newSum < 0) newSum = 0;
                        
                        $('.v-payment__payment-info__paid__type').each(function(){
                            if(
                                $(this).find('.v-payment__payment-info__paid__caption').html() == 'Предварительная скидка' ||
                                $(this).find('.v-payment__payment-info__paid__caption').html() == 'Preliminary discount'
                            ) {
                                newSum = newSum - $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '') * 1;
                            }
                        });
                        
                        newSum = round(newSum, 2);
                        
                        $('#ostalosOplatit span').html(newSum);
                        if(newSum == 0) goPay = 1;
                    } else goPay = 1;
                    
                    if(goPay){
                        if(paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] != paymentData['cc']['sum']) paymentData['cc'] = undefined;
                        $('#app_pay_load').show();
                        $('#app_pay_load_error').hide();
                        $('#appButtonsPopup').show();
                        var sendData = new Object;
                        sendData['action'] = 'sendData';
                        sendData['data'] = paymentData;
                        chrome.runtime.sendMessage(sendData);
                    }
                
                }
                
                if(request.action == 'ccPaymentError'){
                    // Оплата картой не прошла
                    clearInterval(ccInterval);
                    $('#app_pay_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/payment/error.html');
                
                }
                
                if(request.action == 'paysData'){
                    $('.pays_data_1').html(request[1]);
                    $('.pays_data_2').html(request[2]);
                    $('.pays_data_3').html(request[3]);
                    $('.pays_data_4').html(request[4]);
                    $('.pays_data_5').html(request[5]);
                    $('.pays_data_6').html(request[6]);
                    $('.pays_data_7').html(request[7]);
                    $('.pays_data_8').html(request[7] + request[2] + request[3]);
                }
            });
            



            $(document).on('click', '.checClose', function(){
                $('#applicationPopup').remove();
            });
            
            $(document).on('click', '.checPrint', function(){
                PrintElem($('#applicationPopup .rtl'));
            });
            
            var razdOpl = function(){
                    $('#razdOpl').remove();
                    $('#ostalosOplatit2').after('<div id="razdOpl" style="display: flex; flex-direction: row; margin-top:30px; margin-bottom: 15px; padding-bottom: 5px; text-align: center; border-bottom: 1px solid #c2c2c2;"></div>');
                   // $('#ostalosOplatit2').after('<div id="razdOpl" style="margin-top:5px; font-size:0.9em;"></div>');
                    
                    var sum = 0;
                    if(paymentData['cash'] != undefined && paymentData['cash']['sum2'] != undefined){
                        //sum = paymentData['cash'].sum * 1 + paymentData['cash'].sum2 * 1;
                        sum = paymentData['cash'].sum2 * 1;
                        //paymentData['cash'].sum2 = undefined;
                        $('#razdOpl').append('<div style="color:#1a7bb9; font-size:1.1em; font-weight: bold; padding: 10px; border-right: 1px solid #d1d1d1; margin-right: 5px;">Наличные: <span class="opl_cash">' + paymentData['cash'].sum + '</span> ₪</div>');
                    }
                    if(paymentData['cheques'] != undefined){
                        for(var i = 0; i < paymentData['cheques'].length; i++){
                            sum += paymentData['cheques'][i].sum * 1;
                            $('#razdOpl').append('<div style="color:#ec4758; font-size:1.1em; font-weight:bold; padding: 10px; border-right: 1px solid #d1d1d1; margin-right: 5px;">Чек: <span>' + paymentData['cheques'][i].sum + '</span> ₪</div>');
                        }
                    }
                    if(paymentData['banktransfer'] != undefined && paymentData['banktransfer']['sum'] != undefined){
                        sum += paymentData['banktransfer'].sum * 1;
                        $('#razdOpl').append('<div style="color:#f8ac59; font-size:1.1em; font-weight:bold; padding: 10px; border-right: 1px solid #d1d1d1; margin-right: 5px;">Банковский перевод: <span>' + paymentData['banktransfer'].sum + '</span> ₪</div>');
                    }
                    if(paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] != undefined){
                        sum += paymentData['cc'].sum * 1;
                        $('#razdOpl').append('<div style="color:#23c6c8; font-size:1.1em; font-weight:bold; padding: 10px; border-right: 1px solid #d1d1d1; margin-right: 5px;">Кредитная карта: <span>' + paymentData['cc'].sum + '</span></div>');
                    }
                    
                    return sum;
            }
            
            // Нажатие на оплатить в формах
            $(document).on('click', '#app_pay_1_popup button', function(){
                paymentData['cash']["sdacha"] = $('#app_pay_1_popup .sdacha').html() * 1;
                paymentData['cash']["sum"] = $('#app_pay_1_popup .pay').val() * 1 - paymentData['cash']["sdacha"];
                paymentData['cash']["sum2"] = paymentData['cash']["sum"];
                
                console.log(paymentData);
                
                $('#app_pay_1_popup').hide();
                $('#appButtonsPopup').hide();
                
                if(true){
                    // Раздельная оплата
                    goPay = 0;
                    var sum = razdOpl();
                    var oldSum = trim($('#vsegoKOplate span').text()) * 1;
                    
                    $('.v-payment__payment-info__paid__type').each(function(){
                        oldSum = oldSum - $(this).find('.v-payment__payment-info__paid__price').html().replace(' ₪', '');
                    });
                    
                    var newSum = oldSum - sum;
                    if(newSum < 0) newSum = 0;
                    newSum = round(newSum, 2);
                    $('#ostalosOplatit span').html(newSum);
                    if(newSum == 0) goPay = 1;
                } else goPay = 1;
                
                if(goPay){
                    if(paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] != paymentData['cc']['sum']) paymentData['cc'] = undefined;
                    $('#app_pay_load').show();
                    $('#app_pay_load_error').hide();
                    $('#appButtonsPopup').show();
                                
                    var sendData = new Object;
                    sendData['action'] = 'sendData';
                    sendData['data'] = paymentData;
                    if($(this).hasClass('notDoc')) sendData['notDoc'] = 1;
                    chrome.runtime.sendMessage(sendData);
                }  
            });
            $(document).on('click', '#app_pay_2_popup button', function(){
                paymentData['cc']["sum"] = $('#app_pay_2_popup .pay').val() * 1;
                
                $('#app_pay_2_popup').hide();
                $('#appButtonsPopup').show();
                $('#app_pay_iframe').show();
                var ccPayment = new Object;
                ccPayment.yclientsId = yclientsId;
                ccPayment.recordId = recordId;
                console.log('recordId = ' + recordId);
                
                var npay = $('#app_pay_2_popup select.count').val();
                $('#app_pay_iframe iframe').attr('src', 'https://api.marina-kogan.co.il/payment/payment.php?npay='+npay+'&yclientsId='+yclientsId+'&recordId='+recordId+'&summ='+paymentData['cc']['sum']+'&kassaId='+kassirInfo.kassy[0].id);
                ccInterval = setInterval(function(){    
                    var sendData = ccPayment;
                    sendData['action'] = 'ccPayment';
                    chrome.runtime.sendMessage(sendData);
                }, 2 * 1000);
            });
            $(document).on('click', '#app_pay_3_popup button', function(){
                paymentData['cheques'] = new Array;
                $('#app_pay_3_popup .one').each(function(){
                    var cheques = new Object;
                    cheques["sum"] = $(this).find('.summ').val() * 1;
                    cheques["date"] = $(this).find('.date').val();
                    cheques["bank"] = $(this).find('.bank').val() * 1;
                    cheques["branch"] = $(this).find('.otdelenie').val() * 1;
                    cheques["account"] = $(this).find('.account').val() * 1;
                    cheques["number"] = $(this).find('.check').val();
                    
                    paymentData['cheques'].push(cheques);
                });
                
                
                $('#app_pay_3_popup').hide();
                $('#appButtonsPopup').hide();
                
                if(true){
                    // Раздельная оплата
                    goPay = 0;
                    var sum = razdOpl();
                    
                    var oldSum = trim($('#vsegoKOplate span').text()) * 1;
                    var newSum = oldSum - sum;
                    if(newSum < 0) newSum = 0;
                    newSum = round(newSum, 2);
                    $('#ostalosOplatit span').html(newSum);
                    if(newSum == 0) goPay = 1;
                } else goPay = 1;
                
                if(goPay){
                    if(paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] != paymentData['cc']['sum']) paymentData['cc'] = undefined;
                    $('#app_pay_load').show();
                    $('#app_pay_load_error').hide();
                    $('#appButtonsPopup').show();
                  
                    var sendData = new Object;
                    sendData['action'] = 'sendData';
                    sendData['data'] = paymentData;
                    chrome.runtime.sendMessage(sendData);  
                }  
            });
            $(document).on('click', '#app_pay_4_popup button', function(){
                paymentData['banktransfer']["sum"] = $('#app_pay_4_popup .pay').val();
                paymentData['banktransfer']["date"] = $('#app_pay_4_popup .date').val();
                paymentData['banktransfer']["account"] = $('#app_pay_4_popup .schot').val();
                
                
                $('#app_pay_4_popup').hide();
                $('#appButtonsPopup').hide();
                
                if(true){
                    // Раздельная оплата
                    goPay = 0;
                    var sum = razdOpl();
                    
                    var oldSum = trim($('#vsegoKOplate span').text()) * 1;
                    var newSum = oldSum - sum;
                    if(newSum < 0) newSum = 0;
                    newSum = round(newSum, 2);
                    $('#ostalosOplatit span').html(newSum);
                    if(newSum == 0) goPay = 1;
                } else goPay = 1;
                
                if(goPay){
                    if(paymentData['cc'] != undefined && paymentData['cc']['sum'] != undefined && paymentData['cc']['payment'] != paymentData['cc']['sum']) paymentData['cc'] = undefined;
                    $('#app_pay_load').show();
                    $('#app_pay_load_error').hide();
                    $('#appButtonsPopup').show();
                    var sendData = new Object;
                    sendData['action'] = 'sendData';
                    sendData['data'] = paymentData;
                    chrome.runtime.sendMessage(sendData);   
                } 
            });
            
    
        }
        
    }
});


function PrintElem(elem){
    Popup($(elem).html());
}

function Popup(data){
    var mywindow = window.open('', 'my div', 'height=600,width=800');
    mywindow.document.write('<html><head><title>my div</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10
    mywindow.print();
    mywindow.close();
    return true;
} 

function in_array(needle, haystack, strict) {	// Checks if a value exists in an array
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var found = false, key, strict = !!strict;

	for (key in haystack) {
		if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
			found = true;
			break;
		}
	}

	return found;
}


function date ( format, timestamp ) {	// Format a local time/date
	// 
	// +   original by: Carlos R. L. Rodrigues
	// +	  parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: MeEtc (http://yass.meetcweb.com)
	// +   improved by: Brad Touesnard

	var a, jsdate = new Date(timestamp ? timestamp * 1000 : null);
	var pad = function(n, c){
		if( (n = n + "").length < c ) {
			return new Array(++c - n.length).join("0") + n;
		} else {
			return n;
		}
	};
	var txt_weekdays = ["Sunday","Monday","Tuesday","Wednesday",             
		"Thursday","Friday","Saturday"];
	var txt_ordin = {1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};
	var txt_months =  ["", "January", "February", "March", "April",
		"May", "June", "July", "August", "September", "October", "November",
		"December"];

	var f = {
		// Day
			d: function(){
				return pad(f.j(), 2);
			},
			D: function(){
				t = f.l(); return t.substr(0,3);
			},
			j: function(){
				return jsdate.getDate();
			},
			l: function(){
				return txt_weekdays[f.w()];
			},
			N: function(){
				return f.w() + 1;
			},
			S: function(){
				return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
			},
			w: function(){
				return jsdate.getDay();
			},
			z: function(){
				return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;
			},

		// Week
			W: function(){
				var a = f.z(), b = 364 + f.L() - a;
				var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;

				if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){
					return 1;
				} else{

					if(a <= 2 && nd >= 4 && a >= (6 - nd)){
						nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
						return date("W", Math.round(nd2.getTime()/1000));
					} else{
						return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
					}
				}
			},

		// Month
			F: function(){
				return txt_months[f.n()];
			},
			m: function(){
				return pad(f.n(), 2);
			},
			M: function(){
				t = f.F(); return t.substr(0,3);
			},
			n: function(){
				return jsdate.getMonth() + 1;
			},
			t: function(){
				var n;
				if( (n = jsdate.getMonth() + 1) == 2 ){
					return 28 + f.L();
				} else{
					if( n & 1 && n < 8 || !(n & 1) && n > 7 ){
						return 31;
					} else{
						return 30;
					}
				}
			},

		// Year
			L: function(){
				var y = f.Y();
				return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
			},
			//o not supported yet
			Y: function(){
				return jsdate.getFullYear();
			},
			y: function(){
				return (jsdate.getFullYear() + "").slice(2);
			},

		// Time
			a: function(){
				return jsdate.getHours() > 11 ? "pm" : "am";
			},
			A: function(){
				return f.a().toUpperCase();
			},
			B: function(){
				// peter paul koch:
				var off = (jsdate.getTimezoneOffset() + 60)*60;
				var theSeconds = (jsdate.getHours() * 3600) +
								 (jsdate.getMinutes() * 60) +
								  jsdate.getSeconds() + off;
				var beat = Math.floor(theSeconds/86.4);
				if (beat > 1000) beat -= 1000;
				if (beat < 0) beat += 1000;
				if ((String(beat)).length == 1) beat = "00"+beat;
				if ((String(beat)).length == 2) beat = "0"+beat;
				return beat;
			},
			g: function(){
				return jsdate.getHours() % 12 || 12;
			},
			G: function(){
				return jsdate.getHours();
			},
			h: function(){
				return pad(f.g(), 2);
			},
			H: function(){
				return pad(jsdate.getHours(), 2);
			},
			i: function(){
				return pad(jsdate.getMinutes(), 2);
			},
			s: function(){
				return pad(jsdate.getSeconds(), 2);
			},
			//u not supported yet

		// Timezone
			//e not supported yet
			//I not supported yet
			O: function(){
			   var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4);
			   if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
			   return t;
			},
			P: function(){
				var O = f.O();
				return (O.substr(0, 3) + ":" + O.substr(3, 2));
			},
			//T not supported yet
			//Z not supported yet

		// Full Date/Time
			c: function(){
				return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();
			},
			//r not supported yet
			U: function(){
				return Math.round(jsdate.getTime()/1000);
			}
	};

	return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){
		if( t!=s ){
			// escaped
			ret = s;
		} else if( f[s] ){
			// a date function exists
			ret = f[s]();
		} else{
			// nothing special
			ret = s;
		}

		return ret;
	});
}
function explode( delimiter, string ) {	
	var emptyArray = { 0: '' };

	if ( arguments.length != 2
		|| typeof arguments[0] == 'undefined'
		|| typeof arguments[1] == 'undefined' )
	{
		return null;
	}

	if ( delimiter === ''
		|| delimiter === false
		|| delimiter === null )
	{
		return false;
	}

	if ( typeof delimiter == 'function'
		|| typeof delimiter == 'object'
		|| typeof string == 'function'
		|| typeof string == 'object' )
	{
		return emptyArray;
	}

	if ( delimiter === true ) {
		delimiter = '1';
	}

	return string.toString().split ( delimiter.toString() );
}

function round(value, precision, mode) {
                  var m, f, isHalf, sgn // helper variables
                  // making sure precision is integer
                  precision |= 0
                  m = Math.pow(10, precision)
                  value *= m
                  // sign of the number
                  sgn = (value > 0) | -(value < 0)
                  isHalf = value % 1 === 0.5 * sgn
                  f = Math.floor(value)
                
                  if (isHalf) {
                    switch (mode) {
                      case 'PHP_ROUND_HALF_DOWN':
                      // rounds .5 toward zero
                        value = f + (sgn < 0)
                        break
                      case 'PHP_ROUND_HALF_EVEN':
                      // rouds .5 towards the next even integer
                        value = f + (f % 2 * sgn)
                        break
                      case 'PHP_ROUND_HALF_ODD':
                      // rounds .5 towards the next odd integer
                        value = f + !(f % 2)
                        break
                      default:
                      // rounds .5 away from zero
                        value = f + (sgn > 0)
                    }
                  }
                
                  return (isHalf ? value : Math.round(value)) / m
} 

function getData(type, callback) {
    $('#app_pay_load').show();
    $.ajax({
      url: '/ajax/',
      type: 'POST',
      dataType: 'json',
      data: {
        'type': type,
      },
      success: function(data) {
        $('#app_pay_load').hide();
        if (data.status == 'ok') {
          paymentData[type] = data;
          if (type == 'cash_2') {
            $('#app_pay_5_popup').html(data.content);
          }
          if (typeof callback === 'function') {
            callback();
          }
        } else {
          $('#app_pay_load_error').show();
        }
      },
      error: function() {
        $('#app_pay_load').hide();
        $('#app_pay_load_error').show();
      }
    });
  }
  $('#app_pay_5').on('click', function() {
    getData('cash_2');
    $('#app_pay_5_popup').show();
  });
