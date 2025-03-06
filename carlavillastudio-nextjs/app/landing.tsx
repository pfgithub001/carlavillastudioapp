import HomeVideo from "./c_home_video"
import HomeText from "./c_home_text"
import FormLink from "./c_form_link"

export default function Landing(this: any) {
  return (
    <section className="Landing">
      <HomeVideo />
      <HomeText />
      <FormLink />
    </section>
  )
}