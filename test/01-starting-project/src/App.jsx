import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/coreconcepts/CoreConcepts.jsx';
import TabButton from './components/tabbutton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [active , setActive] = useState(false)

  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        {/* Core Concepts Section */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
      
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> (
              <CoreConcept key={conceptItem.image} {...conceptItem}/>
            ))}
          </ul>
        </section>

        {/* Examples Section */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>

<<<<<<< HEAD
          {tabContent}
        </section>



    
    
        <div style={{padding:"20px"}}>
            <button 
            onClick={()=> setActive(!active)}
            className={active ? "btn-active": "btn-inactive"}>
                {active ? "Active" : "Inactive"}
            </button>
        </div>

        
      </main>
    </div>
  );
}
=======
      
         



>>>>>>> 41e11e12b07be8d9afade202334d5683ffe07723

export default App;









