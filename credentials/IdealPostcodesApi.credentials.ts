import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class IdealPostcodesApi implements ICredentialType {
        name = 'N8nDevIdealPostcodesApi';

        displayName = 'Ideal Postcodes API';

        icon: Icon = { light: 'file:../nodes/IdealPostcodes/ideal-postcodes.svg', dark: 'file:../nodes/IdealPostcodes/ideal-postcodes.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.ideal-postcodes.co.uk/v1',
                        required: true,
                        placeholder: 'https://api.ideal-postcodes.co.uk/v1',
                        description: 'The base URL of your Ideal Postcodes API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
