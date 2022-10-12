import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';


export const UsuariosApp = () => {
  return (
    <AuthProvider>
        
        <AppRouter />
        
    </AuthProvider>
  )
}
