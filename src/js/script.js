//Максимальное число элементов на странице
let limitPage = 4;
//Для сортировки
let filter = $("[data-filter]");
//Бокс карточки фильма
let boxFilms = $(".films-item");
//Счет боксов фильмов
let count = $(".films-item").length;
let totalPages = Math.round(count / limitPage);

$(`.films-item:gt(` + (limitPage - 1) + `)`).hide();

$(".pagination").append(
    `<li class="page-item current-page active">
<a class="page-link" href="javascript:void(0)">` +
    1 +
    `
</a>
</li>`
);
for (let i = 2; i <= totalPages; i++) {
    $(".pagination").append(
        `<li class="page-item current-page"><a class="page-link" href="javascript:void(0)">` + i + `</a></li>`
    );
}
$(".pagination").append(
    `<li class="page-item">
    <a class="page-link" href="javascript:void(0)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
    </a>
</li>`
);
$(".pagination li.current-page").on("click", function() {
    if ($(this).hasClass("active")) {
        return false;
    } else {
        let currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $(".films-item").hide();
        let grandTotal = limitPage * currentPage;
        for (let i = grandTotal - limitPage; i < grandTotal; i++) {
            $(`.films-item:eq(` + i + `)`).show();
        }
    }
});

filter.on("click", function(event) {
    event.preventDefault();
    let category = $(this).data("filter");
    boxFilms.each(function() {
        $(this).show();
        if (!$(this).hasClass(category)) {
            $(this).hide();
        }
    });
    linkText = $(this).text();
    let btn = $(".btn");
    btn.text(linkText);
    btn.on("click", function() {
        $(`.films-item`).show();
        btn.empty();
    });
});
const hamburger = $(".hamburger");
const menu = $(".menu");
const menuItem = $(".menu__item");

hamburger.on("click", function() {
    if (!menu.hasClass("menu__active") && !hamburger.hasClass("hamburger__active")) {
        menu.addClass("menu__active");
        hamburger.addClass("hamburger__active");
    } else {
        menu.removeClass("menu__active");
        hamburger.removeClass("hamburger__active");
    }
});