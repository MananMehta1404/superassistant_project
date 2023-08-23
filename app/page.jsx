import { Header, MCQ, Checkbox, Shortanswer, Paragraph, Dropdown, Fileupload, Linearscale, Multichoicegrid, Tickboxgrid } from "@components"

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
        <Linearscale />
        <Multichoicegrid />
        <Tickboxgrid />
    </section>
  )
}

export default Home
