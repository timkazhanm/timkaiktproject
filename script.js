document.addEventListener('DOMContentLoaded', function () {
    var pages = document.querySelectorAll('.page');
    var currentPageIndex = 0;

    showPage(currentPageIndex);

    window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            nextPage();
        } else if (event.deltaY < 0) {
            prevPage();
        }
    });

    function nextPage() {
        currentPageIndex++;
        if (currentPageIndex >= pages.length) {
            currentPageIndex = 0;
        }
        showPage(currentPageIndex);
    }

    function prevPage() {
        currentPageIndex--;
        if (currentPageIndex < 0) {
            currentPageIndex = pages.length - 1;
        }
        showPage(currentPageIndex);
    }

    function showPage(index) {
        var pages = document.querySelectorAll('.page');
        pages.forEach(function (page) {
            page.classList.remove('active');
        });

        pages[index].classList.add('active');
    }
});