export default function (){
    let container = $('.tabs'),
        links = container.find('.tabs__link'),
        tabs = container.find('.tabs__item');

        links.on('click', function (event) {
            let pos = links.index(event.target);
            links.removeClass('tabs__link_active');
            $(this).addClass('tabs__link_active')
            tabs.removeClass('tabs__item_active');
            tabs.eq(pos).addClass('tabs__item_active');
            event.preventDefault();
        })
}