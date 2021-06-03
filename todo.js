let command = prompt("Enter a command")
command.toLowerCase();
ExistingToDos = [];
while (command !== "quit") {
    if (command === "new") {
        let add = prompt("What do you want to add to the list?")
        ExistingToDos.push(add);
        console.log(`Yay we have added ${add} to the list`)
    }

    else if (command === "list") {
        console.log("***********");
        for (let i = 0; i < ExistingToDos.length; i++) {
            console.log(i, ":", ExistingToDos[i]);
        }
        console.log("***********");
    }
    else if (command === "delete") {
        let index = parseInt(prompt("Enter the number(index) of the item that you want to be removed"));
        if (!Number.isNaN(index)) {
            let deleted = ExistingToDos.splice(index, 1)
            console.log(`We have deleted ${deleted} from the list and here are the remaining tasks left:`)
            for (let remaining of ExistingToDos) {
                console.log(remaining);
            }
        }
        else {
            console.log("Index Invalid")
        }

    }
    command = prompt("Enter a command")
}
console.log("You have asked to close the application !")

