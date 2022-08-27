const square = (x) => {
    return x * x
}
console.log(square(2))

//Shorthand syntax
const squareAlt = (x) => x * x
console.log(squareAlt(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guestlist for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()