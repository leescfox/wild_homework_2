const getGoods = () => {
    const navlinks = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data)) //доп задание
            })
    }

    navlinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

}

getGoods()