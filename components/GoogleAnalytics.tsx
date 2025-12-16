import Script from 'next/script'

export default function GoogleAnalytics({
  gaTrackingId,
}: {
  gaTrackingId: string
}) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaTrackingId}');
        `}
      </Script>
    </>
  )
}
