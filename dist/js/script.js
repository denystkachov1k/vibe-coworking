// маска телефона
$(document).ready(function(){
    $('.phone_us').mask('+1(000) 000-00-00');
 });

// ютуб в модальном окне

// Obtener el código del video
const getYouTubeVideoCode = url => {
    let inicio = url.indexOf('?') + 3,
        final = url.indexOf('&',inicio),
        code = final !== -1 ? url.slice(inicio,final) : url.slice(inicio),
        params = url.slice(final);
    return final !== -1 ? `${code}?${params}&` : `${code}?`;
  };
  
  //Dibujar el modal
  const printYouTubeModal = videoCode => {
    let modal = document.createElement('div');
    modal.id = "modalYouTube";
    modal.classList.add('ed-modal');
    modal.innerHTML = `
    <div class="modalContent">
      <div id="closeModal" class="ed-closeModal">X</div>
        <div class="video">
          <iframe src="https://www.youtube.com/embed/${videoCode}autoplay=1" frameborder="0" allowfullscreen> </iframe>
        <div>
    </div>`;
    document.body.appendChild(modal);
    closeModal(modal);
  };
  
  // Cerrar el modal
  const closeModal = modal => {
    document.getElementById('closeModal').addEventListener('click', () => {
      document.body.removeChild(modal)
    });
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        document.getElementById('closeModal').click();
      }
    })
  };
  
  // Dibujar el modal al hacer click en los enlaces
  const openYouTubeModal = selector => {
    let linksElements = [...document.querySelectorAll(selector)],
      links = linksElements.map(link => link.href);
    linksElements.forEach((el,i) => {
      el.addEventListener('click', e => {
        e.preventDefault();
        printYouTubeModal(getYouTubeVideoCode(links[i]));
      })
    })
  };
  
  openYouTubeModal('.modal-youtube');

  // // слайдер
  // document.addEventListener('DOMContentLoaded', () => {
  //   // инициализация слайдера
  //   new ItcSimpleSlider('.itcss', {
  //     loop: true,
  //     autoplay: false,
  //     interval: 5000,
  //     swipe: true,
  //   });
  // });

  
  document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    const slider = new ItcSimpleSlider('.itcss');
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    document.querySelector('.btn-prev_2').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    document.querySelector('.btn-prev_3').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    document.querySelector('.btn-prev_4').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
    document.querySelector('.btn-next_2').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
    document.querySelector('.btn-next_3').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
    document.querySelector('.btn-next_4').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
  });