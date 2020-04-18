# better-json
This package adds some functionality to `JSON.parse()` and `JSON.stringify()` adding the ability to parse and stringify
a `Buffer` object automatically recursively.

## Example
```typescript
import {BetterJSON} from "@elijahjcobb/better-json";

const obj: { email: string, security: { salt: Buffer, pepper: Buffer } } = {
    email: "Elijah",
    security: {
         salt: Buffer.from("salt"),
         pepper: Buffer.from("pepper")
    }
};

const str: string = BetterJSON.stringify(obj);
const obj2: { email: string, security: { salt: Buffer, pepper: Buffer } } = BetterJSON.parse(str);

// obj === obj2
```

## Documentation
Everything is completely documented. You can view the
[declaration files](https://github.com/elijahjcobb/request/better-json/master/dts) or even the
[source code](https://github.com/elijahjcobb/better-json/tree/master/ts) on GitHub.

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/better-json/issues) or if you
are old-fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).