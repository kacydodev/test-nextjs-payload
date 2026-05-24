import { GlobalConfig } from 'payload';

export const Header: GlobalConfig = {
	slug: 'header',
	access: {
		read: (): boolean => true,
	},
	admin: {
		// Add label to group, default: 'Global' on admin UI
		group: 'Navigation',
	},
	fields: [
		{
			name: 'array',
			label: 'Header Navigation',
			type: 'array',
			fields: [
				{
					name: 'navLinkSelect',
					label: false,
					type: 'group',
					fields: [
						{
							name: 'select',
							type: 'radio',
							defaultValue: 'nav-link-item',
							options: [
								{
									label: 'Link Item',
									value: 'nav-link-item',
								},
								{
									label: 'Group Link',
									value: 'nav-group-link',
								},
							],
							required: true,
						},
						{
							name: 'link-item',
							type: 'relationship',
							relationTo: 'pages',
							admin: {
								condition: (_, siblingData) =>
									siblingData?.select === 'nav-link-item',
							},
						},
						{
							name: 'group-link',
							type: 'group',
							fields: [
								{
									name: 'title',
									type: 'text',
									required: true,
									minLength: 1,
									maxLength: 10,
								},
								{
									name: 'link-items',
									type: 'array',
									fields: [
										{
											name: 'link-item',
											type: 'relationship',
											relationTo: 'pages',
										},
									],
								},
							],
							admin: {
								condition: (_, siblingData) =>
									siblingData?.select === 'nav-group-link',
							},
						},
					],
				},
			],
			required: true,
		},
	],
};
