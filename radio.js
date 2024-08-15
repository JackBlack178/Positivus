const radios = document.querySelectorAll('input[type="radio"][name="request"]')

radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        radios.forEach(radio => {
            radio.removeAttribute('checked')
        })
        radio.setAttribute('checked', 'checked');
    })
})