import { headers as getHeaders } from 'next/headers.js';
import Image from 'next/image';
import { getPayload } from 'payload';
import React from 'react';
import { fileURLToPath } from 'url';

import config from '@/payload.config';
import './styles.css';
import { Page } from '@/payload-types';
import HeroBlock from '@/blocks/HeroBlock';

export default async function HomePage() {
	const headers = await getHeaders();
	const payloadConfig = await config;
	const payload = await getPayload({ config: payloadConfig });
	const { user } = await payload.auth({ headers });

	const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

	const {
		docs: [page],
	} = await payload.find({
		collection: 'pages',
		where: {
			slug: { equals: 'home' },
		},
	});

	const renderBlocks = (block: Page['layout'][0]) => {
		switch (block.blockType) {
			case 'hero':
				return <HeroBlock block={block} />;
				break;

			default:
				break;
		}
	};

	if (!page) {
		return <p>Error: Page not found</p>;
	}

	return (
		<>
			{/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
			{renderBlocks(page['layout'][0])}
		</>
	);
}
