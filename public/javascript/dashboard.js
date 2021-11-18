
let api = fetch('https://api.jikan.moe/v3/top/anime').then( async (resp) => {
    let response = await resp.json()

    let rank = []

    for (let i = 0; i < 50; i++) {
        document.querySelector(".list").innerHTML += `

            <div class="col">
                <div class="card" style="width: 12rem;">
                    <img src="${response.top[i].image_url}" style="height: 300px" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <p style="color: white" class="card-text">${response.top[i].title} - ${response.top[i].episodes} episódios </p>
                    </div>
                </div>
            </div>

        `
    }
})

function redirectToForum() {
    window.location.href = "/user/forum"
}

function redirectHome() {
    window.location.href = "/"
}

function redirectToPerfil(){
    window.location.href = '/forum/perfil'
}
function redirectToExit(){
    window.location.href = '/login'
}