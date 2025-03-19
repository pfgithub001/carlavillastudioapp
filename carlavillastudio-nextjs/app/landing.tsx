import HomeVideo from "./c_home_video"
import HomeText from "./c_home_text"
import FormLink from "./c_form_link"
import Footer from "./c_footer"

export default function Landing(this: any) {
  return (
    <section className="Landing">
      <HomeVideo />
      <HomeText text="Improvisando cuidadosamente"/>
      <FormLink />
      <HomeText text="Artesanía, tejidos y cercanía"/>
      <Footer />
    </section>
  )
}