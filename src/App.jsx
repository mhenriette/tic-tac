import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'



const App = () => {
  return (
    <div className="" >
      <Section>
        <Heading >Title</Heading>
        <Section >
          <Heading>Heading</Heading>
          <Heading >Heading</Heading>
          <Heading >Heading</Heading>
          <Section>
            <Section>
              <Heading >sub-Heading</Heading>
              <Heading >sub-Heading</Heading>
              <Heading >sub-Heading</Heading>
              <Section >
                <Heading >Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading >Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </div >
  )
}

export default App
