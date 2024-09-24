import { me, User } from "./02-import-types";

function printUser(user: User) {
    console.log(user.name);
}

printUser(me);

import type { Options } from "./02-import-types";
const opts: Options = { debug: true, format: { tabs: true, tabWidth: 2 } };
console.log(Option);

// Using libraries (that have TypeScript)
import { addDays } from "date-fns";

addDays(new Date(), 3);

// Using libraries (that don't have TypeScript)
// npm i lodash
import { times } from "lodash"; // This is a JavaScript library, no TypeScript
times(3, () => console.log("Hello!"));
// Installing types for lodash
// npm i @types/lodash
