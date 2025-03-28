import Head from 'next/head'; 
import "./assets/css/global.css";
import "./assets/css/flight.css";
import "./assets/css/booking.css";
import "./assets/css/media.css";
import "./assets/css/global2.css";
import "./assets/css/home2.css";
import "./assets/css/all.css";
import "./assets/css/main.css";
import "./assets/css/media2.css";
import "./assets/css/vkStyle.css";
import { FlightProvider } from '../context/FlightContext'; 
import { CurrencyProvider } from '../context/CurrencyContext'; 
import { HotelProvider } from '@/context/HotelContext';

export default function MyApp({ Component, pageProps }) {
  return (
    
    <HotelProvider>
    <CurrencyProvider>
    <FlightProvider>
      <>
        <Head>
          {/* Bootstrap CSS */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous"
          />
          {/* Bootstrap JavaScript */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
        <Component {...pageProps} />
      </>
    </FlightProvider>
    </CurrencyProvider>
    </HotelProvider>

  );
}