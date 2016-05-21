collectionFrancisChilds = new Mongo.Collection('francisChild')
SessionSchema = new SimpleSchema({
  prenom: { type: String, optional: true },
  age: { type: Number, optional: true },
})
collectionFrancisChilds.attachSchema(SessionSchema)
