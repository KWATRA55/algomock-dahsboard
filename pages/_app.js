import { AuthProvider } from '@/context/AuthProvider';
import AuthWrapper from '@/context/AuthWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return(
      <AuthProvider>
            <AuthWrapper Component={Component} pageProps={pageProps} />
      </AuthProvider>
  )
}
