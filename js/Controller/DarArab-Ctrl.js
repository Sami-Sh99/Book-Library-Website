app.controller('DarArab', ['$scope', function($scope) {

    $scope.Books=[
      {
        "Price": "$13.00",
        "Publisher": "ليزا سي",
        "BookTitle": "موعد مع القدر.",
        "image": ""
      },
      {
        "Price": "$13.00",
        "Publisher": "ارنالدور اندريداسون",
        "BookTitle": "جثة في الفندق.",
        "image": "https://pictures.abebooks.com/isbn/9786140102446-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "كيونغ سوك شين",
        "BookTitle": "أرجوك اعتني بأمي.",
        "image": "https://pictures.abebooks.com/isbn/9786140103047-us-300.jpg"
      },
      {
        "Price": "$10.00",
        "Publisher": "دانيال ستيل",
        "BookTitle": "بدينة ولكن.",
        "image": "https://pictures.abebooks.com/isbn/9786140103658-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "بثينة العيسى",
        "BookTitle": "عائشة تنزل الى العالم السفلي.ط15",
        "image": "https://pictures.abebooks.com/isbn/9786140103702-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "بثينة العيسى",
        "BookTitle": "كل الأشياء ط6",
        "image": "https://pictures.abebooks.com/isbn/9786140104440-us-300.jpg"
      },
      {
        "Price": "$11.00",
        "Publisher": "سعود السنعوسي",
        "BookTitle": "ساق البامبو طـ 31",
        "image": "https://pictures.abebooks.com/isbn/9786140105232-us-300.jpg"
      },
      {
        "Price": "$7.50",
        "Publisher": "ديفيد كريغ",
        "BookTitle": "كشف الكذب",
        "image": "https://pictures.abebooks.com/isbn/9786140105935-us-300.jpg"
      },
      {
        "Price": "$10.00",
        "Publisher": "صن - مي هوانغ",
        "BookTitle": "الدجاجة التي حلمت بالطيران",
        "image": "https://pictures.abebooks.com/isbn/9786140106215-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "ريوهو اوكاوا",
        "BookTitle": "التفكير الذي لا يقهر",
        "image": "https://pictures.abebooks.com/isbn/9786140106543-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "حسن صبرا",
        "BookTitle": "هزمتهم امرأة",
        "image": "https://pictures.abebooks.com/isbn/9786140108165-us-300.jpg"
      },
      {
        "Price": "$10.00",
        "Publisher": "بثينة العيسى",
        "BookTitle": "كبرت ونسيت أن أنسى ط21",
        "image": "https://pictures.abebooks.com/isbn/9786140108783-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "ريوهو اوكاوا",
        "BookTitle": "I’M FINE أنا بخير",
        "image": "https://pictures.abebooks.com/isbn/9786140110274-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "سام كين",
        "BookTitle": "الملعقة المختفية",
        "image": "https://pictures.abebooks.com/isbn/9786140110991-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "ميريدث ماران",
        "BookTitle": "لماذا نكتب؟ط3",
        "image": "https://pictures.abebooks.com/isbn/9786140112506-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "سعود السنعوسي",
        "BookTitle": "فئران أمي حصة ط18",
        "image": "https://pictures.abebooks.com/isbn/9786140115446-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "د.فرنسيس جينسين",
        "BookTitle": "دماغ المراهقين",
        "image": "https://pictures.abebooks.com/isbn/9786140116160-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "بثينة العيسى",
        "BookTitle": "خرائط التيه ط11",
        "image": "https://pictures.abebooks.com/isbn/9786140116313-us-300.jpg"
      },
      {
        "Price": "$24.00",
        "Publisher": "ستيفن غراي",
        "BookTitle": "اسياد الجاسوسية الجدد",
        "image": "https://pictures.abebooks.com/isbn/9786140117556-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "ماري كوندو",
        "BookTitle": "سحر الترتيب",
        "image": "https://pictures.abebooks.com/isbn/9786140117624-us-300.jpg"
      },
      {
        "Price": "$16.00",
        "Publisher": "مها منير فتحة",
        "BookTitle": "مهارات التواصل واساليب الاقناع",
        "image": "https://pictures.abebooks.com/isbn/9786140117730-us-300.jpg"
      },
      {
        "Price": "$17.00",
        "Publisher": "صوفي كينسيلا",
        "BookTitle": "البحث عن اودري",
        "image": "https://pictures.abebooks.com/isbn/9786140118607-us-300.jpg"
      },
      {
        "Price": "$18.00",
        "Publisher": "باتريك سميث",
        "BookTitle": "اسرار قمرة القيادة",
        "image": "https://pictures.abebooks.com/isbn/9786140119345-us-300.jpg"
      },
      {
        "Price": "$10.00",
        "Publisher": "ابراهيم نصر الله",
        "BookTitle": "حرب الكلب الثانية ط5",
        "image": "https://pictures.abebooks.com/isbn/9786140120266-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "رتشارد ثالر و كاس سنشتاين",
        "BookTitle": "التنبيه",
        "image": "https://pictures.abebooks.com/isbn/9786140120655-us-300.jpg"
      },
      {
        "Price": "$18.00",
        "Publisher": "د. جيمس ر. دوتي",
        "BookTitle": "في متجر السحر",
        "image": "https://pictures.abebooks.com/isbn/9786140121348-us-300.jpg"
      },
      {
        "Price": "$20.00",
        "Publisher": "يوري بار - جوزيف",
        "BookTitle": "الملاك - الجاسوس المصري الذي انقذ اسرائيل",
        "image": "https://pictures.abebooks.com/isbn/9786140121409-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "روي كلارك",
        "BookTitle": "أدوات الكتابة-49 استارتيجية ضرورية لكل كاتب",
        "image": "https://pictures.abebooks.com/isbn/9786140121560-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "جون نكسون",
        "BookTitle": "استجواب الرئيس صدام حسين",
        "image": "https://pictures.abebooks.com/isbn/9786140122505-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "سامي الحاج",
        "BookTitle": "غوانتنامو قصتي",
        "image": "https://pictures.abebooks.com/isbn/9786140123120-us-300.jpg"
      },
      {
        "Price": "$11.00",
        "Publisher": "نعوم تشومسكي",
        "BookTitle": "وداعا للحلم الامريكي",
        "image": "https://pictures.abebooks.com/isbn/9786140123359-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "نعوم تشومسكي واندريه فلجك",
        "BookTitle": "عن الارهاب الغربي",
        "image": "https://pictures.abebooks.com/isbn/9786140123618-us-300.jpg"
      },
      {
        "Price": "$10.50",
        "Publisher": "سعود السنعوسي",
        "BookTitle": "حمام الدار ط5",
        "image": "https://pictures.abebooks.com/isbn/9786140123779-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "ماري آيكن",
        "BookTitle": "التاثير السيبراني",
        "image": "https://pictures.abebooks.com/isbn/9786140123878-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "دان براون",
        "BookTitle": "الأصل",
        "image": "https://pictures.abebooks.com/isbn/9786140124257-us-300.jpg"
      },
      {
        "Price": "$17.00",
        "Publisher": "نايومي كلاين",
        "BookTitle": "الرفض ليس كافيا",
        "image": "https://pictures.abebooks.com/isbn/9786140124677-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "مارك ارونسون  -  مارينا بودوس",
        "BookTitle": " كيف غير السكر العالم؟",
        "image": "https://pictures.abebooks.com/isbn/9786140125025-us-300.jpg"
      },
      {
        "Price": "$16.00",
        "Publisher": "مايو كلينك",
        "BookTitle": "كتاب السعادة",
        "image": "https://pictures.abebooks.com/isbn/9786140125155-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "جنيفر ايغن",
        "BookTitle": "شاطئ مانهاتن",
        "image": "https://pictures.abebooks.com/isbn/9786140125278-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "د. لورنزو كوين  و د. اليسون جيفريز",
        "BookTitle": "العيش المضاد للسرطان",
        "image": "https://pictures.abebooks.com/isbn/9786140125445-us-300.jpg"
      },
      {
        "Price": "$21.00",
        "Publisher": "جون غريشام",
        "BookTitle": "سرقة مال النصاب",
        "image": "https://pictures.abebooks.com/isbn/9786140125490-us-300.jpg"
      },
      {
        "Price": "$9.50",
        "Publisher": "فاتن الصراف",
        "BookTitle": "كوخ العم نجم",
        "image": "https://pictures.abebooks.com/isbn/9786140125667-us-300.jpg"
      },
      {
        "Price": "$6.00",
        "Publisher": "جودي بلانكو",
        "BookTitle": "ارجوكم... لا تسخروا مني.",
        "image": "https://pictures.abebooks.com/isbn/9789953297675-us-300.jpg"
      },
      {
        "Price": "$7.00",
        "Publisher": "منذر قباني",
        "BookTitle": "حكومة الظل ط12",
        "image": "https://pictures.abebooks.com/isbn/9789953871189-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "ستيفن كينغ",
        "BookTitle": "الهارب.",
        "image": "https://pictures.abebooks.com/isbn/9789953871301-us-300.jpg"
      },
      {
        "Price": "$11.00",
        "Publisher": "ستيفن كينغ",
        "BookTitle": "بؤس.",
        "image": "https://pictures.abebooks.com/isbn/9789953871875-us-300.jpg"
      },
      {
        "Price": "$6.00",
        "Publisher": "كاي ردفيلد جاميسون",
        "BookTitle": "عقل غير هادئ.",
        "image": "https://pictures.abebooks.com/isbn/9789953872605-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "منذر قباني",
        "BookTitle": "عودة الغائب ط9.",
        "image": "https://pictures.abebooks.com/isbn/9789953873466-us-300.jpg"
      },
      {
        "Price": "$10.50",
        "Publisher": "شيب ودان هيث",
        "BookTitle": "افكار وجدت لتبقى.",
        "image": "https://pictures.abebooks.com/isbn/9789953874517-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "ابراهيم نصر الله",
        "BookTitle": "زمن الخيول البيضاء طـ18",
        "image": "https://pictures.abebooks.com/isbn/9789953874630-us-300.jpg"
      },
      {
        "Price": "$20.00",
        "Publisher": "نسيم طالب",
        "BookTitle": "البجعة السوداء - تداعيات الاحداث غير المتوقعة.",
        "image": "https://pictures.abebooks.com/isbn/9789953876122-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "آسني سييرستاد",
        "BookTitle": "بائع الكتب في كابول.",
        "image": "https://pictures.abebooks.com/isbn/9789953876658-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "أوليفر ساكس",
        "BookTitle": "الرجل الذي حسب زوجته قبعة.",
        "image": "https://pictures.abebooks.com/isbn/9789953876740-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "فريد زكريا",
        "BookTitle": "عالم ما بعد أميركا.",
        "image": "https://pictures.abebooks.com/isbn/9789953877310-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "أوليفر ساكس",
        "BookTitle": "اريد ساقا اقف عليها.",
        "image": "https://pictures.abebooks.com/isbn/9789953877488-us-300.jpg"
      },
      {
        "Price": "$12.00",
        "Publisher": "أليسون بنجامين - براين ماك كالوم",
        "BookTitle": "عالم بلا نحل.",
        "image": "https://pictures.abebooks.com/isbn/9789953878416-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "ريما كركي",
        "BookTitle": "الليلة...سأعترف ط6",
        "image": "https://pictures.abebooks.com/isbn/9789953878676-us-300.jpg"
      },
      {
        "Price": "$7.50",
        "Publisher": "كيث ميلتون و روبرت والاس",
        "BookTitle": "دليل سي. آي. ايه. الرسمي للخدع والحيل.",
        "image": "https://pictures.abebooks.com/isbn/9789953879208-us-300.jpg"
      },
      {
        "Price": "$5.00",
        "Publisher": "دانيال ستيل",
        "BookTitle": "أبي.",
        "image": "https://pictures.abebooks.com/isbn/9789953299006-us-300.jpg"
      },
      {
        "Price": "$8.00",
        "Publisher": "دانيال ستيل",
        "BookTitle": "الزفاف.",
        "image": "https://pictures.abebooks.com/isbn/9789953299020-us-300.jpg"
      },
      {
        "Price": "$6.00",
        "Publisher": "دانيال ستيل",
        "BookTitle": "دقة قلب.",
        "image": "https://pictures.abebooks.com/isbn/9789953299037-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "دان براون",
        "BookTitle": "ملائكة وشياطين .",
        "image": "https://pictures.abebooks.com/isbn/9789953299082-us-300.jpg"
      },
      {
        "Price": "$16.00",
        "Publisher": "ارنالدور اندريداسون",
        "BookTitle": "الجولة الحاسمة",
        "image": "https://pictures.abebooks.com/isbn/9786140116849-us-300.jpg"
      },
      {
        "Price": "$20.00",
        "Publisher": "فؤاد مطر",
        "BookTitle": "انياب الخليفة وانامل الجنرال",
        "image": "https://pictures.abebooks.com/isbn/9786140122062-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "هانس روسلينغ - اولا روسلينغ - وآنا روسلينغ",
        "BookTitle": "الالمام بالحقيقة",
        "image": "https://pictures.abebooks.com/isbn/9786140124417-us-300.jpg"
      },
      {
        "Price": "$16.00",
        "Publisher": "د. محمد عزالدين علامه",
        "BookTitle": "الغذاء المتجانس اكسير الحياة",
        "image": "https://pictures.abebooks.com/isbn/9786140124530-us-300.jpg"
      },
      {
        "Price": "$22.00",
        "Publisher": "ستيفن كينغ",
        "BookTitle": "كوجو",
        "image": "https://pictures.abebooks.com/isbn/9786140125001-us-300.jpg"
      },
      {
        "Price": "$10.50",
        "Publisher": "د. جابر شعيب الاسماعيل",
        "BookTitle": "القائد الاداري نحو نمط قيادي مبتكر",
        "image": "https://pictures.abebooks.com/isbn/9786140125254-us-300.jpg"
      },
      {
        "Price": "$20.00",
        "Publisher": "أ.د. عبد الله خليفة الشايجي",
        "BookTitle": "ازمات مجلس التعاون لدول الخليج العربية",
        "image": "https://pictures.abebooks.com/isbn/9786140125421-us-300.jpg"
      },
      {
        "Price": "$10.00",
        "Publisher": "هيفاء الفاضل",
        "BookTitle": "رجل القش",
        "image": "https://pictures.abebooks.com/isbn/9786140125483-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "دانيال ستيل",
        "BookTitle": "هدايا ثمينة",
        "image": "https://pictures.abebooks.com/isbn/9786140125711-us-300.jpg"
      },
      {
        "Price": "$26.00",
        "Publisher": "مين جين لي",
        "BookTitle": "باتشينكو",
        "image": "https://pictures.abebooks.com/isbn/9786140125766-us-300.jpg"
      },
      {
        "Price": "$17.00",
        "Publisher": "اسكندر بالا",
        "BookTitle": "بارباروسا",
        "image": "https://pictures.abebooks.com/isbn/9786140125803-us-300.jpg"
      },
      {
        "Price": "$13.50",
        "Publisher": "ماري كوندو",
        "BookTitle": "انشروا الفرح",
        "image": "https://pictures.abebooks.com/isbn/9786140125827-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "عبد النبي الشعلة",
        "BookTitle": "غاندي وقضايا العرب والمسلمين",
        "image": "https://pictures.abebooks.com/isbn/9786140125889-us-300.jpg"
      },
      {
        "Price": "$24.00",
        "Publisher": "ستيفن كينغ",
        "BookTitle": "ظلام دامس لا نجوم",
        "image": "https://pictures.abebooks.com/isbn/9786140126169-us-300.jpg"
      },
      {
        "Price": "$7.50",
        "Publisher": "د.غسان يعقوب",
        "BookTitle": "كيف نتغلب على اضطرابات الوسواس بالعلاج النفسي",
        "image": "https://pictures.abebooks.com/isbn/9786140126503-us-300.jpg"
      },
      {
        "Price": "$25.00",
        "Publisher": "مايكل دوبس",
        "BookTitle": "بيت من ورق",
        "image": "https://pictures.abebooks.com/isbn/9786140126558-us-300.jpg"
      },
      {
        "Price": "$17.00",
        "Publisher": "لورين اوليفر",
        "BookTitle": "موت في عيد الحب",
        "image": "https://pictures.abebooks.com/isbn/9786140126589-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "سيث ستيفنز - دافيدوتس",
        "BookTitle": "الكل يكذب",
        "image": "https://pictures.abebooks.com/isbn/9786140126619-us-300.jpg"
      },
      {
        "Price": "$7.00",
        "Publisher": "بثينة العيسى",
        "BookTitle": "الحقيقة والكتابة",
        "image": "https://pictures.abebooks.com/isbn/9786140126664-us-300.jpg"
      },
      {
        "Price": "$14.00",
        "Publisher": "فينس بيسر",
        "BookTitle": "العالم في حبة رمل",
        "image": "https://pictures.abebooks.com/isbn/9786140126862-us-300.jpg"
      },
      {
        "Price": "$13.00",
        "Publisher": "د. جوليا شو",
        "BookTitle": "الذاكرة درة تاج الصحة",
        "image": "https://pictures.abebooks.com/isbn/9786140127036-us-300.jpg"
      },
      {
        "Price": "$6.70",
        "Publisher": "ابراهيم نصر الله",
        "BookTitle": "سيرة عين",
        "image": "https://pictures.abebooks.com/isbn/9786140127074-us-300.jpg"
      },
      {
        "Price": "$6.00",
        "Publisher": "ابراهيم نصر الله",
        "BookTitle": "ظلال المفاتيح",
        "image": "https://pictures.abebooks.com/isbn/9786140127081-us-300.jpg"
      },
      {
        "Price": "$15.00",
        "Publisher": "ابراهيم نصر الله",
        "BookTitle": "دبابة تحت شجرة عيد الميلاد",
        "image": "https://pictures.abebooks.com/isbn/9786140127104-us-300.jpg"
      },
      {
        "Price": "$9.00",
        "Publisher": "ستيفن كينغ",
        "BookTitle": "انعتاق",
        "image": "https://pictures.abebooks.com/isbn/9786140127241-us-300.jpg"
      },
      {
        "Price": "$20.00",
        "Publisher": "ايلبير اورتايلي",
        "BookTitle": "الغازي مصطفى كمال اتاتورك",
        "image": "https://pictures.abebooks.com/isbn/9786140127302-us-300.jpg"
      },
      {
        "Price": "$14.50",
        "Publisher": "جيسيكا باري",
        "BookTitle": "حب لا يقهر",
        "image": "https://pictures.abebooks.com/isbn/9786140127401-us-300.jpg"
      },
      {
        "Price": "$16.00",
        "Publisher": "ارنالدور اندريداسون",
        "BookTitle": "غيوم داكنة",
        "image": "https://pictures.abebooks.com/isbn/9786140127487-us-300.jpg"
      },
      {
        "Price": "$10.50",
        "Publisher": "بياتريس هيبو",
        "BookTitle": "التحكم البيروقراطي",
        "image": "https://pictures.abebooks.com/isbn/9786140127531-us-300.jpg"
      }
     ]
  }]);