### Portify Backend

This is Backend made using Express to save user Portfolios Details.
`! POSTMAN COLLECTION- JSON`

```

{
   "info": {
      "_postman_id": "9c335b56-766f-4104-a9a2-980c7fc24459",
      "name": "portfolioBackend",
      "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
   },
   "item": [
      {
         "name": "user",
         "item": [
            {
               "name": "login.js",
               "id": "c23213b9-6474-4dce-a746-eebc32c9ec52",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"email\" : \"abhishek@gmail.com\",\r\n    \"password\" : \"1234\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/user/login"
               },
               "response": []
            },
            {
               "name": "signup",
               "id": "e4f9ad0d-6440-4db3-8d1d-5a40566b07c4",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"email\" : \"abhishek@gmail.com\",\r\n    \"password\" : \"1234\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/user/signup"
               },
               "response": []
            }
         ],
         "id": "598fc3cd-a747-42ef-a41a-197e7dec8c21"
      },
      {
         "name": "homepage",
         "item": [
            {
               "name": "homepagegetdata",
               "id": "8162bdb7-d30a-42c3-b342-0882aee5f1d2",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/homepage/get/data"
               },
               "response": []
            },
            {
               "name": "addhomepage",
               "id": "d93197d1-dfb6-4eaa-935e-a31022cd19d2",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"Name\": \"Abhishek kumar\",\r\n    \"currentTitle\": \"SoftWare Developer\",\r\n    \"aboutme\": \"I am A good Developer!\",\r\n    \"collegeData\" : {\r\n        \"name\" : \"HITK\",\r\n        \"description\": \"I Got 9.9 SGPA\",\r\n         \"startingDate\": \"20-06-2020\",\r\n         \"endingDate\": \"Present\"\r\n    },\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\",\r\n    \"resume\" : \"www.djdjdj.com\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/homepage/add/data"
               },
               "response": []
            },
            {
               "name": "update",
               "id": "8fb99e34-9c75-4163-a548-86a160f8acf4",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"Name\": \"Abhishek kumar updated\",\r\n    \"currentTitle\": \"SoftWare Developer\",\r\n    \"aboutme\": \"I am A good Developer!\",\r\n    \"picture\" : \"img/1src\",\r\n    \"collegeData\" : {\r\n        \"name\" : \"HITK\",\r\n        \"description\": \"I Got 9.9 SGPA\",\r\n         \"startingDate\": \"20-06-2020\",\r\n         \"endingDate\": \"Present\"\r\n    },\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\",\r\n    \"resume\" : \"www.djdjdj.com\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/homepage/update/data"
               },
               "response": []
            }
         ],
         "id": "c9b77f15-f9b8-4ec1-904d-6981c4fd1c24"
      },
      {
         "name": "links",
         "item": [
            {
               "name": "getlinks",
               "id": "08991026-4a7e-4f04-b2c0-de454b1a6beb",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/links/get"
               },
               "response": []
            },
            {
               "name": "addlinks",
               "id": "444c1770-0fc6-49af-8d7a-9c23778ed996",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\",\r\n    \"Name\" : \"codechef\",\r\n    \"link\" : \"www.codechef.com\",\r\n    \"pic\" : \"www.img1.src\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/links/add"
               },
               "response": []
            },
            {
               "name": "delete",
               "id": "a5236bfa-fe26-4b24-8264-b494412785cd",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"id\" : \"123\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/links/delete"
               },
               "response": []
            },
            {
               "name": "update",
               "id": "b00a9dae-7419-43b8-9229-05d24e1f9059",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\",\r\n    \"Name\" : \"codechef\",\r\n    \"link\" : \"www.codechef.com\",\r\n    \"pic\" : \"www.img1.src\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/links/update"
               },
               "response": []
            }
         ],
         "id": "75a3ed8a-8872-4caf-88b1-eab30405b878"
      },
      {
         "name": "projects",
         "item": [
            {
               "name": "getprojects",
               "id": "cc280487-d704-4714-b13e-a61d4f86ba11",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/projects/get"
               },
               "response": []
            },
            {
               "name": "addprojects",
               "id": "bfcf41a8-a663-4310-9d4b-dba4138b5995",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\",\r\n    \"Name\" : \"Blog App2\",\r\n    \"link\" : \"www.blogapp.com\",\r\n    \"pic\" : \"www.img122.src\",\r\n    \"description\" : \"The22 mern app\",\r\n    \"techstacks\" : \"ReactJs,Nodejs,express\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/projects/add"
               },
               "response": []
            },
            {
               "name": "delete",
               "id": "05e14dbf-0ff3-4b02-8fca-78c4ced865b0",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"id\" : \"62eacb01114f77d7800ae991\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/projects/delete"
               },
               "response": []
            },
            {
               "name": "update",
               "id": "cc4da035-af1b-4a2b-9d6d-4a3caabd4c26",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\",\r\n    \"Name\" : \"cheggmegg2\",\r\n    \"link\" : \"www.cheggme123gg.com\",\r\n    \"pic\" : \"www.img122.src\",\r\n    \"description\" : \"The22 mern app\",\r\n    \"techstacks\" : [\"ReactJs\", \"Nodejs\"],\r\n    \"projectid\" : \"62e81fef0e7d6c45fc12adf0\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/projects/update"
               },
               "response": []
            },
            {
               "name": "getsingleproject",
               "id": "7c5b1ec7-d8b3-498d-ad48-2617f413db28",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"projectid\" : \"62e81fe40e7d6c45fc12aded\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/projects/get/single"
               },
               "response": []
            }
         ],
         "id": "2279f37d-bf55-4ab8-b9e2-0fc4db5ea315"
      },
      {
         "name": "experience",
         "item": [
            {
               "name": "getexperience",
               "id": "a8f8a126-0699-49cb-bfdb-3a4ba2ee2d9a",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"findid\" : \"62e7d2fdb37a3951dc229766\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/experience/get"
               },
               "response": []
            },
            {
               "name": "addexperience",
               "id": "12736b3e-0ef1-4b77-93f6-9e3ab59812ca",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"type\": \"Developer Intern\",\r\n    \"company\": \"Amazon\",\r\n    \"duration\": \"6 months\",\r\n    \"startingDate\": \"12-12-2021\",\r\n    \"endingDate\": \"present\",\r\n    \"description\": \"I worked with aws.\",\r\n    \"techstacksused\": \"aws,reactjs\",\r\n    \"douments\": \"certificate.pdf\",\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/experience/add"
               },
               "response": []
            },
            {
               "name": "delete",
               "id": "2a56c5b3-2400-48c6-9ea3-3ae48c5c21dd",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"id\" : \"62e82419a902d679375d003f\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/experience/delete"
               },
               "response": []
            },
            {
               "name": "update",
               "id": "c8dc1ef4-91bf-4c86-b627-c3bb802cb8d8",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"type\": \"Developer Intern\",\r\n    \"company\": \"Google\",\r\n    \"duration\": \"6 months\",\r\n    \"startingDate\": \"12-12-2021\",\r\n    \"endingDate\": \"present\",\r\n    \"description\": \"I worked with aws.\",\r\n    \"techstacksused\": [\"aws\",\"reactjs\"],\r\n    \"douments\": [\"certificate.pdf\"],\r\n    \"findid\": \"62e7d2fdb37a3951dc229766\",\r\n    \"experienceid\" : \"62e82419a902d679375d003f\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/experience/update"
               },
               "response": []
            },
            {
               "name": "getsingleexperience",
               "id": "99e9bc57-a007-4275-b2aa-29bce1e8ff0a",
               "request": {
                  "method": "POST",
                  "header": [],
                  "body": {
                     "mode": "raw",
                     "raw": "{\r\n    \"experienceid\":\"62eca2826afca7b531cdd4ba\"\r\n}",
                     "options": {
                        "raw": {
                           "language": "json"
                        }
                     }
                  },
                  "url": "https://portifybackend.herokuapp.com/api/experience/get/single"
               },
               "response": []
            }
         ],
         "id": "c6bbab15-a51a-444b-99ee-07f90999b2ed"
      }
   ]
}


```
