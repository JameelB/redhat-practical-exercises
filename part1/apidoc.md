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

**SHOW USER**
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
<<<<<<< HEAD

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

  /user

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

  **Search Query: (Optional)**
  ```
    [field]=<String>
  ```

  **Filter: (Optional)**
  ```
    filter=<String>,<String>,<String
  ```

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />


* **Error Response:**

  * **Code:** 400


* **Sample Call:**

  ```javascript
    var filters = ['username', 'email', 'location'];
    var query = "username=beautiful&gender=female";
    $.ajax({
      url: "/users/beautifulfish360?filter=" + filters.join(',') "&" + query,
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
