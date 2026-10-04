import MistEngineItemBase from "./base-item.mjs";

export default class MistEngineShortChallenge extends MistEngineItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.limitedRevealed = new fields.BooleanField();
    schema.list = new fields.ArrayField(new fields.StringField());
    schema.shortDescription = new fields.StringField({ required: false, nullable: true });
    
    return schema;
  }

  prepareDerivedData() {
  }
}