var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function getTrustedEmails(arr) {
    let trustedEmails = [];
    const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

    for (let item of arr) {
        if (emailPattern.test(item.email)) {
            trustedEmails.push(item.email);
        }
    }

    return trustedEmails;
}

function getSuspiciousEmails(arr) {
    let suspiciousEmails = [];
    const suspiciousPattern = /^([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(?<!@(gmail\.com|yahoo\.com))$/;

    for (let item of arr) {
        if (suspiciousPattern.test(item.email)) {
            suspiciousEmails.push(item.email)
        }
    }
    return suspiciousEmails;

}

const trustedEmails = getTrustedEmails(arr);
console.log(trustedEmails);

// const suspiciousEmails = getSuspiciousEmails(arr);
// console.log(suspiciousEmails);
