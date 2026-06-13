import type { INodeProperties } from 'n8n-workflow';

export const emailsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Emails"
					]
				}
			},
			"options": [
				{
					"name": "Email Validation",
					"value": "Email Validation",
					"action": "Email Validation",
					"description": "Query for and validate email addresses.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/emails"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /emails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Emails"
					],
					"operation": [
						"Email Validation"
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
						"Emails"
					],
					"operation": [
						"Email Validation"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Specifies the email address to validate",
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
						"Emails"
					],
					"operation": [
						"Email Validation"
					]
				}
			}
		},
];
