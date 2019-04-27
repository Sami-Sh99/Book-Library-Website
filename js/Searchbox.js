$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  var countries = [
'10 قواعد لحياة روحية عظيمة',
'الإسلام كما عرفته وآمنت به',
'محمد القائد',
'الخميني القائد',
'الخامنئي القائد',
'الدعاء لكل حاجة',
'الدليل إلى الأعمال العظيمة',
'الزواج في مدرسة الإيمان',
'الشخصية العجيبة للامام علي (ع)',
'القيادة القيمية',
'الله في العرفان',
'المدرسة النموذجية',
'المعصومة الكاملة',
'المنقذ الأخير',
'إشراقات الروح',
'أصول الإسلام وفروعه',
'برج الخديعة',
'حب بلا مقاومة',
'خزائن الحكمة',
'رسالة المرأة 1',
'رشحات ملكوتيّة',
'روح التربية',
'سر السعادة',
'سفر إلى الملكوت ـ الطبعة 4',
'عطر الشهادة',
'عهد أمير المؤمنين (ع) إلى القادة',
'صولة فارس',
'فاتح القلوب',
'فعّل طاقاتك الكامنة',
'كيف أجعل القرآن قائدي؟',
'كيف أجعل مجتمعي قويًا؟',
'كيف أحيا مسلمًا وأعيش سعيدًا',
'كيف أزداد إيمانًا؟',
'كيف أصبح حكيمًا؟',
'كيف أصبح عارفًا؟',
'كيف أصبح فقيهًا؟',
'كيف أصبح فيلسوفًا؟',
'كيف أصبح قائدًا صالحًا؟',
'كيف أصبح كاتبًا ناجحًا؟',
'كيف أصبح مخلصًا؟',
'كيف أصلي بخشوع؟',
'كيف أكون ناشطًا سياسيًا؟',
'كيف أمتلك جسدًا قويًّا؟',
'كيف أهذّب نفسي؟',
'كيف تصبح غنيًّا وتنعم بالحياة',
'كيف سيتغيّر العالم؟',
'كيف نستفيد من التاريخ؟',
'كيف يُصنع القادة المميّزون',
'لماذا استشهد الحسين سبط الرسول(ص)؟',
'لماذا أتعلم؟',
'لماذا أحبّ الموت؟',
'ماذا تعرف عن الإمام علي(ع)؟',
'محمد الإنسان الكامل',
'مسؤولياتنا اتجاه إمام الزمان',
'معادلة التكامل الكبرى',
'معراج السالكين (ع)',
'مقامات السالكين',
'هل اقترب الوعد الحق؟',
'وصايا عرفانية (فني)',
'ولاية الفقيه ظل الحقيقة العظمى',
'ثورة التربية والتعليم',
'الدليل إلى معاني كلمات القرآن',
'المعجزة الكبرى',
'المجتمع التقدمي',
'يوم سقطت طهران ـ ط 2'

  ];
  
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items List");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
      for(j=0;j<=arr[i].length-val.length;j++){
        if (arr[i].substr(j, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = arr[i].substr(0,j);
          b.innerHTML += "<strong>" + arr[i].substr(j, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(j+val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
          break;
        }
      }}
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }


  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("Top").style.display = "block";
  } else {
    document.getElementById("Top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({scrollTop:0}, 'medium');
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
