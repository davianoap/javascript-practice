function greeting() {
    console.log("halo selamat pagi")
}

greeting()

function greetings(name,language) {
    if(language==="english"){
        console.log(`good morning ${name}!`)
    } else if (language==="french"){
        console.log(`bonjour ${name}`)
    } else {
        console.log(`selamat pagi ${name}`)
    }
}

greetings("daviano","english")

function multiply(a,b) {
    return a*b
}

let result = multiply(20,8)
console.log(result)

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'kylo ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`)
}

introduce(user)