// ===== WHEEL OF DOOM - MAIN JAVASCRIPT =====

class WheelOfDoom {
  constructor() {
    // Stats tracking
    this.stats = {
      red: 0,
      blue: 0,
      spin: 0,
      total: 0,
      history: [],
    };

    // Achievements tracking
    this.achievements = {
      firstBlood: false,
      luckySpin: false,
      warrior: false,
      gambler: false,
    };

    // Spin state
    this.isSpinning = false;
    this.currentRotation = 0;
    this.spinVelocity = 0;
    this.animationId = null;
    this.startTime = 0;
    this.totalSpinDuration = 4000; // 4 seconds
    this.lastWinner = null;

    // Spin again options
    this.spinAgainOptions = [
      "SPIN AGAIN",
      "REROLL DESTINY",
      "FATE INTERVENES",
      "ANOTHER CHANCE",
      "DESTINY REROLL",
      "WHEEL OF FATE",
      "DOUBLE OR NOTHING",
      "SECOND SPIN",
      "LUCKY REROLL",
      "FATE DEMANDS MORE",
      "PLOT TWIST",
      "TIME REWIND",
      "RESET TIMELINE",
      "SECOND CHANCE",
      "REROLL",
    ];

    // Battle outcomes
    this.outcomes = [
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
      "PROTAGONIST BREATHED — {loser} COLLAPSED",
      "{loser} OUTSCALED BY NARRATIVE NECESSITY",
      "ARC FINALE ENERGY — {loser} ERASED WITH STYLE",
      "INNER MONOLOGUE BUFF — {loser} COULDN’T COMPETE",
      "{loser} INTERRUPTED BY POWER OF FRIENDSHIP",
      "UNLOCKED HIDDEN POTENTIAL — {loser} REGRETS EXISTENCE",
      "DESTINED RIVAL STATUS REVOKED",
      "{loser} OUTDATED IN CURRENT META",
      "CUTSCENE IMMUNITY — HERO UNTOUCHABLE",
      "{loser} HIT BY SYMBOLIC SUNRISE FINISHER",
      "PROTAGONIST OST DROPPED — {loser} PANICKED",
      "SECOND PHASE SKIPPED — {loser} UNINSTALLED",
      "{loser} LOST TO BASE STATS ALONE",
      "FINAL PANEL ZOOM — {loser} SILHOUETTED IN DEFEAT",
      "MID-SEASON POWER SPIKE — {loser} OVERWHELMED",
      "{loser} COULDN’T HANDLE TRUE FORM REVEAL",
      "COMBO STRING UNBROKEN — {loser} NEVER RECOVERED",
      "NO DAMAGE TAKEN — PERFECT CLEAR",
      "{loser} FAILED THE VILLAIN SPEECH CHECK",
      "MONOLOGUE COMPLETE — {loser} ALREADY DEFEATED",
      "RIVALRY ARC CONCLUDED — {loser} LEFT BEHIND",
      "{loser} ERASED BY FINAL CHAPTER ENERGY",
      "LIMIT BREAK ACTIVATED — {loser} SHATTERED",
      "{loser} OUTCLASSED IN EVERY STAT CATEGORY",
      "ONE SIDED SLAUGHTER — NO TRAINING ARC REQUIRED",
      "HYPE MOMENT TRIGGERED — {loser} DISAPPEARED",
      "{loser} LOST DURING TRANSITION FRAME",
      "PROTAGONIST SMILED — FATE SEALED",
      "{loser} COULDN’T SURVIVE THE CLIFFHANGER",
      "CHARACTER DEVELOPMENT >>> {loser}'S ENTIRE EXISTENCE",
      "BACKSTORY TOO SHORT — {loser} DOOMED",
      "{loser} NERFED BY WRITER INTERVENTION",
      "FINISHER ANIMATED AT 120 FPS — {loser} VANISHED",
      "OPENING THEME CALLBACK — {loser} FINISHED",
      "{loser} MISSED EVERY COUNTER WINDOW",
      "OVERPOWERED BY RAW DETERMINATION",
      "{loser} LOST THE POWER-SCALING DEBATE",
      "NO SECOND WIND FOR {loser}",
      "{loser} COULDN’T MATCH FINAL ARC INTENSITY",
      "OVERKILL DAMAGE — HP NEGATIVE",
      "{loser} OUTPACED BEFORE FIRST STRIKE",
      "BOSS MUSIC STOPPED EARLY",
      "{loser} WAS JUST A STEPPING STONE",
      "TRUE NAME REVEALED — {loser} UNRAVELED",
      "{loser} ERASED BY SYMBOLIC RAIN SCENE",
      "ULTIMATE TECHNIQUE — ZERO SURVIVABILITY",
      "{loser} COULDN’T SURVIVE TITLE DROP MOMENT",
      "PROTAGONIST AURA EXPANDED — {loser} RETREATED PERMANENTLY",
      "{loser} FAILED FINAL ARC QUALIFICATIONS",
      "HERO DIDN’T EVEN REMOVE WEIGHTS",
      "{loser} DEFEATED BY PASSIVE ABILITY ALONE",
      "STAMINA BAR UNUSED — TOTAL DOMINANCE",
      "{loser} INTERRUPTED BY LEGENDARY CALLBACK ATTACK",
      "POWER-UP ANNOUNCED — {loser} IMMEDIATELY OUTDATED",
      "{loser} COULDN’T HANDLE FULL SCREEN SPECIAL",
      "PROTAGONIST BLINKED — {loser} MISSED FRAME ADVANTAGE",
      "{loser} DESTINED FOR REDEMPTION ARC INSTEAD",
      "CANON EVENT TRIGGERED — {loser} REMOVED",
      "{loser} OUTMATCHED BY EMOTIONAL DAMAGE BONUS",
      "SPEED BLITZ — NO REACTION TIME",
      "{loser} ERASED BY MULTIVERSE SCALING",
      "ENDING CREDITS ROLLED — {loser} LEFT BEHIND",
      "HIDDEN PASSIVE PROC — {loser} COLLAPSED",
      "{loser} FAILED FINAL BOSS ENERGY CHECK",
      "PROTAGONIST ENTERED FLOW STATE",
      "{loser} COULDN’T SURVIVE ONE-LINER FINISH",
      "OVERWHELMED BY RAW PANEL PRESENCE",
      "{loser} LOST IN A SINGLE SPREAD PAGE",
      "DETERMINATION STACKED — {loser} OUTPLAYED",
      "{loser} ERASED BETWEEN FRAMES",
      "TRUE HERO MOMENT — {loser} OUTCLASSED",
      "{loser} COULDN’T SCALE TO FINAL ARC POWER CREEP",
      "PROTAGONIST SURPASSED LIMITATIONS — {loser} STAGNATED",
      "{loser} COULDN’T HANDLE SYMBOLIC FIST CLENCH",
      "FINAL SMIRK ACTIVATED — {loser} BROKEN",
      "{loser} REDUCED TO FLASHBACK MATERIAL",
      "FATE LOCKED IN — {loser} POWERLESS",
      "PROTAGONIST DIDN’T EVEN DRAW FULL POWER",
      "{loser} ERASED BY SINGLE SOUND EFFECT: *THUD*",
      "BATTLE DECIDED BEFORE IT BEGAN",
      "{loser} COULDN’T SURVIVE POWER OF CALLBACK",
      "HERO SURPASSED PLOT CEILING",
      "{loser} ERASED FROM POWER RANKINGS",
      "TRUE RESOLVE UNLEASHED — {loser} FINISHED",
      "{loser} FAILED PROTAGONIST CHECK",
      "STATS CHECK FAILED — INSTANT ELIMINATION",
      "{loser} REDUCED TO CROWD REACTION PANEL",
      "PROTAGONIST ASCENDED — {loser} DESCENDED",
      "{loser} OUTPLAYED IN EVERY TIMELINE",
      "FATE SEALED WITH A SINGLE WORD",
      "{loser} OUTCLASSED BY SHEER WILLPOWER",
      "FINAL ARC BLESSING ACTIVATED",
      "{loser} NEVER STOOD A CHANCE",
      "DOMINANCE CONFIRMED ACROSS ALL CONTINUITIES",
      "{loser} ERASED FROM FUTURE MERCHANDISE",
      "ABSOLUTE PROTAGONIST PRIVILEGE ACTIVATED",
      "{loser} LOST BEFORE DIALOGUE FINISHED",
    ];

    // DOM Elements
    this.wheel = document.getElementById("wheel");
    this.spinButton = document.getElementById("spinButton");
    this.resultModal = document.getElementById("resultModal");
    this.modalResult = document.getElementById("modalResult");
    this.modalOutcome = document.getElementById("modalOutcome");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalIcon = document.getElementById("modalIcon");
    this.closeModalBtnX = document.getElementById("closeModal");
    this.closeModalBtn = document.getElementById("closeModalBtn");
    this.spinAgain = document.getElementById("spinAgain");
    this.resetStatsBtn = document.getElementById("resetStatsBtn");
    this.clearHistoryBtn = document.getElementById("clearHistoryBtn");

    // Stats elements
    this.redCount = document.getElementById("redCount");
    this.blueCount = document.getElementById("blueCount");
    this.spinCount = document.getElementById("spinCount");
    this.totalSpins = document.getElementById("totalSpins");
    this.redProgress = document.getElementById("redProgress");
    this.blueProgress = document.getElementById("blueProgress");
    this.spinProgress = document.getElementById("spinProgress");
    this.historyList = document.getElementById("historyList");

    // Achievement elements
    this.achieveFirstBlood = document.getElementById("achieveFirstBlood");
    this.achieveLucky = document.getElementById("achieveLucky");
    this.achieveWarrior = document.getElementById("achieveWarrior");
    this.achieveGambler = document.getElementById("achieveGambler");

    // Audio elements
    this.spinSound = document.getElementById("spinSound");
    this.winSound = document.getElementById("winSound");

    // Initialize
    this.init();
  }

