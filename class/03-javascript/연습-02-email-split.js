const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@") [0]
// 'codecamp'
email.split("@") [1]
// 'gmail.com'
let usermail = email.split("@") [0]
// undefined
usermail
// 'codecamp'
let company = email.split("@") [1]
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(usermail[0])
// 1
maskingMail.push(usermail[1])
// 2
maskingMail.push(usermail[2])
// 3
maskingMail.push(usermail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("-")
// 'c-o-d-e-*-*-*-*'
maskingMail.join("")
// 'code****'
maskingMail.join("") + "@" + company
// 'code****@gmail.com' 'result'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com'
result
// 'code****@gmail.com'
result
// 'code****@gmail.com'