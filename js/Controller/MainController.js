app.controller('MainController', ['$scope', function($scope) {
  $scope.number = 10;
  $scope.getNumber = function(num) {
    var x = new Array(num);
    for (var i = 0; i < x.length; i++){
      x[i] = 0;
  }
  for (var i = 0; i < x.length; i++){
      x[i] = i;
  } 
  return x;
  }
  $scope.Libraries=[
    {
      'Title':" دار المعارف",
      'Link':'../../Maaref.html',
      'Books':[
        {
          "BookTitle": "الميراث العظيم",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/althaqafa_alislameya/almerath_alathim_s.jpg",
          "Price": 0
        },
        {
          "BookTitle": "إن معي لبصيرتي",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/alhayat_altayeba/in_mae_lbasirati_s.jpg",
          "Price": 0
        },
        {
          "BookTitle": "السيرة النبويّة المباركة",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/alserah_alnabaweya_almobarakah_s.jpg",
          "Price": 0
        },
        {
          "BookTitle": "بينات في معرفة القرآن الكريم",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/bayenat_fe_maarefat_alquraan_alkarim_s.png",
          "Price": 0
        },
        {
          "BookTitle": "نور الدين ابن إيران",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/sadat_alqafela/2018/noor_aldeen_s.png",
          "Price": 0
        },
        {
          "BookTitle": "حكومة القرآن",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/alwali_alkhamenae/2018/hkumat_alquraan_s.png",
          "Price": 0
        },
        {
          "BookTitle": "زاد عاشوراء للمحاضر الحسيني 1440 هـ",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/zad_ashouraa/zad_ashuraa_1440_s.png",
          "Price": 0
        },
        {
          "BookTitle": "مجالس السيرة الحسينيّة 1440 هـ",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almajaless_alhussaineya/majaless_alserah_alhusseineya_1440_s.png",
          "Price": 0
        },
        {
          "BookTitle": "مفردات غريب القرآن",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/mofradat_gharib_alquraan_s.png",
          "Price": 0
        },
        {
          "BookTitle": "إنّي آنست نارًا",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/defaa_moqadas/eni_anasto_naran_s.png",
          "Price": 0
        },
        {
          "BookTitle": "معارف الاسلام",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/maaref_alislam_2018_s.png",
          "Price": 0
        },
        {
          "BookTitle": "أسوارُ النور",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/aswar_alnour_s.png",
          "Price": 0
        },
        {
          "BookTitle": "دروس من تحرير الوسيلة - العبادات",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/tahrir_alwasila_alebadat_s.png",
          "Price": 0
        },
        {
          "BookTitle": "التجويد الميسّر",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/altajweed_almoyassar_s.png",
          "Price": 0
        },
        {
          "BookTitle": "كن صادقاً",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/alhayat_altayeba/kn_sadeq_s.png",
          "Price": 0
        },
        {
          "BookTitle": "التفسير التربوي الميسّر",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/tafsir-tarbawi-muyasar_s.png",
          "Price": 0
        },
        {
          "BookTitle": "السيدة فاطمة قدوة وأسوة",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/almaaref_altaalemeya/2018/sayeda_fatima_s.png",
          "Price": 0
        },
        {
          "BookTitle": "أسبوع المسجد",
          "image": "https://www.almaaref.org/books/contentsimages/broshure/smallimages/jedareyat/monasabat/ousbou_almasjed_9_s.jpg",
          "Price": 0
        },
        {
          "BookTitle": "باب الأولياء",
          "image": "https://www.almaaref.org/books/contentsimages/smallimages/dourouss_thakafia/bab_alawleyaa_s.png",
          "Price": 0
        }
      ]
    },
    {
      'Title':"الدار العربية للعلوم الناشرون",
      'Link':'../../DarArab.html',
      'Books':[
        {
          "Price": "$13.00",
          "Publisher": "ليزا سي",
          "BookTitle": "موعد مع القدر.",
          "image": "https://abjjadst.blob.core.windows.net/pub/e6fc2871-9ede-43a7-a5fd-1c18b9b8c009.PNG"
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
          "image": "https://images.gr-assets.com/books/1426493180l/23441811.jpg"
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
        }
      ]
    
    },{
      'Title':"Antoine Library",
      'Link':'./../../Antoine.html',
      'Books':[
        {
          "BookTitle": "La cuisine libanaise familiale",
          "Price": "$ 33.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9786144382844&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "Man’oushé",
          "Price": "$ 30.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9781566569286&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "الشيف انطوان - مأكول الهنا",
          "Price": "$ 35.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9789953264400&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "الطعام النباتي - قليل الدسم و شهي",
          "Price": "$ 6.66",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9789953262178&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "Anahid’s Gourmet Cookbook",
          "Price": "$ 38.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9789953373478&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "The Labyrinth of the Spirits",
          "Price": "$ 19.95",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9781474606202&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "The Fall of Gondolin",
          "Price": "$ 26.60",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9780008302757&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "A Double Life",
          "Price": "$ 18.61",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9781474607025&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "The Giver. Movie Tie-In",
          "Price": "$ 9.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9780544442207&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "A Game of Thrones: A Song of Ice ...",
          "Price": "$ 10.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9780553593716&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "الرحالة",
          "Price": "$ 29.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9786144691748&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "جزءٌ مؤلم من حكاية",
          "Price": "$ 10.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9786144691533&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "الزمن الجميل - تجليد فني",
          "Price": "$ 16.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9786144691618&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "1Q84  الكتاب الاول",
          "Price": "$ 20.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9789953687872&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "الاسود يليق بك - غلاف",
          "Price": "$ 9.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9789953267135&SIZE=m&WebSite=AO"
        },
        {
          "BookTitle": "The Fault in Our Stars",
          "Price": "$ 13.00",
          "image": "https://antoine-images.com/imagerepository.ashx?ean=9780142424179&SIZE=m&WebSite=AO"
        }
      ]
     },{
    //   'Title':"مكتبة القدس",
    //   'Link':'#',
    //   'Books':[
        
    //   ]
    
    // },{
      'Title':"مركز باء",
      'Link':'baa.html',
      'Books':[
      
          {
            "BookTitle": "10 قواعد لحياة روحية عظيمة",
            "Price": "$7.50",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/5/3f1ae866-6234-436b-b2bf-677be16a2c7a.jpg?v=3&height=250"
          },
          {
            "BookTitle": "الإسلام كما عرفته وآمنت به",
            "Price": "$7.50",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/7/28/9c0fa3c4-85df-44ba-897a-c61fc2fdffac.jpg?height=250"
          },
          {
            "BookTitle": "محمد القائد",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/70a399bd-15e0-4856-ba2d-ace7491ec440/2.jpg?preset=width300"
          },
          {
            "BookTitle": "الخميني القائد",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/d4478455-f273-4dd9-ac3b-133c0b5ea74a/2.jpg?preset=width300"
          },
          {
            "BookTitle": "الخامنئي القائد",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/a7f03a8e-6abd-4687-bd96-83e550198ae2/2.jpg?preset=width300"
          },
          {
            "BookTitle": "الدعاء لكل حاجة",
            "Price": "$6.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/3f0d0a68-9a0d-41d0-b770-a7bbe37174cc.jpg?v=2&height=250"
          },
          {
            "BookTitle": "الدليل إلى الأعمال العظيمة",
            "Price": "$6.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/5/98799eb2-7d94-4b2b-8c17-63337df3340c.jpg?v=3&height=250"
          },
          {
            "BookTitle": "الزواج في مدرسة الإيمان",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/07afbef8-a773-4211-a38b-6f2c64d5d5e3/2.jpg?preset=width300"
          },
          {
            "BookTitle": "الشخصية العجيبة للامام علي (ع)",
            "Price": "$8.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2018/11/15/b287e61e-9bd5-4418-bbdf-2dcce508e0f2/2.jpg?preset=width300"
          },
          {
            "BookTitle": "القيادة القيمية",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/5/c8de09a0-b745-45f0-a30e-daefdaa41a36.jpg?v=3&height=250"
          },
          {
            "BookTitle": "الله في العرفان",
            "Price": "$8.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/8952170d-8e95-4d24-a099-f89b67aed5bb/2.jpg?preset=width300"
          },
          {
            "BookTitle": "المدرسة النموذجية",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/25/d5666d94-8012-4e1c-8518-cb3b55ecb5ec.jpg?height=250"
          },
          {
            "BookTitle": "المعصومة الكاملة",
            "Price": "$4.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2018/2/19/eb65b512-c8dc-46f1-8bb9-ddd3bba013f7/1.jpg?preset=width900"
          },
          {
            "BookTitle": "المنقذ الأخير",
            "Price": "$3.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/3de35a57-2e5d-4f4f-a228-8680a5d24a05.jpg?width=600"
          },
          {
            "BookTitle": "إشراقات الروح",
            "Price": "$10.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2018/12/2/356fad5f-8e98-48e2-bda0-4795f2fc0881/2.jpg?preset=width300"
          },
          {
            "BookTitle": "أصول الإسلام وفروعه",
            "Price": "$8.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/27/267ffa93-cc0a-4e91-9ea0-c5dfed7b1fb6/2.jpg?preset=width300"
          },
          {
            "BookTitle": "يوم سقطت طهران ـ ط 2",
            "Price": "$15.00",
            "Publisher": "مركز باء",
            "PublishDate": " ",
            "Author": " ",
            "image": "http://m.islamona.center/archive/image/2017/10/5/6f1d908f-fa4d-4a24-b1fd-f9394fcb3ae2.jpg?height=250"
          }
         ]
      
    
    }
  ];
  }]);