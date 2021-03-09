import React from 'react'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import {getClient} from '../Services/clientService'

const useClient = () => {
  const queryClient = useQueryClient
  const query = useQuery('clients', getClient)


}
export default useClient