import * as z from "zod/v4";
import ru from "zod/v4/locales/ru.js";

export const zodConfig = () => {
    z.config(ru());
    return z;
};
