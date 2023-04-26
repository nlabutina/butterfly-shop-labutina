$(document).ready(function () {

  $('.j-burger').on('click', function () {
    $('.j-main-menu').toggleClass('is-open');
  })

  // Аккордеоны

  let prevAccordionBtn = undefined;

  $('.j-accordion-btn').on('click', function () {

    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    } else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }
  })

  // Фильтр в каталоге
  $('.j-catalogue-link').on('click', function () {
    $('.j-catalogue-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');

    if (dataFilter === 'all') {
      $('.j-catalogue-item').show();
      return;
    }

    $('.j-catalogue-item').each(function () {
      let dataType = $(this).data('type');

      if (dataFilter === dataType) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  })

    // Табы
    $('.j-contacts-link').on('click', function() {
      let index = $(this).index('.j-contacts-link');

      $('.j-contacts-link').removeClass('active');
      $(this).addClass('active');

      $('.j-contacts-item').removeClass('active');
      $('.j-contacts-item').eq(index).addClass('active');

    });

})
