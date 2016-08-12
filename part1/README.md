**Part 1 - REST API**
----
  REST API with basic CRUDL operations including filtering and searching.

  **LIST USERS**
  * **URL**

    /users

  * **Method:**

    `GET`
  *  **URL Params**

    None

  * **Data Params**

    None

  * **Success Response:**

    * **Code:** 200 <br />
      **Content:**

        ```
          [{
            "md5": "b7441c556f250fe6ebb3367ba708d4b6",
            "uri": "user/crazybear293"
          },
          {
            "md5": "5809e5fda81eed34bad9ca6eff414924",
            "uri": "user/beautifulfish360"
          },
          {
            "md5": "96cf4434a0bc4a36abc62ff24364b1cd",
            "uri": "user/redlion798"
          },
          {
            "md5": "3268a90b4cb3ad3c766f1547349dfc9e",
            "uri": "user/silverswan291"
          },
          {
            "md5": "846548fc6a8d2baff5dd9c4c380559b1",
            "uri": "user/bluepeacock968"
          }]

        ```

  * **Error Response:**

    * **Code:** 400 <br />
    * **Content:**
    ```
      {
        err: <String>
      }
    ```
    OR
    ```
      {
        err: <String>,
        details: <Object>
      }
    ```


  * **Sample Call:**

    ```javascript
      $.ajax({
        url: "/users",
        dataType: "json",
        type : "GET",
        success : function(r) {
          console.log(r);
        }
      });
    ```

**GET USER**
* **URL**

  /user/:username

* **Method:**

  `GET`
*  **URL Params**

  **Filter: (Optional)**

  ` filter=<String>,<String>,<String>... `

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

      ```
        {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "andy",
          "last": "adams"
        },
        "location": {
          "street": "5857 woodlawn avenue",
          "city": "Westport",
          "state": "alaska",
          "zip": 71280
        },
        "email": "andy.adams@example.com",
        "username": "beautifulfish360",
        "password": "123457",
        "salt": "HsxzewdQ",
        "md5": "5809e5fda81eed34bad9ca6eff414924",
        "sha1": "6c95f0d9210e88028074d4baaeefc3d6c830a9a3",
        "sha256": "f92fc585c017d093b03dba898162613380f137f934637c5bf9050fe68c103c54",
        "registered": 1180746503,
        "dob": 1028583070,
        "phone": "041-252-0953",
        "cell": "081-567-1935",
        "PPS": "2470896T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
    }

      ```

* **Error Response:**

  * **Code:** 400
  * **Content:**
  ```
    {
      err: <String>
    }
  ```
  OR
  ```
    {
      err: <String>,
      details: <Object>
    }
  ```

