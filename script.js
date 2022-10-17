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
            erenBio.innerHTML = `A former member of the Scout Regiment and the main protagonist of Attack on Titan. He is the only son of Grisha and Carla Jaeger, the younger paternal half brother of Zeke Jaeger, and the current holder of the Attack Titan, Founding Titan, and the War Hammer Titan. Fearless, stubborn, passionate, Eren Jaeger is humanities last hope for survival. Or is he? His mission is to be free, and will do whatever it takes to gaurantee it.`
            let erenGender = document.querySelector(`#personGender`)
            erenGender.innerHTML = `Gender- ${res.gender}`
            let erenHeight = document.querySelector(`#personHeight`)
            erenHeight.innerHTML = `Height- 6" 0'`
            let erenFa = document.querySelector(`#personFa`)
            erenFa.innerHTML = `First appearance episode- 
            To You, in 2000 Years: The Fall of Shiganshina, Part 1`
            let erenImage = document.querySelector(`#personImage`)
            erenImage.src = "assets/eren image.png"
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
            erenTitanHeight.innerHTML = `Height- ${res.height_m} meters`
        let erenTitanBio = document.querySelector(`#titanBio`)
        erenTitanBio.innerHTML = res.description
        let erenTitanFa = document.querySelector(`#titanFa`)
            erenTitanFa.innerHTML = `First appearance episode- 
            Small Blade: The Struggle for Trost, Part 3`
        let erenAbility1 = document.querySelector(`#a1`)
            erenAbility1.innerHTML = `Future memory inheritance`
        let erenAbility2 = document.querySelector(`#a2`)
            erenAbility2.innerHTML = `Titan control`
        let erenAbility3 = document.querySelector(`#a3`)
            erenAbility3.innerHTML = `Anatomical manipulation`
        let erenTitanImage = document.querySelector(`#titanImage`)
            erenTitanImage.src = "assets/AttackTitan.png"
        
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
            zekeGender.innerHTML = `Gender- ${res.gender}`
            let zekeHeight = document.querySelector(`#personHeight`)
            zekeHeight.innerHTML = `Height- 6" 0'`
            let zekeFa = document.querySelector(`#personFa`)
            zekeFa.innerHTML = `First appearance episode- 
            Beast Titan`
            let zekeImage = document.querySelector(`#personImage`)
            zekeImage.src = `assets/Zeke_Anime_Timeskip.webp`
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
                    zekeTitanHeight.innerHTML = `Height- ${res.height_m} meters`
                let zekeTitanBio = document.querySelector(`#titanBio`)
                zekeTitanBio.innerHTML = res.description
                let zekeTitanFa = document.querySelector(`#titanFa`)
                zekeTitanFa.innerHTML = `First appearance episode- Beast Titan`
                let zekeAbility1 = document.querySelector(`#a1`)
                        zekeAbility1.innerHTML = `Can create titans`
                        let zekeAbility2 = document.querySelector(`#a2`)
                        zekeAbility2.innerHTML = `Control over pure titans`
                        let zekeAbility3 = document.querySelector(`#a3`)
                        zekeAbility3.innerHTML = `Skin Hardening`
                        let zekeTitanImage = document.querySelector(`#titanImage`)
                        zekeTitanImage.src = "assets/beast titan.png"
            
                
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
            reinerGender.innerHTML = `Gender- ${res.gender}`
            let reinerHeight = document.querySelector(`#personHeight`)
            reinerHeight.innerHTML = `Height- 6" 2'`
            let reinerFa = document.querySelector(`#personFa`)
            reinerFa.innerHTML = `First appearance episode- 
            That Day: The Fall of Shiganshina, Part 2`
            let reinerImage = document.querySelector(`#personImage`)
            reinerImage.src = `assets/reiner braun.png`
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
                reinerTitanHeight.innerHTML = `Height- ${res.height_m} meters`
                let reinerTitanFa = document.querySelector(`#titanFa`)
                reinerTitanFa.innerHTML = `First appearance episode- That Day: The Fall of Shiganshina, Part 2`
                let reinerAbility1 = document.querySelector(`#a1`)
                reinerAbility1.innerHTML = `Armored skin`
                let reinerAbility2 = document.querySelector(`#a2`)
                reinerAbility2.innerHTML = `Skin Hardening`
                let reinerTitanImage = document.querySelector(`#titanImage`)
                reinerTitanImage.src = `assets/armored titan.png`
            })
            .catch(err => {
                console.log(`error!`, err)
            })
        }
        
        reinerTitanButton.addEventListener(`click`, reinerTitan)


        async function annie (event) {

            event.preventDefault()
            
            fetch(`https://attackontitanapi.herokuapp.com/api/characters/13
            `).then(res => {
                return res.json()
            })
                .then(res => {
                    console.log(res)
                    let annieName = document.querySelector(`#personName`)
                    annieName.innerHTML = res.name
                    let annieBio = document.querySelector(`#personBio`)
                    annieBio.innerHTML = `Annie Leonhart is a graduate of the 104th Training Corps and former member of the Military Police Brigade. Her exceptional skills with swords and unarmed combat earned her the 4th rank, but she is also noted to be a lone wolf who struggles to work with others.`
                    let annieGender = document.querySelector(`#personGender`)
                    annieGender.innerHTML = `Gender- ${res.gender}`
                    let annieHeight = document.querySelector(`#personHeight`)
                    annieHeight.innerHTML = `Height- 5" 0'`
                    let annieFa = document.querySelector(`#personFa`)
                    annieFa.innerHTML = `First appearance episode- 
                    That Day: The Fall of Shiganshina, Part 2`
                    let annieImage = document.querySelector(`#personImage`)
                    annieImage.src = `assets/annie leonhart.png`
                })
                .catch(err => {
                    console.log(`error!`, err)
                })
            }
            
            annieButton.addEventListener(`click`, annie)
        

            async function annieTitan (event) {

                event.preventDefault()
                
                fetch(`https://attackontitanapi.herokuapp.com/api/titans/5
                `).then(res => {
                    return res.json()
                })
                    .then(res => {
                        console.log(res)
                        let annieTitanName = document.querySelector(`#titanName`)
                        annieTitanName.innerHTML = res.name
                        let annieTitanBio = document.querySelector(`#titanBio`)
                        annieTitanBio.innerHTML = res.description
                        let annieTitanHeight = document.querySelector(`#titanHeight`)
                        annieTitanHeight.innerHTML = `Height- ${res.height_m} meters`
                        let annieTitanFa = document.querySelector(`#titanFa`)
                        annieTitanFa.innerHTML = `First appearance episode- Female Titan: The 57th Exterior Scouting Mission, Part 1`
                        let annieAbility1 = document.querySelector(`#a1`)
                        annieAbility1.innerHTML = `Skin Hardening`
                        let annieAbility2 = document.querySelector(`#a2`)
                        annieAbility2.innerHTML = `Can attract nearby titans`
                        let annieAbility3 = document.querySelector(`#a3`)
                        annieAbility3.innerHTML = `Versatile`
                        let annieTitanImage = document.querySelector(`#titanImage`)
                        annieTitanImage.src = `assets/female titan.png`
                    })
                    .catch(err => {
                        console.log(`error!`, err)
                    })
                }
                
                annieTitanButton.addEventListener(`click`, annieTitan)


                async function bertholdt (event) {

                    event.preventDefault()
                    
                    fetch(`https://attackontitanapi.herokuapp.com/api/characters/15
                    `).then(res => {
                        return res.json()
                    })
                        .then(res => {
                            console.log(res)
                            let bertholdtName = document.querySelector(`#personName`)
                            bertholdtName.innerHTML = res.name
                            let bertholdtBio = document.querySelector(`#personBio`)
                            bertholdtBio.innerHTML = `an Eldian who was part of Marley's Warrior Unit. He originated from the Liberio internment zone and possessed the ability to transform into the Colossal Titan, making him one of the greatest threats to humanity within the walls.`
                            let bertholdtGender = document.querySelector(`#personGender`)
                            bertholdtGender.innerHTML = `Gender- ${res.gender}`
                            let bertholdtHeight = document.querySelector(`#personHeight`)
                            bertholdtHeight.innerHTML = `Height- 6" 4'`
                            let bertholdtFa = document.querySelector(`#personFa`)
                            bertholdtFa.innerHTML = `First appearance episode- To You, in 2000 Years: The Fall of Shiganshina, Part 1`
                            let bertholdtImage = document.querySelector(`#personImage`)
                            bertholdtImage.src = `assets/bertholdt hoover.png`
                        })
                        .catch(err => {
                            console.log(`error!`, err)
                        })
                    }
                    
                    bertholdtButton.addEventListener(`click`, bertholdt)


                    async function bertholdtTitan (event) {

                        event.preventDefault()
                        
                        fetch(`https://attackontitanapi.herokuapp.com/api/titans/10
                        `).then(res => {
                            return res.json()
                        })
                            .then(res => {
                                console.log(res)
                                let bertholdtTitanName = document.querySelector(`#titanName`)
                                bertholdtTitanName.innerHTML = res.name
                                let bertholdtTitanBio = document.querySelector(`#titanBio`)
                                bertholdtTitanBio.innerHTML = res.description
                                let bertholdtTitanHeight = document.querySelector(`#titanHeight`)
                                bertholdtTitanHeight.innerHTML = `Height- ${res.height_m} meters`
                                let bertholdtTitanFa = document.querySelector(`#titanFa`)
                                bertholdtTitanFa.innerHTML = `First appearance episode- Female Titan: To You, in 2000 Years: The Fall of Shiganshina, Part 1`
                                let bertholdtAbility1 = document.querySelector(`#a1`)
                                bertholdtAbility1.innerHTML = `Steam emission`
                                let bertholdtAbility2 = document.querySelector(`#a2`)
                                bertholdtAbility2.innerHTML = `Creates an explosion when transforming`
                                let bertholdtAbility3 = document.querySelector(`#a3`)
                                bertholdtAbility3.innerHTML = `Massive Height`
                                let bertholdtTitanImage= document.querySelector(`#titanImage`)
                                bertholdtTitanImage.src = `assets/colossal titan.png`
                            })
                            .catch(err => {
                                console.log(`error!`, err)
                            })
                        }
                        
                        bertholdtTitanButton.addEventListener(`click`, bertholdtTitan)