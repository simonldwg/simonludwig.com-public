import {HeadingProps} from "@/app/components/typography/HeadingProps"

export const Heading1: React.FC<HeadingProps> =  ({children, colorClass}) => {
  return (
    <h1 className={`text-4xl font-bold mb-4 ${(colorClass) ? colorClass : 'text-pink-600'}`}>{children}</h1>
  )
}

export default Heading1
