import { Header, MCQ, Checkbox, Shortanswer, Paragraph, Dropdown, Fileupload } from "@components"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <Header />
        <MCQ />
        <Checkbox />
        <Shortanswer />
        <Paragraph />
        <Dropdown />
        <Fileupload />
    </section>
  )
}

export default Home
