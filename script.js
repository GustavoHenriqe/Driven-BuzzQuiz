//Buscar o corpo da api
const apiQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
apiQuizzes.then(
    response => loadQuiz(response)
)

//Carregamento de quizes
function loadQuiz(response){
    let menu_quizzes = document.querySelector(".menu-quizzes")

    for(let i = 0; i < 6; i++){
        menu_quizzes.innerHTML += `<li id="${response.data[i].id}">
        <img src="${response.data[i].image}" alt="Não foi possivel carregar a imagem">
        <h3>${response.data[i].title}</h3>
    </li>`
    }
}