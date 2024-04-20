import {HeadingProps} from "@/app/components/typography/HeadingProps"

export const Heading2: React.FC<HeadingProps> =  ({children, colorClass}) => {
  return (
    <h2 className={`text-2xl font-bold font-heading mb-4 ${(colorClass) ? colorClass : 'text-primary'}`}>{children}</h2>
  )
}

export default Heading2
