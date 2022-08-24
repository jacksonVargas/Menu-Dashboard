let btn = document.querySelector('.btn');
btn.onclick = () => {
    let sidebar = document.querySelector('.sidebar');
    let main = document.querySelector('main');

    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}