import type { INodeProperties } from 'n8n-workflow';

export const licenseesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					]
				}
			},
			"options": [
				{
					"name": "List Licensees",
					"value": "List Licensees",
					"action": "List",
					"description": "Returns a list of licensees for a key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/licensees"
						}
					}
				},
				{
					"name": "Create Licensee",
					"value": "Create Licensee",
					"action": "Create",
					"description": "Create a licensee for the specified API Key.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/keys/{{$parameter[\"key\"]}}/licensees"
						}
					}
				},
				{
					"name": "Delete Licensee",
					"value": "Delete Licensee",
					"action": "Cancel",
					"description": "Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/keys/{{$parameter[\"key\"]}}/licensees/{{$parameter[\"licensee\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Licensee",
					"value": "Retrieve Licensee",
					"action": "Retrieve",
					"description": "Returns licensee information as identified by the licensee key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/licensees/{{$parameter[\"licensee\"]}}"
						}
					}
				},
				{
					"name": "Update Licensee",
					"value": "Update Licensee",
					"action": "Update",
					"description": "Update Licensee",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/keys/{{$parameter[\"key\"]}}/licensees/{{$parameter[\"licensee\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /keys/{key}/licensees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"List Licensees"
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
						"Licensees"
					],
					"operation": [
						"List Licensees"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "starting_after",
			"description": "Specify ID of the licensee after which you would like to list results",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "starting_after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"List Licensees"
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
						"Licensees"
					],
					"operation": [
						"List Licensees"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Specify the maximum number of results to return per page. Default and maximum is `100`.",
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
						"Licensees"
					],
					"operation": [
						"List Licensees"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Filter result by licensee name. Query can be shortened to `q=`",
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
						"Licensees"
					],
					"operation": [
						"List Licensees"
					]
				}
			}
		},
		{
			"displayName": "POST /keys/{key}/licensees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
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
						"Licensees"
					],
					"operation": [
						"Create Licensee"
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
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "12 High Street, Manchester",
			"description": "Licensee's first, second and third line address as well as post town concatenated by commas",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "Daily",
			"name": "daily",
			"type": "json",
			"default": "{\n  \"limit\": 10000\n}",
			"routing": {
				"send": {
					"property": "daily",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Qwerty Widgets Limited",
			"description": "Licensee individual or organisation name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"type": "string",
			"default": "ID1 1QD",
			"description": "Licensee's postcode",
			"routing": {
				"send": {
					"property": "postcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "Whitelist",
			"name": "whitelist",
			"type": "json",
			"default": "[\n  \"https://www.example.com\"\n]",
			"description": "A list of allowed URLs. An empty list means that whitelisting is disabled",
			"routing": {
				"send": {
					"property": "whitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Create Licensee"
					]
				}
			}
		},
		{
			"displayName": "DELETE /keys/{key}/licensees/{licensee}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Delete Licensee"
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
						"Licensees"
					],
					"operation": [
						"Delete Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee",
			"name": "licensee",
			"required": true,
			"default": "sk_hk71kco54zGSGvF9eXXrvvnMOLLNh",
			"type": "string",
			"description": "Uniquely identifies a licensee\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Delete Licensee"
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
						"Licensees"
					],
					"operation": [
						"Delete Licensee"
					]
				}
			}
		},
		{
			"displayName": "GET /keys/{key}/licensees/{licensee}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Retrieve Licensee"
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
						"Licensees"
					],
					"operation": [
						"Retrieve Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee",
			"name": "licensee",
			"required": true,
			"default": "sk_hk71kco54zGSGvF9eXXrvvnMOLLNh",
			"type": "string",
			"description": "Uniquely identifies a licensee\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Retrieve Licensee"
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
						"Licensees"
					],
					"operation": [
						"Retrieve Licensee"
					]
				}
			}
		},
		{
			"displayName": "PUT /keys/{key}/licensees/{licensee}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
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
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Licensee",
			"name": "licensee",
			"required": true,
			"default": "sk_hk71kco54zGSGvF9eXXrvvnMOLLNh",
			"type": "string",
			"description": "Uniquely identifies a licensee\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
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
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "12 High Street, Manchester",
			"description": "Licensee's first, second and third line address as well as post town concatenated by commas",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Daily",
			"name": "daily",
			"type": "json",
			"default": "{\n  \"limit\": 10000\n}",
			"routing": {
				"send": {
					"property": "daily",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Qwerty Widgets Limited",
			"description": "Licensee individual or organisation name",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Postcode",
			"name": "postcode",
			"type": "string",
			"default": "ID1 1QD",
			"description": "Licensee's postcode",
			"routing": {
				"send": {
					"property": "postcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
		{
			"displayName": "Whitelist",
			"name": "whitelist",
			"type": "json",
			"default": "[\n  \"https://www.example.com\"\n]",
			"description": "A list of allowed URLs. An empty list means that whitelisting is disabled",
			"routing": {
				"send": {
					"property": "whitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Licensees"
					],
					"operation": [
						"Update Licensee"
					]
				}
			}
		},
];
