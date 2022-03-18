
function FindLastNonRepeatedCharacter(string) {
    let characters = {}
    last_index = string.length - 1

    for (let index = last_index; index >= 0; index--) {
        if(string[index] in characters)
        {
            characters[`${string[index]}`] = characters[`${string[index]}`] + 1
            continue
        }

        characters[`${string[index]}`] = 1
    }

    for (let index = last_index; index >= 0; index--) {
        if(characters[`${string[index]}`] == 1)
            return string[index]
    }
}


console.log(FindLastNonRepeatedCharacter("a week away"))


