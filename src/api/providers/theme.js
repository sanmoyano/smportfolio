import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
    colors: {
        succes: "succes",
        error: "error",
        warning: "warning",
    },
    components: {
        toast: {
            bg: "succes",
        },
    },
});
