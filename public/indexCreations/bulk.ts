export const bulkPayload =
"{ \"index\" : { \"_index\" : \"sentences\", \"_id\" : \"1\" } }\n" +
"{ \"name\" : \"value1\" }\n" +
"{ \"delete\" : { \"_index\" : \"sentences\", \"_id\" : \"2\" } }\n" +
"{ \"create\" : { \"_index\" : \"sentences\", \"_id\" : \"3\" } }\n" +
"{ \"name\" : \"value3\" }\n" +
"{ \"update\" : {\"_id\" : \"1\", \"_index\" : \"sentences\"} }\n" +
"{ \"doc\" : {\"name\" : \"value2\"} }\n";
