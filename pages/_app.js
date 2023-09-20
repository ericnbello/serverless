import '../styles/styles.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <html>
      <Head>
        <script src="https://kit.fontawesome.com/a4f5122e74.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </html>
  )
}