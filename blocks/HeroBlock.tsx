import { Page } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';

function HeroBlock({ block }: { block: Page['layout'][0] }) {
	const heading = block.heading;
	const subheading = block.subheading;
	const image = block.image;
	const ctaButton = block.ctaButton;

	return (
		<section>
			<h1>{heading}</h1>
			<RichText data={subheading} />
			<Image
				src={image.url}
				alt={image.alt}
				width={image.width}
				height={image.height}
			/>
			<a href={ctaButton.url}>{ctaButton.label}</a>
		</section>
	);
}

export default HeroBlock;
