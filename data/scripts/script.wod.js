let lastWinner = null;
// Random outcome generator function
function random(winner) {
  const outcomes = [
    "{loser} DEFEATED — PROTAGONIST DESTINY ACTIVATED",
    "{loser} ERASED FROM THE TIMELINE",
    "MAIN CHARACTER ENERGY — {loser} = BACKGROUND DECORATION",
    "SHONEN LAW: PROTAGONIST VICTORY GUARANTEED",
    "PLOT HOLE — THIS OUTCOME MAKES NO SENSE",
    "FINAL ATTACK CONNECTS — {loser}'S JOURNEY ENDS",
    "HERO'S RESOLVE — {loser} = MERE OBSTACLE",
    "CHARACTER DATA CORRUPTED",
    "{loser}'S CLONE STILL SUFFERED DEFEAT",
    "INTERRUPTED MID-TRANSFORMATION SEQUENCE",
    "MUTUAL KNOCKOUT — ANIMATION BUDGET DEPLETED",
    "EXTREME DIFFICULTY — {loser} ONLY POSTPONED FATE",
    "ULTIMATE EVOLUTION — {loser} NEVER HAD A CHANCE",
    "BLITZED — TOO SLOW FOR COMBAT PREDICTION",
    "MINIMAL EFFORT — NO POWER-UP REQUIRED",
    "LEGENDARY BATTLE THEME — {loser}'S TRACK FORGOTTEN",
    "TRAINING COMPLETE — {loser} REMAINS WEAK",
    "EVEN SIDEKICK OUTMATCHED {loser}",
    "MODERATE CHALLENGE — STILL VICTORIOUS",
    "SUPPORTING CAST MEMBER SURPASSED {loser}",
    "{loser}'S FANS ABANDONED SHIP MID-BATTLE",
    "EFFORTLESS VICTORY — {loser}'S STORY CANCELLED",
    "NARRATOR BENCHED {loser}",
    "{loser}'S POWER LEVEL INCONSEQUENTIAL",
    "{loser}'S BATTLE AURA FAILED TO ACTIVATE",
    "NOT WORTHY OF HEALTH BAR DISPLAY",
    "TWIST ENDING — VICTORY INDETERMINATE, AUDIENCE BAFFLED",
    "SHONEN DEADLOCK — POWER-UPS MUTUALLY NULLIFIED",
    "{loser} = PERPETUAL BACKGROUND FIGURE",
    "ABSOLUTE SUPREMACY — NO DEFENSE POSSIBLE",
    "EVOLUTION INTERRUPTED — VICTORY SECURED REGARDLESS",
    "{loser}'S ENTIRE CLAN FEELS THE SHAME",
    "{loser}'S SAGA >>> PROTAGONIST'S JOURNEY",
    "MAIN CHARACTER ARC >>> {loser}'S DEVELOPMENT",
    "REWIND EPISODE — REMATCH MANDATORY",
    "{loser} FAILED AWARENESS CHECK",
    "ANIME TROPE DICTATES YOUR DEFEAT",
    "VICTORY DETERMINED IN STORYBOARD PHASE",
    "TECHNICAL DEFICIENCY FOR {loser}",
    "TRIUMPHANT EVEN IN RECAP SPECIAL",
    "INTENSE STRUGGLE — BUT {loser} POSED NO REAL DANGER",
    "EVEN SHADOW CLONE OVERPOWERED {loser}",
    "DEFEATED DURING EMOTIONAL FLASHBACK",
    "FINAL FORM NERFED IN LATEST PATCH",
    "{loser} ANIMATED WITH MINIMAL BUDGET",
    "ABSOLUTELY EFFORTLESS — NO BATTLE THEME AUDIBLE",
    "VICTORY ACHIEVED PRE-COMMERCIAL",
    "{loser}'S TRAGIC BACKSTORY PROVED IRRELEVANT",
    "DOMINATED ACROSS ALL SAGAS",
    "REROLL DESTINY — COSMIC BALANCE UNDECIDED",
    "PLOT CONTRIVANCE SEALED FATE",
    "{loser}'S LEGACY REDUCED TO THIS MOMENT",
    "{loser} NEVER ADVANCED BEYOND APPRENTICE STAGE",
    "{loser} OVERWHELMED BY SUDDEN EVOLUTION",
    "COMBAT PRECISION FAILED — ALL ATTACKS MISSED",
    "WRITTEN OUT OF NEXT SAGA",
    "MODERATE EFFORT — {loser} STILL OVERWHELMED",
    "TRAGIC DIFFICULTY — {loser} ANNIHILATED",
    "{loser}'S VELOCITY INSUFFICIENT FOR COMBAT",
    "SWEPT BEFORE OPENING CREDITS",
    "IMPOSSIBLE ODDS — AND STILL EMERGED VICTORIOUS",
    "EXTREME CHALLENGE — SOLELY DUE TO {loser}'S EVASION",
    "SINGLE BLOW FINISH — {loser} UNABLE TO RESPOND",
    "BATTLE THEME INDUCES SLUMBER",
    "THREE-SECOND KNOCKOUT",
    "EVEN BASE FORM SUFFICIENT FOR VICTORY",
    "WEAPON SHATTERED ON IMPACT",
    "CANONICAL EVENT: {loser} SUCCUMBS",
    "EFFORTLESS — {loser} LACKS HERO QUALITIES",
    "INTENSE STRUGGLE — BUT {loser} UNSUITED FOR BATTLE MANGA",
    "NEGLIGIBLE EFFORT — SIDE CHARACTER VIBES",
    "{loser} OBLITERATED BY NARRATIVE DEMANDS",
    "VICTORY SCRIPTED AS CUTSCENE",
    "{loser}'S ULTIMATE FORM PROVED FUTILE",
    "THE TYPE TO BE DEFEATED OFF-SCREEN",
    "MINIMAL CHALLENGE — {loser} = TRAINING DUMMY",
    "SHONEN PRINCIPLE: TRUE HERO PREVAILS",
    "STORY FROZEN — BOTH COMBATANTS NERFED",
    "FANBASE TRANSFERRED ALLEGIANCE MID-CONFLICT",
    "PERMANENTLY CONCLUDED {loser}'S STORY ARC",
    "INSUFFICIENT DRAMA FOR MID-SEASON CLIMAX",
    "SUPREME TECHNIQUE EXECUTED — {loser} DISINTEGRATED",
    "DIVINE-LEVEL CONFLICT — HERO ASCENDED, {loser} FELL",
    "PERMANENT DEFEAT — NO SAVE POINT AVAILABLE",
    "ULTIMATE FORM UNNECESSARY",
    "PLOT ARMOR COMPROMISED — {loser} FINISHED",
    "{loser} UPDATED — STILL MEDIOCRE",
    "MERELY A SIDE MISSION FOR THE HERO",
    "IMPOSSIBLE CHALLENGE — PERFECT VICTORY ACHIEVED",
    "INADEQUATE FOR FILLER STORYLINE",
    "BLADE SHATTERED UPON CONTACT",
    "STALEMATE SAGA — BOTH THEMES ABRUPTLY CUT",
    "DESTINY DECREES RETRY — RESET TIMELINE",
    "MINIMAL RESISTANCE — BARELY A WARM-UP",
    "{loser} DEFEATED IN STORYBOARD STAGE",
    "POWER SCALING DISFAVORS {loser}",
    "{loser} CANNOT WITHSTAND TRUE BATTLE MANGA INTENSITY",
    "{loser}'S CHARACTER GROWTH STUNTED",
    "TRIUMPHANT DESPITE {loser}'S FLASHBACK POWER SURGE",
    "NO SUMMONS USED — PURE MARTIAL PROWESS",
    "EFFORTLESS — {loser} FAILED TO APPEAR IN MANGA PANELS",
    "WORST PERFORMANCE OF HERO'S CAREER",
    "DEFEATED DURING OPENING SEQUENCE",
    "GOD-TIER CONFLICT — {loser} CONQUERED MULTIPLE DIMENSIONS",
    "SINGLE STRIKE FINISH — ACCEPT DEFEAT",
    "HIGH-MODERATE DIFFICULTY — BUT {loser} ULTIMATELY FELL",
    "ELIMINATED IN FILLER EPISODE",
    "IMPROVE POWER SYSTEM IN NEXT REINCARNATION",
    "COSMIC-LEVEL STRUGGLE — {loser} EXPUNGED FROM EXISTENCE",
  ];

  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  return replaceTags(outcome, winner);
}

