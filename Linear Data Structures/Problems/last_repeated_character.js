
function FindLastRepeatedCharacter(string) {
    let characters = {}
    last_index = string.length - 1

    for (let index = last_index; index >= 0; index--) {
        if(string[index] in characters)
            return string[index]

        characters[`${string[index]}`] = 1
    }
}

console.log(FindLastRepeatedCharacter("a week away"))
