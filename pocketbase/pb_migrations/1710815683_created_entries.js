/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nycvtmjbr4ntk7o",
    "created": "2024-03-19 02:34:43.677Z",
    "updated": "2024-03-19 02:34:43.677Z",
    "name": "entries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j7pfc9rk",
        "name": "date_played",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xfgsmfel",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "singles",
            "doubles",
            "practice",
            "hit"
          ]
        }
      },
      {
        "system": false,
        "id": "lfbtiemt",
        "name": "body",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "9gui8oxw",
        "name": "feeling",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "🤬",
            "🤩",
            "😑"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nycvtmjbr4ntk7o");

  return dao.deleteCollection(collection);
})
