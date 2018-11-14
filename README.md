```
> npx mocha --recursive tests/**

  index.js
    1) Union type with object


  0 passing (141ms)
  1 failing

  1) index.js
       Union type with object:

      AssertionError [ERR_ASSERTION]: Input A expected to strictly equal input B:
+ expected - actual

- 'export type Foo = {\n  bar?: string\n} | {\n  bar?: string\n};'
+ 'export type Foo = {\n  bar?: string\n} | null;'
      + expected - actual

       export type Foo = {
         bar?: string
      -} | {
      -  bar?: string
      -};
      +} | null;

      at Context.<anonymous> (tests/index.js:25:12)
```
