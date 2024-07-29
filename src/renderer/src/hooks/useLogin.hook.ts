import { RootState } from '@renderer/redux/store'
import { loginAction } from '@renderer/redux/user/slice'
import { loginService } from '@renderer/services/login.service'
import { ILogin } from '@renderer/types/login.types'
import { IUser } from '@renderer/types/user.types'
import { showNotification } from '@renderer/utils/notification.utils'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const { API_URL } = useSelector((state: RootState) => state.settings)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return useMutation<IUser, AxiosError<{ message: string }>, ILogin>({
    mutationFn: ({ email, password }: ILogin) => {
      return loginService(API_URL, { email, password })
    },

    onSuccess: (data) => {
      dispatch(loginAction(data))
      navigate(`/${data.access.name.toLowerCase()}`)
      showNotification.Success({
        title: 'Login realizado com sucesso',
        description: `Você agora está logado. Bem-vindo de volta!`,
      })
    },

    onError: (error) => {
      if (error?.response?.data?.message) {
        showNotification.Error({
          title: 'ERROR',
          description: error.response?.data.message,
        })
      } else {
        showNotification.Error({
          title: 'Erro de conexão com a API',
          description:
            'Verifique se a URL da API está correta e se o servidor está acessível.',
        })
      }
    },
  })
}
