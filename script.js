const erenButton = document.querySelector(`#erenButton`)
const erenTitanButton = document.querySelector(`#erenTitanButton`)
const zekeButton = document.querySelector(`#zekeButton`)
const zekeTitanButton = document.querySelector(`#zekeTitanButton`)
const reinerButton = document.querySelector(`#reinerButton`)
const reinerTitanButton = document.querySelector(`#reinerTitanButton`)
const bertholdtButton = document.querySelector(`#bertholdtButton`)
const bertholdtTitanButton = document.querySelector(`#bertholdtTitanButton`)
const annieButton = document.querySelector(`#annieButton`)
const annieTitanButton = document.querySelector(`#annieTitanButton`)


async function eren (event) {

    event.preventDefault()
    
    fetch(`https://attackontitanapi.herokuapp.com/api/characters/10
    `).then(res => {
        return res.json()
    })
        .then(res => {
            console.log(res)
            let erenName = document.querySelector(`#personName`)
            erenName.innerHTML = res.name
            let erenBio = document.querySelector(`#personBio`)
            erenBio.innerHTML = `fearless, stubborn, passionate, Eren Jaeger is humanities last hope for survival. Or is he? His mission is to be free, and will do whatever it takes to gaurantee it.`
            let erenGender = document.querySelector(`#personGender`)
            erenGender.innerHTML = res.gender
            let erenHeight = document.querySelector(`#personHeight`)
            erenHeight.innerHTML = `6" 0'`
        })
        .catch(err => {
            console.log(`error!`, err)
        })
    }
    
    erenButton.addEventListener(`click`, eren)


async function erenTitan (event) {

event.preventDefault()

fetch(`https://attackontitanapi.herokuapp.com/api/titans/11
`).then(res => {
    return res.json()
})
    .then(res => {
        console.log(res)
        let erenTitanName = document.querySelector(`#titanName`)
        erenTitanName.innerHTML = res.name
        let erenTitanHeight = document.querySelector(`#titanHeight`)
            erenTitanHeight.innerHTML = `${res.height_m} meters`
        let erenTitanBio = document.querySelector(`#titanBio`)
        erenTitanBio.innerHTML = res.description
    })
    .catch(err => {
        console.log(`error!`, err)
    })
}

erenTitanButton.addEventListener(`click`, erenTitan)
