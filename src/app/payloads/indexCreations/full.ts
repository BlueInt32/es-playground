export const payload = {
    "mappings": {
        "properties": {
            "name": {
                "type": "text",
                "copy_to": "full_searchable",
                "analyzer": "lowercase_ascii_ngram",
                "fields": {
                    "raw": {
                        "type": "keyword"
                    }
                }
            },
            "address": {
                "type": "text",
                "analyzer": "standard",
                "copy_to": "full_searchable",
                "fields": {
                    "raw": {
                        "type": "keyword"
                    }
                }
            },
            "full_searchable": {
                "type": "text",
                "analyzer": "lowercase_ascii_ngram"
            }
        }
    },
    "settings": {
        "index": {
          "max_ngram_diff": 4
        },
        "analysis": {
            "analyzer": {
                "lowercase_ascii": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "filter": [
                        "lowercase",
                        "asciifolding"
                    ]
                },
                "lowercase_ascii_edge_ngram": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "filter": [
                        "lowercase",
                        "asciifolding",
                        "1_12_edge_ngram"
                    ]
                },
                "lowercase_ascii_ngram": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "filter": [
                        "lowercase",
                        "asciifolding",
                        "3_7_grams"
                    ]
                },
                "my_analyzer": {
                    "type": "custom",
                    "char_filter": [
                        "html_strip",
                        "&_to_and"
                    ],
                    "tokenizer": "standard",
                    "filter": [
                        "lowercase",
                        "my_stopwords"
                    ]
                }
            },
            "char_filter": {
                "&_to_and": {
                    "type": "mapping",
                    "mappings": [
                        "&=> and "
                    ]
                }
            },
            "filter": {
                "1_12_edge_ngram": {
                    "type": "edge_ngram",
                    "min_gram": "1",
                    "max_gram": "12",
                    "preserve_original": true
                },
                "3_7_grams": {
                    "type": "ngram",
                    "min_gram": 3,
                    "max_gram": 7,
                    "preserve_original": true
                },
                "my_stopwords": {
                    "type": "stop",
                    "stopwords": [
                        "the",
                        "a"
                    ]
                }
            }
        }
    }
}
