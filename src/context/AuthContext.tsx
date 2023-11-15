import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { decodeToken } from 'react-jwt'
import { API } from '../utils/API'

interface IUser {
  id: string
  username: string
  type: boolean
}
interface IAuthData {
  user: IUser
  token: string
}
interface IAuthParams {
  email: string
  password: string
}
interface IAuthContext {
  signIn: ({ email, password }: IAuthParams) => Promise<any>
  signOut: () => void
  authData: IAuthData | null | undefined
}
interface IAuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  const [authData, setAuthData] = useState<IAuthData | null | undefined>(undefined)
  const navigate = useRouter()

  const _saveInStorage = (data: IAuthData) => {
    const authDataformattedInString = JSON.stringify(data)

    localStorage.setItem('@user', authDataformattedInString)
  }
  const _removeInStorage = () => {
    localStorage.removeItem('@user')
  }
  const _decodedToken = (token: string) => {
    const decodedData = decodeToken(token)

    return decodedData
  }
  const _readInStorage = useCallback(() => {
    const authData = localStorage.getItem('@user')

    if (authData) {
      const authDataformattedInJson = JSON.parse(authData) as IAuthData

      setAuthData(authDataformattedInJson)
    } else {
      setAuthData(null)
    }
  }, [])
  
  const signIn = useCallback(async ({ email, password }: IAuthParams) => {
    try {
      console.log(email)
      console.log(password)
      const response = await API.post('/auth/signin', { "email": email, "password":password })
      console.log(response)
      const data = response.data
      console.log(response)
      if (data.signin) {
        const token = data.acetoken
        console.log(data)
        console.log(token)
        const decodeData = _decodedToken(token) as IUser

        const authDataFormatter: IAuthData = {
          token: token,
          user: decodeData
        }
        window.location.replace("http://localhost:3000/anounce");

        navigate.push('/anounce')
     
        return { success: true, data: authDataFormatter };

      } else {

        return { success: false, error: 'Login não foi bem-sucedido.' };

      }
    } catch (err) {
      console.log(err)
      console.error('Erro de login:', err);
    // Retornar um valor para indicar falha
      return { success: false, error: 'Erro durante o login.' };
    }
  }, [])



  
  const signOut =   useCallback(() => {
    setAuthData(null)
    _removeInStorage()
  }, [])



  const value = useMemo(() => ({ signIn, signOut, authData }), [signIn, signOut, authData])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
