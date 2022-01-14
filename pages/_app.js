import NavBar from '../components/NavBar';

export default function CustomApp({ Component, pageProps }) {
	return (
		<div>
			<NavBar />
			<Component {...pageProps} />
			<span>Hello World</span>
			<style jsx global>{`
				a {
					color: pink;
				}
			`}</style>
		</div>
	);
}