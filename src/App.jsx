// import { useState } from 'react'
import Layout from './components/Layout';
// import  Main  from './pages/HomePage';
import  {MainContent, HeaderContent}  from './pages/HomePage';

export default function App() {
  return (
    <Layout main={<MainContent />} header={<HeaderContent />} />
  )
}