// Battle outcomes array
const battleOutcomes = ["red", "blue"];
const spinAgainOptions = [
  "SPIN AGAIN",
  "REROLL DESTINY",
  "TRY YOUR LUCK",
  "ANOTHER SPIN",
  "FATE DEMANDS MORE",
  "DOUBLE OR NOTHING",
  "SPINCEPTION",
  "WHEEL OF FATE CALLS",
  "ANOTHER CHANCE",
  "DESTINY REROLL",
];

let isSpinning = false;
let currentRotation = 0;
let spinVelocity = 0;
let animationId = null;
let startTime = 0;
let totalSpinDuration = 5000;
let hasSpinAgainSection = false;
let spinAgainIndex = -1;
let spinAgainAngle = 0;

// DOM Elements
const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const resultModal = document.getElementById("resultModal");
const modalResult = document.getElementById("modalResult");
const closeModal = document.getElementById("closeModal");
const spinAgain = document.getElementById("spinAgain");

// Audio elements - check if they exist before using
let spinSound = document.getElementById("spinSound");
let winSound = document.getElementById("winSound");

// If audio elements don't exist, create dummy objects to prevent errors
if (!spinSound) {
  spinSound = { currentTime: 0, play: () => {}, pause: () => {} };
}
if (!winSound) {
  winSound = { currentTime: 0, play: () => {}, pause: () => {} };
}

