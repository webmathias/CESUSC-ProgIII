define({ "api": [
  {
    "type": "get",
    "url": "/user/",
    "title": "Retorna lista de usuários",
    "name": "GetUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "lista",
            "description": "<p>Lista de usuários</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apiExemplo/user.js",
    "groupTitle": "Users"
  }
] });
