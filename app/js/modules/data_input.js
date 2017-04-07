export default function (){
    let dataSource = $('.fakeInput-source');
    
    dataSource.on('change', (event) => {
        let fakeInput = $(event.target).parent().find('.fakeInput'),
            value = event.target.value,
            date = new Date(value),
            month = ['января',"февраля","марта","апреля","мая","июня","июля","авгутса","сентября","октября","ноября","декабря"],
            text = `${date.getDate()} ${month[date.getMonth()]} ${1900+date.getYear()} года`;

        fakeInput.html(date != 'Invalid Date' ? text : 'Ведите дату');

        if(!event.target.value){
            fakeInput.addClass('fakeInput_empty');
        }else{
            fakeInput.removeClass('fakeInput_empty');
        }
    });

}