import type { INodeProperties } from 'n8n-workflow';

export const ukDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					]
				}
			},
			"options": [
				{
					"name": "Addresses",
					"value": "Addresses",
					"action": "Extract Addresses",
					"description": "Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).\n\nIf a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.\n\nThis API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.\n\nFor address autocomplete, see our address finder API - which is designed for speed and address completion.\n\n## Reverse Geocoding\n\nReturn a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.\n\n## Filters\n\nYou can strictly narrow your result by adding filters to your query string which correspond with an address attribute.\n\nFor instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.\n\nIf a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.\n\nYou can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.\n\nAll filters can accept multiple terms unless stated otherwise below.\n\nMultiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.\n\nA combined maximum of 5 terms are allowed across all filters.\n\n## Biases\n\nYou can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.\n\nBiased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.\n\nFor instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.\n\nIf a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.\n\nYou may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.\n\nAll biases can accept multiple terms unless stated otherwise below.\n\nA combined maximum of 5 terms are allowed across all biases.\n\n## Search by Postcode and Building Name or Number\n\nSearch by postcode and building attribute with the postcode filter and query argument. E.g. For \"SW1A 2AA Prime Minister\" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.\n\nThe advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.\n\n#### Search By UPRN\n\nSearch by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.\n\n## Testing\n\n- **ID1 1QD** Returns a successful query response `2000`\n- **ID1 KFA** Returns an empty query response `2000`\n- **ID1 CLIP** Returns \"no lookups remaining\" error `4020`\n- **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/addresses"
						}
					}
				},
				{
					"name": "Address Cleanse",
					"value": "Address Cleanse",
					"action": "Cleanse",
					"description": "The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.\n\n## Confidence Score\n\nThe confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.\n\n### Deciding on an Acceptable Confidence Score Threshold\n\nDifferent address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.\n\nWhen determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine:\n- Which confidence scores indicate ambigious matches (i.e. up to building level only)\n- Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)\n\nDepending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature?\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cleanse/addresses"
						}
					}
				},
				{
					"name": "Postcodes",
					"value": "Postcodes",
					"action": "Lookup Postcode",
					"description": "Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.\n\nThe Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).\n\n## Postcode Not Found\n\nLookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:\n\n```json\n{\n  \"code\": 4040,\n  \"message\": \"Postcode not found\",\n  \"suggestions\": [\"SW1A 0AA\"]\n}\n```\n\n### Suggestions\n\nIf a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).\n\nIf the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.\n\nThe suggestion list will be empty if the postcode has deviated too far from a valid postcode format.\n\n## Multiple Residence\n\nA small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/postcodes/{{$parameter[\"postcode\"]}}"
						}
					}
				},
				{
					"name": "UDPRN",
					"value": "UDPRN",
					"action": "Retrieve by UDPRN",
					"description": "Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).\n\nYou may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.\n\nUDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.\n\n## Testing\n\nTo test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.\n\nThey are the following:\n\n- `0` Returns a successful UDPRN lookup response\n  `2000`\n- `-1` Returns \"UDPRN not found\", error `4044`\n- `-2` Returns \"no lookups remaining\", error `4020`\n- `-3` Returns \"daily (or individual) lookup limit breached\",\n  error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/udprn/{{$parameter[\"udprn\"]}}"
						}
					}
				},
				{
					"name": "UMPRN",
					"value": "UMPRN",
					"action": "Retrieve by UMPRN",
					"description": "Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).\n\nUMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.\n\n## Testing\n\nTo test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following\n\n- `0` Returns a successful UMPRN lookup response `2000`\n- `-1` Returns \"UMPRN not found\", error `4044`\n- `-2` Returns \"no lookups remaining\", error `4020`\n- `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`\n\nTest request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.\n\n### Pricing\n\nPer lookup charges apply. Empty responses are not charged.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/umprn/{{$parameter[\"umprn\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"required": true,
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Specifies the address you wish to query. Query can be shortened to `q=`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 5,
			"type": "number",
			"description": "Specifies the maximum number of suggestions to retrieve.\n\nBy default the limit is 10, unless a postcode is queried (then all addresses at that postcode will be returned). Limit can be shortened to `l=`\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"description": "0 indexed indicator of the page of results to receive. Virtually all postcode results are returned on page 0. \n\nA small number of Multiple Residence postcodes may need pagination (i.e. have more than 100 premises).\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "line_1,line_2,line_3",
			"type": "string",
			"description": "Comma separated whitelist of address elements to return. \n\nE.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Lon",
			"name": "lon",
			"default": -0.12767,
			"type": "number",
			"description": "Longitude query for reverse geocoding.\n\nAn accompanying latitude (lat=) query must be submitted for a valid reverse geocode query.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "lon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Lat",
			"name": "lat",
			"default": 51.503541,
			"type": "number",
			"description": "Latitude query for reverse geocoding.\n\nAn accompanying longitude (lon=) query must be submitted for a valid reverse geocode query.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "lat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postcode Outward",
			"name": "postcode_outward",
			"default": "1AA",
			"type": "string",
			"description": "Filter by outward code.",
			"routing": {
				"send": {
					"type": "query",
					"property": "postcode_outward",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"default": "SW1A 2AA",
			"type": "string",
			"description": "Filter by postcode. Can be combined with query to perform a postcode + building number/name search.",
			"routing": {
				"send": {
					"type": "query",
					"property": "postcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postcode Area",
			"name": "postcode_area",
			"default": "SW",
			"type": "string",
			"description": "Filter by postcode. Can be combined with query to perform a postcode + building number/name search.",
			"routing": {
				"send": {
					"type": "query",
					"property": "postcode_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postcode Sector",
			"name": "postcode_sector",
			"default": "SW1A 2",
			"type": "string",
			"description": "Filter by postcode sector, the outward code plus first numeric of the inward code. ",
			"routing": {
				"send": {
					"type": "query",
					"property": "postcode_sector",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Post Town",
			"name": "post_town",
			"default": "London",
			"type": "string",
			"description": "Filter by town. ",
			"routing": {
				"send": {
					"type": "query",
					"property": "post_town",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Uprn",
			"name": "uprn",
			"default": "100023336956",
			"type": "number",
			"description": "Filters by UPRN. Does not accept comma separated terms. Only a single term is permitted",
			"routing": {
				"send": {
					"type": "query",
					"property": "uprn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "England",
			"type": "string",
			"description": "Filter by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Postcode Type",
			"name": "postcode_type",
			"default": "L",
			"type": "string",
			"description": "Filter by Postcode Type. Useful for separating organisational and residential addresses",
			"routing": {
				"send": {
					"type": "query",
					"property": "postcode_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Su Organisation Indicator",
			"name": "su_organisation_indicator",
			"default": "Y",
			"type": "string",
			"description": "Filter by Organisation Indicator. Useful for separating organisational and residential addresses",
			"routing": {
				"send": {
					"type": "query",
					"property": "su_organisation_indicator",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Box",
			"name": "box",
			"default": "2.095,57.15,-2.096,57.14",
			"type": "string",
			"description": "Restrict search to a geospatial box determined by the \"top-left\" and \"bottom-right\" gelocations.   Only one geospatial box can be provided.",
			"routing": {
				"send": {
					"type": "query",
					"property": "box",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Postcode Outward",
			"name": "bias_postcode_outward",
			"default": "",
			"type": "string",
			"description": "Bias by outward code",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_postcode_outward",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Postcode",
			"name": "bias_postcode",
			"default": "/addresses?postcode=SW1A2AA&q=10",
			"type": "string",
			"description": "Bias by postcode. Can be combined with query to perform a postcode + building number/name search.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_postcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Postcode Area",
			"name": "bias_postcode_area",
			"default": "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
			"type": "string",
			"description": "Bias by postcode area, the first one or two non-numeric characters of a postcode.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_postcode_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Postcode Sector",
			"name": "bias_postcode_sector",
			"default": "SW1A 2AA is SW1A 2",
			"type": "string",
			"description": "Bias by postcode sector, the outward code plus first numeric of the inward code.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_postcode_sector",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Post Town",
			"name": "bias_post_town",
			"default": "",
			"type": "string",
			"description": "Bias by town.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_post_town",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Thoroughfare",
			"name": "bias_thoroughfare",
			"default": "",
			"type": "string",
			"description": "Bias by street name.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_thoroughfare",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Country",
			"name": "bias_country",
			"default": "",
			"type": "string",
			"description": "Bias by country. Possible values are England, Scotland, Wales, Northern Ireland, Jersey, Guernsey and Isle of Man.",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "Bias Lonlat",
			"name": "bias_lonlat",
			"default": "-2.095,57.15,100",
			"type": "string",
			"description": "Bias search to a geospatial circle determined by an origin and radius in meters. Max radius is `50000`.  Uses the format bias_lonlat=[longitude],[latitude],[radius in metres] Only one geospatial bias may be provided",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_lonlat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Addresses"
					]
				}
			}
		},
		{
			"displayName": "POST /cleanse/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Address Cleanse"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Address Cleanse"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query",
			"name": "query",
			"type": "string",
			"default": "10 Downing Street, London, SW2A 2BN",
			"description": "Freeform address input to cleanse\n",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Address Cleanse"
					]
				}
			}
		},
		{
			"displayName": "GET /postcodes/{postcode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Postcodes"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"required": true,
			"description": "Postcode to retrieve",
			"default": "SW1A 2AA",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Postcodes"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Postcodes"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "line_1,line_2,line_3",
			"type": "string",
			"description": "Comma separated whitelist of address elements to return. \n\nE.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Postcodes"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 0,
			"type": "number",
			"description": "0 indexed indicator of the page of results to receive. Virtually all postcode results are returned on page 0. \n\nA small number of Multiple Residence postcodes may need pagination (i.e. have more than 100 premises).\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"Postcodes"
					]
				}
			}
		},
		{
			"displayName": "GET /udprn/{udprn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UDPRN"
					]
				}
			}
		},
		{
			"displayName": "Udprn",
			"name": "udprn",
			"required": true,
			"description": "UDPRN to be retrieved",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UDPRN"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UDPRN"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "line_1,line_2,line_3",
			"type": "string",
			"description": "Comma separated whitelist of address elements to return. \n\nE.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UDPRN"
					]
				}
			}
		},
		{
			"displayName": "GET /umprn/{umprn}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UMPRN"
					]
				}
			}
		},
		{
			"displayName": "Umprn",
			"name": "umprn",
			"required": true,
			"description": "UMPRN to be retrieved",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UMPRN"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "api_key",
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "api_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UMPRN"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"default": "line_1,line_2,line_3",
			"type": "string",
			"description": "Comma separated whitelist of address elements to return. \n\nE.g. `filter=line_1,line_2,line_3` returns only `line_1`, `line_2` and `line_3` address elements in your response\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"UK"
					],
					"operation": [
						"UMPRN"
					]
				}
			}
		},
];
