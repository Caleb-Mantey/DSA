

function ReverseString(string) {
    let characters = []

    for (let index = 0; index < string.length; index++) {
        characters.push(string[index])
    }

    let reversed_string = ''
    for (let index = 0; index < string.length; index++) {
        reversed_string += characters.pop()
    }

    return reversed_string
}


console.log(ReverseString("a week away"))

