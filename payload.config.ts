import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Header } from './globals/header/config';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		components: {
			beforeDashboard: ['/components/BeforeDashboard'],
		},
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	// Define and configure your collections in this array
	// Better to have separate component
	collections: [Users, Media, Pages],

	// Global for declaring stuffs such as nav
	globals: [Header],

	// If you'd like to use Rich Text, pass your editor here
	editor: lexicalEditor(),

	// Your Payload secret - should be a complex and secure string, unguessable
	secret: process.env.PAYLOAD_SECRET || '',

	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},

	// Whichever Database Adapter you're using should go here
	// Mongoose is shown as an example, but you can also use Postgres
	db: mongooseAdapter({
		url: process.env.DATABASE_URL || '',
	}),

	// If you want to resize images, crop, set focal point, etc.
	// make sure to install it and pass it to the config.
	// This is optional - if you don't need to do these things,
	// you don't need it!
	sharp,

	plugins: [],
});
