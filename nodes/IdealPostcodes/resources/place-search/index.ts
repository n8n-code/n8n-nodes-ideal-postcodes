import type { INodeProperties } from 'n8n-workflow';

export const placeSearchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					]
				}
			},
			"options": [
				{
					"name": "Find Place",
					"value": "Find Place",
					"action": "Find Place",
					"description": "Query for geographical places across countries. Each query will return a list of place suggestions, which consists of a place name, descriptive name and id.\n\nThis API returns geographical information such as countries, capitals, administrative areas and more. It is ideal for correctly identifying a place along with any other details like geolocation.\n\n## Implementing Place Autocomplete\n\nExtracting the full information of a place is a 2 step process:\n\n1. Retrieve place suggestions via /places\n2. Retrieve the entire place with the ID provided in the suggestion\n\n## Suggestion Format\n\nEach place suggestion contains a descriptive name which you can provide to users to uniquely idenfity a place.\n\n## Rate Limiting\n\nYou can make up to 3000 requests to the autocomplete API within a 5 minute span. The HTTP Header contains information on your current rate limit.\n\n| Header                  | Description                                                                            |\n| ----------------------- | -------------------------------------------------------------------------------------- |\n| `X-RateLimit-Limit`     | The maximum number of requests that can be made in 5 minutes                           |\n| `X-RateLimit-Remaining` | The remaining requests within the current rate limit window                            |\n| `X-RateLimit-Reset`     | The time when the rate limit window resets in Unix Time (seconds) or UTC Epoch seconds |\n\n## Pricing\n\nThis API currently does not affect your balance. However, resolving a suggestion into a full place requires a paid request.\n\nPlease note, this API is not intended as a standalone free resource. Integrations that consistently make autocomplete requests without a paid request to resolve an place may be disrupted via tightened rate limits.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places"
						}
					}
				},
				{
					"name": "Resolve Place",
					"value": "Resolve Place",
					"action": "Resolve Place",
					"description": "Resolves a place autocompletion by its place ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places/${{$parameter[\"place\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /places",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					],
					"operation": [
						"Find Place"
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
						"Place Search"
					],
					"operation": [
						"Find Place"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Specifies the place you wish to query. Query can be shortened to `q=`",
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
						"Place Search"
					],
					"operation": [
						"Find Place"
					]
				}
			}
		},
		{
			"displayName": "Country Iso",
			"name": "country_iso",
			"default": "GBR",
			"type": "string",
			"description": "Filter by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.\nFilter by multiple countries with a comma separated list. E.g. `GBR,IRL`",
			"routing": {
				"send": {
					"type": "query",
					"property": "country_iso",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					],
					"operation": [
						"Find Place"
					]
				}
			}
		},
		{
			"displayName": "Bias Country Iso",
			"name": "bias_country_iso",
			"default": "GBR",
			"type": "string",
			"description": "Bias by country ISO code. Uses 3 letter country code (ISO 3166-1) standard.\nBias by multiple countries with a comma separated list. E.g. `GBR,IRL`",
			"routing": {
				"send": {
					"type": "query",
					"property": "bias_country_iso",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					],
					"operation": [
						"Find Place"
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
						"Place Search"
					],
					"operation": [
						"Find Place"
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
						"Place Search"
					],
					"operation": [
						"Find Place"
					]
				}
			}
		},
		{
			"displayName": "GET /places/${place}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					],
					"operation": [
						"Resolve Place"
					]
				}
			}
		},
		{
			"displayName": "Place",
			"name": "place",
			"required": true,
			"description": "ID of place suggestion",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Place Search"
					],
					"operation": [
						"Resolve Place"
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
						"Place Search"
					],
					"operation": [
						"Resolve Place"
					]
				}
			}
		},
];
