import { useState } from 'react';
import { AuthProvider } from '@/context/AuthProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const [value, setValue] = useState([]);
  return(
      <AuthProvider>
            <Component {...pageProps} />
      </AuthProvider>
  )
}
