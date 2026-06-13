import type { INodeProperties } from 'n8n-workflow';

export const keysDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					]
				}
			},
			"options": [
				{
					"name": "Key Availability",
					"value": "Key Availability",
					"action": "Availability",
					"description": "Returns public information on key. Currently only returns whether the key is currently useable via the `available` property. Use this to discover if the key is useable before making further requests.\n\nYou may pass both API Keys (beginning `ak_`) and Sub-licensed Keys (beginning `sl_`).\n## Testing\n\nTo test your implementation of our API, you may use the following test keys.\n\n- **iddqd** Availability will return as `true`\n- **idkfa** Availability will return as `false`\n\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}"
						}
					}
				},
				{
					"name": "Key Details",
					"value": "Key Details",
					"action": "Details",
					"description": "Returns private data on the key including remaining lookups, available datasets and usage limits.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/details"
						}
					}
				},
				{
					"name": "Key Logs",
					"value": "Key Logs",
					"action": "Logs (CSV)",
					"description": "Reports lookup information on a key for paid lookups.\n\nThis method requires a `user_token`, which can be found on your [accounts page](https://ideal-postcodes.co.uk/account).\n\nA maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.\n\n## Download Usage History (CSV)\n\n`GET /keys/:key/lookups`\n\nReturns a CSV download of lookups performed and associated information.\n\nNote that the Content-Type returned will be CSV (text/csv). For a non 200 response, the `Content-Type` will revert to JSON with the error code and message embedded.\n\n## Data Redaction\n\nPersonally Identifiable Data (PII) caught in this your usage log (including IP, search term and URL data) will be redacted on a weekly basis.\n\nBy default, PII will be redacted if it is older than 21 days. This timeframe can be configured from your dashboard.\n\nYou may prevent PII collection altogether by setting the interval to `0` days.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/lookups"
						}
					}
				},
				{
					"name": "Key Usage",
					"value": "Key Usage",
					"action": "Usage Stats",
					"description": "Reports the number of lookups consumed on a key for a range of days.\n\nA maximum interval of 90 days can be provided for analysis. If no start or end date is provided, the last 21 days will be used as the default interval.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/usage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /keys/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Availability"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Availability"
					]
				}
			}
		},
		{
			"displayName": "GET /keys/{key}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Details"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Details"
					]
				}
			}
		},
		{
			"displayName": "User Token",
			"name": "user_token",
			"default": "uk_B59ScW1p1HHouf1VqclEPZUx",
			"type": "string",
			"description": "A secret key used for sensitive operations on your account and API Keys.\n\nYour user token can be retrieved and managed from your [accounts page](https://ideal-postcodes.co.uk/account).\n\nTypically beings `uk_...`\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Details"
					]
				}
			}
		},
		{
			"displayName": "GET /keys/{key}/lookups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Logs"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Logs"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "An start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.",
			"default": 1418556452651,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Logs"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"description": "An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.",
			"default": 1418556477882,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Logs"
					]
				}
			}
		},
		{
			"displayName": "Licensee",
			"name": "licensee",
			"description": "Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.",
			"default": "sk_hk71kco54zGSGvF9eXXrvvnMOLLNh",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "licensee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /keys/{key}/usage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"default": "ak_test",
			"type": "string",
			"description": "Your API Key. Typically beings `ak_`.\n\nAvailable from your dashboard\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "A start date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no start time is provided, the start time will be assigned to a time 21 days prior to the end time.",
			"default": 1418556452651,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"description": "An end date/time in the form of a UNIX Timestamp in milliseconds, e.g. `1418556452651`. If no end time is provided, the current time will be used.",
			"default": 1418556477882,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"default": "foo,bar",
			"type": "string",
			"description": "A comma separated list of tags to query over. \n\nUseful if you want to specify the circumstances in which the request was made.\n\nIf multiple tags are specified, the response will only comprise of requests for which all the tags are satisfied - i.e. searching `\"foo,bar\"` will only query requests which tagged both `\"foo\"` and `\"bar\"`.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
		{
			"displayName": "Licensee",
			"name": "licensee",
			"description": "Sublicensed keys only. This will restrict the analysed dataset to a specific licensee.",
			"default": "sk_hk71kco54zGSGvF9eXXrvvnMOLLNh",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "licensee",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Keys"
					],
					"operation": [
						"Key Usage"
					]
				}
			}
		},
];
