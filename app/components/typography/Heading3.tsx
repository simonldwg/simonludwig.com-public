import {HeadingProps} from "@/app/components/typography/HeadingProps"

export const Heading3: React.FC<HeadingProps> =  ({children, colorClass}) => {
  return (
    <h3 className={`text-xl font-bold font-heading mb-2 ${(colorClass) ? colorClass : 'text-primary'}`}>{children}</h3>
  )
}

export default Heading3