  init() {
    this.renderWheel();
    this.setupEventListeners();
    this.loadStats();
    this.updateUI();
  }

  setupEventListeners() {
    // Spin button
    if (this.spinButton) {
      this.spinButton.addEventListener("click", () => this.startSpin());
    }

    // Modal close buttons
    if (this.closeModalBtnX) {
      this.closeModalBtnX.addEventListener("click", () => this.closeModal());
    }
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener("click", () => this.closeModal());
    }
    if (this.spinAgain) {
      this.spinAgain.addEventListener("click", () => {
        this.closeModal();
        setTimeout(() => this.startSpin(), 300);
      });
    }

    // Reset stats button
    if (this.resetStatsBtn) {
      this.resetStatsBtn.addEventListener("click", () => this.resetStats());
    }

    // Clear history button
    if (this.clearHistoryBtn) {
      this.clearHistoryBtn.addEventListener("click", () => this.clearHistory());
    }

    // Close modal on outside click
    if (this.resultModal) {
      this.resultModal.addEventListener("click", (e) => {
        if (e.target === this.resultModal) {
          this.closeModal();
        }
      });
    }

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (
        e.code === "Space" &&
        !this.isSpinning &&
        this.resultModal.style.display !== "flex"
      ) {
        e.preventDefault();
        this.startSpin();
      }
      if (e.code === "Escape" && this.resultModal.style.display === "flex") {
        this.closeModal();
      }
    });

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
  }

  renderWheel() {
    if (!this.wheel) return;

    this.wheel.innerHTML = "";

    // Colors
    const redColor = "#ff4757";
    const blueColor = "#1e90ff";
    const spinAgainColor = "#10b981";

    // Precise angles: 49% red, 2% spin again, 49% blue
    const totalDegrees = 360;
    const spinAgainDegrees = 7.2; // 2% of 360
    const redBlueDegrees = (totalDegrees - spinAgainDegrees) / 2; // 176.4 degrees each

    // Store angles for result calculation
    this.spinAgainStart = redBlueDegrees;
    this.spinAgainEnd = redBlueDegrees + spinAgainDegrees;

    // Create gradient
    const gradient = `conic-gradient(
            ${redColor} 0deg ${redBlueDegrees}deg,
            ${spinAgainColor} ${redBlueDegrees}deg ${redBlueDegrees + spinAgainDegrees}deg,
            ${blueColor} ${redBlueDegrees + spinAgainDegrees}deg 360deg
        )`;

    this.wheel.style.background = gradient;

    // Add labels
    this.addSectionLabel("RED", redBlueDegrees / 2, "red");
    this.addSectionLabel(
      this.spinAgainOptions[
        Math.floor(Math.random() * this.spinAgainOptions.length)
      ],
      redBlueDegrees + spinAgainDegrees / 2,
      "spin",
    );
    this.addSectionLabel(
      "BLUE",
      redBlueDegrees + spinAgainDegrees + redBlueDegrees / 2,
      "blue",
    );
  }

  addSectionLabel(text, angle, colorClass) {
    if (!this.wheel) return;

    const label = document.createElement("div");
    label.className = `section-label ${colorClass}-label`;
    label.textContent = text;

    // Position label around the wheel
    label.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-180px)`;

    this.wheel.appendChild(label);
  }

  startSpin() {
    if (this.isSpinning || !this.wheel) return;

    this.isSpinning = true;
    if (this.spinButton) {
      this.spinButton.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i>';
    }

    // Play spin sound
    this.playSound(this.spinSound);

    // Set initial velocity
    this.spinVelocity = 45 + Math.random() * 30;
    this.startTime = performance.now();

    // Start animation
    this.animateSpin();
  }

  animateSpin(currentTime = performance.now()) {
    const elapsed = currentTime - this.startTime;

    // Apply rotation
    this.currentRotation += this.spinVelocity;
    if (this.wheel) {
      this.wheel.style.transform = `rotate(${this.currentRotation}deg)`;
    }

    // Deceleration curve
    const progress = Math.min(elapsed / this.totalSpinDuration, 1);
    this.spinVelocity = 45 * Math.pow(1 - progress, 2) + 2;

    if (progress < 1) {
      this.animationId = requestAnimationFrame((time) =>
        this.animateSpin(time),
      );
    } else {
      this.finishSpin();
    }
  }

  finishSpin() {
    this.isSpinning = false;
    if (this.spinButton) {
      this.spinButton.innerHTML = '<i class="fas fa-play"></i>';
    }

    // Calculate final position
    const normalizedRotation = (360 - (this.currentRotation % 360)) % 360;

    let winner;
    let isSpinAgain = false;
    let outcomeText = "";

    // Check if landed on spin again (2% chance)
    isSpinAgain =
      normalizedRotation >= this.spinAgainStart &&
      normalizedRotation < this.spinAgainEnd;

    if (isSpinAgain) {
      winner = "SPIN AGAIN!";
      this.stats.spin++;
    } else {
      // Determine if red or blue (49% chance each)
      if (normalizedRotation < this.spinAgainStart) {
        winner = "red";
        this.stats.red++;
      } else {
        winner = "blue";
        this.stats.blue++;
      }
      outcomeText = this.generateOutcome(winner);
    }

    this.stats.total++;
    this.lastWinner = winner;

    // Add to history
    this.addToHistory(winner, outcomeText);

    // Update UI
    this.updateUI();

    // Check achievements
    this.checkAchievements();

    // Play win sound
    this.playSound(this.winSound);

    // Show result
    setTimeout(() => {
      this.showResult(winner, outcomeText, isSpinAgain);
    }, 500);
  }

  generateOutcome(winner) {
    const outcome =
      this.outcomes[Math.floor(Math.random() * this.outcomes.length)];
    const loser = winner === "red" ? "BLUE" : "RED";
    return outcome.replaceAll("{loser}", loser);
  }

  showResult(winner, outcomeText, isSpinAgain) {
    if (!this.resultModal || !this.modalResult || !this.modalOutcome) return;

    if (isSpinAgain) {
      this.modalResult.textContent = winner;
      this.modalOutcome.textContent = "The wheel demands another spin!";
      this.modalResult.style.background =
        "linear-gradient(135deg, #10b981, #059669)";
      this.modalIcon.innerHTML = '<i class="fas fa-redo-alt"></i>';
      this.modalTitle.textContent = "Fate Intervenes!";
    } else {
      this.modalResult.textContent = `${winner.toUpperCase()} VICTORY`;
      this.modalOutcome.textContent = outcomeText;
      this.modalResult.style.background =
        winner === "red"
          ? "linear-gradient(135deg, #ff4757, #ee5a24)"
          : "linear-gradient(135deg, #1e90ff, #0652DD)";
      this.modalIcon.innerHTML =
        winner === "red"
          ? '<i class="fas fa-skull"></i>'
          : '<i class="fas fa-dragon"></i>';
      this.modalTitle.textContent = "The Wheel Has Spoken!";
    }

    this.resultModal.style.display = "flex";
    this.createConfetti(winner);
  }

  closeModal() {
    if (this.resultModal) {
      this.resultModal.style.display = "none";
    }
    this.renderWheel();
  }

  updateUI() {
    // Update counts
    if (this.redCount) this.redCount.textContent = this.stats.red;
    if (this.blueCount) this.blueCount.textContent = this.stats.blue;
    if (this.spinCount) this.spinCount.textContent = this.stats.spin;
    if (this.totalSpins) this.totalSpins.textContent = this.stats.total;

    // Update progress bars
    if (this.stats.total > 0) {
      if (this.redProgress) {
        this.redProgress.style.width = `${(this.stats.red / this.stats.total) * 100}%`;
      }
      if (this.blueProgress) {
        this.blueProgress.style.width = `${(this.stats.blue / this.stats.total) * 100}%`;
      }
      if (this.spinProgress) {
        this.spinProgress.style.width = `${(this.stats.spin / this.stats.total) * 100}%`;
      }
    }

    // Save stats
    this.saveStats();
  }

  addToHistory(winner, outcomeText) {
    const historyItem = {
      winner: winner,
      outcome: outcomeText,
      timestamp: new Date().toLocaleTimeString(),
    };

    this.stats.history.unshift(historyItem);

    // Keep only last 20 items
    if (this.stats.history.length > 20) {
      this.stats.history.pop();
    }

    this.renderHistory();
  }

  renderHistory() {
    if (!this.historyList) return;

    if (this.stats.history.length === 0) {
      this.historyList.innerHTML = `
                <div class="history-empty">
                    <i class="fas fa-dice-d20"></i>
                    <p>No spins yet. Start spinning!</p>
                </div>
            `;
      return;
    }

    this.historyList.innerHTML = this.stats.history
      .map(
        (item) => `
            <div class="history-item ${item.winner === "SPIN AGAIN!" ? "spin" : item.winner}">
                <div class="history-info">
                    <div class="history-icon ${item.winner === "SPIN AGAIN!" ? "spin" : item.winner}">
                        <i class="fas fa-${item.winner === "red" ? "skull" : item.winner === "blue" ? "dragon" : "redo-alt"}"></i>
                    </div>
                    <div class="history-text">
                        ${item.winner === "SPIN AGAIN!" ? "SPIN AGAIN" : item.winner.toUpperCase()}
                    </div>
                </div>
                <div class="history-time">${item.timestamp}</div>
            </div>
        `,
      )
      .join("");
  }

  clearHistory() {
    this.stats.history = [];
    this.renderHistory();
    this.saveStats();
  }

  checkAchievements() {
    // First Blood - First spin
    if (!this.achievements.firstBlood && this.stats.total >= 1) {
      this.unlockAchievement("firstBlood");
    }

    // Lucky Spin - Get spin again
    if (!this.achievements.luckySpin && this.stats.spin >= 1) {
      this.unlockAchievement("luckySpin");
    }

    // Warrior - 10 wins total
    if (!this.achievements.warrior && this.stats.red + this.stats.blue >= 10) {
      this.unlockAchievement("warrior");
    }

    // Gambler - 50 total spins
    if (!this.achievements.gambler && this.stats.total >= 50) {
      this.unlockAchievement("gambler");
    }
  }

  unlockAchievement(achievement) {
    this.achievements[achievement] = true;

    const element = document.getElementById(
      `achieve${achievement.charAt(0).toUpperCase() + achievement.slice(1)}`,
    );
    if (element) {
      element.classList.remove("locked");
      element.classList.add("unlocked");

      // Show achievement popup
      this.showAchievementPopup(achievement);
    }
  }

  showAchievementPopup(achievement) {
    const achievementNames = {
      firstBlood: "First Blood",
      luckySpin: "Lucky Spin",
      warrior: "Warrior",
      gambler: "Gambler",
    };

    // Create temporary popup
    const popup = document.createElement("div");
    popup.className = "achievement-popup";
    popup.innerHTML = `
            <i class="fas fa-trophy"></i>
            <div>
                <h4>Achievement Unlocked!</h4>
                <p>${achievementNames[achievement]}</p>
            </div>
        `;

    // Add styles dynamically
    popup.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 3000;
            animation: slideInRight 0.5s ease forwards;
        `;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.style.animation = "slideOutRight 0.5s ease forwards";
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  }

  resetStats() {
    if (confirm("Are you sure you want to reset all statistics?")) {
      this.stats = {
        red: 0,
        blue: 0,
        spin: 0,
        total: 0,
        history: [],
      };
      this.achievements = {
        firstBlood: false,
        luckySpin: false,
        warrior: false,
        gambler: false,
      };
      this.updateUI();
      this.renderHistory();
      this.saveStats();

      // Reset achievement classes
      document.querySelectorAll(".achievement-item").forEach((item) => {
        item.classList.remove("unlocked");
        item.classList.add("locked");
      });
    }
  }

  playSound(audioElement) {
    if (audioElement) {
      try {
        audioElement.currentTime = 0;
        audioElement.play().catch((e) => console.log("Audio play failed:", e));
      } catch (e) {
        console.log("Audio error:", e);
      }
    }
  }

  createConfetti(winner) {
    const colors =
      winner === "red"
        ? ["#ff4757", "#ee5a24", "#ff6b81"]
        : winner === "blue"
          ? ["#1e90ff", "#0652DD", "#70a1ff"]
          : winner === "SPIN AGAIN!"
            ? ["#10b981", "#059669", "#34d399"]
            : ["#f59e0b", "#fbbf24", "#d97706"];

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 15 + 5 + "px";
        confetti.style.height = Math.random() * 15 + 5 + "px";
        confetti.style.animation = `confettiFall ${1 + Math.random() * 2}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.remove();
          }
        }, 3000);
      }, i * 20);
    }
  }

  saveStats() {
    try {
      localStorage.setItem("wheelStats", JSON.stringify(this.stats));
      localStorage.setItem(
        "wheelAchievements",
        JSON.stringify(this.achievements),
      );
    } catch (e) {
      console.log("Failed to save stats:", e);
    }
  }

  loadStats() {
    try {
      const savedStats = localStorage.getItem("wheelStats");
      if (savedStats) {
        this.stats = JSON.parse(savedStats);
      }

      const savedAchievements = localStorage.getItem("wheelAchievements");
      if (savedAchievements) {
        this.achievements = JSON.parse(savedAchievements);
        this.applyAchievements();
      }
    } catch (e) {
      console.log("Failed to load stats:", e);
    }
  }

  applyAchievements() {
    Object.keys(this.achievements).forEach((key) => {
      if (this.achievements[key]) {
        const element = document.getElementById(
          `achieve${key.charAt(0).toUpperCase() + key.slice(1)}`,
        );
        if (element) {
          element.classList.remove("locked");
          element.classList.add("unlocked");
        }
      }
    });
  }
}

// Initialize the wheel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WheelOfDoom();
});
