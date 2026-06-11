import type { INodeProperties } from 'n8n-workflow';

export const addressSearchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					]
				}
			},
			"options": [
				{
					"name": "Address Autocomplete",
					"value": "Address Autocomplete",
					"action": "Find Address",
					"description": "The address autocomplete API returns a list of address suggestions that match the query ordered by relevance.\n\nThis API can be used to power realtime address finders, also known as address autofill or address autocomplete.\n\nConsider using our Address Autocomplete JavaScript libraries to add address lookup to a form in moments.\n\n## Implementing Address Autocomplete\n\nRapid address autocompletion using our Address Autocomplete API is a 2 step process.\n\n1. Retrieve partial address suggestions via `/autocomplete/addresses`\n2. Retrieve the entire address with the ID provided in the suggestion\n\nStep 2 will decrement your lookup balance.\n\nPlease note, this API is not intended to be a free standalone resource.\n\n## Filters\n\nYou can strictly narrow your result by adding filters to your querystring. For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.\n\nIf a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.\n\nYou can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.\n\nAll filters can accept multiple terms unless stated otherwise below.\n\nFilters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.\n\nA maximum of **10** terms are allowed across all filters.\n\n## Biases\n\nYou can boost certain addresses results that match specific address criteria. All bias searches are prefixed with `bias_`.\n\nBiasing (unlike filtering) also allow unmatched addresses to appear with lower precedence.\n\nFor instance, can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.\n\nNo bias effect applies to bias terms that are invalid. e.g. `bias_postcode=SW1A2AAA`\n\nYou may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: <code>bias_postcode_outward=e1,e2,e3</code>.\n\nAll biases can accept multiple terms unless stated otherwise below.\n\nA combined maximum of **5** terms are allowed across all biases.\n\n## Suggestion Format\n\nThe suggestion format is prone to change over time. Attempts to parse the suggestion may result in your integration breaking. Instead use the suggestion as-is.\n\n## Rate Limiting\n\nYou can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.\n\n| Header                  | Description                                                                            |\n| ----------------------- | -------------------------------------------------------------------------------------- |\n| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |\n| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |\n| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |\n\n## Pricing\n\nThis API currently does not affect your balance. However, resolving a suggestion into a full address requires a paid request.\n\nPlease note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an address may be disrupted via tightened rate limits. Continued misuse will result in account suspension.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/autocomplete/addresses"
						}
					}
				},
				{
					"name": "Resolve",
					"value": "Resolve",
					"action": "Resolve Address (GBR)",
					"description": "Resolves an address autocompletion by its address ID.\n\nResolved addresses (including global addresses) are returned in a UK format (up to 3 address lines) using UK nomenclature (like postcode and county).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/autocomplete/addresses/{{$parameter[\"address\"]}}/gbr"
						}
					}
				},
				{
					"name": "Resolve Usa",
					"value": "Resolve Usa",
					"action": "Resolve Address (USA)",
					"description": "Resolves an address autocompletion by its address ID.\n\nResolved addresses (including global addresses) are returned in a US format (up to 2 address lines) using US nomenclature (like zipcode, state and city).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/autocomplete/addresses/{{$parameter[\"address\"]}}/usa"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /autocomplete/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Context",
			"name": "context",
			"default": "",
			"type": "string",
			"description": "Limits search results within a geographical boundary or country.",
			"routing": {
				"send": {
					"type": "query",
					"property": "context",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.\n",
			"default": 5,
			"type": "number",
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
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
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Bias Ip",
			"name": "bias_ip",
			"default": "true",
			"type": "options",
			"description": "Biases search based on approximate geolocation of IP address.\nSet `bias_ip=true` to enable.",
			"options": [
				{
					"name": "True",
					"value": "true"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Address Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "GET /autocomplete/addresses/{address}/gbr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Resolve"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"description": "ID of address suggestion",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Resolve"
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
						"Address Search"
					],
					"operation": [
						"Resolve"
					]
				}
			}
		},
		{
			"displayName": "GET /autocomplete/addresses/{address}/usa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Resolve Usa"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"required": true,
			"description": "ID of address suggestion",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Address Search"
					],
					"operation": [
						"Resolve Usa"
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
						"Address Search"
					],
					"operation": [
						"Resolve Usa"
					]
				}
			}
		},
];
