import ContactForm from "@/components/ContactForm"
import CounterApp from "@/components/CounterApp"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6 w-full">
      <div className="flex  w-full flex-col gap-4 text-sm leading-loose">
        {/* <ContactForm/> */}
        <CounterApp/>
      </div>
    </div>
  )
}
