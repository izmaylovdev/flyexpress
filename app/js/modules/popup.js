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
}