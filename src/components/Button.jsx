import tw from 'twin.macro'
import styled from '@emotion/styled'

const Button = styled.button`
  ${(props) =>
    props.primary ? tw`bg-blue-500 text-white` : tw`bg-gray-200 text-black`}
  ${tw`py-2 px-4 rounded`}
  &:hover {
    ${(props) => (props.primary ? tw`bg-blue-700` : tw`bg-gray-300`)};
  }
`

export default Button
