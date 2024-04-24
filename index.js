document.addEventListener('DOMContentLoaded', function() {
    const media = Array.from(document.querySelectorAll('img, video'));
  
    Promise.all(media.map(function(m) {
      return new Promise(function(res, rej) {
        if(m.tagName == 'IMG') {
          m.addEventListener('load', res);
        }
        if(m.tagName == 'VIDEO') {
          m.addEventListener('loadeddata', res);
        }
        setTimeout(function() {
          res();
        }, 3000)
      })
    }))
    .then(function() {
      document
        .querySelectorAll('#preloader')
        .forEach(function(preloader) {
          preloader.classList.add('hidden');
          document.body.classList.remove('is-loading');
        });
    });
  });

//-------------------------------------

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