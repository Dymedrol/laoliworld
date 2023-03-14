export const initFaq = () => {
    const block = $('.laoli-faq-block');

    if (!block.length) {
        return
    }

    const question = $('.laoli-faq-block-item-question');

    question.click(function() {
        console.log('click')
        const item = $(this).closest('.laoli-faq-block-item');
        item.toggleClass('open');
        item.find('.laoli-faq-block-item-answer').toggle("fast");
    });
}


