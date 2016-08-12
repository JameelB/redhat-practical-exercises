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

    * **Code:** 404 <br />
      **Content:** `{ err : "No users available" }`

    OR

    * **Code:** 400 <br/>


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
