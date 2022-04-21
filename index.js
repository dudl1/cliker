let settingBtnAppear = document.querySelector('.settingBtnAppear');
let accountImg = document.querySelector('.accountImg');
let screens = document.querySelector('.screens');

let settingBtnAppearImg = document.querySelector('.settingBtnAppear>img');
let settingWrap = document.querySelector('.settingWrap');

let accountWrap = document.querySelector('.accountWrap');

function quota() {
    if (!settingWrap.classList.contains('active') || !accountWrap.classList.contains('active')) {
        screens.classList.add('active');
        if (settingWrap.classList.contains('active') || accountWrap.classList.contains('active')) {
            return  0;
        } else {
            screens.classList.remove('active');
        }
    }
}

settingBtnAppear.onclick = () => {
    settingBtnAppearImg.classList.toggle('topActiveImg');
    settingWrap.classList.toggle('active');

    accountWrap.classList.remove('active');

    quota();
}

accountImg.onclick = () => {
    accountWrap.classList.toggle('active');

    settingBtnAppearImg.classList.remove('topActiveImg');
    settingWrap.classList.remove('active');

    quota();
}