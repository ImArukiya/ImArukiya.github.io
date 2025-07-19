      var year = new Date().getFullYear();
      document.getElementById("copyright").textContent = year;
      // Load YouTube API script
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Called when player is ready
      function onPlayerReady(event) {
        // Mute the player (required for autoplay in most browsers)
        event.target.mute();
        // Start playback
        event.target.playVideo();
      }

      // Called when player state changes
      function onPlayerStateChange(event) {
        // Loop the video when it ends
        if (event.data === YT.PlayerState.ENDED) {
          player.playVideo();
        }
      }

      // Wait for DOM to be fully loaded before executing JavaScript
      document.addEventListener("DOMContentLoaded", function () {
        // Enhanced Theme Toggle
        const themeToggle = document.getElementById("themeToggle");
        const body = document.body;

        // Check for saved theme preference or use preferred color scheme
        const savedTheme =
          localStorage.getItem("theme") ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

        if (savedTheme === "dark") {
          body.classList.add("dark");
        }

        // System preference change listener
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
              body.classList.toggle("dark", e.matches);
            }
          });

        themeToggle.addEventListener("click", () => {
          const isDark = body.classList.toggle("dark");
          localStorage.setItem("theme", isDark ? "dark" : "light");
        });

        // Language selector functionality with translations
        const languageOptions = document.querySelectorAll(".language-option");
        const languageButton = document.querySelector(".language-button");
        const languageDropdown = document.querySelector(".language-dropdown");
        // FiveM Translation Dictionary - SINISILTA RP Server
        const translations = {
          en: {
            title: "SINISILTA RP",
            subtitle:
              "The best Finnish-themed SlowRP server with quality roleplay and community.",
            getStarted: "Get Started",
            watchDemo: "Watch Demo",
            stats: {
              lyricsServed: "Players Online",
              artists: "Active Factions",
              accuracy: "Server Uptime",
              support: "Staff Members",
            },
            features: {
              advancedControls: "Advanced Controls",
              advancedDesc:
                "Fine-tune every aspect of your roleplay experience.",
              realtimeSync: "Real-time Economy",
              realtimeDesc: "Dynamic economy system that updates in real-time.",
              analytics: "Character Stats",
              analyticsDesc: "Track your character progression and statistics.",
              learnMore: "Learn More",
            },
            server: {
              join_title: "Join Our Server",
              join_description:
                "Sinisilta RP is a Finnish slowRP server focused on quality roleplay and community. Join us today!",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Server Rules",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "The best Finnish-themed SlowRP server",
              server_links: "Server Links",
              server_website: "FiveM Server",
              server_rules: "Server Rules",
              server_apply: "Apply for Whitelist",
              server_status: "Server Status",
              owners: "Owners",
              owner1: "Owner 1 YouTube",
              owner2: "Owner 2 YouTube",
              owner3: "Owner 3 YouTube",
              owner4: "Owner 4 YouTube",
              resources: "Resources",
              resources_features: "Features",
              resources_stats: "Statistics",
              resources_join: "Join Server",
              resources_home: "Home",
              copyright: "© {year} Sinisilta. All rights reserved.",
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              cookies: "Cookies",
            },
          },
          fi: {
            title: "SINISILTA RP",
            subtitle:
              "Parhain suomalainen slowRP-palvelin laadukkaalla roolipelaamisella ja yhteisöllisyydellä.",
            getStarted: "Aloita matka",
            watchDemo: "Katso esittely",
            stats: {
              lyricsServed: "Pelaajia paikalla",
              artists: "MUOKATTUA SCRIPTIÄ",
              accuracy: "Palvelimen toiminta-aika",
              support: "TUKIPALVELUT",
            },
            features: {
              advancedControls: "Kehittyneet asetukset",
              advancedDesc:
                "Säädä jokainen roolipelaamisen osa-alue haluamallasi tavalla.",
              realtimeSync: "Reaaliaikainen talous",
              realtimeDesc:
                "Dynaaminen talousjärjestelmä, joka päivittyy reaaliajassa.",
              analytics: "Hahmon tilastot",
              analyticsDesc: "Seuraa hahmosi kehitystä ja tilastoja.",
              learnMore: "Lue lisää",
            },
            server: {
              join_title: "Liity palvelimellemme",
              join_description:
                "Sinisilta RP on suomalainen slowRP-palvelin, jossa keskitymme laadukkaaseen roolipelaamiseen ja yhteisöllisyyteen. Liity joukkoomme tänään!",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Säännöt",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "Parhain suomalainen slowRP-palvelin",
              server_links: "Palvelinlinkit",
              server_website: "FiveM-palvelin",
              server_rules: "Palvelimen säännöt",
              server_apply: "Hae whitelistiin",
              server_status: "Palvelimen tila",
              owners: "Omistajat",
              owner1: "MrJope",
              owner2: "Aruki",
              owner3: "Akutz",
              owner4: "Joonas",
              resources: "Resurssit",
              resources_features: "Ominaisuudet",
              resources_stats: "Tilastot",
              resources_join: "Liity palvelimelle",
              resources_home: "Koti",
              copyright: "© {year} Sinisilta. Kaikki oikeudet pidätetään.",
              privacy: "Tietosuojakäytäntö",
              terms: "Käyttöehdot",
              cookies: "Evästeet",
            },
          },
          es: {
            title: "SINISILTA RP",
            subtitle:
              "El mejor servidor slowRP de temática finlandesa con rol de calidad y comunidad.",
            getStarted: "Empezar",
            watchDemo: "Ver demo",
            stats: {
              lyricsServed: "Jugadores en línea",
              artists: "Facciones activas",
              accuracy: "Tiempo activo del servidor",
              support: "Miembros del staff",
            },
            features: {
              advancedControls: "Controles avanzados",
              advancedDesc: "Ajusta cada aspecto de tu experiencia de rol.",
              realtimeSync: "Economía en tiempo real",
              realtimeDesc:
                "Sistema económico dinámico que se actualiza en tiempo real.",
              analytics: "Estadísticas del personaje",
              analyticsDesc: "Sigue tu progreso y estadísticas del personaje.",
              learnMore: "Saber más",
            },
            server: {
              join_title: "Únete a nuestro servidor",
              join_description:
                "Sinisilta RP es un servidor slowRP finlandés centrado en el rol de calidad y la comunidad. ¡Únete hoy!",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Reglas",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "El mejor servidor slowRP de temática finlandesa",
              server_links: "Enlaces del servidor",
              server_website: "Servidor FiveM",
              server_rules: "Reglas del servidor",
              server_apply: "Solicitar Whitelist",
              server_status: "Estado del servidor",
              owners: "Propietarios",
              owner1: "MrJope",
              owner2: "Aruki",
              owner3: "Akutz",
              owner4: "Joonas",
              resources: "Recursos",
              resources_features: "Características",
              resources_stats: "Estadísticas",
              resources_join: "Unirse al servidor",
              resources_home: "Inicio",
              copyright: "© {year} Sinisilta. Todos los derechos reservados.",
              privacy: "Política de privacidad",
              terms: "Términos de servicio",
              cookies: "Cookies",
            },
          },
          fr: {
            title: "SINISILTA RP",
            subtitle:
              "Le meilleur serveur slowRP à thème finlandais avec un roleplay de qualité et une communauté.",
            getStarted: "Commencer",
            watchDemo: "Voir la démo",
            stats: {
              lyricsServed: "Joueurs en ligne",
              artists: "Factions actives",
              accuracy: "Temps de fonctionnement",
              support: "Membres du staff",
            },
            features: {
              advancedControls: "Contrôles avancés",
              advancedDesc:
                "Ajustez chaque aspect de votre expérience de roleplay.",
              realtimeSync: "Économie en temps réel",
              realtimeDesc:
                "Système économique dynamique qui se met à jour en temps réel.",
              analytics: "Statistiques du personnage",
              analyticsDesc:
                "Suivez la progression et les statistiques de votre personnage.",
              learnMore: "En savoir plus",
            },
            server: {
              join_title: "Rejoignez notre serveur",
              join_description:
                "Sinisilta RP est un serveur slowRP finlandais axé sur le roleplay de qualité et la communauté. Rejoignez-nous dès aujourd'hui !",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Règles",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "Le meilleur serveur slowRP à thème finlandais",
              server_links: "Liens du serveur",
              server_website: "Serveur FiveM",
              server_rules: "Règles du serveur",
              server_apply: "Postuler pour la Whitelist",
              server_status: "Statut du serveur",
              owners: "Propriétaires",
              owner1: "MrJope",
              owner2: "Aruki",
              owner3: "Akutz",
              owner4: "Joonas",
              resources: "Ressources",
              resources_features: "Fonctionnalités",
              resources_stats: "Statistiques",
              resources_join: "Rejoindre le serveur",
              resources_home: "Accueil",
              copyright: "© {year} Sinisilta. Tous droits réservés.",
              privacy: "Politique de confidentialité",
              terms: "Conditions d'utilisation",
              cookies: "Cookies",
            },
          },
          de: {
            title: "SINISILTA RP",
            subtitle:
              "Der beste finnisch-thematische SlowRP-Server mit qualitativem Rollenspiel und Gemeinschaft.",
            getStarted: "Loslegen",
            watchDemo: "Demo ansehen",
            stats: {
              lyricsServed: "Spieler online",
              artists: "Aktive Fraktionen",
              accuracy: "Server-Betriebszeit",
              support: "Teammitglieder",
            },
            features: {
              advancedControls: "Erweiterte Steuerung",
              advancedDesc:
                "Passen Sie jeden Aspekt Ihrer Rollenspielerfahrung an.",
              realtimeSync: "Echtzeit-Wirtschaft",
              realtimeDesc:
                "Dynamisches Wirtschaftssystem, das in Echtzeit aktualisiert wird.",
              analytics: "Charakter-Statistiken",
              analyticsDesc:
                "Verfolgen Sie Ihren Charakterfortschritt und Statistiken.",
              learnMore: "Mehr erfahren",
            },
            server: {
              join_title: "Unserem Server beitreten",
              join_description:
                "Sinisilta RP ist ein finnischer SlowRP-Server, der sich auf qualitativ hochwertiges Rollenspiel und Gemeinschaft konzentriert. Tritt noch heute bei!",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Regeln",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "Der beste finnisch-thematische SlowRP-Server",
              server_links: "Server-Links",
              server_website: "FiveM-Server",
              server_rules: "Server-Regeln",
              server_apply: "Für Whitelist bewerben",
              server_status: "Server-Status",
              owners: "Eigentümer",
              owner1: "MrJope",
              owner2: "Aruki",
              owner3: "Akutz",
              owner4: "Joonas",
              resources: "Ressourcen",
              resources_features: "Funktionen",
              resources_stats: "Statistiken",
              resources_join: "Server beitreten",
              resources_home: "Startseite",
              copyright: "© {year} Sinisilta. Alle Rechte vorbehalten.",
              privacy: "Datenschutzrichtlinie",
              terms: "Nutzungsbedingungen",
              cookies: "Cookies",
            },
          },
          it: {
            title: "SINISILTA RP",
            subtitle:
              "Il miglior server slowRP a tema finlandese con roleplay di qualità e comunità.",
            getStarted: "Inizia",
            watchDemo: "Guarda demo",
            stats: {
              lyricsServed: "Giocatori online",
              artists: "Fazioni attive",
              accuracy: "Tempo di attività del server",
              support: "Membri dello staff",
            },
            features: {
              advancedControls: "Controlli avanzati",
              advancedDesc:
                "Personalizza ogni aspetto della tua esperienza di roleplay.",
              realtimeSync: "Economia in tempo reale",
              realtimeDesc:
                "Sistema economico dinamico che si aggiorna in tempo reale.",
              analytics: "Statistiche del personaggio",
              analyticsDesc:
                "Tieni traccia del progresso e delle statistiche del tuo personaggio.",
              learnMore: "Scopri di più",
            },
            server: {
              join_title: "Unisciti al nostro server",
              join_description:
                "Sinisilta RP è un server slowRP finlandese focalizzato su roleplay di qualità e comunità. Unisciti a noi oggi!",
              connect_title: "F8 Connect",
              discord_button: "Discord",
              rules_button: "Regole",
            },
            footer: {
              title: "SINISILTA",
              subtitle: "Il miglior server slowRP a tema finlandese",
              server_links: "Link del server",
              server_website: "Server FiveM",
              server_rules: "Regole del server",
              server_apply: "Candidati per la Whitelist",
              server_status: "Stato del server",
              owners: "Proprietari",
              owner1: "MrJope",
              owner2: "Aruki",
              owner3: "Akutz",
              owner4: "Joonas",
              resources: "Risorse",
              resources_features: "Funzionalità",
              resources_stats: "Statistiche",
              resources_join: "Unisciti al server",
              resources_home: "Home",
              copyright: "© {year} Sinisilta. Tutti i diritti riservati.",
              privacy: "Informativa sulla privacy",
              terms: "Termini di servizio",
              cookies: "Cookie",
            },
          },
        };
        // Supported languages with their data
        const languages = {
          en: {
            name: "English",
            flag: "https://flagcdn.com/w20/gb.png",
            direction: "ltr",
          },
          fi: {
            name: "Finnish",
            flag: "https://flagcdn.com/w20/fi.png",
            direction: "ltr",
          },
          es: {
            name: "Español",
            flag: "https://flagcdn.com/w20/es.png",
            direction: "ltr",
          },
          fr: {
            name: "Français",
            flag: "https://flagcdn.com/w20/fr.png",
            direction: "ltr",
          },
          de: {
            name: "Deutsch",
            flag: "https://flagcdn.com/w20/de.png",
            direction: "ltr",
          },
          it: {
            name: "Italiano",
            flag: "https://flagcdn.com/w20/it.png",
            direction: "ltr",
          },
        };

        // Check for saved language preference or use browser language
        const savedLang =
          localStorage.getItem("language") ||
          navigator.language.split("-")[0] ||
          "en";
        const currentLang = languages[savedLang] ? savedLang : "en";

        // Set initial language
        setLanguage(currentLang);

        // Language change handler
        function setLanguage(langCode) {
          const lang = languages[langCode];
          if (!lang) return;

          // Update button
          languageButton.querySelector(".language-flag").src = lang.flag;
          languageButton.querySelector("span").textContent = lang.name;

          // Save to localStorage
          localStorage.setItem("language", langCode);

          // Set document direction and language
          document.documentElement.dir = lang.direction;
          document.documentElement.lang = langCode;

          // Apply translations
          applyTranslations(langCode);

          // Close dropdown
          closeLanguageDropdown();
        }

        // Apply translations to the page

        function applyTranslations(langCode) {
          const langTranslations = translations[langCode];
          if (!langTranslations) return;

          // Get current year once
          const currentYear = new Date().getFullYear();

          // Helper function to process translation strings with placeholders
          const processTranslation = (text) => {
            if (!text) return text;
            return text.replace(/\{year\}/g, currentYear);
          };

          // Hero section
          const heroTitle = document.querySelector(".hero h1");
          const heroSubtitle = document.querySelector(".hero p");
          const primaryButton = document.querySelector(".cta-button.primary");
          const secondaryButton = document.querySelector(
            ".cta-button.secondary"
          );

          if (heroTitle)
            heroTitle.textContent = processTranslation(langTranslations.title);
          if (heroSubtitle)
            heroSubtitle.textContent = processTranslation(
              langTranslations.subtitle
            );

          if (primaryButton) {
            const icon = primaryButton.querySelector("i.icon");
            primaryButton.textContent = "";
            if (icon) primaryButton.appendChild(icon);
            primaryButton.appendChild(
              document.createTextNode(
                " " + processTranslation(langTranslations.getStarted)
              )
            );
          }

          if (secondaryButton) {
            const icon = secondaryButton.querySelector("i.icon");
            secondaryButton.textContent = "";
            if (icon) secondaryButton.appendChild(icon);
            secondaryButton.appendChild(
              document.createTextNode(
                " " + processTranslation(langTranslations.watchDemo)
              )
            );
          }

          // Stats labels
          const statLabels = document.querySelectorAll(".stat-label");
          if (statLabels.length >= 4 && langTranslations.stats) {
            statLabels[0].textContent = processTranslation(
              langTranslations.stats.lyricsServed
            );
            statLabels[1].textContent = processTranslation(
              langTranslations.stats.artists
            );
            statLabels[2].textContent = processTranslation(
              langTranslations.stats.accuracy
            );
            statLabels[3].textContent = processTranslation(
              langTranslations.stats.support
            );
          }

          // Features
          const featureTitles = document.querySelectorAll(".feature-title");
          const featureDescriptions = document.querySelectorAll(
            ".feature-description"
          );
          const featureLinks = document.querySelectorAll(".feature-link");

          if (featureTitles.length >= 3 && langTranslations.features) {
            featureTitles[0].textContent = processTranslation(
              langTranslations.features.advancedControls
            );
            featureTitles[1].textContent = processTranslation(
              langTranslations.features.realtimeSync
            );
            featureTitles[2].textContent = processTranslation(
              langTranslations.features.analytics
            );
          }

          // Apply translations to elements with data-translate attribute
          const translatableElements =
            document.querySelectorAll("[data-translate]");
          translatableElements.forEach((element) => {
            const translationKey = element.getAttribute("data-translate");
            const keys = translationKey.split(".");
            let translation = langTranslations;

            // Safely navigate through the translation object
            for (const key of keys) {
              if (translation && translation[key] !== undefined) {
                translation = translation[key];
              } else {
                translation = null;
                break;
              }
            }

            if (translation) {
              translation = processTranslation(translation);
              const icons = element.querySelectorAll(
                "i.fas, i.fab, i.far, i.icon"
              );

              // Clear all content but preserve icons
              element.textContent = "";
              icons.forEach((icon) => element.appendChild(icon));

              // Add the translated text
              if (translation.trim()) {
                element.appendChild(document.createTextNode(" " + translation));
              }
            }
          });

          if (featureDescriptions.length >= 3 && langTranslations.features) {
            featureDescriptions[0].textContent = processTranslation(
              langTranslations.features.advancedDesc
            );
            featureDescriptions[1].textContent = processTranslation(
              langTranslations.features.realtimeDesc
            );
            featureDescriptions[2].textContent = processTranslation(
              langTranslations.features.analyticsDesc
            );
          }

          featureLinks.forEach((link) => {
            if (link && langTranslations.features) {
              const icon = link.querySelector("i.fas, i.fab, i.far");
              const span = link.querySelector("span");
              if (span) {
                span.textContent =
                  " " + processTranslation(langTranslations.features.learnMore);
                if (icon) {
                  link.insertBefore(icon, span);
                }
              }
            }
          });
        }

        // Close language dropdown
        function closeLanguageDropdown() {
          if (languageDropdown) {
            languageDropdown.style.opacity = "0";
            languageDropdown.style.visibility = "hidden";
            languageDropdown.style.transform = "translateY(-0.5rem)";
          }
        }

        // Add click handlers for each language option
        languageOptions.forEach((option) => {
          option.addEventListener("click", () => {
            const langCode = Object.keys(languages).find(
              (code) =>
                languages[code].name ===
                option.querySelector("span").textContent
            );
            if (langCode) {
              setLanguage(langCode);
            }
          });
        });

        // Toggle dropdown when clicking the button
        if (languageButton) {
          languageButton.addEventListener("click", (e) => {
            e.stopPropagation();
            const isVisible = languageDropdown.style.visibility === "visible";

            if (isVisible) {
              closeLanguageDropdown();
            } else {
              languageDropdown.style.opacity = "1";
              languageDropdown.style.visibility = "visible";
              languageDropdown.style.transform = "translateY(0)";
            }
          });
        }

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
          if (
            !languageButton?.contains(e.target) &&
            !languageDropdown?.contains(e.target)
          ) {
            closeLanguageDropdown();
          }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
              });
            }
          });
        });

        // Animation on scroll
        const observerOptions = {
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        }, observerOptions);

        document
          .querySelectorAll(".feature-card, .stat-card")
          .forEach((card) => {
            observer.observe(card);
          });
      });

      async function fetchServerStats() {
  try {
    // Replace with your txAdmin API endpoint
    const response = await fetch('http://185.218.195.2:12073/_data', {
      headers: {
        'Authorization': 'Bearer YOUR_TXADMIN_API_KEY' // Replace with your API key
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching server stats:', error);
    return null;
  }
}

// Function to update the stats on the page
function updateStats(data) {
  if (!data) return;
  
  // Update player count
  const playerCountElement = document.querySelector('.stat-number:nth-child(1)');
  if (playerCountElement && data.players) {
    playerCountElement.textContent = data.players.length;
  }
  
  // Update server uptime
  const uptimeElement = document.querySelector('.stat-number:nth-child(3)');
  if (uptimeElement && data.uptime) {
    // Convert seconds to hours or days as needed
    const hours = Math.floor(data.uptime / 3600);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      uptimeElement.textContent = `${days}d ${hours % 24}h`;
    } else {
      uptimeElement.textContent = `${hours}h`;
    }
  }
}

// Periodically update stats (every 30 seconds)
function startStatsUpdater() {
  // Initial update
  fetchServerStats().then(updateStats);
  
  // Set up periodic updates
  setInterval(() => {
    fetchServerStats().then(updateStats);
  }, 30000); // 30 seconds
}

// Start the updater when the page loads
document.addEventListener('DOMContentLoaded', startStatsUpdater);