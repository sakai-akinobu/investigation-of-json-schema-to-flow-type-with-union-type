const assert = require('assert');
const parseSchema = require('json-schema-to-flow-type').parseSchema;

describe('index.js', function() {
  it('Union type with object', function() {
    const schema = {
      "id": "Foo",
      "type": [
        "object",
        "null",
      ],
      "properties": {
        "bar":  {
          "type": "string",
        },
      },
    };

    const expected = [
      'export type Foo = {',
      '  bar?: string',
      '} | null;',
    ].join('\n');

    assert.strictEqual(parseSchema(schema), expected);
  });
});
