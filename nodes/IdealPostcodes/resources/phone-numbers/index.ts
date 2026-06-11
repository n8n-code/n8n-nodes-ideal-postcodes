import type { INodeProperties } from 'n8n-workflow';

export const phoneNumbersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Phone Numbers"
					]
				}
			},
			"options": [
				{
					"name": "Phone Number Validation",
					"value": "Phone Number Validation",
					"action": "Phone Number Validation",
					"description": "Query for and validate phone numbers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/phone_numbers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /phone_numbers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Phone Numbers"
					],
					"operation": [
						"Phone Number Validation"
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
						"Phone Numbers"
					],
					"operation": [
						"Phone Number Validation"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed `+44`, `44` or `0044`.",
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
						"Phone Numbers"
					],
					"operation": [
						"Phone Number Validation"
					]
				}
			}
		},
];
