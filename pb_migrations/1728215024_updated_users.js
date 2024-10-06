/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "player"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txlrx4gx",
    "name": "isMaster",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.name = "users"

  // remove
  collection.schema.removeField("txlrx4gx")

  return dao.saveCollection(collection)
})
