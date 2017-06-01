/*
 Розширити програму-анкету для опитування
 У вас має бути форма.
 В ній випадаючий список з питаннями і кнопка "Вибрати".

 Також має бути друга форма, де є текстове поле (textarea) для вводу відповіді і кнопка - "Відповісти".

 Під формами має бути список (ul), де будуть відображатись відповіді в такому форматі - {Питання} - {Відповідь}.

 Після того, як ви відповіли на питання, воно пропадає з випадаючого списку і додається до списку відповідей.

 Бажано це все гарно оформити.

*/
!(function  ()
{
    var mass = ["Ваше ім'я","Ваша електронна пошта ","Ваш номер елефону",
                "Ваш улюблений колір","Ваш розмір взуття"];
    var form1= document.forms.notepad_question;
    var form2= document.forms.notepad_respond;
    var btnSelect = document.getElementById("select");
    var btnRespond = document.getElementById("respond");
    var tempEnterquestion = 0;
    var tempEnterParentElement = 0;


    btnRespond.style.display="block";

    function questionnaire(arg)
    {
        var mass=arg;

        for(var i =0;i<mass.length;i++)
        {
            form1.sel[i].innerText=mass[i];
        }

    }
    questionnaire(mass);
    form1.addEventListener("submit", function (e)
    {
        e.preventDefault();//відміняє дію браузера по заовчуваню на сабміт
        tempEnterquestion="{"+form1.sel[sel.selectedIndex].text+"}-";
        tempEnterParentElement =form1.sel[sel.selectedIndex].parentElement;
        /*console.log(tempEnterParentElement);*/
    });
    form2.addEventListener("submit", function (e)
    {
        e.preventDefault();//відміняє дію браузера по заовчуваню на сабміт
        if (form2.textarea.value)
        {
            var li = document.createElement("li");
            var span = document.createElement("span");
            if (tempEnterquestion)
            {
                span.innerText = tempEnterquestion;
            }
            else   return;
            li.appendChild(span);
            var span = document.createElement("span");
            span.innerText="{"+form2.textarea.value+"}";
            li.appendChild(span);
            document.getElementById("questionnaire-list").appendChild(li);
            tempEnterquestion=0;
            form2.textarea.value="";
        }
        else return alert("Пусто");
        tempEnterParentElement.removeChild(form1.sel[sel.selectedIndex]);
        tempEnterParentElement=0;

    });

}());