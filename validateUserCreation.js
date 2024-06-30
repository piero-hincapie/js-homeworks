[
    {"userName": "", "userLastName": "Skrtel", "userEmail": "martin.skrtel@slvk.org", "userPassword": "Wq1234567890qWR", "repeatPassword": "Wq1234567890qWR", "expectedResult": false, "reason": "no name"},
    {"userName": "Martin", "userLastName": "Skrtel", "userEmail": "martin.skrtel@slvk.org", "userPassword": "Wq1234567890qWR", "repeatPassword": "Wq1234567890qWR", "expectedResult": false, "reason": "wrong email"},
    {"userName": "Martin", "userLastName": "Skrtel", "userEmail": "martin.skrtel@slvk.org", "userPassword": "Wq1234567890qWR", "repeatPassword": "Wq1234567890", "expectedResult": false, "reason": "passwords don't match"},
    {"userName": "Martin", "userLastName": "Skrtel", "userEmail": "martin.skrtel@slvk.org", "userPassword": "Wq1234567890qWR", "repeatPassword": "Wq1234567890qWR", "expectedResult": true, "reason": "data is valid"},
    {"userName": "Martin", "userLastName": "Skrtel", "userEmail": "martin.skrtel@slvk.org", "userPassword": "Wq1234567890qWR", "repeatPassword": "Wq1234567890qWR", "expectedResult": false, "reason": "user already exists"}
]
