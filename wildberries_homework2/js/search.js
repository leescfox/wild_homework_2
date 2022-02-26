const search = () => {
    const input = document.querySelector('.search-block > input')
    const btn = document.querySelector('.search-block > button')

    // input.addEventListener('input', (event) => {
    //     console.log(event.target.value);
    // })

    btn.addEventListener('click', () => {
        console.log(input.value);
    })
}

search()