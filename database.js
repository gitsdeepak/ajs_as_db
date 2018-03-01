var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.Name = ["Do you want to visit Goole?", "Do you want to visit Facebook", "Do you want to visit youTube", "Do you want to visit Miniclip","Do you want to visit GitHub"];
    $scope.URL = ["https://www.google.co.in/", "https://www.facebook.com", "https://www.youtube.com/", "https://www.miniclip.com/games/en/", "https://github.com/"];
    $scope.logo = ["https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
        "https://cdn.worldvectorlogo.com/logos/facebook-1.svg",
        "https://www1-lw.xda-cdn.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo.png",
        "https://mxnitro.game/img/logos/miniclip_logo.png",
        "http://www.dataversity.net/wp-content/uploads/2014/09/GitHub_LogoMark304x200.png"
    ]
});