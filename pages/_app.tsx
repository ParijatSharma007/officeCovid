import React from 'react'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MuiThemeProvider from '@/mui-theme/MuiThemeProvider'

export const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 2 * 60 * 1000
    }
  }
})

const CovidWebApp = ({Component, pageProps} : AppProps) => {


  return (
    <MuiThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps}/>
      </QueryClientProvider>
    </MuiThemeProvider>
  )
}

export default CovidWebApp
