export default function (){
    let popup = $('.popup'),
        close = popup.find('.popup__close'),
        trigger = $('#popup_show');

    trigger.on('click', (event) => {
        popup.addClass('popup_active');
        event.preventDefault();
    });
    close.on('click', (event) => {
        popup.removeClass('popup_active');
        event.preventDefault();
    });

    let countrys_popup = $('.countrys-popup'),
        countrys_close = countrys_popup.find('.countrys-popup__close'),
        countrys_trigger = $('input[name="country"]');

    window.setUpListentersForPopup = () => {
        $('.countrys-popup__item').on('click', function (event){
            $('.countrys-popup__input').add(countrys_trigger).val($(this).find('.countrys-popup__val').text());
            countrys_close.click();
        });
    }

    setUpListentersForPopup();

    countrys_trigger.on('click', (event) => {
        countrys_popup.addClass('countrys-popup_active');
        event.preventDefault();
    });
    countrys_close.on('click', (event) => {
        countrys_popup.removeClass('countrys-popup_active');
        event.preventDefault();
    });
}