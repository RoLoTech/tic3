jQuery(document).ready(function ($) {
    "use strict";

    //Contact
    $('form.contactForm').submit(function () {
        var f = $(this).find('.form-group'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

        f.children('input').each(function () { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') {
                            ferror = ierror = true;
                        }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'email':
                        if (!emailExp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'checked':
                        if (!i.is(':checked')) {
                            ferror = ierror = true;
                        }
                        break;

                    case 'regexp':
                        exp = new RegExp(exp);
                        if (!exp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        f.children('textarea').each(function () { // run all inputs

            var i = $(this); // current input
            var rule = i.attr('data-rule');

            if (rule !== undefined) {
                var ierror = false; // error flag for current input
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }

                switch (rule) {
                    case 'required':
                        if (i.val() === '') {
                            ferror = ierror = true;
                        }
                        break;

                    case 'minlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        if (ferror) return false;
        else var str = $(this).serialize();
        var action = $(this).attr('action');
        if (!action) {
            action = 'public/contactform/contactform.php';
        }
        var datos =
            {
                name: $("#name").val(),
                subject: $("#subject").val(),
                email: $("#email").val(),
                message: $("#message").val()
            };
        sendEmail(datos.email, datos.subject, datos.message);
        // $.ajax({
        //     type: "POST",
        //     url: "https://rolotech.github.io/tic3/",
        //     data: {
        //         key: '38ee0f9ff131c03bb1f1ba6ce3635af-us5',
        //         message: {
        //             from_email: datos.email,
        //             to:
        //                 {
        //                     email: 'agossweieler@correo.um.edu.uy',
        //                     name: 'me',
        //                     type: 'to'
        //                 },
        //             autotext: true,
        //             subject: datos.subject,
        //             html: datos.message
        //         }
        //     }
        // });
        // success: function(msg) {
        //   // alert(msg);
        //   if (msg == 'OK') {
        //     $("#sendmessage").addClass("show");
        //     $("#errormessage").removeClass("show");
        //     $('.contactForm').find("input, textarea").val("");
        //     // const subject = document.getElementById('subject').innerText;
        //     // const body = document.getElementById('message').innerText;
        //     // window.open('mailto:agossweiler@correo.um.edu.uy?subject='+subject+'&body='+body);
        //   } else {
        //     $("#sendmessage").removeClass("show");
        //     $("#errormessage").addClass("show");
        //     $('#errormessage').html(msg);
        //   }
        // }
        // });
        return false;
    });

});

function sendEmail(mail, subject, body) {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "tic3responsebot@gmail.com",
        Password : "andaalacanchabatman",
        To : 'rodri.lopez98@gmail.com',
        From : mail,
        Subject : subject,
        Body : body,
    }).then(
        message => alert("mail sent successfully")
    )
}

