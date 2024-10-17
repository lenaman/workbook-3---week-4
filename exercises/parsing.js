let name = "Brenda Kaye"

let spaceIndex = name.indexOf(" ")
console.log(spaceIndex)

let firstName = name.substring(0, spaceIndex)
console.log("First name: " + firstName)

let lastName = name.substring(spaceIndex + 1)

console.log("Name: " + name)
console.log("First name: " + firstName) 
console.log("Last name: " + lastName)

function parseAndDisplayName(name){
    let spaceIndex = name.indexOf(" ")
    let firstName = name.substring(0, spaceIndex)
    let lastName = name.substring(spaceIndex + 1)

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("SiddaLee Grace");