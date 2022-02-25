const getGoods = () => {
    const navlinks = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('DataFromServer', JSON.stringify(data)) //доп задание
            })
    }

    navlinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

    //при нажатии на логотип сайта 'DataFromServer' очищается из localStorage.
    //это было сделано, чтобы можно было увидеть, что в localStorage действительно идёт запись при нажатии на кнопки навигации
    //а иначе после первого нажатия там данные так и висят, и никак их было не убрать
    const logo = document.querySelector('.logo-image')
    logo.addEventListener('click', () => {
        localStorage.removeItem('DataFromServer')
    })
}

getGoods()