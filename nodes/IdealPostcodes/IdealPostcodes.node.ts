import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { addressSearchDescription } from './resources/address-search';
import { placeSearchDescription } from './resources/place-search';
import { ukDescription } from './resources/uk';
import { emailsDescription } from './resources/emails';
import { keysDescription } from './resources/keys';
import { licenseesDescription } from './resources/licensees';
import { configsDescription } from './resources/configs';
import { phoneNumbersDescription } from './resources/phone-numbers';

export class IdealPostcodes implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ideal Postcodes',
		name: 'N8nDevIdealPostcodes',
		icon: { light: 'file:./ideal-postcodes.svg', dark: 'file:./ideal-postcodes.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Getting Started',
		defaults: { name: 'Ideal Postcodes' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevIdealPostcodesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Address Search",
					"value": "Address Search",
					"description": "Global address autocomplete, for search-as-you-type"
				},
				{
					"name": "Place Search",
					"value": "Place Search",
					"description": "Global places search to identify geographical names and places"
				},
				{
					"name": "UK",
					"value": "UK",
					"description": "UK Address and Postcode Search"
				},
				{
					"name": "Emails",
					"value": "Emails",
					"description": ""
				},
				{
					"name": "Keys",
					"value": "Keys",
					"description": "Monitor and manage API Keys"
				},
				{
					"name": "Licensees",
					"value": "Licensees",
					"description": "The Licensee resource represents an alternate legal End User of our data who may not be same entity as the owners of the account.\n\nThe concept of Licensees underpins our sublicensing platform, which allows users to license multiple external organisations or individuals to access data under the same account.\n\nSublicensing is ideal for platform vendors, who provide services to multiple clients who in turn each have their own users.\n"
				},
				{
					"name": "Configs",
					"value": "Configs",
					"description": "The Config resource allows users to assign serialised configuration data to API Keys. The payloads assigned to a Config object can later be retrieved to dynamically configure your integration.\n\nUseful if you need to configure your integration remotely rather than editing code in situ.\n"
				},
				{
					"name": "Phone Numbers",
					"value": "Phone Numbers",
					"description": ""
				}
			],
			"default": ""
		},
		...addressSearchDescription,
		...placeSearchDescription,
		...ukDescription,
		...emailsDescription,
		...keysDescription,
		...licenseesDescription,
		...configsDescription,
		...phoneNumbersDescription
		],
	};
}
