import { Button, buttonVariants } from '@/components/ui/button';
import { Page } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import Image from 'next/image';
import Link from 'next/link';

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
			{/* <a href={ctaButton.url}>{ctaButton.label}</a> */}
			<Link
				href={ctaButton.url}
				className={buttonVariants({ variant: 'default' })}>
				{ctaButton.label}
			</Link>
		</section>
	);
}

export default HeroBlock;
