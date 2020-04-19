// Global (name)
  // Local (name)
    // Local (name)
  // Local

// variable shadowing (in javascript) - It's when a variable in the local scope uses
//                                      its value instead of variable in a parent scope
// so the local variable's value is shadowing over the parent's, basically hiding it from existence.

let name = 'Jeevan'

if (true) {
    let name = 'Puhan'

    if (true) {
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}