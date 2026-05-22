import { PayloadAdminBarProps } from '@payloadcms/admin-bar';

function BeforeDashboard(props: PayloadAdminBarProps) {
	// @ts-expect-error: external library type mismatch
	const user = props?.user.id || 'undefined';

	return <p>welcome back, {user}!</p>;
}

export default BeforeDashboard;
