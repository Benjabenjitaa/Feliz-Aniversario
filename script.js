const CONFIG = {
    names: { a: "Benjamin", b: "Esperanza" },
    startDate: "2022-08-13T00:00:00",
    nextAnniversaryMonth: 8, // August
    nextAnniversaryDay: 13,
    milestones: [
      { date: "2022-07-19", title: "Nos conocimos", desc: "Fuimos al cine y a comer", icon: "🎬" },
      { date: "2022-08-13", title: "Te pedí ser mi novia", desc: "Y me dijiste de una que sí!", icon: "💍" },
      { date: "2022-10-08", title: "Cumpleaños", desc: "Viniste a mi cumpleaños y conociste a mi familia.", icon: "🎂" },
      { date: "2022-12-25", title: "Primera Navidad", desc: "Primera navidad como novios y nos quedamos a dormir.", icon: "🎄" },
      { date: "2022-12-31", title: "Año Nuevo", desc: "Primer año nuevo como novios.", icon: "🎆" },
      { date: "2023-02-14", title: "San Valentín", desc: "Primer San Valentín juntos.", icon: "❤️" },
      { date: "2023-05-05", title: "Tu cumpleaños", desc: "Donde la pasamos muy bien.", icon: "🎉" },
      { date: "2023-08-13", title: "1er aniversario", desc: "Fuimos al cine.", icon: "🎥" },
      { date: "2023-09-11", title: "Regalo especial", desc: "Te regalé a nuestra hija y dormimos juntos los 3.", icon: "👶" },
      { date: "2023-10-08", title: "Cumpleaños de nuevo", desc: "Otro cumpleaños más juntos.", icon: "🎂" },
      { date: "2023-12-25", title: "Navidad otra vez", desc: "Otra navidad juntitos.", icon: "🎄" },
      { date: "2023-12-31", title: "Fin de año", desc: "Cenaste con nosotros esperando año nuevo y empezar 2024.", icon: "🎇" },
      { date: "2024-02-02", title: "Vacaciones Villarrica", desc: "Nos fuimos de vacaciones por primera vez a Villarrica.", icon: "🏖️" },
      { date: "2024-05-05", title: "Cumpleaños Monticello", desc: "Fuimos al Monticello a celebrar tu cumpleaños.", icon: "🎰" },
      { date: "2024-08-13", title: "2do aniversario", desc: "Fuimos al Monticello y pasamos un gran día.", icon: "🎉" },
      { date: "2024-10-08", title: "Cumpleaños mío", desc: "Fuimos a comer juntos por mi cumpleaños.", icon: "🍽️" },
      { date: "2024-11-20", title: "Estadio", desc: "Fuimos al estadio a ver al equipo de nuestros amores salir campeón por Copa Chile.", icon: "⚽" },
      { date: "2024-12-25", title: "Otra Navidad", desc: "Otra navidad más juntos.", icon: "🎄" },
      { date: "2024-12-31", title: "Fin de año 2024", desc: "Otro año más superado juntos.", icon: "🎆" },
      { date: "2025-01-07", title: "Vacaciones oficiales", desc: "Primeras vacaciones oficiales con su papá.", icon: "🏝️" },
      { date: "2025-01-10", title: "Villarrica con permiso", desc: "Nos fuimos a Villarrica con permiso de su papá.", icon: "🛶" },
      { date: "2025-02-17", title: "Vacaciones juntos", desc: "Luego de tanta espera llegaste a verme a Villarrica y pasamos buenas vacaciones.", icon: "🌅" },
      { date: "2025-05-05", title: "Cumpleaños en Nueva China", desc: "Otro cumpleaños más juntos, fuimos a Nueva China.", icon: "🎊" },
      { date: "2025-05-07", title: "Primer viaje fuera del país", desc: "Nuestro primer viaje fuera del país, fue maravilloso.", icon: "✈️" },
      { date: "2025-06-28", title: "Conocimos la nieve", desc: "Conocimos la nieve juntos.", icon: "❄️" },
      { date: "2025-08-13", title: "3er aniversario", desc: "Nuestro 3er aniversario juntos.", icon: "🎉" },
    ],
    galleryItems: [
      { date: "2022-07-19", title: "Nos conocimos", image: "images/primersalida.jpg" },
      { date: "2022-08-13", title: "Te pedí ser mi novia", image: "images/primerdia.jpg" },
      { date: "2023-02-14", title: "Primer San Valentín", image: "images/14defebrero.jpg" },
      { date: "2023-09-11", title: "Nuestra hija", image: "images/nuestrahija.jpg" },
      { date: "2024-02-02", title: "Vacaciones Villarrica", image: "images/vacacionesvillarrica.jpg" },
      { date: "2025-05-07", title: "Primer viaje fuera del país", image: "images/viajefuera.jpg" },
      { date: "2025-06-28", title: "Conocimos la nieve", image: "images/nieve.jpg" },
      { date: "2025-08-13", title: "3er aniversario", image: "images/3eraniversario.jpg" }
    ]
  };
  
  const timeTogetherEl = document.getElementById("time-together");
  const timelineContainer = document.getElementById("timeline-container");
  const galleryContainer = document.getElementById("gallery-container");
  const countdownTimer = document.getElementById("countdown-timer");
  const finalMessage = document.getElementById("final-message");
  const celebrateBtn = document.getElementById("celebrate-btn");
  const confettiCanvas = document.getElementById("confetti-canvas");
  const ctx = confettiCanvas.getContext("2d");
  
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  });
  
  // Función para calcular tiempo juntos
  function updateTimeTogether() {
    const now = new Date();
    const start = new Date(CONFIG.startDate);
    let diff = now - start;
  
    if(diff < 0) {
      timeTogetherEl.textContent = "Esperando nuestro gran día...";
      return;
    }
  
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    let days = Math.floor(hours / 24);
    hours %= 24;
  
    // Calcular años y meses aproximados
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let dateDiff = now.getDate() - start.getDate();
    if (dateDiff < 0) months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  
    timeTogetherEl.textContent = `${years} años • ${months} meses • ${days} días • ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  
  // Mostrar línea de tiempo
  function formatDateExact(dateStr) {
    // dateStr viene en formato yyyy-mm-dd
    const parts = dateStr.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  
  function loadTimeline() {
    CONFIG.milestones.forEach(milestone => {
      const item = document.createElement("div");
      item.classList.add("timeline-item");
  
      // Mostrar fecha exacta sin modificar
      const dateEl = document.createElement("div");
      dateEl.textContent = formatDateExact(milestone.date);
      dateEl.style.fontWeight = "700";
      dateEl.style.color = "#a8558a";
      dateEl.style.marginBottom = "4px";
      dateEl.style.fontSize = "0.9rem";
  
      const iconSpan = document.createElement("span");
      iconSpan.classList.add("icon");
      iconSpan.textContent = milestone.icon || "📅";
  
      const h3 = document.createElement("h3");
      h3.appendChild(iconSpan);
      h3.append(" " + milestone.title);
  
      const miniPhoto = CONFIG.galleryItems.find(g => g.title === milestone.title);
      if(miniPhoto) {
        const imgMini = document.createElement("img");
        imgMini.src = miniPhoto.image;
        imgMini.alt = milestone.title;
        imgMini.classList.add("timeline-mini-photo");
        h3.appendChild(imgMini);
      }
  
      const p = document.createElement("p");
      p.textContent = milestone.desc;
  
      item.appendChild(dateEl);
      item.appendChild(h3);
      item.appendChild(p);
  
      timelineContainer.appendChild(item);
    });
  }
  
  
  
  // Cargar galería
  function loadGallery() {
    CONFIG.galleryItems.forEach(g => {
      const div = document.createElement("div");
      div.classList.add("gallery-item");
  
      const img = document.createElement("img");
      img.src = g.image;
      img.alt = g.title;
  
      const p = document.createElement("p");
      p.textContent = g.title;
  
      div.appendChild(img);
      div.appendChild(p);
      galleryContainer.appendChild(div);
    });
  }
  
  // Contador al próximo aniversario (13 agosto)
  function updateCountdown() {
    const now = new Date();
    let year = now.getFullYear();
    const nextDate = new Date(year, CONFIG.nextAnniversaryMonth - 1, CONFIG.nextAnniversaryDay);
  
    if (now > nextDate) {
      nextDate.setFullYear(year + 1);
    }
  
    const diff = nextDate - now;
  
    if(diff < 0) {
      countdownTimer.textContent = "¡Feliz aniversario!";
      return;
    }
  
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    let days = Math.floor(hours / 24);
    hours %= 24;
  
    countdownTimer.textContent = `${days} días • ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Confeti de corazones
  const confettiParticles = [];
  const heartShapes = ["❤️","💖","💕","💘","💝"];
  
  class ConfettiParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 15 + 10;
      this.shape = heartShapes[Math.floor(Math.random() * heartShapes.length)];
      this.speedY = Math.random() * 3 + 2;
      this.speedX = (Math.random() - 0.5) * 3;
      this.opacity = 1;
      this.life = 100;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.life--;
      this.opacity = this.life / 100;
    }
    draw(ctx) {
      ctx.font = `${this.size}px serif`;
      ctx.globalAlpha = this.opacity;
      ctx.fillText(this.shape, this.x, this.y);
      ctx.globalAlpha = 1;
    }
  }
  
  function createConfetti() {
    for(let i=0; i<30; i++) {
      confettiParticles.push(new ConfettiParticle(Math.random()*window.innerWidth, -20));
    }
  }
  
  function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for(let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.update();
      p.draw(ctx);
      if(p.life <= 0) {
        confettiParticles.splice(i, 1);
      }
    }
    if(confettiParticles.length > 0) {
      requestAnimationFrame(animateConfetti);
    }
  }
  
  // Corazones flotantes fondo
  const floatingHearts = [];
  class FloatingHeart {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = window.innerHeight + Math.random() * 200;
      this.size = Math.random() * 20 + 15;
      this.speed = Math.random() * 0.5 + 0.3;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.angle = Math.random() * 2 * Math.PI;
      this.angleSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y -= this.speed;
      this.x += Math.sin(this.angle) * 0.8;
      this.angle += this.angleSpeed;
      if(this.y < -50) {
        this.y = window.innerHeight + 50;
        this.x = Math.random() * window.innerWidth;
      }
    }
    draw(ctx) {
      ctx.font = `${this.size}px serif`;
      ctx.globalAlpha = this.opacity;
      ctx.fillText("❤️", this.x, this.y);
      ctx.globalAlpha = 1;
    }
  }
  for(let i=0; i<40; i++) {
    floatingHearts.push(new FloatingHeart());
  }
  function animateHearts() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for(let heart of floatingHearts) {
      heart.update();
      heart.draw(ctx);
    }
    if(confettiParticles.length > 0) {
      for(let p of confettiParticles) {
        p.update();
        p.draw(ctx);
      }
    }
    requestAnimationFrame(animateHearts);
  }
  
  celebrateBtn.addEventListener("click", () => {
    createConfetti();
    animateConfetti();
  });
  
  function init() {
    loadTimeline();
    loadGallery();
    animateHearts();
    setInterval(() => {
      updateTimeTogether();
      updateCountdown();
    }, 1000);
    // Mensaje final con animación de escritura
    const message = 'Gracias por estos 3 años increíbles juntos, por estar siempre conmigo en las buenas, en las malas y en las peores. Eres mi mejor amiga y mi amor, y cada día a tu lado me hace súper feliz. Recuerda que quiero casarme contigo,  y formar una hermosa familia. Espero que sigamos viajando por el mundo y que algún día podamos vivir juntos para siempre. Te amo infinitamente y espero que sigamos creciendo juntos, siempre apoyándonos en todo, Te amo infinito amor de mi vida.';
    let index = 0;
    function typeWriter() {
      if(index < message.length) {
        finalMessage.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }
  
  init();
  
  // Smooth scroll para el menú
  document.querySelectorAll('nav#navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  