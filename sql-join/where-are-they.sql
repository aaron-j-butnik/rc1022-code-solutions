select  "line1",
        "cities"."name" as "cityName",
        "district"
   from "cities"
   join "addresses" using ("cityId");
