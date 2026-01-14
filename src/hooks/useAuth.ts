import { getAuthUser } from '@/actions/get-auth.action'
import { useQuery } from '@tanstack/react-query'

function useAuth() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getAuthUser,
    retry: 1,
    refetchOnWindowFocus: false,
  })

  return { data, isError, isLoading }
}

export default useAuth
