export const plans = [
	{
		name: 'Starter',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
		<path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M8.628 12.674H8.17c-1.484 0-2.225 0-2.542-.49c-.316-.489-.015-1.17.588-2.533l1.812-4.098c.548-1.239.822-1.859 1.353-2.206S10.586 3 11.935 3h2.09c1.638 0 2.458 0 2.767.535c.309.536-.098 1.25-.91 2.681l-1.073 1.886c-.404.711-.606 1.066-.603 1.358c.003.378.205.726.53.917c.25.147.657.147 1.471.147c1.03 0 1.545 0 1.813.178c.349.232.531.646.467 1.061c-.049.32-.395.703-1.088 1.469l-5.535 6.12c-1.087 1.203-1.63 1.804-1.996 1.613c-.365-.19-.19-.983.16-2.569l.688-3.106c.267-1.208.4-1.812.08-2.214c-.322-.402-.937-.402-2.168-.402Z" />
	</svg>`,
		description: 'Perfect for individuals and small teams getting started',
		price: { monthly: 0, yearly: 0 },
		popular: false,
		features: [
			{ text: 'Up to 3 users', included: true },
			{ text: '5 projects', included: true },
			{ text: 'Basic dashboard access', included: true },
			{ text: '2 API keys', included: true },
			{ text: 'Email support', included: true },
			{ text: 'Advanced analytics', included: false },
			{ text: 'Custom roles', included: false },
			{ text: 'SSO authentication', included: false },
			{ text: 'Priority support', included: false },
		],
		cta: 'Get Started Free',
	},
	{
		name: 'Professional',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
		<g fill="none" stroke="currentColor" stroke-width="1.5">
			<path d="M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a4 4 0 0 0 0-8" />
			<path stroke-linejoin="round" d="M11 14H7a5 5 0 0 0-5 5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a5 5 0 0 0-5-5Z" />
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 14a5 5 0 0 1 5 5a2 2 0 0 1-2 2h-1.5" />
		</g>
	</svg>`,
		description: 'For growing teams that need more power and flexibility',
		price: { monthly: 49, yearly: 470 },
		popular: true,
		features: [
			{ text: 'Up to 15 users', included: true },
			{ text: 'Unlimited projects', included: true },
			{ text: 'Advanced dashboard access', included: true },
			{ text: '10 API keys', included: true },
			{ text: 'Priority email support', included: true },
			{ text: 'Advanced analytics', included: true },
			{ text: 'Custom roles (up to 5)', included: true },
			{ text: 'SSO authentication', included: false },
			{ text: 'Dedicated support', included: false },
		],
		cta: 'Start Free Trial',
	},
	{
		name: 'Enterprise',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-width="1.5">
		<path stroke-linejoin="round" d="M15 2H9c-3.31 0-4 .69-4 4v16h14V6c0-3.31-.69-4-4-4Z" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18" />
		<path stroke-linejoin="round" d="M15 22v-3c0-1.655-.345-2-2-2h-2c-1.655 0-2 .345-2 2v3" />
		<path stroke-linecap="round" d="M13.5 6h-3m3 3.5h-3m3 3.5h-3" />
	</g>
</svg>`,
		description: 'For large organizations with advanced security needs',
		price: { monthly: 199, yearly: 1990 },
		popular: false,
		features: [
			{ text: 'Unlimited users', included: true },
			{ text: 'Unlimited projects', included: true },
			{ text: 'Full dashboard access', included: true },
			{ text: 'Unlimited API keys', included: true },
			{ text: '24/7 dedicated support', included: true },
			{ text: 'Advanced analytics & reports', included: true },
			{ text: 'Custom roles (unlimited)', included: true },
			{ text: 'SSO authentication', included: true },
			{ text: 'Custom integrations', included: true },
		],
		cta: 'Contact Sales',
	},
]
