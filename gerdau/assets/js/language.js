$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);

  const locale = urlParams.get("lang") || "pt-BR";

  $(".FilterPhone").css({
    backgroundImage: `url('assets/images/phone-${locale}.png')`,
  });

  $(".FilterOverlay").attr("src", `assets/images/filter-${locale}.png`);

  $("#EbookDownload").attr("href", `assets/ebook/${locale}.pdf`);

  $.i18n({ locale }).load({
    "pt-BR": {
      "startsection-title": "O Voluntariado <br /> molda o futuro.",
      "startsection-subtitle": "Vem você também!",
      "startsection-cta": "NOSSAS CONQUISTAS EM 2021",
      "numbers-title": "Nossas Conquistas <br /> <strong>em 2021</strong>",
      "numbers-prefix": "+ de",
      "numbers-actions": "Ações",
      "numbers-volunteers": "Voluntários",
      "numbers-hours": "Horas doadas",
      "numbers-source": "Fonte: Plataforma V2V - data 09/11/21",
      "ebook-quote1":
        '"Atuar com responsabilidade social a partir do entendimento do nosso papel na sociedade é uma premissa na qual a Gerdau investe." - <i>Carol Carpenedo, Diretora Global de Pessoas e Responsabilidade Social.</i>',
      "ebook-quote2":
        '"Vejo minhas ações de voluntariado como uma retribuição à sociedade, por tudo que muitos me ajudaram a conquistar." - <i>Carlos Andre Rios Esteves, colaborador Next Business Development.</i>',
      "ebook-cta-text":
        "Confira a versão completa das <br /> nossas ações de impacto em 2021.",
      "ebook-cta-button": "Baixe Aqui",
      "ebook-title":
        "<strong> Baixe o ebook <br /> e confira </strong> <br /> nosso impacto.",
      "filter-title": "Vem moldar <br />o futuro com <br />a gente!",
      "filter-text":
        "Uma nova página do futuro começa em 2022 e queremos você ao nosso lado. Uma pequena ação pode contribuir para um amanhã muito melhor. Vem!",
      "filter-cta-text":
        "Já faz a diferença com o Programa de Voluntariado Gerdau? Atualize a sua foto de perfil com nosso filtro especial!",
      "filter-cta-button": "Comece Agora",
      "cta-title": "A transformação começa aqui",
      "cta-text":
        "Acesse a Plataforma de Voluntariado e encontre a ação mais próxima de você. A transformação começa com ação.",
      "cta-button": "Acesse Aqui",
      "filter-take-picture": "Tirar Foto",
      "filter-download-picture": "Baixar Foto",
      "filter-retake-picture": "Tirar outra foto",
      "filter-ask-permission": "Permita o uso da câmera clicando em 'Permitir'",
      "filter-error": "Ocorreu um erro. Permita o uso da câmera, por favor",
    },
    en: {
      "startsection-title": "Volunteering shapes <br /> the future.",
      "startsection-subtitle": "Be part of it!",
      "startsection-cta": "OUR ACHIEVEMENTS IN 2021",
      "numbers-title": "Our Achievements <br /> <strong>in 2021</strong>",
      "numbers-prefix": "+ than",
      "numbers-actions": "Actions",
      "numbers-volunteers": "Volunteers",
      "numbers-hours": "Hours donated",
      // not spec
      "numbers-source": "Source: V2V Platform - 11/09/21",
      "ebook-quote1":
        '"When we are aware of our social role, we seek to transform intentions into concrete actions and positively impact the lives of the people and society around us. The Gerdau Volunteer Program aims at practicing our citizenship, promoting closer ties with the communities in which we operate. " - <i>Carol Carpenedo, Global Director of People and Social Responsibility.</i>',
      "ebook-quote2":
        '"I see my volunteer actions as a reciprocation to society, due to everything that many people have helped me to achieve. I thank Gerdau for giving the opportunity to be able to contribute to a better Brazil by volunteering.” - <i>Carlos Andre Rios Esteves, Next Business Development employee.</i>',
      "ebook-cta-text":
        "Check out the full version of our <br /> impact actions in 2021.",
      "ebook-cta-button": "Download Here!",
      // not specified
      "ebook-title":
        "<strong> Download the <br /> ebook and <br /> check out </strong> <br /> our impact.",
      "filter-title": "Come shape <br /> the future <br />with us!",
      "filter-text":
        "A new page of the future begins in 2022 and we would like to have you by our side. A small action can contribute to a much better tomorrow. Join us!",
      "filter-cta-text":
        "Are you already making a difference through the Gerdau Volunteer Program? Update your profile picture with our special filter!",
      "filter-cta-button": "Start Now",
      "cta-title": "The transformation starts here",
      "cta-text":
        "Access the Volunteer Portal and find the closest action. Transformation begins with action.",
      "cta-button": "Enter Here",
      // not spec
      "filter-take-picture": "Take Picture",
      "filter-download-picture": "Download Picture",
      "filter-retake-picture": "Retake picture",
      "filter-ask-permission": "Allow camera access by clicking 'Allow'",
      "filter-error": "An error occurred. Please allow camera access",
    },
    es: {
      "startsection-title": "El voluntariado <br /> moldea el futuro.",
      "startsection-subtitle": "¡Únete tú también!",
      "startsection-cta": "NUESTROS LOGROS EN 2021",
      "numbers-title": "Nuestros Logros <br /> <strong>en 2021</strong>",
      "numbers-prefix": "+ de",
      "numbers-actions": "Acciones",
      "numbers-volunteers": "Voluntarios",
      "numbers-hours": "Horas donadas",
      "numbers-source": "Fuente: Plataforma V2V - data 09/11/21",
      "ebook-quote1":
        '"Cuando somos conscientes de nuestro papel social, buscamos transformar las intenciones en acciones concretas e impactar positivamente en la vida de las personas y la sociedad que nos rodea. El Programa de Voluntariado de Gerdau tiene como objetivo practicar nuestra ciudadanía, promoviendo el acercamiento a las comunidades en las que actuamos. " - <i>Carol Carpenedo, Directora Global de Personas y Responsabilidad Social.</i>',
      "ebook-quote2":
        '"Veo mis acciones de voluntariado como una retribución a la sociedad, por todo lo que muchos me han ayudado a lograr. Agradezco a Gerdau por darme el espacio y la oportunidad de poder contribuir a un Brasil mejor siendo un voluntario". - <i>Carlos Andre Rios Esteves, empleado de Next Business Development.</i>',
      "ebook-cta-text":
        "Consulte la versión completa de nuestras <br /> acciones de impacto en 2021.",
      "ebook-cta-button": "¡DESCÁRGALA AQUÍ!",
      "ebook-title":
        "<strong> ¡Descarga el <br /> ebook y consulta </strong> <br /> nuestro impacto.",
      "filter-title":
        "Ven a <br /> moldear el <br /> futuro con <br /> nosotros!",
      "filter-text":
        "Una nueva página del futuro comienza en 2022 y te queremos a nuestro lado. Una pequeña acción puede contribuir a un mañana mucho mejor. ¡Ven!",
      "filter-cta-text":
        "¿Ya estás marcando la diferencia con el Programa de Voluntariado Gerdau? Actualiza tu foto de perfil con nuestro filtro especial.",
      "filter-cta-button": "COMIENZA AHORA",
      "cta-title": "La transformación empieza aquí",
      "cta-text":
        "Accede al Portal del Voluntariado y encuentra la acción más cercana a ti. La transformación comienza con acciones.",
      "cta-button": "Accede Aquí",
      "filter-take-picture": "Toma una foto",
      "filter-download-picture": "Descargar foto",
      "filter-retake-picture": "Toma otra foto",
      "filter-ask-permission":
        "Permite el acceso a la cámara haciendo clic en 'Permitir'",
      "filter-error": "Se produjo un error. Permite el acceso a la cámara",
    },
  });

  $("[data-i18n]").i18n();
});
