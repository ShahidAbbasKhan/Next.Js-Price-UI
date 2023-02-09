"use client"
import Header from './components/Header';
import Price from './components/Price';
import { ChakraProvider } from '@chakra-ui/react';
export default function App() {
  return(
    <ChakraProvider >
      <Header/>
      <Price/>
    </ChakraProvider>
  )
}