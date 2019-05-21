$(document).ready(function() {
    $("svg").hover(function(e) {
        $("#welcome").html($(this).parent().attr("data-name"));
    }, function(e) {
        //$("#welcome").html("Welcome!");
    });
});

window.onload=function(){
      
var app = document.getElementById('app');

new TypeIt('#app', {
  speed: 50,
  waitUntilVisible: true
})
.type('$ shh')
.pause(1500)
.delete(2)
.type('sh')
.pause(1500)
.type(' admin@j0nn.com')
.break()
.pause(750)
.options({speed: 0.1})
.type('admin@j0nn.com>')
.pause(750)
.type(' Password: ')
.pause(750)
.options({speed: 150})
.type(' *********')
.pause(750)
.empty()
.options({speed: 0})
.type('admin@j0nn.com>')
.pause(750)
.options({speed: 150})
.type(' cat passwords.txt')
.pause(750)
.break()
.pause(750)
.break()
.options({speed: 0})
.type(' HAVE YOU EVER TOUCHED YOUR OWN POO?')
.pause(5750)
.options({speed: 1500})
.pause(750)
.go();


    }