window.addEventListener("DOMContentLoaded", () => {

    // TabsHeader

    const link = document.querySelectorAll(".menu__link"),  // Табы переключения
        linkContent = document.querySelectorAll(".header__tabs"), // Контент
        linkParent = document.querySelector(".menu"); // Родитель табов(класс)

    function hideLinkContent() {  // Скрываем все табы
        linkContent.forEach(item => {
            item.classList.add("hide")
            item.classList.remove("show", "fade")
        });

        link.forEach(item => {   // Скрываем класс активности
            item.classList.remove("menu__active")
        });
    };

    function showLinkcontent(i = 0) {  // Показываем первый по списку таб
        linkContent[i].classList.add("show", "fade")
        linkContent[i].classList.remove("hide")
        link[i].classList.add("menu__active")
    };

    hideLinkContent();
    showLinkcontent();

    linkParent.addEventListener("click", (e) => {   // Обработчик события на родительский элемент
        const target = e.target;
        if (target && target.classList.contains("menu__link")) {  // Кликнули ли мы на таб
            link.forEach((item, i) => {  // Проверяем если target совпадает с табом на который кликнули
                if (target == item) {
                    hideLinkContent();
                    showLinkcontent(i);
                }
            })
        }
    });

    //Tabs

    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide")
            item.classList.remove("show", "fade")
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active")
        })
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade")
        tabsContent[i].classList.remove("hide")
        tabs[i].classList.add("tabheader__item_active")
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i)
                };
            });
        };
    });


    // Timer

    const deadline = '2023-10-01'

    function getTimeRamaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date);

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor(t / (1000 * 60 * 60) % 24),
                minutes = Math.floor(t / (1000 * 60) % 60),
                seconds = Math.floor(t / 1000 % 60);
        }


        return {
            "total": t,
            "days": days,
            "hours": hours,
            "miminutes": minutes,
            "seconds": seconds,
        };
    };

    function getZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRamaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.miminutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
        };
    };

    setClock(".timer", deadline);


});