// Initialize wheel
if (wheel) {
  renderWheel();
}

// Event Listeners
if (spinButton) {
  spinButton.addEventListener("click", startSpin);
}

if (closeModal) {
  closeModal.addEventListener("click", closeResultModal);
}

if (spinAgain) {
  spinAgain.addEventListener("click", closeResultModal);
}

// Close modal when clicking outside
if (resultModal) {
  resultModal.addEventListener("click", (e) => {
    if (e.target === resultModal) {
      closeResultModal();
    }
  });
}

// Functions
function renderWheel() {
  if (!wheel) return;
  
  wheel.innerHTML = "";

  // Colors for red, spin-again, and blue
  const redColor = "#FF6B6B";
  const blueColor = "#3A86FF";
  const spinAgainColor = "#10B981";

  // Calculate angles - spin again gets 1% (3.6 degrees), red and blue share the rest
  const totalDegrees = 360;
  const spinAgainDegrees = 3.6; // 1% of 360
  const remainingDegrees = totalDegrees - spinAgainDegrees;
  const redBlueDegrees = remainingDegrees / 2; // Split remaining between red and blue

  // Create the wheel using a single conic-gradient
  const gradient = `conic-gradient(
          ${redColor} 0deg ${redBlueDegrees}deg,
          ${spinAgainColor} ${redBlueDegrees}deg ${
    redBlueDegrees + spinAgainDegrees
  }deg,
          ${blueColor} ${redBlueDegrees + spinAgainDegrees}deg 360deg
        )`;

  wheel.style.background = gradient;

  // Add labels for each section
  addSectionLabel("RED", redBlueDegrees / 2, redColor);
  addSectionLabel(
    spinAgainOptions[Math.floor(Math.random() * spinAgainOptions.length)],
    redBlueDegrees + spinAgainDegrees / 2,
    spinAgainColor,
    true
  );
  addSectionLabel(
    "BLUE",
    redBlueDegrees + spinAgainDegrees + redBlueDegrees / 2,
    blueColor
  );

  // Store the angles for determining the result
  spinAgainAngle = redBlueDegrees;
}

function addSectionLabel(text, angle, color, isSmall = false) {
  if (!wheel) return;
  
  const label = document.createElement("div");
  label.className = "section-label";
  label.textContent = text;
  label.style.transform = `rotate(${angle}deg)`;

  if (isSmall) {
    label.style.fontSize = "0.7rem";
    label.style.bottom = "10px";
  }

  wheel.appendChild(label);
}

function startSpin() {
  if (isSpinning || !wheel) return;

  isSpinning = true;
  if (spinButton) {
    spinButton.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i>';
  }

  // Play spin sound
  spinSound.currentTime = 0;
  spinSound.play();

  // Set initial velocity
  spinVelocity = 30 + Math.random() * 20;
  startTime = performance.now();

  // Start animation
  animateSpin();
}

