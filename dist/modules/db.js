import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
var db = new PrismaClient({
    log: [
        "error",
        "info",
        "query",
        "warn"
    ]
});
export default db;
export var genId = function() {
    return nanoid(16);
};
