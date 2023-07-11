import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { HistoryCardProps } from '@/core/shared/interface'
import Image from 'next/image'
import { SmileIcon } from '../../public/assets/img'

const HistoryCard = (Props: HistoryCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#fff", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid #fff" }}
      date={Props.date}
      dateClassName={` text-black xl:text-white`}
      iconStyle={{ background: Props.iconBg }}
      icon={
        <div>
          <Image src={SmileIcon} alt='icon' />
        </div>
      }
    >
      <div>
        <h1>{Props.title}</h1>
        <p>{Props.story}</p>
      </div>
    </VerticalTimelineElement>
  )
}

export default HistoryCard