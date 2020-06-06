  var vm = new Vue({
    el: document.querySelector('#divWpVue'),
  
  data() {
      return {
          step: 1,
          answer: "",
          myJson: {
              "data":[
              {
                  "id": 1,
                  "name": "Scythe",
                  "category":"Strategi",
                  "theme": ["Ekomoni","Science fiction", "Expansioner"], 
                  "image": "https://www.spelochsant.se//uploads/images/product_images/243591_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/scythe",
                  "about": "I Scythe representerar varje spelare en fallen ledare som försöker återställa sin ära och leda sin fraktion till makten i Östeuropa. Spelare erövrar territorium, rekryterar nya rekryter, skördar resurser, skaffar bybor, bygger strukturer och aktiverar monstruösa mekanismer.",
                  "min_players": 1,
                  "max_players": 5,
                  "min_playtime": 90,
                  "max_playtime": 115,
                  "min_age": 14   
                },
                {
                  "id": 2,
                  "name": "När då då",
                  "category":"Partyspel",
                  "theme": ["Kortspel", "Frågespel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/278958_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/nardadaoriginal2019",
                  "about": "Spelarna turas om att ta kort och bilda en tidslinje med tio olika händelser från tideräkningens början fram till idag. Sätt händelser, personer, platser eller prylar i rätt tidsföljd. Började till exempel Marabou tillverka tuggummit Toy före eller efter det att Ingemar Stenmark vann sin första världscupseger?",
                  "min_players": 2,
                  "max_players": 8,
                  "min_playtime": 30,
                  "max_playtime": 60,
                  "min_age": 15    
                },
                {
                  "id": 3,
                  "name": "Sheriff of Nottingham 2ND Edition",
                  "category":"Partyspel",
                  "theme": ["Humor", "Kortspel", "Medeltid", "Förhandling"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/297776_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/sheriffofnottingham2ndedition",
                  "about": "I detta spel får spelarna turas om att vara sheriff, som med hård hand bestämmer vem som får föra in sina varor i staden, vem som får underkasta sig inspektion och inte minst vem som får sina varor konfiskerade.",
                  "min_players": 3,
                  "max_players": 5,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 14   
                },
                {
                  "id": 4,
                  "name": "Fördomar & Tuffa Val",
                  "category":"Partyspel",
                  "theme": ["Sällskapsspel", "Frågespel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/297035_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/fordommartuffaval",
                  "about": "Hur väl känner du dina vänner och hur väl känner dina vänner dig? Vem av er anser sig vara smartare än genomsnittet och vem skulle hellre avstå från att borsta tänderna än att tvätta händerna i resten av livet.",
                  "min_players": 3,
                  "max_players": 6,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 15   
                },
                {
                  "id": 5,
                  "name": "Arkham Horror 3rd Edition",
                  "category":"Strategi",
                  "theme": ["Kortspel", "Äventyr", "Skräckpel"],
                  "image":"https://www.spelochsant.se//uploads/images/product_images/247963_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/arkhamhorror3rdedition",
                  "about": "Arkham Horror Third Edition är ett kooperativt brädspel baserat på verk av H.P. Lovecraft, spelare måste samla ledtrådar, besegra skrämmande monster och hitta verktyg och allierade om de ska kunna besegra varelserna som bor precis utanför vår verklighet.",
                  "min_players": 1,
                  "max_players": 2,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 14   
                },
                {
                  "id": 6,
                  "name": "Karibiens Guld",
                  "category":"Familjespel",
                  "theme": [ "Prirater", "Äventyr", "Familjespel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/278968_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/karibiensguldskandinaviskversion",
                  "about": "Ni befinner er i Karibien för att leta efter den mytomspunna guldskatten som sjönk med skeppet San José år 1708. För att kunna dyka efter skatten måste ni hitta kartbitar och pärlor. Det är en kamp om tiden, för det finns hela tiden en risk att någon annan ska hinna före till skatten. Dessutom finns det pirater som är intresserade av era pengar. Lycka till på denna äventyrliga resa mot skatten!",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 40,
                  "min_age": 8   
                },
                {
                  "id": 7,
                  "name": "Nåt ska bort",
                  "category":"Partyspel",
                  "theme": [ "Frågespel", "Enkla regler"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/283526_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/natskabort",
                  "about": "Här gäller det att lista ut vilket av fem alternativ som inte hör ihop med de andra. Svarar du dessutom rätt på kluriga följdfrågor får du lägga ut marker på spelplanen. Hamnar din spelpjäs på en motståndares marker blir det duell.",
                  "max_players": 6,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 15   
                },
                {
                  "id": 8,
                  "name": "Terraforming Mars",
                  "category":"Strategi",
                  "theme": ["Ekonomi", "Science fiction", "Rymdutforskning"],
                  "image": "", 
                  "link":"", 
                  "about": "På 2400-talet börjar mänskligheten försöka göra planeten Mars beboelig. Världssamfundet på jorden stöttar olika företag och organisationer i enorma projekt för att höja temperaturen, öka syrehalten i luften och täcka vattenbehovet genom att skapa stora havsområden. Dessa företag och organisationer verkar tillsammans med varandra för att uppnå en miljö beboelig för människor samtidigt som de konkurrerar och försöker växa för att därigenom bli den starkaste parten",
                  "min_players": 1,
                  "max_players": 5,
                  "min_playtime": 120,
                  "max_playtime": 150,
                  "min_age": 12 
                },
                {
                  "id": 9,
                  "name": "Wingspan",
                  "category":"Strategi",
                  "theme": ["Kortspel", "Ekonomi", "Bygga", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/284485_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/wingspanengelskversionmedswift-startpromopack",
                  "about": "I det här spelet tar du rollen som en fågelentusiast - en forskare, ornitolog, samlare eller fågelskådare som försöker attrahera de bästa fåglarna till ditt egna reservat.",
                  "min_players": 1,
                  "max_players": 5,
                  "min_playtime": 40,
                  "max_playtime": 70,
                  "min_age": 10
                },
                {
                  "id": 10,
                  "name": "Decrypto",
                  "category":"Partyspel",
                  "theme": ["Ordspel", "Samarbetsspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/227507_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/decrypto",
                  "about": "Decrypto är ett roligt och intensivt spel om kodknäckning och hemlighetsmakeri. Ni delas in i två lag som båda måste gissa koden som hålls av lagets kryptör samtidigt som ni måste hålla samma kod hemlig för motståndarlaget.",
                  "min_players": 3,
                  "max_players": 8,
                  "min_playtime": 15,
                  "max_playtime": 45,
                  "min_age": 12
                },
                {
                  "id": 11,
                  "name": "Exit The Game - Den glömda ön",
                  "category":"Familjespel",
                  "theme": ["Samarbetsspel", "Escape room", "Pussel", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/286854_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/exitthegamedenglomdaon",
                  "about": "EXIT-serien är en samling spel, där du i ditt eget hem kan uppleva spänningen av ett Escape Room. Spela antingen två eller fler och se om ni med gemensamma krafter kan fly från farorna. ",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 45,
                  "max_playtime": 90,
                  "min_age": 12
                },
                {
                  "id": 12,
                  "name": "Gloomhaven",
                  "category":"Strategi",
                  "theme": ["Äventyr", "Fantasy", "Samarbetsspel", "Expansioner", "Upptäckande"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/213311_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/gloomhavensecondprinting",
                  "about": "Gloomhaven är brädspelens brädspel. Ett spel så stort att 10 timmar anses vara i underkant. Spelet är ett taktik-spel där du har rollen som en vandrande äventyrare och kan utforska både fängelsehålor och gamla ruiner. ",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 12
                },
                {
                  "id": 13,
                  "name": "Colt Express",
                  "category":"Familjespel",
                  "theme": ["Tåg", "Skjuta", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/175872_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/coltexpresssvenskversion",
                  "about": "Colt Express är ett hejdlöst spel i Vilda Västern-anda i vilket spelarna tar sig an rollen av olika banditer som försöker göra den största vinsten under ett tågrån.",
                  "min_players": 2,
                  "max_players": 6,
                  "min_playtime": 30,
                  "max_playtime": 40,
                  "min_age": 10
                },
                {
                  "id": 14,
                  "name": "Takenoko",
                  "category":"Familjespel",
                  "theme": ["Djur", "Bygga"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/117586_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/takenokosvenskversion",
                  "about": "Du har blivit utsedd till det delikata uppdraget att ta hand om pandan och sköta kejsarens bambuträdgård. Odla och bevattna jordlotterna så att bambun, den enda mat som pandan vill äta, kan växa i överflöd. ",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 45,
                  "max_playtime": 60,
                  "min_age": 8
                },
                {
                  "id": 15,
                  "name": "Camel Up Second Edition",
                  "category":"Familjespel",
                  "theme": ["Djur", "Racing"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/284466_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/camelupsecondedition",
                  "about": "I Camel Up satsar upp till åtta spelare på fem tävlingskameler, och försöker klura ut vilka som kommer att placera sig som första och andra plats i ett snabbt lopp runt en pyramid.",
                  "min_players": 3,
                  "max_players": 8,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 16,
                  "name": "Exploding kittens",
                  "category":"Familjespel",
                  "theme": ["Djur", "Kortspel", "Humor"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/211095_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/explodingkittensnordiskversion",
                  "about": "Detta humoristiska spel kanske bäst kan beskrivas som en variant av rysk roulette med söta katter och går kort och gott ut på att få din katt att inte explodera.",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 15,
                  "max_playtime": 30,
                  "min_age": 7
                },
                {
                  "id": 17,
                  "name": "Azul",
                  "category":"Strategi",
                  "theme": ["Bygga", "Familj"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/263059_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/azulstainedglassofsintranordiskversion",
                  "about": "Spännande och underhållande brädspel som går ut på att kakla väggarna i palatset och få poäng. Du ska hämta kakelplattor från valfri fabriksdisplay eller från det allmänna utbudet och passa in på dina mönster.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 45,
                  "max_playtime": 60,
                  "min_age": 8
                },
                {
                  "id": 18,
                  "name": "Pandemic",
                  "category":"Strategi",
                  "theme": ["Samarbetsspel", "Science fiction", "Rädda världen"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/170561_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/pandemicsvenskversion",
                  "about": "Ert uppdrag är att hålla fyra sjukdomar i schack samtidigt som ni ska hitta botemedel till dem. Du och dina lagkamrater kommer resa över hela världen och ta hand om infektioner medans du söker efter resurser till botemedlet. Ni måste jobba tillsammans om ni ska lyckas",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 45,
                  "max_playtime": 60,
                  "min_age": 8
                },
                {
                  "id": 19,
                  "name": "Dixit",
                  "category":"Familjespel",
                  "theme": ["Kortspel", "Enkla regler", "Associationer", "Expansioner"],
                  "image": "",
                  "link": "", 
                  "about": "De har alla en gemensam nämnare: en mystisk mening. Nu gäller det att vara försiktig, endast en av de fem bilderna är rätt. Du måste använda både din intelligens och din intuition för att hitta den och samtidigt undvika övriga spelares fällor. Dixit: ett överraskande, festligt och stimulerande spel som passar att spela både med familj och med vänner.",
                  "min_players": 3,
                  "max_players": 6,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 20,
                  "name": "Ticket to Ride Europe",
                  "category":"Familjespel",
                  "theme": ["Äventyr", "Tåg", "Historia", "Geografi"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/99527_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/tickettorideeuropeskandinaviskversion",
                  "about": "Från de branta backarna i Edinburgh till de soliga hamnarna i Konstantinopel, från de dammiga gränderna i Pamplona till en vindpinad station i Berlin, Ticket to Ride Europe tar dig på ett nytt tågäventyr genom de stora städerna i sekelskiftets Europa.",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 30,
                  "max_playtime": 60,
                  "min_age": 8
                },
                {
                  "id": 21,
                  "name": "Carcassonne",
                  "category":"Strategi",
                  "theme": ["Familj", "Bygga", "Exspansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/205067_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/carcassonneinklbiskopenflodensvenskversion",
                  "about": "Spelarna utvecklar området kring Carcassonne genom att placera landbrickor. Varje tur gör att området växer allt eftersom spelarna lägger till vägar, fält, städer och kloster. Spelare kan också placera ut sina följeslagare som stråtrövare, bönder, riddare eller som munkar för att få kontroll och inkassera poäng. ",
                  "min_players": 2,
                  "max_players": 6,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 22,
                  "name": "Codenames",
                  "category":"Partyspel",
                  "theme": ["Kortspel", "Snabbspelat", "Associationer", "Ordspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/139957_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/codenamessvenskversion",
                  "about": "Lagen tävlar om vem som först lyckas kontakta sina agenter. Mästerspionerna ger en ledtråd på ett ord som kan härleda till ett flertal kodord på bordet. Deras lagkamrater försöker gissa på rätt färg och undvika de som tillhör motståndarlaget. Och alla försöker undvika lönnmördaren.",
                  "min_players": 2,
                  "max_players": 8,
                  "min_playtime": 15,
                  "max_playtime": 30,
                  "min_age": 14
                },
                {
                  "id": 23,
                  "name": "Mysterium",
                  "category":"Äventyrsspel",
                  "theme": ["Associationer", "Ävetyr", "Skräck", "Mystik", "Mordgåta"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/212017_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/mysteriumnordiskversion",
                  "about": "I detta samarbetsspel intar en spelare rollen av en ande och de övriga spelarna är välkända medier. Alla spelare har samma mål; att klargöra de mystiska omständigheterna kring andens död och leda den till evig frid.",
                  "min_players": 2,
                  "max_players": 7,
                  "min_playtime": 40,
                  "max_playtime": 60,
                  "min_age": 10
                },
                {
                  "id": 24,
                  "name": "Splendor",
                  "category":"Strategi",
                  "theme": ["Handel", "Historia", "Kortspel", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/183707_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/splendorsvenskversion",
                  "about": "Spelarna är handelsmän under renässansen som försöker köpa ädelstensgruvor, transportmedel och butiker. I Splendor siktar du på rikedom och prestige.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 10
                },
                {
                  "id": 25,
                  "name": "King of Tokyo",
                  "category":"Familjespel",
                  "theme": [ "Strategi", "Monster", "Kriga", "Slåss"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/243588_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/kingoftokyosvenskversion",
                  "about": "Spela ett gigantiskt monster på bärsärkagång genom staden Tokyo! Slå tärningar och få de bästa kombinationerna för att hela dig själv, attackera, köpa speciella kort eller få poäng. Det är upp till dig att välja den bästa taktiken för att bli Kung av Tokyo och på vägen eliminera alla dina motståndare.",
                  "min_players": 2,
                  "max_players": 6,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 26,
                  "name": "7 Wonders",
                  "category":"Strategi",
                  "theme": ["Samla resurser", "Handel", "Bygga", "Historia", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/220715_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/7wondersnordiskversion",
                  "about": "Ett snabbt familjespel där det gäller att bygga upp världens sju underverk. Varje spelare kontrollerar en antik stad och måste samla resurser, bygga och rusta för att ha råd att bygga sitt underverk.",
                  "min_players": 2,
                  "max_players": 7,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 10
                },
                {
                  "id": 27,
                  "name": "Settlers från Catan",
                  "category": "Strategi", 
                  "theme": ["Familj", "Samla resurser", "Handel", "Bygga", "Expansioner"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/278933_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/settlersfrancatansvenskversion",
                  "about":"Ni är öns första befolkning. Först byggdes hus, sen kom där vägar. Det handlas med råvaror, byar växer till städer. Genom intensiv handel uppstår det nya möjligheter för dig och dina medspelare. Snart blir utrymmet på ön trångt. En kamp om land, råvaror och makt börjar. ", 
                  "min_players": 3,
                  "max_players": 4,
                  "min_playtime": 75,
                  "max_playtime": 90,
                  "min_age": 10
                },
                {
                  "id": 28,
                  "name": "Rackare",
                  "category": "Partyspel",  
                  "theme": ["Ordspel", "Enkla regler", "Humor", "Vuxet innehåll", "Kortspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/123715_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/rackare",
                  "about": "Rackare är ett uppkäftigt festspel med mycket humor. Spelet är löjligt enkelt – till den grad att endast puckon kan missuppfatta reglerna. Om man mot förmodan vill spela Rackare, passar det lika bra att göra i stora som små sällskap och lika väl vid festliga som direkt ofestliga tillfällen.",
                  "min_players": 3,
                  "max_players": 20,
                  "min_playtime": 30,
                  "max_playtime": 60,
                  "min_age": 15
                },
                {
                  "id": 29,
                  "name": "Clever",
                  "category":"Tärningsspel",
                  "theme": ["Tärning", "Dice"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/277565_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/cleverthatsprettycleverskandinaviskversion",
                  "about": "I Clever väljer du ut en tärning efter varje slag. Resultatet markerar du i ett av de färgade områdena i ditt poängblock. Smarta val ger dig möjligheter till härliga bonusar - med de andra spelarna deltar också, och får använda de tärningar du INTE valt!",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 30,
                  "name": "Port Royal",
                  "category":"Familjespel",
                  "theme": [ "Pirater", "Sjöfart", "Handel", "Resespel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/205281_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/portroyalnordiskversion",
                  "about": "Port Royal är ett roligt och enkelt kortspel i vilket spelarna strävar efter att bli den mest framstående kaptenen i Karibiens hamnar.",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 8
                },
                {
                  "id": 31,
                  "name": "Munchkin",
                  "category":"Strategi",
                  "theme": ["Kortspel", "Fantasy", "Kriga", "Humor"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/227787_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/munchkindeluxe",
                  "about": "Du och dina vänner tävlar om att döda monster och ta magiska föremål. Ta dig ner i fängelsehålan. Döda allt du möter. Hugg dina vänner i ryggen och stjäl deras grejer. Ta skatten och spring!",
                  "max_players": 6,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 10
                },
                {
                  "id": 32,
                  "name": "Small World",
                  "category": "Familjespel",
                  "theme": ["Strategi", "Fantasy", "Bygga", "Kriga"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/213396_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/smallworldskandinaviskversion",
                  "about": "Small World är ett roligt, halv-galet, hjärtligt civilisationsspel där 2-5 spelare genom erövringar kämpar om makten på ett alldeles för litet bräde för att alla ska få plats.",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 40,
                  "max_playtime": 80,
                  "min_age": 8
                  },
                  {
                  "id": 33,
                  "name": "Battle Sheep",
                  "category": "Familjespel",
                  "theme": ["Strategi", "Djur", "Snabbspelat", "Enkla regler"],
                  "image": "",
                  "link": "",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 10,
                  "max_playtime": 20,
                  "min_age": 8
                  },
                  {
                  "id": 34,
                  "name": "Magic Maze",
                  "category": "Familjespel",
                  "theme": ["Samarbetsspel", "Snabbspelat", "Tidspress", "Bygga"],
                  "image":"https://www.spelochsant.se//uploads/images/product_images/221903_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/magicmazenordiskversion",
                  "about": "Magic Maze är ett samarbetsspel i realtid som vänder upp och ned på dina spelvanor - under mer eller mindre fullständig tystnad.",
                  "min_players": 1,
                  "max_players": 8,
                  "min_playtime": 10,
                  "max_playtime": 20,
                  "min_age": 8
                  },
                  {
                  "id": 35,
                  "name": "Magic Maze kids",
                  "category": "Familjespel",
                  "theme": ["Samarbetsspel", "Djur", "Snabbspelat", "Tidspress"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/234746_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/magicmazekids",
                  "about": "Alla spelare kan flytta på alla pjäser, men snopet nog bara i en riktning. Kungen har oturligt nog blivit förvandlad till en groda. Ni måste samarbeta för att hjälpa honom att åter bli kung.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 10,
                  "max_playtime": 20,
                  "min_age": 5
                  },
                  {
                  "id": 36,
                  "name": "Labyrinth",
                  "category": "Familjespel",
                  "theme": ["Spelplanen förändras", "Fantasy"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/251257_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/labyrinthskandinaviskversion",
                  "about": "I denna labyrint byter väggarna plötsligt plats. Alla letar sig fram genom gångarna i sin iver att hitta hemliga föremål och man måste planera sin färd noga. Den som först har nått fram till alla sina hemligheter och kommit tillbaka till sin startplats har vunnit.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 7
                  },
                  {
                  "id": 37,
                  "name": "My first carcassonne",
                  "category": "Familjespel",
                  "theme": ["Barnspel", "Strategi"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/238728_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/myfirstcarcassonneskandinaviskversion",
                  "about": "Carcassonnes gator är fyllda av barn som försöker fånga djuren som släppts lös för festivalen. Staden har aldrig varit så levande! Denna version av den moderna klassikern, Carcassonne, har anpassats för att ge spelare av alla åldrar möjligheten att spela tillsammans. Här behövs ingen poängräkning!",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 4
                  },
                  {
                  "id": 38,
                  "name": "Catan junior",
                  "category": "Familjespel",
                  "theme": ["Strategi", "Sjöfart", "Pirater", "Bygga"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/205063_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/catanjuniorsvenskversion",
                  "about": "Segla på haven i dina skepp, upptäck nya öar och bygg piratnästen. För att göra detta måste du använda allt möjligt, t.ex. trä, sablar och guld. Om du bygger dina piratnästen på de bästa platserna kan du snabbt skaffa material till ditt nästa projekt",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 40,
                  "min_age": 6
                  },
          
                  {
                  "id": 39,
                  "name": "Rackarunge",
                  "category": "Familjespel",
                  "theme": ["Humor", "Ordspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/241042_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/rackarunge",
                  "about": "Rackarunge är ett löjligt enkelt familjespel, till den grad att endast puckon kan missuppfatta reglerna: Varje runda lägger en spelare ut ett gult kort och de andra fyller i med sitt bästa rosa kort. Den som lagt det gula kortet utser den roligaste kombinationen. Först till tio poäng har vunnit spelet och får titeln ”en riktig liten rackare.”",
                  "min_players": 2,
                  "max_players": 20,
                  "min_playtime": 30,
                  "max_playtime": 60,
                  "min_age": 6
                  },
                  {
                  "id": 40,
                  "name": "My Little Scythe",
                  "category": "Familjespel",
                  "theme": ["Ekonomi", "Fantasy", "Äventyr", "Kriga"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/240177_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/mylittlescythe",
                  "about": "My Little Scythe är ett strategiskt och familjevänligt spel där varje spelare kontrollerar 2 djur som ger sig ut på äventyr i kungadömet Pomme. För att bli den förste som tjänar 4 troféer från 8 möjliga kategorier, väljer spelarna att ”Flytta”, ”Söka” eller ”Göra”. Dessa val kommer tillåta spelaren att öka sin vänskap och samla på sig tårtor, att uppgradera handlingar och till och med delta i en pajkastnings-fight!", 
                  "min_players": 1,
                  "max_players": 6,
                  "min_playtime": 45,
                  "max_playtime": 60,
                  "min_age": 8
                  },
                  {
                  "id": 41,
                  "name": "Talisman",
                  "category": "Äventyrsspel",
                  "theme": ["Fantasy", "Äventyr"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/286965_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/talismanthemagicalquestgamerevised4thedition",
                  "about": "Man väljer en rollfigur som har olika fördelar och nackdelar som Barden, Likätaren, Krigaren, Trollkarl, Sierskan, Trollpacka, Troll, Tjuv, Lönnmördare, Alv eller Druiden och försöker sedan nå fram till Härskarkronan i brädets mitt för att med dess hjälp förinta motståndarna",
                  "min_players": 2,
                  "max_players": 6,
                  "min_playtime": 90,
                  "max_playtime": 120,
                  "min_age": 14
                  },
                  {
                  "id": 42,
                  "name": "Chronicles of Crime",
                  "category": "Äventyrsspel",
                  "theme": ["Mystik", "Äventyr"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/248250_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/chroniclesofcrime",
                  "about": "Chronicles of Crime är ett samarbetsspel i vilket ni ska klara upp brott med hjälp av ett spelbräde, en app och ett stänk Virtual Reality. Du och dina medspelare tilldelas fall och ska bege er runt i staden för att intervjua vittnen och misstänkta samt söka efter spår i 3D.",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 60,
                  "max_playtime": 90,
                  "min_age": 12
                  },
                  {
                  "id": 43,
                  "name": "Mansion of madness second edition",
                  "category": "Äventyrsspel",
                  "theme": ["Mystik", "Äventyr", "Skräck", "Kriga", "Fantasy"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/159695_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/mansionsofmadnesssecondedition",
                  "about": "Spelet utspelar sig i H.P. Lovecrafts värld av onda gudar och mystiska kulter. Mansions of Madness är ett samarbetsspel som går ut på att man som en grupp udda personer ger sig in i en herrgård eller i en förfallen fiskeby för att lösa ett mysterium.",
                  "min_players": 3,
                  "max_players": 5,
                  "min_playtime": 120,
                  "max_playtime": 180,
                  "min_age": 13
                  },
                  {
                  "id": 44,
                  "name": "Betrayal at House on the Hill 2nd Edition",
                  "category": "Äventyrsspel",
                  "theme": ["Äventyr", "Skräck"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/253864_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/betrayalathouseonthehill2ndedition",
                  "about": "Utforska en gammal herrgård och ta reda på vilka hemligheter och skatter som det gömmer! Men se upp, för en av er kommer att bli galen av de märkligheter som försiggår här inne och därmed vända sig mot de andra spelarna!",
                  "min_players": 3,
                  "max_players": 6,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 13
                  },
                  {
                  "id": 45,
                  "name": "Exploding Kittens NSFW Edition",
                  "category": "Humorspel",
                  "theme": ["Humor", "Kortspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/248589_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/explodingkittensnsfweditionnordiskversion",
                  "about": "För dig som älskar explosioner, laser och katter. Denna NSFW-version av spelet har samma spelmekanik som originalet men innehåller kortkonst som är för hemsk för att inkludera i en barnvänlig version",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 15,
                  "max_playtime": 30,
                  "min_age": 18
                  },
                  {
                  "id": 46,
                  "name": "Jag är... ALIAS",
                  "category": "Humorspel",
                  "theme": ["Humor", "Snabbspelat"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/289641_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/jagaralias",
                  "about": "Sätt på dig pannbandet, placera ett kort i det och börja gissa vilken person som finns i bandet! Förklararen ger dig alla slags ledtrådar och synonymer för att du ska komma på vem som sitter i pannan! gissar du rätt får du då framåt på spelplanen. Men du måste vara snabb för att få poäng!",
                  "min_players": 3,
                  "max_players": 6,
                  "min_playtime": 20,
                  "max_playtime": 45,
                  "min_age": 12
                  },
                  {
                  "id": 47,
                  "name": "Isle of Skye",
                  "category": "Familjespel",
                  "theme": ["Bygga", "Strategi"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/248899_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/isleofskye",
                  "about": "Isle of Skye är en av de vackraste platserna i världen, med mjuka sandstränder, svagt sluttande kullar och imponerande berg. Landskapet på Isle of Skye är hisnande och fascinerar alla. Skottland behöver en regent! Den klanledare som lyckas skapa det mest blomstrande kungadömet får jobbet. ",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 60,
                  "max_playtime": 120,
                  "min_age": 8
                  },
                  {
                  "id": 48,
                  "name": "Stone Age",
                  "category": "Familjespel",
                  "theme": ["Bygga", "Strategi", "Samla resurser"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/293302_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/stoneageskandinaviskversion",
                  "about": " Spelaren styr över sitt eget stenåldersfolk och väljer om arbetarna skall samla mat, råvaror eller föröka sig. Ju mera arbetare man har under sin kontroll desto snabbare går arbetet, men man måste naturligtvis ha råd att förse dem alla med mat. Råvaror används för att bygga olika byggnader, som sedan ger poäng åt spelarna. ",
                  "min_players": 1,
                  "max_players": 4,
                  "min_playtime": 90,
                  "max_playtime": 120,
                  "min_age": 14
                  },
                  {
                  "id": 49,
                  "name": "Ticket to Ride First Journey",
                  "category": "Familjespel",
                  "theme": ["Bygga", "Strategi", "Tåg"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/189880_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/tickettoridefirstjourneyskandinaviskversion",
                  "about": "Samla kort i olika färger, använd dem för att muta in tågsträckor med dina tåg och bli klar med dina biljetter för att vinna! Ticket to Ride: First Journey är lätt att lära sig, går snabbt att spela och är den perfekta introduktionen till resten av Ticket to Ride-serien.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 15,
                  "max_playtime": 30,
                  "min_age": 6
                  },
                  {
                  "id": 50,
                  "name": "Med Andra Ord Junior",
                  "category": "Familjespel",
                  "theme": ["Humor", "Ordspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/228926_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/medandraordjunior",
                  "about": "Här är juniorversionen av Med Andra Ord, med bilder istället för ord. Berätta vad du ser, med andra ord!",
                  "min_players": 4,
                  "max_players": 8,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 5
                  },
                  {
                  "id": 51,
                  "name": "Risk Junior",
                  "category": "Familjespel",
                  "theme": ["Pirater", "Sjöfart", "Kriga"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/296105_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/riskjuniorsvenskfinskversion",
                  "about": "Barnen flyttar sina båtpjäser runt spelbrädet för att leta efter begravda skatter samtidigt som de kämpar för kontrollen över öarna, för den som samlar mest byte vinner. Spelet kräver ingen läskunskap, är snabbt att ställa upp och kan spelas på mindre än 30 minuter. ",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 30,
                  "max_playtime": 45,
                  "min_age": 5
                  },
                  {
                  "id": 52,
                  "name": "Den försvunna diamanten",
                  "category": "Familjespel",
                  "theme": ["Äventyr", "Upptäckande"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/250899_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/denforsvunnadiamanten",
                  "about": "Jakten som bara tar en timme, har pågått sedan 50-talet. Här får du och dina motspelare samma mystiska uppdrag: Att finna världens största diamant, Afrikas Stjärna, och återlämna den sägenomspunna stenen till uppdragsgivaren. Genast startar en rafflande skattjakt kors och tvärs över den afrikanska kontinenten!",
                  "min_players": 2,
                  "max_players": 5,
                  "min_playtime": 30,
                  "max_playtime": 60,
                  "min_age": 6
                  },
                  {
                  "id": 53,
                  "name": "Junior Lancelot",
                  "category": "Familjespel",
                  "theme": ["Äventyr", "Fingerfärdighet"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/248790_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/juniorlancelotnordiskversion",
                  "about": "Nils, den sluge draken, har stulit riddarnas skatt och tagit med sig den till toppen på Drakmuren. De små drakriddarna tänker dock inte låta honom komma undan med detta. De har redan rusat mot Drakmuren för att ta tillbaka sin stulna skatt. Var försiktigt! Nils vaktar sitt glittrande guld ytterst noga. Den som kommer för nära får se upp för rullande stenbumlingar. Är du smart och sklicklig nog för att bygga en stege och klättra upp och ta tillbaka skatten?",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 10,
                  "max_playtime": 20,
                  "min_age": 5
                  },
                  {
                  "id": 54,
                  "name": "Monopoly Junior Refresh",
                  "category": "Familjespel",
                  "theme": ["Strategi", "Barnspel"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/283529_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/monopolyjuniorrefreshsvenskfinskversion",
                  "about": "Barnens första riktiga Monopol. Ett förenklat spel med enkla regler och roliga juniorversioner av de klassiska spelpjäserna: hundvalp, kattunge, racerbil och slagskepp, dina favoritspelpjäser, innan de växte upp!",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 45,
                  "max_playtime": 60,
                  "min_age": 5
                  },
                  {
                  "id": 55,
                  "name": "Rymdisar",
                  "category": "Familjespel",
                  "theme": ["Rymden", "Barnspel", "Äventyr"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/228914_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/rymdisar",
                  "about": "Rymdisar är ett barnspel som tar deltagarna ut i rymden bland planeter och rymdvarelser. Spelet går ut på att ge sig ut på en rymdpromenad bland stjärnorna. Väl ute i rymden gäller det att samla på sig så många magiska rymdstenar som möjligt.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 4
                  },
                  {
                  "id": 56,
                  "name": "Baluba",
                  "category": "Familjespel",
                  "theme": ["Djur", "Barnspel", "Memory"],
                  "image": "https://www.spelochsant.se//uploads/images/product_images/233163_450x450.jpg",
                  "link": "https://www.spelochsant.se/produkt/sallskapsspel/bradspel/balubaskandinaviskversion",
                  "about": "Resan börjar från lägerelden och går igenom den gungande hängbron, förbi lysmaskarnas sken och över den brusande vattenfallet. Vinnaren blir den som först kommer fram till Grodkungen. Under äventyret lönar det sig att följa noga med vilka djur som plaskar i vattnet och vilka som dyker under bron.",
                  "min_players": 2,
                  "max_players": 4,
                  "min_playtime": 20,
                  "max_playtime": 30,
                  "min_age": 5
                  }
                ]
              }   
            
            ,
          firstSortingArray:[],
          secondSortingArray: [],
          finalSortingArray:[]
      }       
  },
  
  methods: { 
      nextStep() { //Method for next step - based on answer
      if(this.step === 1 && this.answer === "Nej"){             
          for(var i = 0; i < 56; i++){ //Sort out from JSON-file
            if(this.myJson.data[i].category !=="Familjespel"){
            this.firstSortingArray.push(this.myJson.data[i]);
            }
          }
          this.step = 2;         
      }else  
      
      /*** Games for adult ***/ 
      if(this.step === 1 && this.answer === "Ja"){       
          for(i = 0; i < 56; i++){
            if(this.myJson.data[i].category==="Familjespel"){
            this.firstSortingArray.push(this.myJson.data[i]); 
            }
          }
          this.answer = null;     
          this.step = 10;
      }else

      //Strategic games
      if(this.step === 2 && this.answer === "Ja"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Strategi"){
            this.secondSortingArray.push(this.firstSortingArray[i]);
            }
          }
          this.firstSortingArray=[];
          this.answer = null; 
          this.step = 7;        
      }else
  
      if(this.step === 2 && this.answer === "Nej"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category!=="Strategi"){
            this.secondSortingArray.push(this.firstSortingArray[i]);
            }
          }
          this.firstSortingArray=[];
          this.answer = null;
          this.step = 3;  
      }else
          
      /***Non-strategic games***/
      
      //Party games
      if(this.step === 3 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Partyspel"){
            this.firstSortingArray.push(this.secondSortingArray[i]);
            }
          }
          this.secondSortingArray=[];
          this.answer = null;
          this.step = 4;
      }else
          
      if(this.step === 3 && this.answer === "Nej"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category!=="Partyspel"){
            this.firstSortingArray.push(this.secondSortingArray[i]);
            }
          }
          this.secondSortingArray=[];
          this.answer = null;
          this.step = 5;
      }else

      //Word games
      if(this.step === 4 && this.answer === "Ja"){
      for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Partyspel"){
            for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].theme.includes("Ordspel"))
            this.secondSortingArray.push(this.firstSortingArray[i]); 
            }
          }
          this.firstSortingArray=[];   
          this.theFinalAnswer();
          this.answer = null;      
          this.step = 0; //Getting result
          }
      }else

      if(this.step === 4 && this.answer === "Nej"){
        for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Partyspel"){
            for(i = 0; i < this.firstSortingArray.length; i++){
            if(!this.firstSortingArray[i].theme.includes("Ordspel"))
            this.secondSortingArray.push(this.firstSortingArray[i]); 
            }
          }
          this.firstSortingArray=[];   
          this.answer = null;      
          this.step = 6; //Getting result
          }
      }else

      //Mystery/solving clues games
      if(this.step === 5 && this.answer === "Ja"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Äventyrsspel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Äventyr"))
              this.secondSortingArray.push(this.firstSortingArray[i]); 
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null;
          this.step = 0; 
      } else

        if(this.step === 5 && this.answer === "Nej"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category!=="Äventyrsspel"){
            this.secondSortingArray.push(this.firstSortingArray[i]);
            }
          }
          this.firstSortingArray=[];
          this.answer = null;
          this.step = 19;
          }else

        //Funny games
        if(this.step === 19 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Humorspel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Humor"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[];
          this.theFinalAnswer(); 
          this.answer = null;
          this.step = 0;
          }else

        //Dice game
        if(this.step === 19 && this.answer === "Nej"){
          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Tärningsspel"){
            this.firstSortingArray.push(this.secondSortingArray[i]); 
            }
          }
          this.secondSortingArray=[];
          this.theFinalAnswer(); 
          this.answer = null;
          this.step = 0;
          }else

        //Question games
        if(this.step === 6 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Partyspel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Frågespel"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[];
          this.theFinalAnswer(); 
          this.answer = null;
          this.step = 0;
          }else

              
      if(this.step === 6 && this.answer === "Nej"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Partyspel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Humor"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[];
          this.theFinalAnswer(); 
          this.answer = null;
          this.step = 0;
          }

        /***Strategic games***/ 

        //Resources
        if(this.step === 7 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Strategi"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Samla resurser"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

      }else
      
        if(this.step === 7 && this.answer === "Nej"){
          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Strategi"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(!this.secondSortingArray[i].theme.includes("Samla resurser"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.answer = null;
          this.step = 8;
          }else

          //Building games
          if(this.step === 8 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Strategi"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Bygga"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; //Getting result
          }else
  
          if(this.step === 8 && this.answer === "Nej"){           
            for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].category==="Strategi"){
                for(i = 0; i < this.secondSortingArray.length; i++){
                if(!this.secondSortingArray[i].theme.includes("Bygga"))
                this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 9; 
          }else

          //Fantasy games
          if(this.step === 9 && this.answer === "Ja"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Strategi"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Fantasy"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          
          if(this.step === 9 && this.answer === "Nej"){
          
          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Strategi"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Science fiction"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          /*** Childrens game ***/

          //Sort by age   
          if(this.step === 10 && this.answer === "Ja"){
          
          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].min_age <=7)
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.answer = null; 
          this.step = 11; 
          }else

                      
          if(this.step === 10 && this.answer === "Nej"){
          
          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].min_age >=8)
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.answer = null; 
          this.step = 12; 
          }else

          //Strategic games
          if(this.step === 12 && this.answer === "Ja"){

          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Strategi"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 13; 
          }else

          
          if(this.step === 12 && this.answer === "Nej"){

          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(!this.secondSortingArray[i].theme.includes("Strategi"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 15; 

          }else

          //Building games
          if(this.step === 13 && this.answer === "Ja"){

          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Bygga"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

          }else

          //War games
          if(this.step === 13 && this.answer === "Nej"){

          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Kriga"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.answer = null; 
          this.step = 14; 

          }else
          
          //War games
          if(this.step === 14 && this.answer === "Ja"){

          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Kriga"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

          }else

          //No war games
          if(this.step === 14 && this.answer === "Nej"){
          this.step = 15; 

          }else

          //Adventure games      
          if(this.step === 15 && this.answer === "Ja"){

          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Äventyr"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
              }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

          }else

          //Adventure 
          if(this.step === 15 && this.answer === "Nej"){

          for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(!this.firstSortingArray[i].theme.includes("Äventyr"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
              }
          }
          this.firstSortingArray=[]; 
          this.answer = null; 
          this.step = 20; 

          }else
  
          if(this.step === 20 && this.answer === "Ja"){

          //Co-op games
          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Samarbetsspel"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
              }
          }
          this.secondSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

          }else

          if(this.step === 20 && this.answer === "Nej"){

          for(i = 0; i < this.secondSortingArray.length; i++){
          if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(!this.secondSortingArray[i].theme.includes("Samarbetsspel"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
              }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 21; 

        }else

        //Animals
        if(this.step === 21 && this.answer === "Ja"){

        for(i = 0; i < this.firstSortingArray.length; i++){
          if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Djur"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 

        }else

          if(this.step === 21 && this.answer === "Nej"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(!this.firstSortingArray[i].theme.includes("Djur"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0;
          }else

          /*** Young children games ***/

          //Pirates & sea games
          if(this.step === 11 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Sjöfart"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          if(this.step === 11 && this.answer === "Nej"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(!this.secondSortingArray[i].theme.includes("Sjöfart"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 16; 
          }else

          //Adverture games
          if(this.step === 16 && this.answer === "Ja"){
            for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Äventyr"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          if(this.step === 16 && this.answer === "Nej"){
            for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(!this.firstSortingArray[i].theme.includes("Äventyr"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.answer = null; 
          this.step = 17; 
          }else

        //Animal games
        if(this.step === 17 && this.answer === "Ja"){
          for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(this.secondSortingArray[i].theme.includes("Djur"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          if(this.step === 17 && this.answer === "Nej"){
            for(i = 0; i < this.secondSortingArray.length; i++){
            if(this.secondSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.secondSortingArray.length; i++){
              if(!this.secondSortingArray[i].theme.includes("Djur"))
              this.firstSortingArray.push(this.secondSortingArray[i]);
              }
            }
          }
          this.secondSortingArray=[]; 
          this.answer = null; 
          this.step = 18; 
          }else

        //Strategic games
        if(this.step === 18 && this.answer === "Ja"){
          
        for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Familjespel"){
            for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Strategi"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

        //Funny games
        if(this.step === 18 && this.answer === "Nej"){
          for(i = 0; i < this.firstSortingArray.length; i++){
            if(this.firstSortingArray[i].category==="Familjespel"){
              for(i = 0; i < this.firstSortingArray.length; i++){
              if(this.firstSortingArray[i].theme.includes("Humor"))
              this.secondSortingArray.push(this.firstSortingArray[i]);
              }
            }
          }
          this.firstSortingArray=[]; 
          this.theFinalAnswer(); 
          this.answer = null; 
          this.step = 0; 
          }else

          this.answer = null;
      
      },
      
      yesAnswer() {
      this.answer="Ja";
      this.nextStep();
      },

      noAnswer() {
      this.answer="Nej";
      this.nextStep();
      },

      theFinalAnswer() { //Final output - based on answer
      if(this.firstSortingArray.length === 0){ 
          //Pick one game at random      
          var randomGame = this.secondSortingArray[Math.floor(Math.random()*this.secondSortingArray.length)];
          this.finalSortingArray.push(randomGame);

          }else
          if(this.firstSortingArray.length > 0) {
          randomGame = this.firstSortingArray[Math.floor(Math.random()*this.firstSortingArray.length)];
          this.finalSortingArray.push(randomGame);
          }
      return this.finalSortingArray;
      },

      reset() {
        window.location.reload();
      },

      //Hide button
      hide() {
      document.getElementById('YesBtn').style.visibility='hidden';
      document.getElementById('NoBtn').style.visibility='hidden';
      }
    }  
  }
);

  