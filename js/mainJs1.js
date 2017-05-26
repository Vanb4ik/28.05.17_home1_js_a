/*
 Написати анкету для опитування.
 У вас буде масив підготовлених питань та `ul` на сторінці,
 куди будуть додаватись відповіді на питання.
 Програма через prompt буде задавати запитання користувачу і,
 отримавши відповідь, буде створювати `li` в який буде додавати
 `p` з текстом питання та `strong` з відповіддю.
 Після цього цей `li` буде додано до `ul` на сторінці.


 Питань має бути від 5.
 Бажано це гарно оформити.

*/
!(function  ()
{
    var mass = ["Ваше ім'я - ","Ваша електронна пошта - ","Ваш номер елефону - ",
                "Ваш улюблений колір - ","Ваш розмір взуття - "];

    function questionnaire(arg)
    {
        var mass=arg;

        for(var i =0;i<mass.length;i++)
        {
            var p = document.createElement("p");
            var li = document.createElement("li");
            var strong = document.createElement("strong");
            p.innerHTML=mass[i];
            p.style.display="inline-block";
            strong.innerHTML = prompt(mass[i],"")||"Ніц не ввів";
            li.appendChild(p);
            li.appendChild(strong);
            document.getElementById("questionnaire-list").appendChild(li);
        }

    }
    questionnaire(mass);


}());