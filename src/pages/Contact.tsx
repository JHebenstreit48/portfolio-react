import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import '../css/PageHeader.css'
import '../css/Page.css'
export default function Contact() {
  return (
    <>

      <h1 className="pageHeader">Contact</h1>

      <div>
        <ContactForm />
      </div>

      <Footer />


    </>
  )
}
