function theatrePromotions (day, age) {
    let cost = " "
    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) { cost = 12; console.log(`${cost}$`)
        } else if (age > 18 && age <= 64) { cost = 18; console.log(`${cost}$`)
        } else if (age >64 && age <= 122) { cost = 12; console.log(`${cost}$`)
        } else { console.log("Error!")}
    
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) { cost = 15; console.log(`${cost}$`)
        } else if (age >18 && age <= 64) { cost = 20; console.log(`${cost}$`)
        } else if (age >64 && age <= 122) { cost = 15 ; console.log(`${cost}$`)
        } else { console.log("Error!")}
    
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) { cost = 5; console.log(`${cost}$`)
        } else if (age >18 && age <= 64) { cost = 12; console.log(`${cost}$`)
        } else if (age >64 && age <= 122) { cost = 10; console.log(`${cost}$`)
        } else { console.log("Error!")}
    } 
    }