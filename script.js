document.addEventListener('DOMContentLoaded', function() {
  // Animação de contagem dos números
  function animateNumbers() {
      const counters = document.querySelectorAll('.proof-number');
      const speed = 200;
      
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / speed;
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(() => animateNumbers(), 1);
          } else {
              counter.innerText = target + '+';
          }
      });
  }
  
  // Observador de interseção
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(animateNumbers, 500);
          }
      });
  });
  
  observer.observe(document.querySelector('.social-proof-section'));
  
  // Animações de entrada suave
  function animateOnScroll() {
      const elements = document.querySelectorAll('.proof-card, .testimonial-card');
      
      elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              element.style.animation = `countUp 0.6s ease forwards ${index * 0.1}s`;
          }
      });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  });
  
  







const text = "Sou Ludmila António Jacinto, atriz e modelo comercial angolana.Tenho experiência em teatro, publicidade, videoclipes e produções audiovisuais, áreas onde procuro transmitir profissionalismo, autenticidade e paixão pela arte. Ao longo da minha trajetória, tenho participado em diversos projetos que contribuíram para o meu crescimento artístico e pessoal.Acredito que cada trabalho é uma oportunidade de aprender, evoluir e inspirar pessoas através da comunicação e da representação. Continuo focada no desenvolvimento da minha carreira, abraçando novos desafios e construindo uma marca pessoal baseada no talento, na dedicação e na excelência.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


