document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function (event){
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  const i = document.querySelector('.working__list');


  i.addEventListener('click', function(event){
    document.querySelectorAll('.working__btn').forEach(function(tabContent){
      tabContent.classList.remove('btn-active')
    })
    if(event.target.classList.contains("working__btn")) {
    event.target.classList.toggle('btn-active');
  }

  });

  document.querySelectorAll('.questions__headings').forEach(function(ev){
    ev.addEventListener('click', function(event){
      const seve = event.currentTarget.dataset.seve
      document.querySelectorAll('.questions__img').forEach(function(el){
        el.classList.remove('questions__img-riteid')
      })
      document.querySelector(`[data-target="${seve}"]`).classList.add('questions__img-riteid')
    })
  })
});
