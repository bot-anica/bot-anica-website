import Image from "next/image";

export interface SectionSplitterProps {
  top?: boolean;
  bottom?: boolean;
}

const SectionSplitter: React.FC<SectionSplitterProps> = ({top = true, bottom = true}) => {
  return (
    <>
      {top && <Image src="/images/line_stroke.png" alt="" className="absolute -top-[5px] left-1/2 -translate-x-1/2 opacity-50" width={1920} height={10} />}
      {bottom && <Image src="/images/line_stroke.png" alt="" className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 opacity-50" width={1920} height={10} />}
    </>
  )
}

export default SectionSplitter
