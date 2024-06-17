const questions = [
  {
    category: "Algemeen",
    question: "Wat is Lightopia Brussels",
    answer:
      "Een meermaals georganiseerd lantaarn- en lichtfestival dat traditionele handgemaakte lantaarns combineert met modern design en technologie zoals een watershow, 3D mapping en artistieke installaties om een immersieve ervaring te creëren.",
  },
  {
    category: "Algemeen",
    question: "Waar vindt Lightopia Brussels plaats?",
    answer: `Lightopia Brussels vindt plaats in het kasteel van Groot-Bijgaarden.

<a class="green_underline" href="https://www.google.be/maps/dir//Kasteel+van+Groot-Bijgaarden,+Isidoor+van+Beverenstraat+5,+1702+Dilbeek/@50.8739154,4.2549957,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c3c11fa6c53219:0xfdd2e68ea3f18e70!2m2!1d4.2636992!2d50.8738348?entry=ttu">Isidoor van Beverenstraat 5
1702 Groot-Bijgaarden</a>`,
  },
  {
    category: "Algemeen",
    question: "Voor wie is Lightopia Brussels geschikt?",
    answer: "Voor alle leeftijden en het is voor iedereen toegankelijk.",
  },
  {
    category: "Algemeen",
    question:
      "Op welke data vindt het evenement plaats en wat zijn de openingsuren?",
    answer: `Het lantaarn- en lichtfestival wordt geopend van 18 november 2022 tot 8 januari 2023. <a class="green_underline" href="https://tickets.lightopia.be/">Kies je data</a>.

Openingsuren:  
Deuren open van 17u00 tot 20u30 (laatste toegang).
Einde evenement: 22:00 uur.`,
  },
  {
    category: "Algemeen",
    question: "Welke dagen zijn dalperiode en piekperiode?",
    answer: `Daldagen: maandagen tot donderdagen
Piekdagen: weekends, vakanties en Kerstperiode (zeer populaire data)

Opgelet: kijk <a class="green_underline" href="https://tickets.lightopia.be/registration/event/lightopia2022">hier</a> de openingsdagen na.

Deze prijsstelling helpt bezoekers om tijdens een goedkopere periode naar Lightopia te komen.`,
  },
  {
    category: "Parcours",
    question: "Hoe lang duurt het?",
    answer:
      "De wandelroute is 2 km lang en duurt ongeveer 1:30 uur om af te leggen voor een gemiddelde bezoeker.",
  },
  {
    category: "Parcours",
    question: "Is het evenement geschikt voor kinderen?",
    answer:
      "Lightopia Brussel is geschikt voor kinderen. Kinderen jonger dan 16 jaar moeten door een  volwassen persoon begeleid  worden. Tickets zijn gratis voor kinderen jonger dan 4 jaar.",
  },
  {
    category: "Parcours",
    question: "Welke kledij moet ik aantrekken?",
    answer: "Het is een buitenactiviteit: draag winterkledij en laarzen.",
  },
  {
    category: "Parcours",
    question: "Mag ik roken of vapen tijdens het evenement?",
    answer:
      "Hoewel het een buitenactiviteit is, vragen we je niet te roken of te vapen op het terrein van het kasteel.",
  },
  {
    category: "Parcours",
    question: "Zijn er toiletten beschikbaar op het terrein?",
    answer:
      "Er zijn toiletten beschikbaar op het terrein en deze worden regelmatig schoongemaakt. Wij vragen 0,50 euro per toiletbezoek.",
  },
  {
    category: "Parcours",
    question: "Mag ik een fiets meenemen naar Lightopia Brussels?",
    answer: "Er zijn geen volwassen- of kinderfietsen toegestaan in het park.",
  },
  {
    category: "Parcours",
    question: "Mag ik mijn hond meenemen?",
    answer: "Neen, honden zijn niet toegelaten.",
  },
  {
    category: "eten en drinken",
    question: "Waar kan ik eten of drinken?",
    answer:
      "In de serre van het park vindt u het Twinkling Café. Wij bieden streetfood, glühwein, warme chocolademelk en andere dranken aan.",
  },
  {
    category: "eten en drinken",
    question: "Hoe kan ik betalen voor eten en drinken?",
    answer:
      "In het Twinkling Café van Lightopia Brussels kan je betalen met cash, bancontact of kredietkaart.",
  },
  {
    category: "eten en drinken",
    question:
      "Is het Twinkling Café van Lightopia Brussels geschikt voor kinderen?",
    answer: "Ja, het Twinkling Café is geschikt voor het hele gezin.",
  },
  {
    category: "eten en drinken",
    question:
      "Mag ik mijn eigen eten en drinken meenemen naar Lightopia Brussels?",
    answer:
      "Het is verboden om uw eigen drinken, alcohol of eten te nuttigen tijdens de wandeling. Onze Twinkling Café is beschikbaar om u te verrassen.",
  },
  {
    category: "eten en drinken",
    question:
      "Ik heb vragen over het Twinkling Café van Lightopia Brussels. Wie kan ik contacteren?",
    answer: `Stuur je vragen naar:  <a class="green_underline" href="mailto:info@lightopia.be">info@lightopia.be</a> .`,
  },
  {
    category: "Toegankelijkheid",
    question: "Is het park toegankelijk voor rolstoelgebruikers?",
    answer:
      "Het park is niet geschikt voor rolstoelgebruikers, behalve op eigen risico. De paden zijn modderig tijdens dit seizoen. We raden aan om een sterke begeleider mee te vragen om u te helpen. Er liggen kasseien op de toegangsbrug en daar is het aangeraden om de rolstoel te trekken. Trappen in het park kan de rolstoelgebruiker altijd vermijden.",
  },
  {
    category: "Toegankelijkheid",
    question:
      "Bieden jullie een gratis ticket aan voor de begeleider van rolstoelgebruikers?",
    answer: `Personen met een rolstoel die een ticket koopt, heeft recht op één gratis onmisbare begeleider. De begeleider mag zich melden aan de ingang en heeft recht op een gratis toegang.

LET OP: U hoeft geen ticket voor de begeleider te kopen. Als u dat wel doet, kunnen wij uw ticket niet terugstorten.

Voor verdere vragen kunt u een e-mail sturen naar <a class="green_underline" href="mailto:info@lightopia.be">info@lightopia.be</a>.`,
  },
  {
    category: "route & parking",
    question: "Hoe kom ik naar Lightopia Brussel?",
    answer: `Lightopia Brussels is vlot bereikbaar met de auto en het openbaar vervoer. <a class="green_underline" href="praktisch.html">Klik hier</a> voor meer informatie.`,
  },
  {
    category: "route & parking",
    question: "Hoe kom ik met het openbaar vervoer naar het kasteel?",
    answer: `Lightopia Brussels is bereikbaar met de auto en het openbaar vervoer. <a class="green_underline" href="#">Klik hier</a> voor meer informatie.`,
  },
  {
    category: "route & parking",
    question: "Is er een parking?",
    answer: `Ga naar de parking van Hocké:
<a class="green_underline" href="https://www.google.be/maps/dir//Alfons+Gossetlaan+9,+1702+Dilbeek/@50.8723174,4.2810014,17z/data=!4m18!1m8!3m7!1s0x47c3c1160969f9cf:0xc406f94819a939e2!2sAlfons+Gossetlaan+9,+1702+Dilbeek!3b1!8m2!3d50.8723174!4d4.2810014!16s%2Fg%2F11c1839b8t!4m8!1m0!1m5!1m1!1s0x47c3c1160969f9cf:0xc406f94819a939e2!2m2!1d4.2810014!2d50.8723174!3e2?entry=ttu">A. Gossetlaan 13 - 1702 Groot-Bijgaarden</a>
Onze parkeerwachters zullen u begeleiden naar de juiste plaats.

U kunt <a class="green_underline" href="https://tickets.lightopia.be/">uw parkeerticket online kopen</a>  of ter plaatse voor 5 euro per wagen. De parking is enkel toegankelijk op vertoon van een parkeerticket en voor de duur van het bezoek.

Maak gebruik van onze shuttledienst die u veilig naar Lightopia Brussels brengt.`,
  },
  {
    category: "route & parking",
    question: "Is er een parkeerplaats voor bezoekers met een handicap?",
    answer: `Ja, Lightopia Brussels is toegankelijk voor rolstoelgebruikers en scooters. Er is een gehandicaptenparking beschikbaar op de parking van Hocké.

Parkeeradres:
<a class="green_underline" href="https://www.google.be/maps/dir//Alfons+Gossetlaan+9,+1702+Dilbeek/@50.8723174,4.2810014,17z/data=!4m18!1m8!3m7!1s0x47c3c1160969f9cf:0xc406f94819a939e2!2sAlfons+Gossetlaan+9,+1702+Dilbeek!3b1!8m2!3d50.8723174!4d4.2810014!16s%2Fg%2F11c1839b8t!4m8!1m0!1m5!1m1!1s0x47c3c1160969f9cf:0xc406f94819a939e2!2m2!1d4.2810014!2d50.8723174!3e2?entry=ttu">A. Gossetlaan 13 - 1702 Groot-Bijgaarden</a>

Onze parkeerwachters zullen u begeleiden naar de juiste plaats.
Maak gebruik van onze shuttledienst die u veilig naar Lightopia Brussels brengt.`,
  },
  {
    category: "Tickets",
    question: "Waar kan ik tickets kopen?",
    answer: `U kunt uw <a class="green_underline" href="https://tickets.lightopia.be/">tickets online kopen</a> of ter plaatse aan de kassa via contant geld, bancontact of kredietkaart, als er nog toegangstickets beschikbaar zijn.

Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.`,
  },
  {
    category: "Tickets",
    question: "Kan ik ter plaatse tickets kopen?",
    answer: `Ja, u kunt tickets kopen aan de kassa op de dag zelf, als het evenement niet is uitverkocht.

Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.`,
  },
  {
    category: "Tickets",
    question: "Hoeveel kosten de tickets?",
    answer: `Onze prijzen vind je op onze <a class="green_underline" href="#">ticketpagina</a>.`,
  },
  {
    category: "Tickets",
    question: "Moet ik vooraf reserveren?",
    answer: `Om teleurstelling te voorkomen, raden we aan uw tickets op voorhand te reserveren. Populaire data zijn snel uitverkocht. Het is mogelijk de dag zelf tickets te kopen aan de kassa.

Wanneer u tickets ter plaatse aankoopt zal er een supplement van € 2.00 per ticket aangerekend worden.`,
  },
  {
    category: "Tickets",
    question: "Is het nodig om de tickets af te drukken?",
    answer: "Nee, u mag de tickets tonen op uw smartphone.",
  },
  {
    category: "Tickets",
    question:
      "Moet ik aankomen op het tijdstip dat op mijn ticket staat of mag ik vroeger of later komen?",
    answer:
      "U wordt gevraagd om op de aangegeven tijdstippen van uw ticket aanwezig te zijn. We accepteren nog steeds uw toegang als u te laat aankomt.",
  },
  {
    category: "Tickets",
    question: "Kan ik de datum van mijn ticket wijzigen?",
    answer:
      "De datum van het toegangsticket kan alleen worden omgewisseld op vertoon van het ticket aan de kassa op de dag van uw bezoek en tegen betaling van een eventueel prijsverschil. Tickets worden nooit terugbetaald.",
  },
  {
    category: "Tickets",
    question: "Wat is het terugbetalingsbeleid?",
    answer:
      "In onwaarschijnlijke omstandigheden dat we Lightopia Brussels moeten annuleren, kunt u uw ticket overdragen naar een andere datum of storten wij uw geld terug. We zullen iedereen via e-mail en sociale media zo snel mogelijk op de hoogte brengen. Controleer altijd uw spam voor communicatie van ons! In alle andere omstandigheden zijn de Lightopia tickets niet terugbetaalbaar.",
  },
  {
    category: "Tickets",
    question: "Hoe/wanneer ontvang ik mijn tickets?",
    answer: `Na de betaling ontvangt u onmiddelijk de tickets in uw mailbox. Moest u deze niet ontvangen hebben, neem contact op met <a class="green_underline" href="mailto:info@lightopia.be.">info@lightopia.be.</a>

Controleer altijd uw spam.`,
  },
  {
    category: "Tickets",
    question:
      "Ik kan mijn tickets niet vinden of ben ze kwijt, wat moet ik doen?",
    answer: `Na het afronden van uw ticket aankoop, ontvangt u een bevestigingsmail en uw tickets in uw mailbox.

U kunt ons ook een e-mail sturen op <a class="green_underline" href="mailto:info@lightopia.be.">info@lightopia.be.</a> als u uw tickets niet kunt vinden. Vermeld daarbij zoveel mogelijk informatie, zoals de locatie, het bestelnummer, de naam en het e-mailadres waarmee u de tickets hebt geboekt.

Let op: onze klantenservice kan u niet onmiddellijk te woord staan en heeft meestal minimum 24 uur nodig om op uw vragen te reageren. Controleer uw tickets minimum 2 dagen voor het evenement.`,
  },
  {
    category: "Tickets",
    question: "Krijg ik korting als ik met een groep kom?",
    answer:
      "Vanaf 20 personen krijgt u 2 euro korting per persoon op de normale prijs ( buiten piek € 18,50 / piek € 22,50). Wij raden u aan uw tickets online te reserveren. Voor meer vragen over groepsboekingen, contacteer info@lightopia.be.",
  },
  {
    category: "Contact",
    question: "Waar kan ik terecht voor een partnership verzoek?",
    answer: `Neem contact op via <a class="green_underline" href="mailto:info@lightopia.be.">info@lightopia.be.</a>.`,
  },
  {
    category: "Contact",
    question:
      "Hebben jullie een contactpersoon voor influencers, media of pers?",
    answer: `Neem dan contact op via <a class="green_underline" href="mailto:info@lightopia.be.">info@lightopia.be.</a>.`,
  },
];
