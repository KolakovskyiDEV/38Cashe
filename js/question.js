//Question on lesson?

let players = [
    { name: 'Sergey' },
    { name: 'Svetlana' },
    { name: 'Anna' },
    { name: 'Andrey' },
    { name: 'Nastia' },
    { name: 'Valia' },
    { name: 'Serofim' },
    { name: 'Anton' },
    { name: 'Anderson' },
    { name: 'Fill' },
]
function render(players) {   
    let newObj = players.map(function (item) {
        let randomNum = Math.floor(Math.random() * 10);
        
        item.id = randomNum;
        console.log(item);
        return item;
    });
// console.log(newObj)
    return newObj;
}
// render(players);
// render(players);
console.log(render(players));
console.log(render(players));
