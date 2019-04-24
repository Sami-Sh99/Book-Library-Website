app.controller('MainController', ['$scope', function($scope) {
    $scope.Atitle="Hello Angular!";
    $scope.Books=[
      {
        "BookTitle": "الميراث العظيم",
        "Author": "Hadi Saleh ",
        "Publisher": "دار المعارف ",
        "PublishDate": "01/11/2018 ",
        "Price": "5000L.L",
        "image": "./img/im1.jpg"
      },
      {
        "BookTitle": "إن معي لبصيرتي",
        "Author": "Hadi Saleh ",
        "Publisher": "دار المعارف ",
        "PublishDate": "01/12/2018 ",
        "Price": "2000L.L",
        "image": "./img/im2.jpg"
      },
      {
        "BookTitle": "بينات في معرفة القرآن الكريم",
        "Author": "Hadi Saleh ",
        "Publisher": "دار المعارف ",
        "PublishDate": "01/11/2018 ",
        "Price": "7500L.L",
        "image": "./img/im5.png"
      },
      {
        "BookTitle": "The Book of Indux",
        "Author": "Sami Shame El-Deen ",
        "Publisher": "Book bazzar ",
        "PublishDate": "01/11/2018 ",
        "Price": "50000L.L",
        "image": "./img/im3.jpg"
      },
      {
        "BookTitle": "How to Play the Piano",
        "Author": "Jad Mrad",
        "Publisher": "Maliks ",
        "PublishDate": "01/11/2018 ",
        "Price": "15000L.L",
        "image": "./img/im4.jpg"
      }
     ];
  }]);