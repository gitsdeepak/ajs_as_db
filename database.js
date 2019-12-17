var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.whole=[
        {Name:"Do you want to visit Google?",
         URL:"https://www.google.co.in/",
        logo: "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
        },
        {Name:"Do you want to visit Facebook?",
         URL:"https://www.facebook.com",
        logo: "https://cdn.worldvectorlogo.com/logos/facebook-1.svg"
        },
        {Name:"Do you want to visit YouTube?",
         URL:"https://www.youtube.com/",
       logo: "https://www1-lw.xda-cdn.com/files/2017/08/After-12-Years-Google-Gives-YouTube-a-New-Logo.png"
        },
        {Name:"Do you want to visit Miniclip?",
         URL:"https://www.miniclip.com/games/en/",
      logo: "https://mxnitro.game/img/logos/miniclip_logo.png"
        },
        {Name:"Do you want to visit GitHub?",
         URL:"https://github.com/",
         logo: "http://www.dataversity.net/wp-content/uploads/2014/09/GitHub_LogoMark304x200.png"
        }
    ];
    
    
});
