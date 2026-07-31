const exercises = [
  {
    "id": "straight-leg-raise",
    "name": "Straight Leg Raise (SLR)",
    "page": 1,
    "description": "While lying on your back, raise your leg with a straight knee. Keep the opposite knee bent with the foot planted on the ground.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "hip-abduction-sidelying",
    "name": "Hip Abduction - Sidelying",
    "page": 1,
    "description": "While lying on your side, slowly raise your top leg toward the sky. Keep your knee straight and your toes pointed forward the entire time. Keep your leg in line with your body. The bottom leg can be bent to stabilize your body.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "long-arc-quad",
    "name": "Long Arc Quad (LAQ)",
    "page": 1,
    "description": "Start in a seated position with your knee bent. Slowly straighten your knee as you raise your foot upward. Return to the starting position and repeat.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "clamshell",
    "name": "Side-Lying Clamshell",
    "page": 2,
    "description": "While lying on your side with your knees bent, raise your top knee while keeping your feet in contact the entire time. Lower back down and repeat. Do not let your pelvis roll backward during the lifting movement.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "hip-abduction-standing",
    "name": "Hip Abduction - Standing",
    "page": 2,
    "description": "While standing next to a chair or countertop for support, raise your leg out to the side. Keep your knee straight and your toes pointed forward as best you can. Lower your leg and repeat. Use your arms for balance support if needed.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "sit-to-stand",
    "name": "Sit to Stand - No Support",
    "page": 2,
    "description": "Scoot close to the front of the chair. Lean forward at your trunk, reach forward with your arms, and rise without pushing off the chair. Use your arms as a counterbalance, then lower yourself as you approach sitting.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "hip-abduction-counter",
    "name": "Hip Abduction - Counter (2 Sets)",
    "page": 3,
    "description": "Stand in front of a countertop or another sturdy support. Slowly lift your leg to the side, keeping your trunk straight and moving only at the hip.",
    "dose": [
      [
        "Reps",
        "10"
      ],
      [
        "Sets",
        "2"
      ]
    ]
  },
  {
    "id": "single-knee-to-chest",
    "name": "Single Knee to Chest with Towel",
    "page": 3,
    "description": "Lie on your back and place a towel around the underside of your thigh. Hold both ends of the towel and use your arms to pull your leg into hip flexion for a gentle stretch. Return to the starting position and repeat.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "hip-extension",
    "name": "Hip Extension - Standing",
    "page": 3,
    "description": "Stand tall with your knee straight. Extend one leg backward without leaning forward, then return.",
    "dose": []
  },
  {
    "id": "hip-adduction-squeeze",
    "name": "Hip Adduction Squeeze - Supine",
    "page": 4,
    "description": "Place a ball, rolled towel, or pillow between your knees and press your knees together so you squeeze the object firmly. Hold, release, and repeat.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "single-leg-stance",
    "name": "Single Leg Stance (SLS)",
    "page": 4,
    "description": "Stand on one leg and maintain your balance. Keep a sturdy chair or counter nearby for safety.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  },
  {
    "id": "standing-hamstring-curls",
    "name": "Standing Hamstring Curls",
    "page": 4,
    "description": "While standing, bend your knee so your heel moves toward your buttock. Lower until your foot contacts the floor and repeat. Keep your knees in line with one another.",
    "dose": [
      [
        "Hold",
        "1 second"
      ],
      [
        "Sets",
        "1"
      ],
      [
        "Daily",
        "1 time"
      ]
    ]
  }
];

const list = document.getElementById('exerciseList');
const collapseAll = document.getElementById('collapseAll');
let openId = null;

function doseMarkup(dose) {
  if (!dose.length) return '<div class="no-dose">Dosage was not listed for this exercise in the handout.</div>';
  const cls = dose.length === 2 ? 'dose-grid two' : 'dose-grid';
  return `<div class="${cls}">${dose.map(([label, value]) => `
    <div class="dose-chip"><span class="dose-label">${label}</span><span class="dose-value">${value}</span></div>
  `).join('')}</div>`;
}

function render() {
  list.innerHTML = exercises.map((ex, i) => `
    <article class="exercise-card" id="card-${ex.id}">
      <button class="exercise-toggle" type="button" aria-expanded="false" aria-controls="details-${ex.id}" data-id="${ex.id}">
        <span class="number">${i + 1}</span>
        <span class="exercise-name">${ex.name}</span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
      <div class="exercise-details" id="details-${ex.id}">
        <p class="description">${ex.description}</p>
        ${doseMarkup(ex.dose)}
        <div class="exercise-photo-wrap">
          <img class="exercise-photo" src="./assets/exercises/${ex.id}.webp" alt="Demonstration of ${ex.name}" loading="lazy">
        </div>
        <p class="source-note">Source handout, page ${ex.page}</p>
      </div>
    </article>
  `).join('');
}

function setOpen(nextId, shouldScroll = true) {
  openId = nextId;
  document.querySelectorAll('.exercise-card').forEach(card => {
    const button = card.querySelector('.exercise-toggle');
    const isOpen = button.dataset.id === openId;
    card.classList.toggle('expanded', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
  });
  collapseAll.hidden = !openId;
  if (openId) sessionStorage.setItem('p4-open-exercise', openId);
  else sessionStorage.removeItem('p4-open-exercise');

  if (shouldScroll && openId) {
    requestAnimationFrame(() => {
      document.getElementById(`card-${openId}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    });
  }
}

render();
list.addEventListener('click', event => {
  const button = event.target.closest('.exercise-toggle');
  if (!button) return;
  const id = button.dataset.id;
  setOpen(openId === id ? null : id);
});
collapseAll.addEventListener('click', () => setOpen(null));

const remembered = sessionStorage.getItem('p4-open-exercise');
if (remembered && exercises.some(ex => ex.id === remembered)) setOpen(remembered, false);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