* **Sample Call:**

  ```javascript
    var filters = ['username', 'email', 'location'];
    $.ajax({
      url: "/users/beautifulfish360?filter=" + filters.join(','),
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**ADD USER**
* **URL**

  /user

* **Method:**

  `POST`
*  **URL Params**

  None

* **Data Params**

  **(Required)**
  ```
    gender = <String>,
    name = {
      title = <String>,
      first =<String>,
      last = <String>
    },
    location = {
      street = <String>,
      city = <String>,
      state = <String>,
      zip = <Integer>
    }
    email = <String>
    username = <String>,
    password = <String>,
    salt = <String>,
    md5 = <String>,
    sha1 = <String>,
    sha256 = <String>,
    registered = <Date>,
    dob = <Date>,
    phone = <String>,
    cell = <String>,
    PPS = <String>,
    picture = {
      large = <String>
      medium = <String>
      thumbnail = <String>
    }

  ```

* **Success Response:**

  * **Code:** 201 <br />

* **Error Response:**

  * **Code:** 400 <br />
  * **Content:**
  ```
    {
      err: <String>
    }
  ```
  OR
  ```
    {
      err: <String>,
      details: <Object>
    }
  ```

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/beautifulfish360",
      data: {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "andy",
          "last": "adams"
        },
        "location": {
          "street": "5857 woodlawn avenue",
          "city": "Westport",
          "state": "alaska",
          "zip": 71280
        },
        "email": "andy.adams@example.com",
        "username": "beautifulfish360",
        "password": "123457",
        "salt": "HsxzewdQ",
        "md5": "5809e5fda81eed34bad9ca6eff414924",
        "sha1": "6c95f0d9210e88028074d4baaeefc3d6c830a9a3",
        "sha256": "f92fc585c017d093b03dba898162613380f137f934637c5bf9050fe68c103c54",
        "registered": 1180746503,
        "dob": 1028583070,
        "phone": "041-252-0953",
        "cell": "081-567-1935",
        "PPS": "2470896T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
      },
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**DELETE USER**
* **URL**

  /user/:username

* **Method:**

  `DELETE`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 204 <br />


* **Error Response:**

  * **Code:** 400 <br />
  * **Content:**
  ```
    {
      err: <String>
    }
  ```
  OR
  ```
    {
      err: <String>,
      details: <Object>
    }
  ```


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/user/beautifulfish360",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**UPDATE USER**
* **URL**

  /user/:username

* **Method:**

  `PUT`
*  **URL Params**

  None

* **Data Params**

  ```
    gender = <String>,
    name = {
      title = <String>,
      first =<String>,
      last = <String>
    },
    location = {
      street = <String>,
      city = <String>,
      state = <String>,
      zip = <Integer>
    }
    email = <String>
    username = <String>,
    password = <String>,
    salt = <String>,
    md5 = <String>,
    sha1 = <String>,
    sha256 = <String>,
    registered = <Date>,
    dob = <Date>,
    phone = <String>,
    cell = <String>,
    PPS = <String>,
    picture = {
      large = <String>
      medium = <String>
      thumbnail = <String>
    }

  ```

* **Success Response:**

  * **Code:** 204 <br />


* **Error Response:**

  * **Code:** 400 <br />
  * **Content:**
  ```
    {
      err: <String>
    }
  ```
  OR
  ```
    {
      err: <String>,
      details: <Object>
    }
  ```


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/beautifulfish360",
      data: {
        "gender": "female",
        "name": {
          "title": "ms",
          "first": "alice",
          "last": "adams"
        },
        "location": {
          "street": "5857 woodlawn avenue",
          "city": "Westport",
          "state": "alaska",
          "zip": 71280
        },
        "email": "alice.adams@example.com",
        "username": "beautifulfish360",
        "password": "123457",
        "salt": "HsxzewdQ",
        "md5": "5809e5fda81eed34bad9ca6eff414924",
        "sha1": "6c95f0d9210e88028074d4baaeefc3d6c830a9a3",
        "sha256": "f92fc585c017d093b03dba898162613380f137f934637c5bf9050fe68c103c54",
        "registered": 1180746503,
        "dob": 1028583070,
        "phone": "041-252-0953",
        "cell": "081-567-1935",
        "PPS": "2470896T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
      },
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```
**SEARCH USER**
* **URL**

  /users/search

* **Method:**

  `GET`

