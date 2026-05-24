import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
	slug: 'pages',
	// This config controls what's populated by default when a page is referenced
	// https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
	// Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
	defaultPopulate: {
		title: true,
		slug: true,
	},
	admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
		useAsTitle: 'title', // displays title instead of id (in relationship field)
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
		},
		{
			name: 'layout',
			type: 'blocks',
			required: true,
			blocks: [
				{
					slug: 'hero',
					fields: [
						{
							name: 'heading',
							type: 'text',
							required: true,
						},
						{
							name: 'subheading',
							type: 'richText',
							required: true,
						},
						{
							name: 'image',
							type: 'upload',
							relationTo: 'media',
							required: true,
						},
						{
							name: 'ctaButton',
							label: 'Call-To-Action Button',
							type: 'group',
							required: true,
							fields: [
								{
									name: 'label',
									type: 'text',
									required: true,
								},
								{
									name: 'url',
									type: 'text',
									required: true,
								},
							],
						},
					],
				},
			],
		},
	],
};
