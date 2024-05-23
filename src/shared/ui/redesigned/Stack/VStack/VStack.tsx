import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const { align = 'Start' } = props
  return (
    <Flex {...props} direction="Column" align={align} />
  )
}
