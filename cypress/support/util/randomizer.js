function generate_random_string (string_length){ 
    let random_string = ''
    let random_ascii
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97)
        random_string += String.fromCharCode(random_ascii)
    }
     return random_string
   }

Cypress.Commands.add('email', () => {
    
    let string = generate_random_string(10)
    let email = string + "@" + string + ".com"

   return email
})