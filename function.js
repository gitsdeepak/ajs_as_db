var sld = 0;
        
        $(document).ready(function () {
            var ex = 0;
            function pop(x) {
                $(".pop").css("height", x+"px");
            }
            $("#head1").click(function () {
                ex = 1;
                $("#hide1").slideDown();
                setTimeout(function () { pop("153") }, 250);
            });
            $("#head2").click(function () {
                ex = 2;
                $("#hide2").slideDown();
                setTimeout(function () { pop("153") }, 250);
            });
            $("#head2").mouseover(function () {

                if (ex == 0) {
                }else if(ex==2){}
                else {
                    pop("75");
                    $("#hide" + ex).slideUp();
                    ex = 0;
                }

            });
            $("#head1").mouseover(function () {

                if (ex == 0) {
                } else if (ex == 1) { }
                else {
                    pop("75");
                    $("#hide" + ex).slideUp();
                    ex = 0;
                }

            });

           $(".list").mouseover(function () {

               if (ex == 0) {   
               }
               else {
                   pop("75");
                   $("#hide" + ex).slideUp();
                   ex = 0;
                   
               }

            });
           $("#heading").mouseover(function () {

               if (ex == 0) {
               }
               else {
                   pop("75");
                   $("#hide" + ex).slideUp();
                   ex = 0;
               }

           });
           $(".pop").mouseover(function () {

               if (ex == 0) {
               }
               else {
                   pop("75");
                   $("#hide" + ex).slideUp();
                   ex = 0;
               }

           });
           
        });