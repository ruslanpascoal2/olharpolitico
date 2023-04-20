import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body{
    --color-bg: #fff;
    --color-gray: #fefefe;
    --color-gray-darker: #e8e8e8;
    --color-green-dark: #29302b;
    --color-text: #282d2b;
    --color-green: #95cd4d;
    --color-purple: #8970fb;
    --color-pink: #e9a99a;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles