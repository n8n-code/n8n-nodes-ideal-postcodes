import type { INodeProperties } from 'n8n-workflow';

export const configsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					]
				}
			},
			"options": [
				{
					"name": "List Configs",
					"value": "List Configs",
					"action": "List",
					"description": "Lists configurations associated with a key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/configs"
						}
					}
				},
				{
					"name": "Create Config",
					"value": "Create Config",
					"action": "Create",
					"description": "Create a config",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/keys/{{$parameter[\"key\"]}}/configs"
						}
					}
				},
				{
					"name": "Delete Config",
					"value": "Delete Config",
					"action": "Delete",
					"description": "Permanently deletes a configuration object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/keys/{{$parameter[\"key\"]}}/configs/{{$parameter[\"config\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Config",
					"value": "Retrieve Config",
					"action": "Retrieve",
					"description": "Retrieve config object by name",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/keys/{{$parameter[\"key\"]}}/configs/{{$parameter[\"config\"]}}"
						}
					}
				},
				{
					"name": "Update Config",
					"value": "Update Config",
					"action": "Update",
					"description": "Updates configuration object",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/keys/{{$parameter[\"key\"]}}/configs/{{$parameter[\"config\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /keys/{key}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"List Configs"
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
						"Configs"
					],
					"operation": [
						"List Configs"
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
						"Configs"
					],
					"operation": [
						"List Configs"
					]
				}
			}
		},
		{
			"displayName": "POST /keys/{key}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Create Config"
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
						"Configs"
					],
					"operation": [
						"Create Config"
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
						"Configs"
					],
					"operation": [
						"Create Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "woocommerce",
			"description": "A unique name to identify the configuration payload",
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
						"Configs"
					],
					"operation": [
						"Create Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "{\n  \"removeOrganisation\": false\n}\n",
			"description": "A serialised payload of up to `4096` characters",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Create Config"
					]
				}
			}
		},
		{
			"displayName": "DELETE /keys/{key}/configs/{config}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Delete Config"
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
						"Configs"
					],
					"operation": [
						"Delete Config"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"required": true,
			"default": "idpc-be",
			"type": "string",
			"description": "User provided configuration object name",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Delete Config"
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
						"Configs"
					],
					"operation": [
						"Delete Config"
					]
				}
			}
		},
		{
			"displayName": "GET /keys/{key}/configs/{config}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Retrieve Config"
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
						"Configs"
					],
					"operation": [
						"Retrieve Config"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"required": true,
			"default": "idpc-be",
			"type": "string",
			"description": "User provided configuration object name",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Retrieve Config"
					]
				}
			}
		},
		{
			"displayName": "POST /keys/{key}/configs/{config}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Config"
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
						"Configs"
					],
					"operation": [
						"Update Config"
					]
				}
			}
		},
		{
			"displayName": "Config",
			"name": "config",
			"required": true,
			"default": "idpc-be",
			"type": "string",
			"description": "User provided configuration object name",
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Config"
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
						"Configs"
					],
					"operation": [
						"Update Config"
					]
				}
			}
		},
		{
			"displayName": "Payload",
			"name": "payload",
			"type": "string",
			"default": "{\n  \"removeOrganisation\": false\n}\n",
			"description": "A serialised payload of up to `4096` characters",
			"routing": {
				"send": {
					"property": "payload",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Configs"
					],
					"operation": [
						"Update Config"
					]
				}
			}
		},
];