function animateSpin(currentTime = performance.now()) {
  const elapsed = currentTime - startTime;

  // Apply rotation
  currentRotation += spinVelocity;
  if (wheel) {
    wheel.style.transform = `rotate(${currentRotation}deg)`;
  }

  // Apply deceleration
  const progress = Math.min(elapsed / totalSpinDuration, 1);
  spinVelocity = 50 * (1 - progress) * (1 - progress);

  // Continue animation if still spinning
  if (progress < 1) {
    animationId = requestAnimationFrame(animateSpin);
  } else {
    // Spin complete
    finishSpin();
  }
}

function finishSpin() {
  isSpinning = false;
  if (spinButton) {
    spinButton.innerHTML = '<i class="fas fa-play"></i>';
  }

  // Calculate winner based on final rotation
  const normalizedRotation = (360 - (currentRotation % 360)) % 360;

  let winner;
  let isSpinAgain = false;
  let outcomeText = "";
  lastWinner = winner;
  
  // Check if pointer landed on spin again section (1% chance area)
  // Spin again section spans from spinAgainAngle to spinAgainAngle + 3.6 degrees
  const spinAgainStart = spinAgainAngle;
  const spinAgainEnd = (spinAgainAngle + 3.6) % 360;

  if (spinAgainEnd > spinAgainStart) {
    // Normal case: section doesn't wrap around 360
    isSpinAgain =
      normalizedRotation >= spinAgainStart && normalizedRotation < spinAgainEnd;
  } else {
    // Case where section wraps around 360
    isSpinAgain =
      normalizedRotation >= spinAgainStart || normalizedRotation < spinAgainEnd;
  }

  if (isSpinAgain) {
    winner = "SPIN AGAIN!";
  } else {
    // Determine if it's red or blue (split the remaining 99%)
    const redStart = 0;
    const redEnd = 178.2; // 49.5% of 360
    const blueStart = 181.8; // After spin again section (49.5% + 1% = 50.5% start)
    const blueEnd = 360;

    if (normalizedRotation >= redStart && normalizedRotation < redEnd) {
      winner = "red";
    } else {
      winner = "blue";
    }
    outcomeText = random(winner);
  }

  // Small delay before showing result
  setTimeout(() => {
    // Play win sound
    winSound.currentTime = 0;
    winSound.play();

    // Show result in modal
    if (isSpinAgain) {
      if (modalResult) {
        modalResult.textContent = `${winner}`;
        modalResult.style.background =
          "linear-gradient(135deg, #10B981, #34D399)";
      }

      // Add special message for spin again
      const modalTitle = document.querySelector(".modal-title");
      const modalContent = document.querySelector(".modal-content p");
      if (modalTitle) modalTitle.textContent = "The Wheel Demands Another Spin!";
      if (modalContent) modalContent.textContent = "Fate isn't done with you yet!";
    } else {
      if (modalResult) {
        modalResult.textContent = `${winner} (${outcomeText})`;
        modalResult.style.background = "var(--gradient-accent)";
      }

      // Reset modal text for normal outcomes
      const modalTitle = document.querySelector(".modal-title");
      const modalContent = document.querySelector(".modal-content p");
      if (modalTitle) modalTitle.textContent = "The Wheel Has Spoken!";
      if (modalContent) modalContent.textContent = "The battle outcome is:";
    }

    if (resultModal) {
      resultModal.style.display = "flex";
    }

    // Create confetti effect
    createConfetti();
  }, 500);
}

function replaceTags(str, winner) {
  if (!winner) return str;

  const loser = winner === "red" ? "BLUE" : "RED";

  return str.replaceAll("{winner}", winner).replaceAll("{loser}", loser);
}

function closeResultModal() {
  if (resultModal) {
    resultModal.style.display = "none";
  }

  // Re-render wheel with new random configuration for next spin
  renderWheel();
}

function createConfetti() {
  const colors = ["#f59e0b", "#ec4899", "#6366f1", "#10b981", "#3b82f6"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = "1";

    document.body.appendChild(confetti);

    // Animate confetti
    const animation = confetti.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        {
          transform: `translateY(${window.innerHeight}px) rotate(${
            360 + Math.random() * 360
          }deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1000 + Math.random() * 2000,
        easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
      }
    );

    animation.onfinish = () => {
      confetti.remove();
    };
  }
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Back to top button - only add if element exists
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}