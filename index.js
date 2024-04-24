const form = document.querySelector('[data-form]'),
      mails = form.querySelectorAll('input[type="radio"]');

//-------------------------------------

Array.from(mails).forEach(elm => {
    elm.addEventListener('change', event => {
        event.preventDefault();

        Array.from(mails).forEach(row => {
            const element = row.closest('label');

            if(element.classList.contains('active') || row == elm) {
                element.classList.toggle('active');
            }
        });
        
        // createMail(event);
    });
});