let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },

    seatParty: function (partySize) {
        this.guestCount += partySize
    },

    removeParty: function (partySize) {
        this.guestCount -= partySize
    }

}

// seatParty
// removeParty

// Methods -  object property whose value is a function (or function as a object property is called method).

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))