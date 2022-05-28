document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work-item__link').forEach(function (workItem) {
        workItem.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.work__content').forEach(function (workContent) {
                workContent.classList.remove('work__content-active')
            })
            document.querySelector('[data-target="' + path + '"]').classList.add('work__content-active')
        })
    })
})