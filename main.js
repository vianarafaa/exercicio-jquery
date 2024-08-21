$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault()

        const nomeNovaTarefa = $('#input-task').val()
        const novaTarefa = $(`<li>${nomeNovaTarefa}</li>`)

        $(novaTarefa).appendTo('ul')

        $('#input-task').val('')
    })

    $('ul').on('click', 'li', (e) => {
        $(e.target).toggleClass('concluido')
    })
})
