document.addEventListener('DOMContentLoaded', function() {
    applyls();

    document.getElementById("theme").addEventListener("change", function() {
        const theme = this.value;
        settheme(theme);
    });

    document.getElementById("font").addEventListener("change", function() {
        const font = this.value;
        changefont(font);
    });

    document.getElementById('cors').addEventListener('change', function() {
        const corsproxy = this.value;
        switchcors(corsproxy);
    });
});

function applyls() {
    const savedtheme = localStorage.getItem('theme') || 'Default';
    const savedfont = localStorage.getItem('font') || 'Default Font';
    const savedProxy = localStorage.getItem('cors') || 'https://cors.timmytamle569.workers.dev/';

   const proxyselect = document.getElementById('cors');
    Array.from(proxyselect.options).forEach(option => {
        if (option.value === savedProxy) {
            proxyselect.value = option.value;
        }
    });
    
    settheme(savedtheme);
    changefont(savedfont);
}

function switchcors(corsproxy) {
    const corsselect = document.getElementById('cors').value;
    const corslink = {
        'workers.dev': 'https://cors.timmytamle569.workers.dev/',
        'onrender.com': 'https://kors.onrender.com/',
        'vercel.app': 'https://tcors.vercel.app/',
        'duckdns.org': 'https://tcors.duckdns.org/',
        'hopto.org': 'https://tcors.hopto.org/',
        'mywire.org': 'https://tcors.mywire.org/',
        'loseyourip.com': 'https://tcors.loseyourip.com/',
        'ddnsfree.com': 'https://tcors.ddnsfree.com/',
        'accesscam.org': 'https://tcors.accesscam.org/',
        'camdvr.org': 'https://tcors.camdvr.org/',
        'webredirect.org': 'https://tcors.webredirect.org',
        'freeddns.org': 'https://tcors.freeddns.org/',
        'casacam.net': 'https://tcors.casacam.net/'
    };

    const proxy = corslink[corsselect];
    localStorage.setItem('cors', proxy);
    console.log('URL:' + proxy);
}

function changefont(font) {
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.header-img');
    const homelogo = document.querySelector('.title-img');

    body.dataset.font = font;

    var removefont = function() {
        document.body.classList.remove('nerko-one', 'playpen-sans', 'oswald', 'prompt');
    };

    removefont();

    if (font === 'Nerko One') {
        body.classList.add('nerko-one');
    } else if (font === 'Playpen Sans') {
        body.classList.add('playpen-sans');
    } else if (font === 'Oswald') {
        body.classList.add('oswald');
    } else if (font === 'Prompt') {
        body.classList.add('prompt');
    } else if (font === 'Default Font') {
        removefont();
    }


    localStorage.setItem('font', font);
    document.getElementById("font").value = font;
}

function settheme(theme) {
    const body = document.body;
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.header-img');
    const homelogo = document.querySelector('.title-img');

    body.classList.remove('light-mode', 'dark-mode');
    header.classList.remove('light-mode', 'dark-mode');
    footer.classList.remove('light-mode', 'dark-mode');

    body.dataset.theme = theme;

    body.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');
    header.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');
    footer.classList.remove('selenite-mode', 'light-mode', 'ugly-mode', 'space-mode');

    const spacemode = document.getElementById('space-particles');
    if (spacemode) {
        spacemode.innerHTML = '';
    }

    if (theme === 'Selenite') {
        body.classList.add('selenite-mode');
        header.classList.add('selenite-mode');
        footer.classList.add('selenite-mode');
    } else if (theme === 'Ugly') {
        body.classList.add('ugly-mode');
        header.classList.add('ugly-mode');
        footer.classList.add('ugly-mode');
    } else if (theme === 'Space') {
        body.classList.add('space-mode');
        header.classList.add('space-mode');
        footer.classList.add('space-mode');
        spaceparticle();
    } else if (theme === 'Light') {
        body.classList.add('light-mode');
        header.classList.add('light-mode');
        footer.classList.add('light-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half-lightmode.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half-lightmode.png';
    } else if (theme === 'Dark') {
        body.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        header.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        footer.classList.remove('light-mode', 'selenite-mode', 'mocha-mode', 'ugly-mode', 'space-mode');
        if (logo) logo.src = '/images/cybriagames/logo-name2half.png';
        if (homelogo) homelogo.src = '/images/cybriagames/logo-name2half.png';
    } else if (theme === 'Flames') {
        body.classList.add('flames-mode');
        header.classList.add('flames-mode');
        footer.classList.add('flames-mode');
    } else if (theme === 'Oceans') {
        body.classList.add('oceans-mode');
        header.classList.add('oceans-mode');
        footer.classList.add('oceans-mode');
    }

    localStorage.setItem('theme', theme);
    document.getElementById("theme").value = theme;
}

function spaceparticle() {
particlesJS("space-particles", {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
}

function reverts() {
    settheme('Default');
}

function clearparticles() {
    const particlesarea = document.getElementById('particles-js');
    if (particlesarea) {
        particlesarea.innerHTML = '';
    }
}


