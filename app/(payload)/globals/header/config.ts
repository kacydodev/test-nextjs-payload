import { Field, GlobalConfig } from 'payload';

const GroupLink: Field = {
	name: 'nav-group-link',
	label: 'Nav Group Link',
	type: 'group', // required
	interfaceName: 'Meta', // optional

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
};

const Link: Field = {
	name: 'nav-link-items',
	type: 'array',
	fields: [
		{
			name: 'link-item',
			type: 'relationship',
			relationTo: 'pages',
		},
	],
};

// TODO: Remove ./(payload)/globals/Nav.ts
export const Header: GlobalConfig = {
	slug: 'header',
	access: {
		read: (): boolean => true,
	},
	admin: {
		// Add label to group, default: 'Global' on admin UI
		group: 'Navigation',
	},
	// fields: [GroupLink, Link],
	fields: [
		{
			name: 'array',
			type: 'array',
			fields: [
				{
					name: 'name',
					type: 'select',
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
			],
		},
	],
};
