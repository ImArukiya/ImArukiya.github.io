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
  // FiveM Translation Dictionary - SINISILTA RP Server
  const translations = {
    en: {
      title: "SINISILTA RP",
      subtitle:
        "The best Finnish SlowRP server with quality roleplay and community.",
      getStarted: "Get Started",
      watchDemo: "Watch Demo",
      stats: {
        lyricsServed: "Average Players",
        artists: "Modified Scripts",
        accuracy: "Server Uptime",
        support: "Support Services",
      },
      features: {
        advancedControls: "Advanced Settings",
        advancedDesc:
          "Adjust every aspect of your roleplay experience to your liking.",
        realtimeSync: "Real-time Economy",
        realtimeDesc: "Dynamic economy system that updates in real-time.",
        analytics: "Character Statistics",
        analyticsDesc: "Track your character's development and statistics.",
        learnMore: "Learn More",
      },
      server: {
        join_title: "Join Our Server",
        join_description:
          "Sinisilta RP is a Finnish SlowRP server focused on quality roleplay and community. Join us today!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Server Rules",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "The best Finnish SlowRP server",
        server_links: "Server Links",
        server_website: "FiveM Server",
        server_rules: "Server Rules",
        server_apply: "Apply for Whitelist",
        server_status: "Server Status",
        owners: "Owners",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
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
        lyricsServed: "Keskimääräinen pelaajamäärä",
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
        owner4: "Severi",
        owner5: "Aivoton",
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
        "El mejor servidor finlandés SlowRP con rol de calidad y comunidad.",
      getStarted: "Comenzar",
      watchDemo: "Ver demostración",
      stats: {
        lyricsServed: "Jugadores promedio",
        artists: "SCRIPTS MODIFICADOS",
        accuracy: "Tiempo de actividad del servidor",
        support: "SERVICIOS DE SOPORTE",
      },
      features: {
        advancedControls: "Configuraciones avanzadas",
        advancedDesc:
          "Ajusta cada aspecto de tu experiencia de rol a tu gusto.",
        realtimeSync: "Economía en tiempo real",
        realtimeDesc:
          "Sistema económico dinámico que se actualiza en tiempo real.",
        analytics: "Estadísticas del personaje",
        analyticsDesc: "Sigue el desarrollo y estadísticas de tu personaje.",
        learnMore: "Aprende más",
      },
      server: {
        join_title: "Únete a nuestro servidor",
        join_description:
          "Sinisilta RP es un servidor finlandés SlowRP enfocado en rol de calidad y comunidad. ¡Únete hoy!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Reglas del servidor",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "El mejor servidor finlandés SlowRP",
        server_links: "Enlaces del servidor",
        server_website: "Servidor FiveM",
        server_rules: "Reglas del servidor",
        server_apply: "Solicitar lista blanca",
        server_status: "Estado del servidor",
        owners: "Propietarios",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
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
        "Le meilleur serveur finlandais SlowRP avec un roleplay de qualité et une communauté.",
      getStarted: "Commencer",
      watchDemo: "Voir la démo",
      stats: {
        lyricsServed: "Nombre moyen de joueurs",
        artists: "SCRIPTS MODIFIÉS",
        accuracy: "Temps de fonctionnement du serveur",
        support: "SERVICES DE SUPPORT",
      },
      features: {
        advancedControls: "Paramètres avancés",
        advancedDesc:
          "Ajustez chaque aspect de votre expérience de roleplay à votre goût.",
        realtimeSync: "Économie en temps réel",
        realtimeDesc:
          "Système économique dynamique qui se met à jour en temps réel.",
        analytics: "Statistiques du personnage",
        analyticsDesc:
          "Suivez le développement et les statistiques de votre personnage.",
        learnMore: "En savoir plus",
      },
      server: {
        join_title: "Rejoignez notre serveur",
        join_description:
          "Sinisilta RP est un serveur finlandais SlowRP axé sur le roleplay de qualité et la communauté. Rejoignez-nous aujourd'hui !",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Règles du serveur",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Le meilleur serveur finlandais SlowRP",
        server_links: "Liens du serveur",
        server_website: "Serveur FiveM",
        server_rules: "Règles du serveur",
        server_apply: "Postuler pour la liste blanche",
        server_status: "Statut du serveur",
        owners: "Propriétaires",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
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
        "Der beste finnische SlowRP-Server mit qualitativem Rollenspiel und Gemeinschaft.",
      getStarted: "Loslegen",
      watchDemo: "Demo ansehen",
      stats: {
        lyricsServed: "Durchschnittliche Spielerzahl",
        artists: "MODIFIZIERTE SCRIPTS",
        accuracy: "Server-Betriebszeit",
        support: "SUPPORTDIENSTE",
      },
      features: {
        advancedControls: "Erweiterte Einstellungen",
        advancedDesc:
          "Passen Sie jeden Aspekt Ihrer Rollenspielerfahrung nach Ihren Wünschen an.",
        realtimeSync: "Echtzeit-Wirtschaft",
        realtimeDesc:
          "Dynamisches Wirtschaftssystem, das in Echtzeit aktualisiert wird.",
        analytics: "Charakterstatistiken",
        analyticsDesc:
          "Verfolgen Sie die Entwicklung und Statistiken Ihres Charakters.",
        learnMore: "Mehr erfahren",
      },
      server: {
        join_title: "Unserem Server beitreten",
        join_description:
          "Sinisilta RP ist ein finnischer SlowRP-Server, der sich auf qualitativ hochwertiges Rollenspiel und Gemeinschaft konzentriert. Tritt noch heute bei!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Server-Regeln",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Der beste finnische SlowRP-Server",
        server_links: "Server-Links",
        server_website: "FiveM-Server",
        server_rules: "Server-Regeln",
        server_apply: "Für Whitelist bewerben",
        server_status: "Server-Status",
        owners: "Eigentümer",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
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
        "Il miglior server finlandese SlowRP con roleplay di qualità e community.",
      getStarted: "Inizia",
      watchDemo: "Guarda la demo",
      stats: {
        lyricsServed: "Giocatori medi",
        artists: "SCRIPT MODIFICATI",
        accuracy: "Tempo di attività del server",
        support: "SERVIZI DI SUPPORTO",
      },
      features: {
        advancedControls: "Impostazioni avanzate",
        advancedDesc:
          "Regola ogni aspetto della tua esperienza di roleplay a tuo piacimento.",
        realtimeSync: "Economia in tempo reale",
        realtimeDesc:
          "Sistema economico dinamico che si aggiorna in tempo reale.",
        analytics: "Statistiche del personaggio",
        analyticsDesc:
          "Monitora lo sviluppo e le statistiche del tuo personaggio.",
        learnMore: "Scopri di più",
      },
      server: {
        join_title: "Unisciti al nostro server",
        join_description:
          "Sinisilta RP è un server finlandese SlowRP focalizzato su roleplay di qualità e community. Unisciti a noi oggi!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Regole del server",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Il miglior server finlandese SlowRP",
        server_links: "Link del server",
        server_website: "Server FiveM",
        server_rules: "Regole del server",
        server_apply: "Richiedi whitelist",
        server_status: "Stato del server",
        owners: "Proprietari",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Risorse",
        resources_features: "Funzionalità",
        resources_stats: "Statistiche",
        resources_join: "Unisciti al server",
        resources_home: "Home",
        copyright: "© {year} Sinisilta. Tutti i diritti riservati.",
        privacy: "Privacy Policy",
        terms: "Termini di servizio",
        cookies: "Cookies",
      },
    },
    sv: {
      title: "SINISILTA RP",
      subtitle:
        "Den bästa finska SlowRP-servern med kvalitetsrollspel och gemenskap.",
      getStarted: "Kom igång",
      watchDemo: "Titta på demo",
      stats: {
        lyricsServed: "Genomsnittligt antal spelare",
        artists: "MODIFIERADE SKRIPT",
        accuracy: "Serverns driftid",
        support: "SUPPORTTJÄNSTER",
      },
      features: {
        advancedControls: "Avancerade inställningar",
        advancedDesc:
          "Justera varje aspekt av din rollspelsupplevelse efter dina önskemål.",
        realtimeSync: "Realtidsekonomi",
        realtimeDesc: "Dynamiskt ekonomisystem som uppdateras i realtid.",
        analytics: "Karaktärsstatistik",
        analyticsDesc: "Följ din karaktärs utveckling och statistik.",
        learnMore: "Läs mer",
      },
      server: {
        join_title: "Gå med i vår server",
        join_description:
          "Sinisilta RP är en finsk SlowRP-server som fokuserar på kvalitetsrollspel och gemenskap. Gå med idag!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Serverregler",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Den bästa finska SlowRP-servern",
        server_links: "Serverlänkar",
        server_website: "FiveM-server",
        server_rules: "Serverregler",
        server_apply: "Ansök om whitelist",
        server_status: "Serverstatus",
        owners: "Ägare",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Resurser",
        resources_features: "Funktioner",
        resources_stats: "Statistik",
        resources_join: "Gå med i server",
        resources_home: "Hem",
        copyright: "© {year} Sinisilta. Alla rättigheter förbehålls.",
        privacy: "Integritetspolicy",
        terms: "Användarvillkor",
        cookies: "Kakor",
      },
    },

    ru: {
      title: "SINISILTA RP",
      subtitle:
        "Лучший финский SlowRP сервер с качественной ролевой игрой и коммьюнити.",
      getStarted: "Начать",
      watchDemo: "Смотреть демо",
      stats: {
        lyricsServed: "Среднее количество игроков",
        artists: "МОДИФИЦИРОВАННЫЕ СКРИПТЫ",
        accuracy: "Время работы сервера",
        support: "СЛУЖБА ПОДДЕРЖКИ",
      },
      features: {
        advancedControls: "Расширенные настройки",
        advancedDesc:
          "Настройте каждый аспект вашей ролевой игры по своему вкусу.",
        realtimeSync: "Экономика в реальном времени",
        realtimeDesc:
          "Динамическая экономическая система, обновляемая в реальном времени.",
        analytics: "Статистика персонажа",
        analyticsDesc: "Отслеживайте развитие и статистику вашего персонажа.",
        learnMore: "Узнать больше",
      },
      server: {
        join_title: "Присоединяйтесь к нашему серверу",
        join_description:
          "Sinisilta RP - это финский SlowRP сервер, ориентированный на качественную ролевую игру и коммьюнити. Присоединяйтесь сегодня!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Правила сервера",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Лучший финский SlowRP сервер",
        server_links: "Ссылки сервера",
        server_website: "FiveM сервер",
        server_rules: "Правила сервера",
        server_apply: "Подать заявку в вайтлист",
        server_status: "Статус сервера",
        owners: "Владельцы",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Ресурсы",
        resources_features: "Функции",
        resources_stats: "Статистика",
        resources_join: "Присоединиться",
        resources_home: "Главная",
        copyright: "© {year} Sinisilta. Все права защищены.",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        cookies: "Куки",
      },
    },

    pt: {
      title: "SINISILTA RP",
      subtitle:
        "O melhor servidor finlandês SlowRP com roleplay de qualidade e comunidade.",
      getStarted: "Começar",
      watchDemo: "Ver demonstração",
      stats: {
        lyricsServed: "Média de jogadores",
        artists: "SCRIPTS MODIFICADOS",
        accuracy: "Tempo de atividade do servidor",
        support: "SERVIÇOS DE SUPORTE",
      },
      features: {
        advancedControls: "Configurações avançadas",
        advancedDesc:
          "Ajuste cada aspecto da sua experiência de roleplay ao seu gosto.",
        realtimeSync: "Economia em tempo real",
        realtimeDesc: "Sistema econômico dinâmico que atualiza em tempo real.",
        analytics: "Estatísticas do personagem",
        analyticsDesc:
          "Acompanhe o desenvolvimento e estatísticas do seu personagem.",
        learnMore: "Saiba mais",
      },
      server: {
        join_title: "Junte-se ao nosso servidor",
        join_description:
          "Sinisilta RP é um servidor finlandês SlowRP focado em roleplay de qualidade e comunidade. Junte-se a nós hoje!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Regras do servidor",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "O melhor servidor finlandês SlowRP",
        server_links: "Links do servidor",
        server_website: "Servidor FiveM",
        server_rules: "Regras do servidor",
        server_apply: "Aplicar para whitelist",
        server_status: "Status do servidor",
        owners: "Proprietários",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Recursos",
        resources_features: "Funcionalidades",
        resources_stats: "Estatísticas",
        resources_join: "Entrar no servidor",
        resources_home: "Início",
        copyright: "© {year} Sinisilta. Todos os direitos reservados.",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        cookies: "Cookies",
      },
    },
    pl: {
      title: "SINISILTA RP",
      subtitle:
        "Najlepszy fiński serwer SlowRP z wysokiej jakości roleplayem i społecznością.",
      getStarted: "Rozpocznij",
      watchDemo: "Obejrzyj demo",
      stats: {
        lyricsServed: "Średnia liczba graczy",
        artists: "MODYFIKOWANE SKRYPTY",
        accuracy: "Czas działania serwera",
        support: "USŁUGI WSPARCIA",
      },
      features: {
        advancedControls: "Zaawansowane ustawienia",
        advancedDesc:
          "Dostosuj każdy aspekt swojej rozgrywki roleplay według własnych preferencji.",
        realtimeSync: "Ekonomia czasu rzeczywistego",
        realtimeDesc:
          "Dynamiczny system ekonomiczny aktualizowany w czasie rzeczywistym.",
        analytics: "Statystyki postaci",
        analyticsDesc: "Śledź rozwój i statystyki swojej postaci.",
        learnMore: "Dowiedz się więcej",
      },
      server: {
        join_title: "Dołącz do naszego serwera",
        join_description:
          "Sinisilta RP to fiński serwer SlowRP skupiony na wysokiej jakości roleplayu i społeczności. Dołącz już dziś!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Zasady serwera",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "Najlepszy fiński serwer SlowRP",
        server_links: "Linki serwera",
        server_website: "Serwer FiveM",
        server_rules: "Zasady serwera",
        server_apply: "Zaaplikuj o whitelist",
        server_status: "Status serwera",
        owners: "Właściciele",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Zasoby",
        resources_features: "Funkcje",
        resources_stats: "Statystyki",
        resources_join: "Dołącz do serwera",
        resources_home: "Strona główna",
        copyright: "© {year} Sinisilta. Wszelkie prawa zastrzeżone.",
        privacy: "Polityka prywatności",
        terms: "Warunki korzystania",
        cookies: "Ciasteczka",
      },
    },

    tr: {
      title: "SINISILTA RP",
      subtitle: "Kaliteli roleplay ve topluluk ile en iyi Fin SlowRP sunucusu.",
      getStarted: "Başla",
      watchDemo: "Demoyu İzle",
      stats: {
        lyricsServed: "Ortalama Oyuncu Sayısı",
        artists: "DEĞİŞTİRİLMİŞ KODLAR",
        accuracy: "Sunucu Çalışma Süresi",
        support: "DESTEK HİZMETLERİ",
      },
      features: {
        advancedControls: "Gelişmiş Ayarlar",
        advancedDesc:
          "Roleplay deneyiminizin her yönünü kendi zevkinize göre ayarlayın.",
        realtimeSync: "Gerçek Zamanlı Ekonomi",
        realtimeDesc:
          "Gerçek zamanlı olarak güncellenen dinamik ekonomi sistemi.",
        analytics: "Karakter İstatistikleri",
        analyticsDesc:
          "Karakterinizin gelişimini ve istatistiklerini takip edin.",
        learnMore: "Daha Fazla Bilgi",
      },
      server: {
        join_title: "Sunucumuza Katılın",
        join_description:
          "Sinisilta RP, kaliteli roleplay ve topluluğa odaklanan bir Fin SlowRP sunucusudur. Hemen katılın!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Sunucu Kuralları",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "En iyi Fin SlowRP sunucusu",
        server_links: "Sunucu Bağlantıları",
        server_website: "FiveM Sunucusu",
        server_rules: "Sunucu Kuralları",
        server_apply: "Whitelist Başvurusu",
        server_status: "Sunucu Durumu",
        owners: "Sahipleri",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Kaynaklar",
        resources_features: "Özellikler",
        resources_stats: "İstatistikler",
        resources_join: "Sunucuya Katıl",
        resources_home: "Ana Sayfa",
        copyright: "© {year} Sinisilta. Tüm hakları saklıdır.",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Şartları",
        cookies: "Çerezler",
      },
    },

    nl: {
      title: "SINISILTA RP",
      subtitle:
        "De beste Finse SlowRP-server met kwaliteitsroleplay en community.",
      getStarted: "Begin",
      watchDemo: "Bekijk demo",
      stats: {
        lyricsServed: "Gemiddeld aantal spelers",
        artists: "GEMODIFICEERDE SCRIPTS",
        accuracy: "Server uptime",
        support: "ONDERSTEUNINGSDIENSTEN",
      },
      features: {
        advancedControls: "Geavanceerde instellingen",
        advancedDesc:
          "Pas elk aspect van je roleplay-ervaring aan naar jouw wensen.",
        realtimeSync: "Real-time economie",
        realtimeDesc:
          "Dynamisch economisch systeem dat in real-time wordt bijgewerkt.",
        analytics: "Karakterstatistieken",
        analyticsDesc: "Volg de ontwikkeling en statistieken van je karakter.",
        learnMore: "Meer informatie",
      },
      server: {
        join_title: "Word lid van onze server",
        join_description:
          "Sinisilta RP is een Finse SlowRP-server gericht op kwaliteitsroleplay en community. Doe vandaag nog mee!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "Serverregels",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "De beste Finse SlowRP-server",
        server_links: "Serverlinks",
        server_website: "FiveM-server",
        server_rules: "Serverregels",
        server_apply: "Aanvragen voor whitelist",
        server_status: "Serverstatus",
        owners: "Eigenaren",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "Bronnen",
        resources_features: "Functies",
        resources_stats: "Statistieken",
        resources_join: "Word lid",
        resources_home: "Home",
        copyright: "© {year} Sinisilta. Alle rechten voorbehouden.",
        privacy: "Privacybeleid",
        terms: "Servicevoorwaarden",
        cookies: "Cookies",
      },
    },
    ja: {
      title: "SINISILTA RP",
      subtitle:
        "最高品質のロールプレイとコミュニティを備えたフィンランドのSlowRPサーバー",
      getStarted: "始める",
      watchDemo: "デモを見る",
      stats: {
        lyricsServed: "平均プレイヤー数",
        artists: "改造スクリプト",
        accuracy: "サーバー稼働時間",
        support: "サポートサービス",
      },
      features: {
        advancedControls: "高度な設定",
        advancedDesc:
          "ロールプレイ体験のあらゆる側面を好みに合わせて調整できます",
        realtimeSync: "リアルタイム経済",
        realtimeDesc: "リアルタイムで更新される動的な経済システム",
        analytics: "キャラクター統計",
        analyticsDesc: "キャラクターの成長と統計を追跡",
        learnMore: "詳細を見る",
      },
      server: {
        join_title: "サーバーに参加",
        join_description:
          "Sinisilta RPは品質の高いロールプレイとコミュニティに焦点を当てたフィンランドのSlowRPサーバーです。今すぐ参加しましょう！",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "サーバールール",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "最高のフィンランドSlowRPサーバー",
        server_links: "サーバーリンク",
        server_website: "FiveMサーバー",
        server_rules: "サーバールール",
        server_apply: "ホワイトリストに申請",
        server_status: "サーバーステータス",
        owners: "所有者",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "リソース",
        resources_features: "特徴",
        resources_stats: "統計",
        resources_join: "サーバーに参加",
        resources_home: "ホーム",
        copyright: "© {year} Sinisilta. 全著作権所有",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        cookies: "クッキー",
      },
    },

    ar: {
      title: "SINISILTA RP",
      subtitle: "أفضل سيرفر SlowRP فنلندي مع لعب أدوار عالي الجودة ومجتمع نشط",
      getStarted: "ابدأ الآن",
      watchDemo: "شاهد العرض",
      stats: {
        lyricsServed: "متوسط اللاعبين",
        artists: "سكربتات معدلة",
        accuracy: "وقت تشغيل السيرفر",
        support: "خدمات الدعم",
      },
      features: {
        advancedControls: "إعدادات متقدمة",
        advancedDesc: "اضبط كل جانب من جوانب تجربة لعب الأدوار حسب تفضيلاتك",
        realtimeSync: "اقتصاد فوري",
        realtimeDesc: "نظام اقتصادي ديناميكي يتم تحديثه في الوقت الفعلي",
        analytics: "إحصائيات الشخصية",
        analyticsDesc: "تتبع تطور شخصيتك وإحصائياتها",
        learnMore: "المزيد",
      },
      server: {
        join_title: "انضم إلى سيرفرنا",
        join_description:
          "Sinisilta RP هو سيرفر SlowRP فنلندي يركز على لعب الأدوار عالي الجودة والمجتمع. انضم إلينا اليوم!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "قواعد السيرفر",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "أفضل سيرفر SlowRP فنلندي",
        server_links: "روابط السيرفر",
        server_website: "سيرفر FiveM",
        server_rules: "قواعد السيرفر",
        server_apply: "التقدم للقائمة البيضاء",
        server_status: "حالة السيرفر",
        owners: "الملاك",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "موارد",
        resources_features: "الميزات",
        resources_stats: "الإحصائيات",
        resources_join: "انضم للسيرفر",
        resources_home: "الرئيسية",
        copyright: "© {year} Sinisilta. جميع الحقوق محفوظة",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookies: "الكوكيز",
      },
    },

    ko: {
      title: "SINISILTA RP",
      subtitle:
        "퀄리티 높은 롤플레이와 커뮤니티를 갖춘 최고의 핀란드 SlowRP 서버",
      getStarted: "시작하기",
      watchDemo: "데모 보기",
      stats: {
        lyricsServed: "평균 플레이어 수",
        artists: "수정된 스크립트",
        accuracy: "서버 가동 시간",
        support: "지원 서비스",
      },
      features: {
        advancedControls: "고급 설정",
        advancedDesc: "롤플레이 경험의 모든 측면을 원하는 대로 조정하세요",
        realtimeSync: "실시간 경제",
        realtimeDesc: "실시간으로 업데이트되는 동적 경제 시스템",
        analytics: "캐릭터 통계",
        analyticsDesc: "캐릭터의 성장과 통계를 추적하세요",
        learnMore: "더 알아보기",
      },
      server: {
        join_title: "서버 참가",
        join_description:
          "Sinisilta RP는 퀄리티 높은 롤플레이와 커뮤니티에 중점을 둔 핀란드 SlowRP 서버입니다. 지금 참여하세요!",
        connect_title: "F8 Connect",
        discord_button: "Discord",
        rules_button: "서버 규칙",
      },
      footer: {
        title: "SINISILTA",
        subtitle: "최고의 핀란드 SlowRP 서버",
        server_links: "서버 링크",
        server_website: "FiveM 서버",
        server_rules: "서버 규칙",
        server_apply: "화이트리스트 신청",
        server_status: "서버 상태",
        owners: "소유자",
        owner1: "MrJope",
        owner2: "Aruki",
        owner3: "Akutz",
        owner4: "Severi",
        owner5: "Aivoton",
        resources: "리소스",
        resources_features: "기능",
        resources_stats: "통계",
        resources_join: "서버 참가",
        resources_home: "홈",
        copyright: "© {year} Sinisilta. 모든 권리 보유",
        privacy: "개인정보 보호정책",
        terms: "이용 약관",
        cookies: "쿠키",
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
    sv: {
      name: "Svenska",
      flag: "https://flagcdn.com/w20/se.png",
      direction: "ltr",
    },
    ru: {
      name: "Русский",
      flag: "https://flagcdn.com/w20/ru.png",
      direction: "ltr",
    },
    pt: {
      name: "Português",
      flag: "https://flagcdn.com/w20/pt.png",
      direction: "ltr",
    },
    pl: {
      name: "Polski",
      flag: "https://flagcdn.com/w20/pl.png",
      direction: "ltr",
    },
    tr: {
      name: "Türkçe",
      flag: "https://flagcdn.com/w20/tr.png",
      direction: "ltr",
    },
    nl: {
      name: "Nederlands",
      flag: "https://flagcdn.com/w20/nl.png",
      direction: "ltr",
    },
    ja: {
      name: "日本語",
      flag: "https://flagcdn.com/w20/jp.png",
      direction: "ltr",
    },
    ar: {
      name: "العربية",
      flag: "https://flagcdn.com/w20/sa.png", // Using Saudi flag as more recognizable
      direction: "rtl", // Right-to-left support
    },
    ko: {
      name: "한국어",
      flag: "https://flagcdn.com/w20/kr.png",
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
    const secondaryButton = document.querySelector(".cta-button.secondary");

    if (heroTitle)
      heroTitle.textContent = processTranslation(langTranslations.title);
    if (heroSubtitle)
      heroSubtitle.textContent = processTranslation(langTranslations.subtitle);

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
    const translatableElements = document.querySelectorAll("[data-translate]");
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
        const icons = element.querySelectorAll("i.fas, i.fab, i.far, i.icon");

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
          languages[code].name === option.querySelector("span").textContent
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

  document.querySelectorAll(".feature-card, .stat-card").forEach((card) => {
    observer.observe(card);
  });
});

async function fetchServerStats() {
  try {
    // Replace with your txAdmin API endpoint
    const response = await fetch("http://185.218.195.2:12073/_data", {
      headers: {
        Authorization: "Bearer YOUR_TXADMIN_API_KEY", // Replace with your API key
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching server stats:", error);
    return null;
  }
}

// Function to update the stats on the page
function updateStats(data) {
  if (!data) return;

  // Update player count
  const playerCountElement = document.querySelector(
    ".stat-number:nth-child(1)"
  );
  if (playerCountElement && data.players) {
    playerCountElement.textContent = data.players.length;
  }

  // Update server uptime
  const uptimeElement = document.querySelector(".stat-number:nth-child(3)");
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
document.addEventListener("DOMContentLoaded", startStatsUpdater);
