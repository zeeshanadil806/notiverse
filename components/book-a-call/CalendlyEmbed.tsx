"use client"
import { InlineWidget } from "react-calendly"

interface CalendlyEmbedProps {
  url: string
}

const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  return (
    <div className="calendly-embed-wrapper h-[600px] w-full overflow-hidden rounded-lg">
      <InlineWidget
        url={url}
        styles={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  )
}

export default CalendlyEmbed

