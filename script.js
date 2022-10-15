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
            erenBio.innerHTML = `Fearless, stubborn, passionate, Eren Jaeger is humanities last hope for survival. Or is he? His mission is to be free, and will do whatever it takes to gaurantee it.`
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


async function zeke (event) {

    event.preventDefault()
    
    fetch(`https://attackontitanapi.herokuapp.com/api/characters/16
    `).then(res => {
        return res.json()
    })
        .then(res => {
            console.log(res)
            let zekeName = document.querySelector(`#personName`)
            zekeName.innerHTML = res.name
            let zekeBio = document.querySelector(`#personBio`)
            zekeBio.innerHTML = `The former War Chief of Marley's Warriors, assigned to take the Founding Titan from the Eldians of Paradis Island. He is the current holder of the Beast Titan, and is considered the strongest warrior by Reiner Braun, contrasting Levi Ackermann's title of "humanity's strongest soldier."[8] He manipulated and deceived both sides of the war between Eldia and Marley in order to achieve his own agenda of causing the extinction of his own people, which he views as "salvation."`
            let zekeGender = document.querySelector(`#personGender`)
            zekeGender.innerHTML = res.gender
            let zekeHeight = document.querySelector(`#personHeight`)
            zekeHeight.innerHTML = `6" 0'`
        })
        .catch(err => {
            console.log(`error!`, err)
        })
    }
    
    zekeButton.addEventListener(`click`, zeke)


    async function zekeTitan (event) {

        event.preventDefault()
        
        fetch(`https://attackontitanapi.herokuapp.com/api/titans/9
        `).then(res => {
            return res.json()
        })
            .then(res => {
                console.log(res)
                let zekeTitanName = document.querySelector(`#titanName`)
                zekeTitanName.innerHTML = res.name
                let zekeTitanHeight = document.querySelector(`#titanHeight`)
                    zekeTitanHeight.innerHTML = `${res.height_m} meters`
                let zekeTitanBio = document.querySelector(`#titanBio`)
                zekeTitanBio.innerHTML = res.description
            })
            .catch(err => {
                console.log(`error!`, err)
            })
        }
        
        zekeTitanButton.addEventListener(`click`, zekeTitan)    



async function reiner (event) {

    event.preventDefault()
    
    fetch(`https://attackontitanapi.herokuapp.com/api/characters/14
    `).then(res => {
        return res.json()
    })
        .then(res => {
            console.log(res)
            let reinerName = document.querySelector(`#personName`)
            reinerName.innerHTML = res.name
            let reinerBio = document.querySelector(`#personBio`)
            reinerBio.innerHTML = `The Vice Captain of the Warrior Unit and the main protagonist of Attack on Titan from the Marleyan perspective. He is the illegitimate son of an Eldian and a Marleyan and grew up in Liberio's internment zone. Eventually, he was selected as a child to become one of Marley's Warriors. At the age of ten, he inherited the power of the Armored Titan.`
            let reinerGender = document.querySelector(`#personGender`)
            reinerGender.innerHTML = res.gender
            let reinerHeight = document.querySelector(`#personHeight`)
            reinerHeight.innerHTML = `6" 2'`
        })
        .catch(err => {
            console.log(`error!`, err)
        })
    }
    
    reinerButton.addEventListener(`click`, reiner)


    async function reinerTitan (event) {

        event.preventDefault()
        
        fetch(`https://attackontitanapi.herokuapp.com/api/titans/2
        `).then(res => {
            return res.json()
        })
            .then(res => {
                console.log(res)
                let reinerTitanName = document.querySelector(`#titanName`)
                reinerTitanName.innerHTML = res.name
                let reinerTitanBio = document.querySelector(`#titanBio`)
                reinerTitanBio.innerHTML = res.description
                let reinerTitanHeight = document.querySelector(`#titanHeight`)
                reinerTitanHeight.innerHTML = `${res.height_m} meters`
            })
            .catch(err => {
                console.log(`error!`, err)
            })
        }
        
        reinerTitanButton.addEventListener(`click`, reinerTitan)