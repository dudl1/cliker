let listItemAbsolute = document.querySelectorAll('.listItemAbsolute');
let modalWindow = document.querySelector('.modalWindow');

for (var i = 0; i < listItemAbsolute.length; i++) {
    const element = listItemAbsolute[i];

    // leftAtrItem
    let childrenElement = element.childNodes[1];

    // Находим рядом стоящие элементы, для последующей работы с ними
    // centerAtrItem & rightAtrItem
    let center = childrenElement.nextElementSibling;
    let left = center.nextElementSibling;
    
    // Сразу находим координаты высоты головного элемента
    let positionChildrenTop = childrenElement.getBoundingClientRect().top;
    element.style.top = `${positionChildrenTop + "px"}`;

    element.onclick = ()=> {
        // Находим левое окошки => itemAbsolute
        let childrenElementAbsolute = childrenElement.childNodes[1];
        if (!element.classList.contains('active')) {
            // Изменяем высоту головного элемента
            element.style.top = `${60 + "px"}`;
            element.classList.add('active'), center.classList.add('active'), left.classList.add('active');
            childrenElementAbsolute.classList.add('active'), modalWindow.classList.add('active');
        } else {
            element.style.top = `${positionChildrenTop + "px"}`;
            element.classList.remove('active'), center.classList.remove('active'), left.classList.remove('active');
            childrenElementAbsolute.classList.remove('active'), modalWindow.classList.remove('active');
        }
    }

}
