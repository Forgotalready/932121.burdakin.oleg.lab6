'use strict'

const columns = document.querySelectorAll(".content__imageHandler__image")

const setDefaultStyle = () => {
    columns.forEach(column => {
        column.style.flex = "0 0 300px"
        column.style.padding = "20px"
    })
}

function onNavigationClick(button)
{
    const num = parseInt(button.dataset.section)

    setDefaultStyle()

    switch(num)
    {
        case 0:
            columns[0].style.flex = "1 0 300px"
            columns[0].style.paddingRight = "180px"
            columns[1].style.flex = "0 0"
            break
        case 2:
            columns[1].style.flex = "1 0 300px"
            columns[1].style.paddingRight = "180px"
            columns[0].style.flex = "0 0"
            break
    }
}

document.querySelectorAll(".content__header__section").forEach(button => {
    button.addEventListener("click", () => onNavigationClick(button))
})