*  **URL Params**

  **Search Query:**
  ```
    field=<String>
  ```

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  * **Content:**

    ```
    [
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "andy",
          "last": "adams"
        },
        "location": {
          "street": "5857 woodlawn avenue",
          "city": "Westport",
          "state": "alaska",
          "zip": 71280
        },
        "email": "andy.adams@example.com",
        "username": "beautifulfish360",
        "password": "123457",
        "salt": "HsxzewdQ",
        "md5": "5809e5fda81eed34bad9ca6eff414924",
        "sha1": "6c95f0d9210e88028074d4baaeefc3d6c830a9a3",
        "sha256": "f92fc585c017d093b03dba898162613380f137f934637c5bf9050fe68c103c54",
        "registered": 1180746503,
        "dob": 1028583070,
        "phone": "041-252-0953",
        "cell": "081-567-1935",
        "PPS": "2470896T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
      },
      {
        "gender": "female",
        "name": {
          "title": "miss",
          "first": "melissa",
          "last": "ferguson"
        },
        "location": {
          "street": "8289 novara avenue",
          "city": "Celbridge",
          "state": "idaho",
          "zip": 47618
        },
        "email": "melissa.ferguson@example.com",
        "username": "beautifulmouse223",
        "password": "checkers",
        "salt": "3Q24WZra",
        "md5": "9a2d11ae15b0d1a3afe2aaa5c2eeb740",
        "sha1": "6bf257fa650ce4ef1c2491cf9fcabf633db87368",
        "sha256": "6e1974774906eccdbcce136a6d6c005a547700e07b999c0704b5be8638ee71c7",
        "registered": 1022289528,
        "dob": 1038938379,
        "phone": "031-433-3489",
        "cell": "081-558-7936",
        "PPS": "1140426T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/96.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
        }
      },
      {
        "gender": "female",
        "name": {
          "title": "mrs",
          "first": "amy",
          "last": "hansen"
        },
        "location": {
          "street": "2622 green lane",
          "city": "Ratoath",
          "state": "texas",
          "zip": 79980
        },
        "email": "amy.hansen@example.com",
        "username": "beautifulswan831",
        "password": "just4fun",
        "salt": "aHJok7DP",
        "md5": "28288c0b51f25f7fced864b0b83aa7a3",
        "sha1": "5ed0b687098d3db7aadd90a9f94ab95bfb8dd077",
        "sha256": "508b2111bc3d4cdef5cecaae2a2b6296b08f2beb6f5247fe24a6cb8926b3a761",
        "registered": 1078325849,
        "dob": 91602186,
        "phone": "051-528-7929",
        "cell": "081-826-4886",
        "PPS": "2518522T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/34.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
        }
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "dave",
          "last": "wilson"
        },
        "location": {
          "street": "6284 highfield road",
          "city": "Duleek",
          "state": "new mexico",
          "zip": 40071
        },
        "email": "dave.wilson@example.com",
        "username": "beautifulfish272",
        "password": "dolores",
        "salt": "Pz3POvtv",
        "md5": "4acfb0c77438d497c8c4b3afe397d051",
        "sha1": "6f4ad6c3f5e7ee0b45952dae37e15754ea8e8427",
        "sha256": "761c794c7238ffa0c954fdc8213fd3bfbf5f63392db5b87595d9fbb3a74650e8",
        "registered": 1068894599,
        "dob": 1102639089,
        "phone": "051-086-6568",
        "cell": "081-650-0312",
        "PPS": "8499104T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/92.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
        }
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "guy",
          "last": "doyle"
        },
        "location": {
          "street": "5622 springfield road",
          "city": "Fermoy",
          "state": "illinois",
          "zip": 77970
        },
        "email": "guy.doyle@example.com",
        "username": "beautifulwolf578",
        "password": "quest1",
        "salt": "cS2MB8BZ",
        "md5": "bcc11061864160982e8c9d663f32ace8",
        "sha1": "936f6189b394841b532a97f030e17a2e44b7e2a3",
        "sha256": "2425f6c967d110a37a5c5c01906cdd722dea000e5bf5f792e4851056aac68e54",
        "registered": 931948973,
        "dob": 954757124,
        "phone": "021-441-6977",
        "cell": "081-134-1105",
        "PPS": "6223994T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/41.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
        }
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "clarence",
          "last": "hall"
        },
        "location": {
          "street": "6507 ormond quay",
          "city": "Athlone",
          "state": "massachusetts",
          "zip": 29502
        },
        "email": "clarence.hall@example.com",
        "username": "beautifulgoose810",
        "password": "chippy",
        "salt": "HC9uH2Ku",
        "md5": "df7799560a7258a6dcecf6db7ce9a426",
        "sha1": "1abe49c8461ae86db5e8a2863f9e783cf2e356bc",
        "sha256": "d1580be088e1f4b24e2c8bfa43e408ac79370ba279075a6a74bb122d6efebb35",
        "registered": 1296029367,
        "dob": 834222424,
        "phone": "011-637-4058",
        "cell": "081-892-3364",
        "PPS": "5035341T",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/8.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
        }
      }
    ]
    ```

* **Error Response:**

  * **Code:** 400 <br/>
  * **Content:**

    ```
      {
        err: <String>
      }
    ```
    OR
    ```
      {
        err: <String>,
        details: <Object>
      }
    ```

* **Sample Call:**

  ```javascript
    var query = "username=beautiful";
    $.ajax({
      url: "/users/beautifulfish360?" + query,
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
