import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18n 1 zingsnis

i18n
    .use(initReactI18next) // add support for react (e.g. hooks)
    .init({
        resources: {  // resources to initialize with
            en: {
                "common": {
                    "Sun-system-planets":"Sun system planets",
                    "Number":"Number",
                    "Planet":"Planet",
                    "Actions":"Actions"

                }
            },
            lt: {
                "common": {
                    "Sun-system-planets":"Saulės sistemos planetos",
                    "Number":"Numeris",
                    "Planet":"Planetos",
                    "Actions":"Veiksmai"

                }
            }
        },
        defaultNS: 'common'
    });
