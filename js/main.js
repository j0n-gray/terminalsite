// Opens the default tab defined by id 'defaultOpen'
$(document).ready(function() {
    document.getElementById("defaultOpen").click();
   })

// Tab Content Controller
   function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
   };

// Inputs the 'data-name' attribute in to the '#welcome' DIV on top icon hover.
   $(document).ready(function() {
    $("svg").hover(function(e) {
     $("#welcome").html($(this).parent().attr("data-name")); // Replaces text in '#welcome' with 'data-name' result in each HTML link.
    }, function(e) {});
   });

// Icon will re-open closed Terminal tab
   $(document).ready(function() {
    $("#icon_img").click(function() {
     $('#terminal_tab').css({
      'display': 'block',
     });
    });
   });

// Switches CSS Stylesheet on request
    var plusmin = 1;
    $(document).ready(function() {
        $('#idd').click(function(){
        plusmin *= -1;        // Change the 'plusmin' var
        var stl = plusmin>0 ? 'css/style.css' : 'css/style2.css';     // Sets the css files
        $('#stl[rel=stylesheet]').attr('href', stl); // Change the css file of the tag with id="stl" and rel="stylesheet"
        });
    });

// Typewriter input for main displayed DIV
   window.onload = function() {
    var app = document.getElementById('app');

// Typewriter input goes here
// Documentation: https://typeitjs.com/docs/

    new TypeIt('#app', {
      speed: 50,
      waitUntilVisible: true
     })  
     .empty()
     .type('$ shh') // Types 'shh' - Mistyped to look more 'human-like'.
     .pause(1500) // Pauses script.
     .delete(2) // Deletes last 2 typed letters which were 'hh'
     .type('sh') // Replaces 'hh' with 'sh' to complete 'shh'.
     .pause(1500)
     .type(' admin@j0nn.com')
     .break() // Line-break
     .pause(750)
     .options({
      speed: 0.1
     }) // Changes type speed, the lower the faster.
     .type('<span id="appspan">admin@j0nn.com></span>')
     .pause(750)
     .type(' Password: ')
     .pause(750)
     .options({
      speed: 150
     })
     .type(' *********')
     .pause(750)
     .empty()
     .options({
      speed: 0
     })
     .type('<span id="appspan">admin@j0nn.com></span>')
     .pause(750)
     .options({
      speed: 150
     })
     .type(' cat portfolio.html')
     .pause(750)
     .break()
     .pause(750)
     .break()
     .options({
      speed: 0
     })
     .type(' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
     .break()
     .type('  ')
     .break()
     .type('  ')
     .break()
     .type(' <span id="appspan">Social Media Links</span>')
     .break()
     .type(' ==================')
     .break()
     .break()
     .type(' <strong>Github:</strong> <a href="#">link.github.com</a>')
     .break()
     .type(' <strong>LinkedIn:</strong> <a href="#">link.linkedin.com</a>')
     .break()
     .type(' <strong>Twitter:</strong> <a href="#">link.twitter.com</a>')
     .break()
     .type(' <strong>Github:</strong> <a href="#">link.github.com</a>')
     .pause(5750)
     .options({
      speed: 1500
     })
     .pause(750)
     .go();
   }
 
// Makes the main 'terminal' div draggable
//   $(function() {
//    $('#main')
//     .first()
//     .draggable()
//   });

// Makes the icon dock draggable
$(function() {
    $('#iconrow')
    .draggable()
   });

// Makes the infobox draggable
$(function() {
    $('.infobox-content')
    .draggable()
   });

// Makes the icon dock draggable
$(function() {
// Get the infobox
    var infobox = document.getElementById("myinfobox");

// Get the button that opens the infobox
    var btn = document.getElementById("infoBtn");

// Get the <span> element that closes the infobox
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the infobox
    btn.onclick = function() {
    infobox.style.display = "block";
            }

// When the user clicks on <span> (x), close the infobox
    span.onclick = function() {
    infobox.style.display = "none";
            }

// When the user clicks anywhere outside of the infobox, close it
    window.onclick = function(event) {
    if (event.target == infobox) {
        infobox.style.display = "none";
            }
        } 
    }); 

// Makes the icon1 draggable
$(function() {
    $('#icon')
    .draggable()
   });

// Makes the icon2 draggable
$(function() {
    $('#icon2')
    .draggable()
   });

// Makes the icon3 draggable
$(function() {
    $('#icon3')
    .draggable()
   });

// Output live time on taskbar
   $(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
   })

   function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({
     'color': '#EA60FF',
     'font-size': '11px',
     'padding-top': '3px',
     'padding-bottom': '3px'
    });

    function addZero(x) {
     if (x < 10) {
      return x = '0' + x;
     } else {
      return x;
     }
    }

    function twelveHour(x) {
     if (x > 12) {
      return x = x - 12;
     } else if (x == 0) {
      return x = 12;
     } else {
      return x;
     }
    }

    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('.digital-clock').text(h + ':' + m + ':' + s)
   }

// Main jQuery Fake Terminal web-app code.
   jQuery(function($) {
    var id = 1;
    $('#terminal').terminal(function(command, term) {
     if (command == 'help') { // If user types 'help' echo below text
      term.echo("available commands are mysql, js, test");
     } else if (command == 'test') { // If user types 'test echo below text
      term.push(function(command, term) {
       if (command == 'help') { // If user types 'help' echo below text
        term.echo('if you type ping it will display pong');
       } else if (command == 'ping') {
        term.echo('pong');
       } else {
        term.echo('unknown command ' + command);
       }
      }, {
       prompt: 'test> ',
       name: 'test'
      });
     } else if (command == "js") {
      term.push(function(command, term) {
       var result = window.eval(command);
       if (result != undefined) {
        term.echo(String(result));
       }
      }, {
       name: 'js',
       prompt: 'js> '
      });
     } else if (command == 'mysql') {
      term.push(function(command, term) {
       term.pause();
       $.jrpc("mysql-rpc-demo.php",
        "query",
        [command],
        function(data) {
         term.resume();
         if (data.error) {
          if (data.error.error && data.error.error.message) {
           term.error(data.error.error.message);
          } else if (data.error.message) {
           term.error(data.error.message);
          }
         } else {
          if (typeof data.result == 'boolean') {
           term.echo(data.result ? 'success' : 'fail');
          } else {
           var len = data.result.length;
           for (var i = 0; i < len; ++i) {
            term.echo(data.result[i].join(' | '));
           }
          }
         }
        },
        function(xhr, status, error) {
         term.error('[AJAX] ' + status +
          ' - Server reponse is: \n' +
          xhr.responseText);
         term.resume();
        });
      }, {
       greetings: "This is example of using mysql from terminal\n\
      you are allowed to execute: select, insert, update and delete from/to table:\n\
          table test(integer_value integer, varchar_value varchar(255))",
       prompt: "mysql> "
      });
     } else {
      term.echo("unknown command " + command);
     }
    }, {
     greetings: "multiply terminals demo use help to see available commands",
     onBlur: function() {
      // prevent losing focus
      return false;
     }
    });
   });